"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function Decor({ pos }) {
  const { theme } = useTheme();

  const symbolsCount =
    typeof window !== "undefined" && window.innerWidth < 640
      ? 8
      : window.innerWidth < 1409
      ? 25
      : window.innerWidth < 1800
      ? 27
      : 27;

  return (
    <div className={`absolute ${pos}-0 flex justify-around `}>
      {Array.from({ length: symbolsCount }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1, delay: i * 0.05 }}
          className="text-4xl md:text-5xl lg:text-6xl text-gradient"
          style={{
            filter: `drop-shadow(0 0 6px ${theme.logoBorder || "#C2A878"})`,
          }}
        >
          𓎛
        </motion.span>
      ))}
    </div>
  );
}
