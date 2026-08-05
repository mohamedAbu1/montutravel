"use client";
import { FaCheckCircle } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

// كائن الترجمات
const translations = {
  en: { title: "Includes" },
  de: { title: "Enthält" },
  it: { title: "Include" },
  es: { title: "Incluye" },
  zh: { title: "包含" },
  fr: { title: "Inclus" },
};

export default function TripIncludes({ trip, lang }) {
  const { theme } = useTheme();

  // لو اللغة مش موجودة، نرجع للإنجليزية
  const t = translations[lang] || translations.en;

  // ✅ دالة ترجمة النصوص من JSON أو object
  const getLocalizedText = (obj) => {
    if (!obj) return "Unknown";
    if (typeof obj === "string") {
      try {
        const parsed = JSON.parse(obj);
        return parsed?.[lang] || parsed?.en || Object.values(parsed)[0];
      } catch {
        return obj;
      }
    }
    if (typeof obj === "object") {
      return obj?.[lang] || obj?.en || Object.values(obj)[0];
    }
    return "Unknown";
  };

  // ✅ تأكد إن includes Array حتى لو جاية كـ string أو object
  let includes = [];
  try {
    if (Array.isArray(trip.includes)) {
      includes = trip.includes;
    } else if (typeof trip.includes === "string") {
      const parsed = JSON.parse(trip.includes);
      includes = Array.isArray(parsed) ? parsed : [parsed];
    } else if (typeof trip.includes === "object" && trip.includes !== null) {
      includes = [trip.includes];
    }
  } catch {
    includes = [];
  }

  return (
   <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-1/2 p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-[#C2A878]/30 shadow-xl"
>
  <motion.h2 className="text-3xl font-bold flex items-center gap-2 mb-6 bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
    <FaCheckCircle className="text-[#C2A878]" />
    {t.title}
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {includes.filter(Boolean).map((inc, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-[#C2A878]/20 shadow-md transition"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 10 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaCheckCircle className="text-[#C2A878]" />
        </motion.div>
        <span className="text-base font-semibold text-[#C2A878]">
          {getLocalizedText(inc?.include_translations)}
        </span>
      </motion.div>
    ))}
  </div>
</motion.section>

  );
}
