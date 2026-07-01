"use client";

import Image from "next/image";
import heroBg from "@/public/images/herobg.png";
// import { useSound } from "@/hooks/useSound";

export default function Hero() {
  // const { play } = useSound();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      <Image
        src={heroBg}
        alt="Hero"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Skyline Electrical & Contracting
        </h1>

        <p className="mt-4 text-gray-300">
          حلول كهربائية متكاملة بأعلى جودة وأمان
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">

          <button
            onClick={() => {
              // play();
              scrollToSection("contact");
            }}
            className="bg-blue-500 px-8 py-3 rounded-xl text-black font-semibold hover:scale-105 transition"
          >
            اطلب عرض سعر
          </button>

          <button
            onClick={() => {
              // play();
              scrollToSection("projects");
            }}
            className="border border-white px-8 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
          >
            شاهد أعمالنا
          </button>

        </div>

      </div>
    </section>
  );
}