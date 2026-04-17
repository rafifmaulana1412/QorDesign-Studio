import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendDownloadEmail } from "@/lib/email";
import { v4 as uuidv4 } from "uuid";

const XENDIT_WEBHOOK_TOKEN = process.env.XENDIT_WEBHOOK_TOKEN!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function POST(req: NextRequest) {
  try {
    // Validate webhook token
    const token = req.headers.get("x-callback-token");
    if (token !== XENDIT_WEBHOOK_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await req.json();
    const { external_id, status, payer_email } = payload;

    if (status !== "PAID") {
      return NextResponse.json({ received: true });
    }

    // Get order from Supabase
    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("id", external_id)
      .single();

    if (error || !order) {
      console.error("Order not found:", external_id);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.status === "paid") {
      // Already processed
      return NextResponse.json({ received: true });
    }

    // Update order status
    await supabaseAdmin
      .from("orders")
      .update({ status: "paid", paid_at: new Date().toISOString() })
      .eq("id", external_id);

    // For product orders: generate download links
    if (order.type === "product") {
      const downloadLinks: { title: string; url: string; token: string }[] = [];

      for (const item of order.items) {
        const dlToken = uuidv4();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        await supabaseAdmin.from("download_links").insert({
          token: dlToken,
          order_id: external_id,
          product_title: item.title,
          product_id: item.id,
          expires_at: expiresAt.toISOString(),
          accessed: false,
        });

        downloadLinks.push({
          title: item.title,
          url: `${BASE_URL}/download/${dlToken}`,
          token: dlToken,
        });
      }

      // Send email with download links
      await sendDownloadEmail({
        to: payer_email || order.buyer_email,
        buyerName: order.buyer_name,
        items: order.items,
        downloadLinks,
        orderId: external_id,
      });
    }

    // For service orders: notify admin via email
    if (order.type === "service") {
      // Just update status — admin will follow up via WA
      console.log(`Service order paid: ${external_id} by ${order.buyer_name}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
