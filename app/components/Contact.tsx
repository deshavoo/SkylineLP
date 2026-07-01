"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

// ✅ Type للفورم
type FormType = {
  name: string;
  phone: string;
  message: string;
};

type ErrorsType = {
  name?: string;
  phone?: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});

  // ✅ Handle Change بدون any
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Validation Logic
  const validate = () => {
    const newErrors: ErrorsType = {};

    if (!form.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^01[0-9]{9}$/.test(form.phone)) {
      newErrors.phone = "رقم الهاتف غير صحيح";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    // 🔥 هنا ممكن تبعت واتساب أو API
    alert("تم إرسال الطلب بنجاح ✅");

    setForm({ name: "", phone: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="bg-black text-white py-28 px-6 relative">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          تواصل معنا
        </h2>

        <p className="text-gray-400 text-center mt-3">
          جاهزون لتنفيذ مشروعك بأعلى جودة
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
          >

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="text"
                name="phone"
                placeholder="رقم الهاتف"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="تفاصيل المشروع (اختياري)"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 h-32 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              إرسال الطلب
            </button>

          </form>

          {/* Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span>+20 100 123 4567</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span>info@company.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>القاهرة، مصر</span>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">
                محتاج استشارة؟
              </h3>
              <p className="text-gray-400 text-sm">
                تواصل معنا الآن وسنساعدك في تنفيذ مشروعك
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}