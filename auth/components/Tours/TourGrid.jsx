"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const TourGrid = () => {
  const tours = [
    {
      title: "10-Day Egypt Experience",
      location: "Cairo",
      duration: "10 D",
      price: 250,
      category: "Group Tours",
      image: "/assets/5116-900x600.webp",
    },
    {
      title: "2 Days Private Guided Tour",
      location: "Giza",
      duration: "2 D",
      price: 280,
      category: "Cultural & Historical",
      image: "/assets/jared-rice-NTyBbu66_SI-unsplash.webp",
    },
    // ... أكمل باقي الرحلات
  ];
  return (
    <div style={{marginTop:"40px"}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((t, i) => (
        <motion.div
          key={i}
          //   variants={cardVariants}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative h-[400px] overflow-hidden rounded-2xl 
                bg-white/10 backdrop-blur-md border border-white/0 
                shadow-[0_10px_35px_rgba(0,0,0,0.4)] 
                hover:bg-white/15 hover:border-white/30 
                transition-all duration-300"
        >
          {/* صورة الرحلة */}
          <div className="relative h-[450px]">
            <Image
              src={t.image}
              alt={t.title}
              fill
              className="object-cover object-center"
              priority
            />

            {/* طبقة شفافة */}
            <div className="absolute inset-0 z-[10] bg-gradient-to-t from-black/90 via-black/80 to-transparent pointer-events-none" />

            {/* محتوى الكارد */}
            <div className="relative z-[20] p-4 space-y-3 pt-60 ">
              <p className="text-sm font-bold text-cyan-300">${t.price}</p>

              <div className="flex items-center gap-2 text-cyan-200 text-sm">
                <FaMapMarkerAlt className="text-cyan-300" />
                <span className="text-white/90">{t.city}</span>
                <span className="mx-2 h-4 w-[1px] bg-white/20" />
                <FaStar className="text-yellow-300" />
                <span className="text-white/80">{t.reviews} Review</span>
              </div>

              <h4 className="text-sm font-semibold text-white/95 line-clamp-2">
                {t.title}
              </h4>

              <p className="text-xs text-white/70">{t.date}</p>

              <div className="pt-2">
                <button
                  className="w-full rounded-lg px-3 py-2 
                      text-sm font-bold uppercase tracking-wide
                      bg-gradient-to-r from-cyan-300 via-white to-cyan-300
                      text-black shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                      hover:opacity-90 transition-opacity"
                >
                  View Tour
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TourGrid;
