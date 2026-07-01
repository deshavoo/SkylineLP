"use client";

import Image from "next/image";

const clients: string[] = [
  "/Clients/AGR.jpeg",
  "/Clients/ARTLIFE.jpeg",
  "/Clients/BRT.jpeg",
  "/Clients/DAWOOD.jpeg",
  "/Clients/ELRAEID.jpeg",
  "/Clients/KORRA.jpeg",
  "/Clients/SIDPIC.jpeg",
];

export default function ClientsSlider() {
  const duplicated = [...clients, ...clients];

  return (
    
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          شركاء النجاح
        </h2>

        <p className="text-gray-400 text-center mt-2">
          نفتخر بالتعاون مع كبرى الشركات في مجال المقاولات والطاقة
        </p>

        {/* Slider */}
        <div className="relative mt-12">

          {/* Gradient edges (Premium look 🔥) */}
          <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-black to-transparent z-10" />

          <div className="flex w-max animate-slide gap-6">

            {duplicated.map((logo, index) => (
              <div
                key={index}
                className="min-w-45 h-25 bg-white/5 border border-white/10 
                           rounded-2xl flex items-center justify-center
                           hover:border-blue-500 hover:scale-105
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                           transition duration-300 group"
              >
                <Image
                  src={logo}
                  alt="client"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain grayscale opacity-60 
                             group-hover:grayscale-0 group-hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}