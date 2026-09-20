"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function MontuTravelLogo({ scrolled = false }) {
  const { theme } = useTheme();
  const pathname = usePathname();
  const locale = pathname.split("/").filter(Boolean)[0] || "en";
  const gold = theme.logoBorder || "#d69a4d";
  const light = scrolled && theme.name !== "dark" ? "#351e16" : "#fff1d2";

  return (
    <motion.a
      href={`/${locale}`}
      aria-label="Montu Travel home"
      className="brand-lockup"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg className="brand-mark" viewBox="0 0 92 92" role="img" aria-label="Eye of Horus over a desert sun">
        <defs>
          <linearGradient id="brandGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4d493" />
            <stop offset="0.5" stopColor={gold} />
            <stop offset="1" stopColor="#7c4828" />
          </linearGradient>
        </defs>
        <circle cx="46" cy="46" r="41" fill="none" stroke="url(#brandGold)" strokeWidth="1.5" opacity=".55" />
        <circle cx="46" cy="46" r="34" fill="none" stroke="url(#brandGold)" strokeWidth=".8" strokeDasharray="1 4" opacity=".9" />
        <path d="M17 51c11-16 29-21 50-10-10 1-19 5-25 14-7 8-15 7-25-4Z" fill="none" stroke="url(#brandGold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="43" cy="47" r="5.3" fill="none" stroke="url(#brandGold)" strokeWidth="2" />
        <path d="M23 57 17 68m12-9-2 13m13-14 4 13m7-16 10 8" fill="none" stroke="url(#brandGold)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 71c12-5 27-5 42 0" fill="none" stroke="url(#brandGold)" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M34 22c8-4 17-4 25 0" fill="none" stroke="url(#brandGold)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="brand-type">
        <strong style={{ color: light }}>MONTU TRAVEL</strong>
        <small style={{ color: gold }}>LUXURY EGYPTIAN JOURNEYS</small>
      </span>
    </motion.a>
  );
}
