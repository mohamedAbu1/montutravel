"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function MontuTravelLogo() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center"
    >
      <svg
        width="180"
        height="100"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* تعريف التدرج من الثيم */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.logoGradientFrom} />
            <stop offset="100%" stopColor={theme.logoGradientTo} />
          </linearGradient>
        </defs>

        {/* الشمس الفرعونية */}
        <circle cx="100" cy="100" r="40" fill="url(#logoGradient)" stroke={theme.logoBorder} strokeWidth="3" />
        <line x1="100" y1="20" x2="100" y2="0" stroke={theme.logoBorder} strokeWidth="4" />
        <line x1="160" y1="100" x2="180" y2="100" stroke={theme.logoBorder} strokeWidth="4" />
        <line x1="40" y1="100" x2="20" y2="100" stroke={theme.logoBorder} strokeWidth="4" />

        {/* الأهرامات */}
        <polygon points="250,180 300,80 350,180" fill="url(#logoGradient)" stroke={theme.logoBorder} strokeWidth="2" />
        <polygon points="320,180 370,100 420,180" fill="url(#logoGradient)" stroke={theme.logoBorder} strokeWidth="2" />

        {/* عين حورس */}
        <path
          d="M500,120 C520,100 560,100 580,120 C560,140 520,140 500,120 Z"
          stroke={theme.logoBorder}
          strokeWidth="3"
          fill="none"
        />
        <circle cx="540" cy="120" r="6" fill={theme.logoBorder} />

        {/* صولجان واس */}
        <path d="M650,80 L650,160" stroke={theme.logoBorder} strokeWidth="6" />
        <circle cx="650" cy="60" r="12" fill="url(#logoGradient)" />

        {/* اسم الموقع */}
        <text
          x="200"
          y="300"
          fontFamily="Inter"
          fontWeight="700"
          fontSize="52"
          fill="url(#logoGradient)"
          stroke={theme.logoBorder}
          strokeWidth="1"
        >
          MontuTravel
        </text>
        <text
          x="200"
          y="340"
          fontFamily="Inter"
          fontWeight="500"
          fontSize="26"
          fill={theme.logoBorder}
        >
          Discover Egypt
        </text>
      </svg>
    </motion.div>
  );
}
