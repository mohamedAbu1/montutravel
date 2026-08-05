/* eslint-disable react-hooks/purity */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { sites } from "@/constants/images";
import reactStringReplace from "react-string-replace";

export default function TripHeader({ trip, lang }) {
  const { theme, themeName } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ تغيير تلقائي كل 3 ثواني
  useEffect(() => {
    if (!trip?.gallery_images || trip.gallery_images.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === trip.gallery_images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [trip?.gallery_images?.length]);

  if (!trip?.gallery_images || trip.gallery_images.length === 0) {
    return (
      <div className={`text-center py-10 ${theme.text}`}>
        No photos are available for this trip.
      </div>
    );
  }

  // ✅ الكلمات المراد تمييزها
  const searchWords = sites.map((site) => site.name);

  const tripDescription =
    typeof trip?.description?.[lang] === "string"
      ? trip.description[lang]
      : trip?.description?.en || "";

  const regex = new RegExp(`(${searchWords.join("|")})`, "gi");

  const highlightedText = reactStringReplace(tripDescription, regex, (match, i) => (
    <span key={i} className="highlighted-text">
      {match}
    </span>
  ));

  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className={`w-full p-8 rounded-2xl ${theme.card} ${theme.shadow} ${theme.text} backdrop-blur-md bg-white/5 border border-[#C2A878]/30`}
>
  {/* العنوان */}
  <motion.h1
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent drop-shadow-lg"
  >
    {trip.title?.[lang] || trip.title?.en}
  </motion.h1>

  {/* الصورة الرئيسية */}
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="overflow-hidden rounded-2xl shadow-2xl mb-6 relative h-[500px]"
  >
    <Image
      src={trip.gallery_images[activeIndex].url || "/default.jpg"}
      alt={trip.gallery_images[activeIndex].name?.[lang] || "Trip image"}
      fill
      className="object-cover w-full h-[500px] transform hover:scale-110 hover:blur-[1px] transition duration-700 rounded-2xl"
      priority
    />
    {trip.gallery_images[activeIndex].name && (
      <div className="absolute bottom-4 left-4 text-lg font-bold px-4 py-2 rounded-xl backdrop-blur-md bg-black/40 text-white shadow-lg">
        {trip.gallery_images[activeIndex].name?.[lang] || trip.gallery_images[activeIndex].name?.en}
      </div>
    )}
  </motion.div>

  {/* الصور الجانبية */}
  <div className="flex gap-4 overflow-x-auto pb-2">
    {trip.gallery_images.map((img, index) => (
      <div
        key={index}
        className={`relative w-[160px] h-[100px] rounded-lg cursor-pointer border-2 transition-all duration-300 ${
          index === activeIndex ? "border-[#C2A878] shadow-lg scale-105" : "border-transparent"
        }`}
        onClick={() => setActiveIndex(index)}
      >
        <Image
          src={img.url || "/default.jpg"}
          alt={img.name?.[lang] || `Thumbnail ${index}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ))}
  </div>

  {/* الوصف */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="leading-relaxed text-lg mt-6 text-center backdrop-blur-md bg-white/5 rounded-xl p-6 shadow-md"
  >
    {highlightedText}
  </motion.div>

  <style jsx>{`
    .highlighted-text {
      color: #c9a34a;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    .highlighted-text:hover {
      text-decoration: underline;
      color: #eab308;
      text-shadow: 0 0 8px rgba(201, 163, 74, 0.8);
    }
  `}</style>
</motion.section>

  );
}
