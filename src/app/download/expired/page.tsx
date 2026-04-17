import Link from "next/link";

export const metadata = { title: "Link Expired | QorDesign Studio" };

export default function DownloadExpiredPage() {
  return (
    <div className="min-h-screen bg-[#6B0000] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">⏰</div>
        <h1 className="text-3xl font-black text-white mb-3">
          Download Link Expired
        </h1>
        <p className="text-white/60 mb-8">
          This download link has expired (valid for 7 days). Please contact us
          to get a new link.
        </p>
        <a
          href="https://wa.me/6281243898588?text=Halo%2C%20link%20download%20saya%20sudah%20expired.%20Boleh%20minta%20link%20baru%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 text-[#6B0000] font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors mb-3"
        >
          Request New Link via WhatsApp
        </a>
        <Link
          href="/"
          className="text-white/40 text-sm hover:text-yellow-400 transition-colors"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}
