"use client";
import { motion, AnimatePresence } from "framer-motion";

/* Logo Letter Component */
export default function LogoLetter({ char, theme }) {
  return (
    <motion.span
   variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.2,
        filter: "drop-shadow(0 0 20px #0ff)", // أفضل من textShadow مع النص الشفاف
      }}
      style={{
        backgroundImage: `linear-gradient(to right, #06b6d4, #fff, #22d3ee)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="relative px-[8px] text-center font-extrabold border-2 border-cyan-300 rounded-lg transition-transform duration-500 z-0"
    >
      {char}
    </motion.span>
  );
}