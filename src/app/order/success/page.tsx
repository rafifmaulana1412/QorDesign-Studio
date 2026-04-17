import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = { title: "Payment Successful | QorDesign Studio" };

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-400" />
        </div>
        <h1 className="text-3xl font-black text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-white/60 mb-2">
          Thank you for your purchase. Your download link has been sent to your
          email address.
        </p>
        <p className="text-white/40 text-sm mb-8">
          Please check your inbox (and spam folder). Links are valid for 7 days.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-yellow-400 text-[#6B0000] font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            Back to Store
          </Link>
          <a
            href="https://wa.me/6281243898588"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-white/20 text-white/60 py-3 rounded-xl hover:border-yellow-400/40 hover:text-yellow-400 transition-colors text-sm"
          >
            Need help? Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
