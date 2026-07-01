"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 scroll function
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // يقفل المينيو في الموبايل
    }
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav
        className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-lg shadow-lg border border-white/10"
            : "bg-white/10 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Logo */}
        <h1
          onClick={() => scrollTo("home")}
          className="text-lg font-bold text-blue-400 cursor-pointer"
        >
          Skyline
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <li
            onClick={() => scrollTo("home")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            الرئيسية
          </li>
          <li
            onClick={() => scrollTo("services")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            خدماتنا
          </li>
          <li
            onClick={() => scrollTo("projects")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            أعمالنا
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            تواصل
          </li>
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block rounded-xl bg-blue-500 px-5 py-2 text-sm font-semibold text-black hover:bg-blue-600 transition"
        >
          اطلب عرض سعر
        </button>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setOpen(!open)}
          className="text-white text-xl md:hidden cursor-pointer"
        >
          ☰
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="mt-3 bg-black/90 backdrop-blur-lg rounded-2xl p-6 text-center space-y-4 md:hidden border border-white/10">
          <p onClick={() => scrollTo("home")} className="cursor-pointer">الرئيسية</p>
          <p onClick={() => scrollTo("services")} className="cursor-pointer">خدماتنا</p>
          <p onClick={() => scrollTo("projects")} className="cursor-pointer">أعمالنا</p>
          <p onClick={() => scrollTo("contact")} className="cursor-pointer">تواصل</p>

          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 w-full bg-blue-500 py-2 rounded-lg"
          >
            اطلب عرض سعر
          </button>
        </div>
      )}
    </div>
  );
}