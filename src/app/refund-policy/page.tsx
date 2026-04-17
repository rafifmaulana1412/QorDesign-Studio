import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Refund Policy | QorDesign Studio",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Refund Policy</h1>
        <p className="text-white/40 text-sm mb-10">
          Last updated: January 2025
        </p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              1. No Refund Policy for Digital Products
            </h2>
            <p>
              Due to the nature of digital goods, all sales are final. We do not
              offer refunds once a digital product has been downloaded or the
              download link has been accessed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              2. Exceptions
            </h2>
            <p>
              Refunds or replacements may be considered in the following cases:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>The file is corrupted or cannot be opened</li>
              <li>
                The product delivered is significantly different from what was
                described
              </li>
              <li>Duplicate payment was made for the same order</li>
              <li>Technical error prevented delivery of the download link</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              3. How to Request a Refund
            </h2>
            <p>
              To request a refund under the exceptions above, please contact us
              within 3 days of purchase with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Your order ID / invoice number</li>
              <li>Email address used for purchase</li>
              <li>Description of the issue</li>
              <li>Screenshot or proof of the problem</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              4. Refund Processing
            </h2>
            <p>
              Approved refunds will be processed within 5–7 business days back
              to the original payment method. Processing time may vary depending
              on your bank or payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              5. Cancel / Refund Disclosure
            </h2>
            <p>
              Customers are informed of this refund/cancel policy at the time of
              purchase on the checkout page. By completing a purchase, customers
              acknowledge and agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              6. Contact
            </h2>
            <p>
              For refund requests, contact us at{" "}
              <a
                href="mailto:naufalalqorny@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                naufalalqorny@gmail.com
              </a>{" "}
              or WhatsApp{" "}
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
