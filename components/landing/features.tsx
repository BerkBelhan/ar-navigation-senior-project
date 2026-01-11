"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const features = [
  {
    title: "AR Wayfinding",
    description:
      "Real-time indoor navigation using augmented reality overlays.",
  },
  {
    title: "Meta Quest 3",
    description:
      "Hands-free spatial navigation powered by immersive XR hardware.",
  },
  {
    title: "Mobile Support",
    description:
      "Cross-platform experience for smartphones and tablets.",
  },
  {
    title: "SLAM Powered",
    description:
      "Accurate positioning using Simultaneous Localization and Mapping.",
  },
];

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center mb-16 text-white"
      >
        Core Features
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <SpotlightCard className="glass glass-card">
              <h3 className="text-lg font-medium mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
