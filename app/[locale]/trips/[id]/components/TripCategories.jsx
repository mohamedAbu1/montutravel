"use client";
import { FaTags } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useCitiesCategories } from "@/context/CitiesCategoriesContext";
import { motion } from "framer-motion";

// كائن الترجمات للعناوين
const translations = {
  en: { title: "Categories" },
  de: { title: "Kategorien" },
  it: { title: "Categorie" },
  es: { title: "Categorías" },
  zh: { title: "类别" },
  fr: { title: "Catégories" },
};

export default function TripCategories({ trip, lang }) {
  const { theme } = useTheme();
  const { categories: allCategories } = useCitiesCategories();

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

  // ✅ تأكد إن التصنيفات Array حتى لو جاية كـ string أو object
  let categories = [];
  try {
    if (Array.isArray(trip.categories)) {
      categories = trip.categories;
    } else if (typeof trip.categories === "string") {
      const parsed = JSON.parse(trip.categories);
      categories = Array.isArray(parsed) ? parsed : [parsed];
    } else if (typeof trip.categories === "object" && trip.categories !== null) {
      categories = [trip.categories];
    }
  } catch {
    categories = [];
  }

  return (
   <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-[#C2A878]/30 shadow-xl"
>
  <motion.h2 className="text-3xl font-bold flex items-center gap-3 mb-6 bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
    <FaTags className="text-[#C2A878]" />
    {t.title}
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {categories.filter(Boolean).map((cat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="flex items-center gap-3 p-4 rounded-xl cursor-pointer bg-white/10 hover:bg-[#C2A878]/20 shadow-md transition"
      >
        <FaTags className="text-[#C2A878]" />
        <span className="text-base font-semibold">{getLocalizedText(cat?.name)}</span>
      </motion.div>
    ))}
  </div>
</motion.section>
  );
}
