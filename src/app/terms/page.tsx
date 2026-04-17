import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | QorDesign Studio",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">
          Terms & Conditions
        </h1>
        <p className="text-white/40 text-sm mb-10">
          Last updated: January 2025
        </p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              1. General
            </h2>
            <p>
              By accessing and using QorDesign Studio ("the Store"), you agree
              to be bound by these Terms & Conditions. QorDesign Studio is
              operated by PT. QorDesign Studio and sells digital design products
              including illustrations, character designs, graphic design assets,
              and animations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              2. Digital Products
            </h2>
            <p>
              All products sold on this platform are digital goods delivered via
              download link. Due to the nature of digital products, all sales
              are final once the download link has been accessed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              3. License
            </h2>
            <p>
              Upon purchase, you are granted a non-exclusive, non-transferable
              license to use the purchased digital assets for personal or
              commercial use as specified in the product description. You may
              not resell, redistribute, or claim ownership of the original
              files.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              4. Payment
            </h2>
            <p>
              All payments are processed securely through Xendit. We accept bank
              transfers, e-wallets, QRIS, and credit cards. Prices are listed in
              Indonesian Rupiah (IDR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              5. Download Links
            </h2>
            <p>
              Download links are sent to your registered email address after
              successful payment. Links are valid for 7 days from the date of
              issue. Please contact us if you experience issues accessing your
              download.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All designs, illustrations, and assets available on this store are
              the intellectual property of Mohammad Naufal Alqorny Jusuf / PT.
              QorDesign Studio. Unauthorized reproduction or distribution is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of the Store after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              8. Contact
            </h2>
            <p>
              For questions regarding these terms, contact us at{" "}
              <a
                href="mailto:naufalalqorny@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                naufalalqorny@gmail.com
              </a>{" "}
              or via WhatsApp at{" "}
              <a
                href="https://wa.me/6281243898588"
                className="text-yellow-400 hover:underline"
              >
                081243898588
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
