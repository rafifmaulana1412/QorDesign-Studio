import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, buyerName, buyerEmail, buyerPhone, type } = body;

    // type: "product" | "service"
    if (!items?.length || !buyerName || !buyerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const orderId = `QDS-${uuidv4().slice(0, 8).toUpperCase()}`;
    const total = items.reduce(
      (sum: number, item: { price: number }) => sum + item.price,
      0,
    );
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Create Xendit invoice via REST API
    const xenditRes = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(process.env.XENDIT_SECRET_KEY + ":").toString("base64")}`,
      },
      body: JSON.stringify({
        external_id: orderId,
        amount: total,
        payer_email: buyerEmail,
        description: `QorDesign Studio Order - ${items.map((i: { title: string }) => i.title).join(", ")}`,
        customer: {
          given_names: buyerName,
          email: buyerEmail,
          mobile_number: buyerPhone || "",
        },
        customer_notification_preference: {
          invoice_created: ["email"],
          invoice_reminder: ["email"],
          invoice_paid: ["email"],
        },
        success_redirect_url: `${baseUrl}/order/success?order_id=${orderId}`,
        failure_redirect_url: `${baseUrl}/order/failed?order_id=${orderId}`,
        currency: "IDR",
        items: items.map((item: { title: string; price: number }) => ({
          name: item.title,
          quantity: 1,
          price: item.price,
        })),
      }),
    });

    if (!xenditRes.ok) {
      const err = await xenditRes.json();
      console.error("Xendit error:", err);
      return NextResponse.json(
        { error: "Failed to create invoice" },
        { status: 500 },
      );
    }

    const invoice = await xenditRes.json();

    // Save order to Supabase
    const { error: dbError } = await supabaseAdmin.from("orders").insert({
      id: orderId,
      buyer_name: buyerName,
      buyer_email: buyerEmail,
      buyer_phone: buyerPhone || null,
      items: items,
      total,
      type: type || "product",
      status: "pending",
      xendit_invoice_id: invoice.id,
      xendit_invoice_url: invoice.invoice_url,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      // Don't fail — invoice already created, just log
    }

    return NextResponse.json({
      orderId,
      invoiceUrl: invoice.invoice_url,
    });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
