"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/ui/SpotlightCard";

const steps = [
  {
    step: "01",
    title: "Environment Scanning",
    description:
      "The system scans indoor environments using device sensors and cameras.",
  },
  {
    step: "02",
    title: "SLAM Localization",
    description:
      "Simultaneous Localization and Mapping determines the user's position in real time.",
  },
  {
    step: "03",
    title: "Path Planning",
    description:
      "Optimal routes are calculated dynamically based on the indoor map.",
  },
  {
    step: "04",
    title: "AR Navigation",
    description:
      "Directions are rendered as augmented reality overlays for intuitive guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-20"
      >
        How It Works
      </motion.h2>

      <div className="space-y-12">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="text-accent font-mono text-lg">
              {item.step}
            </div>

        <SpotlightCard className="w-full">
        <h3 className="text-lg font-medium mb-1 text-white">
            {item.title}
        </h3>
        <p className="text-sm text-gray-400">
            {item.description}
        </p>
        </SpotlightCard>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
