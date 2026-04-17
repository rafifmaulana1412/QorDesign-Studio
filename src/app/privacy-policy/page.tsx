import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | QorDesign Studio",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">
          Last updated: January 2025
        </p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you make a purchase, we collect the following personal
              information:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information (processed securely by Xendit)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              2. How We Use Your Information
            </h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white/60">
              <li>Process and fulfill your order</li>
              <li>Send download links and order confirmations</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              3. Data Sharing
            </h2>
            <p>
              We do not sell or share your personal data with third parties,
              except with Xendit (our payment processor) as necessary to
              complete transactions. Xendit's privacy policy applies to payment
              data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              4. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. Payment data is handled entirely by Xendit and is
              never stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              5. Cookies
            </h2>
            <p>
              We use minimal cookies necessary for the website to function
              (e.g., cart session). We do not use tracking or advertising
              cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal data. Contact us at{" "}
              <a
                href="mailto:naufalalqorny@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                naufalalqorny@gmail.com
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              7. Contact
            </h2>
            <p>
              For privacy-related inquiries:{" "}
              <a
                href="mailto:naufalalqorny@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                naufalalqorny@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
