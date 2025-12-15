import Link from "next/link";
import Apply from "@/app/components/Apply";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/cedar-brush-background.jpg')",
      }}
    >
        <div className="relative z-10 w-full max-w-6xl px-4 py-12 mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-white mb-6 hover:opacity-80 transition">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Apply to CedarStaffing
        </h1>
        <p className="text-center text-white/90 mb-16">
          Please fill out the form and upload your resume and we will be in touch!
        </p>

        <div>
          <Apply />
        </div>
      </div>
    </div>
  );
}