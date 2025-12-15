"use client";

import Script from "next/script";

export default function Apply() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white">
      <p className="text-center mb-6 text-gray-700">
        Fill out the form below and upload your resume.
      </p>

      <iframe
        data-tally-src="https://tally.so/embed/VLG6Bg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={595}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="CedarStaffing Onboarding"
        className="rounded-lg shadow-md"
      ></iframe>

      {/* Tally embed script */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
