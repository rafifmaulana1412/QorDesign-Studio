import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendDownloadEmail({
  to,
  buyerName,
  items,
  downloadLinks,
  orderId,
}: {
  to: string;
  buyerName: string;
  items: { title: string; price: number }[];
  downloadLinks: { title: string; url: string }[];
  orderId: string;
}) {
  const linksHtml = downloadLinks
    .map(
      (link) =>
        `<div style="margin:12px 0;padding:12px;background:#1a3a1a;border-radius:8px;">
          <strong style="color:#FFD700;">${link.title}</strong><br/>
          <a href="${link.url}" style="color:#FFD700;word-break:break-all;">${link.url}</a>
        </div>`,
    )
    .join("");

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to,
    subject: `Your QorDesign Studio Order #${orderId}`,
    html: `
      <div style="font-family:sans-serif;background:#6B0000;color:#fff;padding:32px;border-radius:12px;max-width:600px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:24px;">
          <div style="width:48px;height:48px;background:#FFD700;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:900;color:#6B0000;font-size:20px;">Q</div>
          <h1 style="color:#FFD700;margin:8px 0 0;">QorDesign Studio</h1>
        </div>

        <h2 style="color:#fff;">Hi ${buyerName}! 🎉</h2>
        <p style="color:rgba(255,255,255,0.7);">Your payment has been confirmed. Here are your download links:</p>

        <div style="margin:24px 0;">
          ${linksHtml}
        </div>

        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;margin:24px 0;">
          <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">
            ⚠️ Download links expire in <strong style="color:#FFD700;">7 days</strong>. 
            If you have any issues, contact us at <a href="mailto:naufalalqorny@gmail.com" style="color:#FFD700;">naufalalqorny@gmail.com</a>
            or WhatsApp <a href="https://wa.me/6281243898588" style="color:#FFD700;">081243898588</a>
          </p>
        </div>

        <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:16px;margin-top:24px;">
          <p style="color:rgba(255,255,255,0.3);font-size:11px;text-align:center;">
            Order ID: ${orderId} · © 2025 PT. QorDesign Studio
          </p>
        </div>
      </div>
    `,
  });
}
