"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 py-40 text-center"
    >
      <motion.h1
        variants={fadeUp}
        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
      >
        Indoor Navigation
        <span className="block text-accent mt-4">
          Reimagined with AR
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
      >
        A spatial computing solution for Meta Quest 3 and mobile devices,
        powered by real-time SLAM and augmented reality.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-14 flex justify-center gap-6"
      >
        <button
          onClick={scrollToFeatures}
          className="
  px-8 py-4 rounded-xl 
  bg-accent text-white font-medium
  transition-all duration-300 ease-out
  hover:scale-[1.05]
  hover:-translate-y-0.5
  hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
"
        >
          Features
        </button>

        <button
          onClick={() => router.push("/process")}
          className="
    border-color-white/20 border
  px-8 py-4 rounded-xl 
  bg-accent text-white font-medium
  transition-all duration-300 ease-out
  hover:scale-[1.05]
  hover:-translate-y-0.5
  hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
"
        >
          Process & Documentation
        </button>
      </motion.div>
    </motion.section>
  );
}
