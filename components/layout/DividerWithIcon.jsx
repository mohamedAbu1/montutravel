"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function DividerWithIcon() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 justify-center"
    >
      <div className={`h-[3px] w-full ${theme.dividerLine}`} />
      <span className={`text-2xl ${theme.dividerIcon}`}>𓋹</span>
      <div className={`h-[3px] w-full ${theme.dividerLine}`} />
    </motion.div>
  );
}
