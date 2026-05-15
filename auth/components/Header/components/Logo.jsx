"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function OneTimeLifeTravelLogo() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center"
    >
      <svg
        width="220"
        height="120"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* التدرج */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" /> {/* أزرق البحر */}
            <stop offset="50%" stopColor="#22d3ee" /> {/* هواء */}
            <stop offset="100%" stopColor="#16a34a" /> {/* طبيعة خضراء */}
          </linearGradient>
        </defs>

        {/* موج البحر */}
        <path
          d="M50,300 Q150,250 250,300 T450,300 T650,300"
          stroke="url(#logoGradient)"
          strokeWidth="6"
          fill="none"
        />

        {/* جبل/طبيعة */}
        <polygon
          points="300,280 380,180 460,280"
          fill="url(#logoGradient)"
          stroke={theme.logoBorder}
          strokeWidth="2"
        />

        {/* الهواء (سحب) */}
        <ellipse cx="600" cy="120" rx="60" ry="30" fill="url(#logoGradient)" opacity="0.4" />
        <ellipse cx="680" cy="100" rx="50" ry="25" fill="url(#logoGradient)" opacity="0.3" />

        {/* اسم الموقع */}
        <text
          x="200"
          y="360"
          fontFamily="Inter"
          fontWeight="700"
          fontSize="48"
          fill="url(#logoGradient)"
          stroke={theme.logoBorder}
          strokeWidth="1"
        >
          OneTimeLifeTravel
        </text>
        <text
          x="200"
          y="390"
          fontFamily="Inter"
          fontWeight="500"
          fontSize="22"
          fill={theme.logoBorder}
        >
          Explore Nature & Freedom
        </text>
      </svg>
    </motion.div>
  );
}
