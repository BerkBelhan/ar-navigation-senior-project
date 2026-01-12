"use client";

import { motion } from "framer-motion";
import { GoArrowDown } from "react-icons/go";

interface ReportCardProps {
  title: string;
  file: string;
}

export default function ReportCard({ title, file }: ReportCardProps) {
  return (
    <motion.a
      href={`/${file}`}
      download
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        group relative rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur
        p-6 flex flex-col justify-between
        hover:border-accent/60
        hover:bg-white/10
        transition
      "
    >
      {/* Title */}
      <div>
        <h3 className="text-lg font-medium text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          Click to download the PDF document.
        </p>
      </div>

      {/* Download indicator */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-400 group-hover:text-white transition">
          Download
        </span>
        <GoArrowDown className="text-xl text-gray-400 group-hover:text-accent transition" />
      </div>

      {/* Hover glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition
          bg-gradient-to-br from-accent/10 to-transparent
        "
      />
    </motion.a>
  );
}
