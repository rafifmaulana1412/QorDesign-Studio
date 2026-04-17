import Link from "next/link";
import { XCircle } from "lucide-react";

export const metadata = { title: "Payment Failed | QorDesign Studio" };

export default function OrderFailedPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
          <XCircle size={40} className="text-red-400" />
        </div>
        <h1 className="text-3xl font-black text-white mb-3">Payment Failed</h1>
        <p className="text-white/60 mb-8">
          Your payment was not completed. No charges have been made. Please try
          again or contact us for help.
        </p>
        <div className="space-y-3">
          <Link
            href="/#products"
            className="block w-full bg-yellow-400 text-[#6B0000] font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            Try Again
          </Link>
          <a
            href="https://wa.me/6281243898588"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-white/20 text-white/60 py-3 rounded-xl hover:border-yellow-400/40 hover:text-yellow-400 transition-colors text-sm"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
