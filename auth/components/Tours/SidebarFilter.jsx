"use client";
import React from "react";
import { FiMapPin, FiFilter, FiTag, FiDollarSign } from "react-icons/fi";

const destinations = [
  "Cairo",
  "Luxor",
  "Aswan",
  "Giza",
  "Alexandria",
  "Hurghada",
  "Marsa Alam",
  "Sharm El Sheikh",
];

const categories = [
  "Night Tours",
  "Group Tours",
  "Eco & Nature",
  "Cultural & Historical",
  "Boat & Nile Cruises",
];

const SidebarFilter = () => {
  return (
    <div className="w-full md:w-72 bg-white/5 backdrop-blur-2xl border border-cyan-400/20 rounded-3xl p-7 shadow-[0_0_25px_rgba(34,211,238,0.15)] space-y-8">

      {/* العنوان */}
      <div className="flex items-center gap-2">
        <FiFilter className="text-cyan-300 text-lg" />
        <h3 className="text-cyan-300 text-sm font-semibold tracking-[0.18em] uppercase">
          Filter Tours
        </h3>
      </div>

      {/* الوجهات */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-xs text-cyan-200 uppercase tracking-wide">
          <FiMapPin className="text-cyan-300" />
          Destinations
        </label>

        <div className="space-y-3 text-sm text-gray-200">
          {destinations.map((city, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer hover:text-cyan-300 transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-cyan-400/40 bg-slate-900/60 focus:ring-cyan-300"
              />
              {city}
            </label>
          ))}
        </div>
      </div>

      {/* فاصل */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* الفئات */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-xs text-cyan-200 uppercase tracking-wide">
          <FiTag className="text-cyan-300" />
          Categories
        </label>

        <div className="space-y-3 text-sm text-gray-200">
          {categories.map((item, i) => (
            <label
              key={i}
              className="flex items-center gap-3 cursor-pointer hover:text-cyan-300 transition"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-cyan-400/40 bg-slate-900/60 focus:ring-cyan-300"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* فاصل */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* السعر */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-xs text-cyan-200 uppercase tracking-wide">
          <FiDollarSign className="text-cyan-300" />
          Price Range
        </label>

        {/* صندوق السعر */}
        <div className="bg-slate-900/40 border border-cyan-400/20 rounded-xl p-4 space-y-4 shadow-inner">
          {/* القيم */}
          <div className="flex justify-between text-xs text-gray-300">
            <span>$50</span>
            <span>$1000</span>
          </div>

          {/* Slider احترافي */}
          <input
            type="range"
            min="50"
            max="1000"
            className="w-full accent-cyan-400 cursor-pointer h-2 rounded-lg bg-slate-800/60"
          />

          {/* القيمة المختارة */}
          <div className="text-center text-sm text-cyan-300 font-semibold">
            Selected: $250
          </div>
        </div>
      </div>

      {/* زر إعادة التعيين */}
      <button className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-slate-900 font-semibold text-sm shadow-lg hover:scale-105 transition">
        Reset Filters
      </button>
    </div>
  );
};

export default SidebarFilter;
