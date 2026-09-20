"use client";
import { motion } from "framer-motion";

export default function LogoLetter({ char, theme }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.2,
        filter: `drop-shadow(0 0 20px ${theme.iconHover})`,
      }}
      style={{
        backgroundImage: `linear-gradient(to right, ${theme.logoGradientFrom}, ${theme.logoGradientTo})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        borderColor: theme.logoBorder,
      }}
      className="relative px-[8px] text-center font-extrabold border-2 rounded-lg transition-transform duration-500 z-0"
    >
      {char}
    </motion.span>
  );
}
