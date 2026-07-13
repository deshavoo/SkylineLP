/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "مشروع سكني",
    desc: "تنفيذ أعمال الكهرباء لفيلا سكنية كاملة.",
    img: "/projects/p1.jpeg",
  },
  {
    title: "مشروع تجاري",
    desc: "تنفيذ أعمال الكهرباء لمحل تجاري.",
    img: "/projects/p2.jpeg",
  },
  {
    title: "مشروع صناعي",
    desc: "تنفيذ شبكة كهرباء لمصنع.",
    img: "/projects/p3.jpeg",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="projects" className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          مشاريعنا
        </h2>

        <p className="text-gray-400 text-center mt-3">
          بعض من الأعمال التي قمنا بتنفيذها
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(project)}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🔥 Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#0b0b0b] rounded-2xl max-w-2xl w-full overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selected.img}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selected.title}
                </h3>

                <p className="text-gray-400">
                  {selected.desc}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  إغلاق
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}