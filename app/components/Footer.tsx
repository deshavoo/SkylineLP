"use client";

import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 relative overflow-hidden">

      {/* 💎 Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              SKYLINE
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              شركة متخصصة في أعمال المقاولات الكهربائية، نقدم حلول متكاملة 
              بأعلى جودة ومعايير احترافية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-blue-400 cursor-pointer transition">الرئيسية</li>
              <li className="hover:text-blue-400 cursor-pointer transition">خدماتنا</li>
              <li className="hover:text-blue-400 cursor-pointer transition">مشاريعنا</li>
              <li className="hover:text-blue-400 cursor-pointer transition">تواصل معنا</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>تمديدات كهربائية</li>
              <li>لوحات توزيع</li>
              <li>أنظمة إنذار</li>
              <li>صيانة وتشغيل</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>

            <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
              <Phone size={16} />
              <span>+20 100 123 4567</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
              <Mail size={16} />
              <span>info@company.com</span>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <div className="p-2 rounded-lg bg-white/5 hover:bg-blue-500 transition cursor-pointer">
                <FaFacebookF size={18} />
              </div>
              <div className="p-2 rounded-lg bg-white/5 hover:bg-blue-500 transition cursor-pointer">
                <FaInstagram size={18} />
              </div>
              <div className="p-2 rounded-lg bg-white/5 hover:bg-blue-500 transition cursor-pointer">
                <FaLinkedinIn size={18} />
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SKYLINE. All rights reserved.
        </div>

      </div>
    </footer>
  );
}