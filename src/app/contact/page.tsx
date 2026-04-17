import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | QorDesign Studio",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-black text-white mb-2">Contact Us</h1>
        <p className="text-white/40 text-sm mb-10">
          We're here to help. Reach out anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#1a3a1a] border border-yellow-400/10">
              <h2 className="text-yellow-400 font-bold mb-4">Get in Touch</h2>

              <div className="space-y-4">
                <a
                  href="mailto:naufalalqorny@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-sm">naufalalqorny@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281243898588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">WhatsApp</div>
                    <div className="text-sm">081243898588</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Location</div>
                    <div className="text-sm">
                      Makassar, South Sulawesi, Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281243898588?text=Halo%20QorDesign%20Studio%2C%20saya%20ingin%20bertanya%20tentang%20produk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
          </div>

          {/* FAQ quick */}
          <div className="p-6 rounded-2xl bg-[#8B0000] border border-yellow-400/10">
            <h2 className="text-yellow-400 font-bold mb-4">Quick FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How do I receive my purchase?",
                  a: "A download link will be sent to your email after successful payment.",
                },
                {
                  q: "How long is the download link valid?",
                  a: "Download links are valid for 7 days from the date of purchase.",
                },
                {
                  q: "What payment methods are accepted?",
                  a: "Bank transfer, e-wallet (GoPay, OVO, DANA), QRIS, and credit card via Xendit.",
                },
                {
                  q: "Can I get a refund?",
                  a: "Please refer to our Refund Policy page for details.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <div className="text-white font-medium text-sm mb-1">
                    {item.q}
                  </div>
                  <div className="text-white/50 text-xs leading-relaxed">
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
