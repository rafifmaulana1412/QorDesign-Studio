import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> },
) {
  const { token } = await params;

  const { data: link, error } = await supabaseAdmin
    .from("download_links")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !link) {
    return NextResponse.redirect(new URL("/download/invalid", req.url));
  }

  // Check expiry
  if (new Date(link.expires_at) < new Date()) {
    return NextResponse.redirect(new URL("/download/expired", req.url));
  }

  // Mark as accessed
  await supabaseAdmin
    .from("download_links")
    .update({ accessed: true, accessed_at: new Date().toISOString() })
    .eq("token", token);

  // Redirect to actual file in Supabase Storage
  const { data: fileUrl } = supabaseAdmin.storage
    .from("products")
    .getPublicUrl(`${link.product_id}.zip`);

  return NextResponse.redirect(fileUrl.publicUrl);
}
