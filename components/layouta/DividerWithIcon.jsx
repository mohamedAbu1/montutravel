"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DividerWithIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 justify-center"
    >
      <div className={`h-[3px] w-full ${"bg-[#c9a34a] opacity-15"}`}></div>
      <span className={`text-2xl ${"text-[#c9a34a]"}`}>𓋹</span>
      <div className={`h-[3px] w-full ${"bg-[#c9a34a] opacity-15"}`}></div>
    </motion.div>
  );
}
