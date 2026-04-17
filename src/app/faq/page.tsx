import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "FAQ | QorDesign Studio",
};

const faqs = [
  {
    q: "What types of digital products do you sell?",
    a: "We sell digital design assets including illustrations, character design sheets, graphic design packs, branding kits, and animation assets — all created by Mohammad Naufal Alqorny Jusuf.",
  },
  {
    q: "How do I receive my purchase?",
    a: "After successful payment, a secure download link will be sent to your registered email address within a few minutes.",
  },
  {
    q: "How long is the download link valid?",
    a: "Download links are valid for 7 days from the date of issue. If your link has expired, please contact us.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers, e-wallets (GoPay, OVO, DANA, ShopeePay), QRIS, and credit/debit cards — all processed securely through Xendit.",
  },
  {
    q: "Can I use the assets for commercial projects?",
    a: "Yes, purchased assets come with a commercial use license unless stated otherwise in the product description. Please read the license details on each product page.",
  },
  {
    q: "Can I resell or redistribute the files?",
    a: "No. Reselling, redistributing, or claiming ownership of the original files is strictly prohibited under our license terms.",
  },
  {
    q: "What if the file is corrupted or I can't open it?",
    a: "Please contact us immediately with your order ID and a description of the issue. We will provide a replacement file or issue a refund as per our Refund Policy.",
  },
  {
    q: "Do you offer custom design work?",
    a: "Yes! For custom commissions, please reach out via email or WhatsApp and we'll discuss your project needs.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us via email at naufalalqorny@gmail.com or WhatsApp at 081243898588.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">FAQ</h1>
        <p className="text-white/40 text-sm mb-10">
          Frequently Asked Questions
        </p>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#1a3a1a] border border-yellow-400/10 hover:border-yellow-400/20 transition-colors"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[#8B0000] border border-yellow-400/20 text-center">
          <p className="text-white/70 text-sm mb-3">Still have questions?</p>
          <a
            href="https://wa.me/6281243898588"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-[#6B0000] font-bold px-6 py-2.5 rounded-full hover:bg-yellow-300 transition-colors text-sm"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
