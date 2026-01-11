"use client";

import { motion } from "framer-motion";

const tech = [
  "Meta Quest 3",
  "Mobile Devices",
  "AR Foundation",
  "SLAM Algorithms",
  "Unity / XR SDK",
  "Computer Vision",
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-16"
      >
        Technology Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tech.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl p-6 bg-white/5 border border-white/10
                       hover:bg-white/10 transition text-center"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
