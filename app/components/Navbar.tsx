"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};


window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);


}, []);

return ( <div className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
<nav
className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-lg shadow-lg border border-white/10"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        }`}
> <h1 className="text-lg font-bold text-blue-400">
Skyline </h1>


    <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
      <li className="cursor-pointer transition hover:text-blue-700">
        الرئيسية
      </li>
      <li className="cursor-pointer transition hover:text-blue-700">
        خدماتنا
      </li>
      <li className="cursor-pointer transition hover:text-blue-700">
        أعمالنا
      </li>
      <li className="cursor-pointer transition hover:text-blue-700">
        تواصل
      </li>
    </ul>

    <button className="hidden md:block rounded-xl bg-blue-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-blue-700">
      اطلب عرض سعر
    </button>

    <div className="text-white text-xl md:hidden">
      ☰
    </div>
  </nav>
</div>


);
}
