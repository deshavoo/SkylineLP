"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wrench, CircuitBoard } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "تمديدات كهربائية",
      desc: "تنفيذ جميع أعمال الكهرباء للمشاريع السكنية والتجارية.",
      icon: <Zap size={28} />,
    },
    {
      title: "لوحات توزيع",
      desc: "تركيب وصيانة لوحات الكهرباء بجودة عالية.",
      icon: <CircuitBoard size={28} />,
    },
    {
      title: "أنظمة إنذار",
      desc: "توريد وتركيب أنظمة إنذار الحريق والأمان.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "صيانة وتشغيل",
      desc: "خدمات صيانة دورية وتشغيل للمشاريع.",
      icon: <Wrench size={28} />,
    },
  ];

  return (
    <section className="bg-black text-white py-28 px-6 relative overflow-hidden">

      {/* 💎 Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          خدماتنا
        </h2>

        <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto">
          نقدم حلول كهربائية متكاملة بأعلى معايير الجودة والاحترافية
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-px rounded-2xl bg-linear-to-br from-blue-500/40 to-transparent"
            >
              <div
                className="bg-[#0b0b0b] rounded-2xl p-6 h-full
                           hover:scale-105 transition duration-300
                           group cursor-pointer"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                                bg-blue-500/10 text-blue-400 mb-5
                                group-hover:bg-blue-500 group-hover:text-white
                                transition">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}