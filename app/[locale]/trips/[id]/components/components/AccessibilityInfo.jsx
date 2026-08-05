"use client";
import { FaWheelchair, FaHandsHelping, FaHeart } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/constants/images";
import EgyptianBackground from "@/components/layout/EgyptianBackground";
import { motion } from "framer-motion";

export default function AccessibilityInfo() {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const t = translations[lang] || translations.en; // fallback للإنجليزية

  return (
   <div
  className={`flex w-[30%] flex-col gap-8 p-10 rounded-2xl backdrop-blur-md bg-white/5 border border-[#C2A878]/30 shadow-xl ${theme.text}`}
>
  <EgyptianBackground />

  {/* العنوان والوصف */}
  <div className="space-y-3 text-center">
    <h3 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
      {t.title}
    </h3>
    <p className="text-sm leading-relaxed opacity-90 text-[#C2A878]">
      {t.description}
    </p>
  </div>

  {/* البطاقات الثلاثة */}
  <div className="grid grid-rows-3 gap-6">
    {/* بطاقة الوصول */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 hover:bg-[#C2A878]/20 shadow-md transition"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaWheelchair className="text-4xl  text-[#A68B5B] bg-clip-text" />
      </motion.div>
      <span className="text-sm font-semibold text-[#C2A878]">{t.accessible}</span>
    </motion.div>

    {/* بطاقة الدعم */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 hover:bg-[#C2A878]/20 shadow-md transition"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaHandsHelping className="text-4xl  text-[#A68B5B] bg-clip-text " />
      </motion.div>
      <span className="text-sm font-semibold text-[#C2A878]">{t.support}</span>
    </motion.div>

    {/* بطاقة الرعاية */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 hover:bg-[#C2A878]/20 shadow-md transition"
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        <FaHeart className="text-4xl text-[#A68B5B] bg-clip-text " />
      </motion.div>
      <span className="text-sm font-semibold text-[#C2A878]">{t.care}</span>
    </motion.div>
  </div>
</div>

  );
}
