"use client";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

function formatTime(time) {
  if (!time) return "";
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const formattedHours = ((hours + 11) % 12) + 1;
  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${suffix}`;
}

const translations = {
  en: { title: "Itinerary" },
  de: { title: "Reiseplan" },
  it: { title: "Itinerario" },
  es: { title: "Itinerario" },
  zh: { title: "行程" },
  fr: { title: "Itinéraire" },
};

export default function TripItinerary({ trip, lang }) {
  const { theme } = useTheme();
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

  // ✅ تقسيم الأيام إلى مجموعات كل مجموعة فيها يومين
  const chunkDays = (days, size = 2) => {
    const result = [];
    for (let i = 0; i < days.length; i += size) {
      result.push(days.slice(i, i + size));
    }
    return result;
  };

  // ✅ تأكد إن الأيام Array حتى لو جاية كـ string
  let tripDays = [];
  try {
    if (Array.isArray(trip.days)) {
      tripDays = trip.days;
    } else if (typeof trip.days === "string") {
      const parsed = JSON.parse(trip.days);
      tripDays = Array.isArray(parsed) ? parsed : [parsed];
    }
  } catch {
    tripDays = [];
  }

  const dayGroups = chunkDays(tripDays || []);
  const [currentPage, setCurrentPage] = useState(0);

  return (
  <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-[#C2A878]/30 shadow-xl"
>
  <motion.h2 className="text-3xl font-bold flex items-center gap-3 mb-6 bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
      <FaCalendarAlt className="text-[#C2A878]" />
    </motion.div>
    {t.title}
  </motion.h2>

  <motion.div
    key={currentPage}
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
  >
    {dayGroups[currentPage]?.map((day, dayIdx) => (
      <motion.div
        key={day.id || dayIdx}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: dayIdx * 0.2 }}
        className="rounded-xl p-6 bg-white/10 shadow-md hover:bg-[#C2A878]/10 transition"
      >
        <h3 className="text-lg font-semibold mb-4 text-[#C2A878]">
          Day {day.day_number}
        </h3>
        <ul className="space-y-3">
          {day.activities?.map((act, actIdx) => (
            <motion.li
              key={act.id || actIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: actIdx * 0.1 }}
              className="flex items-center gap-3 text-base text-[#C2A878]"
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <FaClock className="text-[#C2A878]" />
              </motion.div>
              <span>{getLocalizedText(act.activity_translations)}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ))}
  </motion.div>

  {/* Pagination */}
  <div className="flex justify-center mt-6 gap-3">
    {dayGroups.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentPage(idx)}
        className={`w-10 h-10 rounded-full font-bold transition ${
          currentPage === idx ? "bg-[#C2A878] text-white" : "bg-white/10 text-[#C2A878]"
        } hover:scale-110 shadow-md`}
      >
        {idx + 1}
      </button>
    ))}
  </div>
</motion.section>

  );
}
