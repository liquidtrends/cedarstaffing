"use client";

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
  {/* Video background */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/video-background.mp4"
    autoPlay
    muted
    loop
    playsInline
  ></video>

  {/* Mobile fallback */}
  <div
    className="md:hidden absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/cedar-brush-background.jpg')" }}
  ></div>

  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#7C9E3E]/70"></div>

  {/* Content */}
  <div className="relative z-10 px-4">
      <Image
        src="/logo.png"
        alt="Cedar Staffing logo"
        width={400}
        height={400}
        className="mx-auto mb-5"
      />
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
      Indigenous-Led Workforce Solutions
    </h1>
    <p className="text-white text-lg md:text-2xl mb-8">
      On-call janitorial, housing, and industrial labor staffing across Western Canada.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <div className="flex gap-4 flex-wrap">
              <a
                href="/apply"
                className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-black transform transition duration-300 shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border text-white hover:text-black border-white px-8 py-4 rounded-full font-semibold hover:bg-black transform transition duration-300 shadow-lg"
              >
                Contact Us
              </a>
            </div>
    </div>
  </div>
</section>
  );
}
