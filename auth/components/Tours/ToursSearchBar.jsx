"use client";

import { useState } from "react";
import { FiSearch, FiFilter, FiGrid, FiColumns } from "react-icons/fi";

const ToursSearchBar = ({ layout, setLayout }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 shadow-[0_0_25px_rgba(34,211,238,0.15)]">

      {/* ✅ شريط البحث */}
      <div className="relative w-full md:w-1/2">
        <FiSearch className="absolute left-3 top-3.5 text-cyan-300 text-lg" />
        <input
          type="text"
          placeholder="Search tours..."
          className="w-full bg-slate-900/60 border border-cyan-400/30 text-white text-sm rounded-xl px-4 py-3 pl-10 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/50 transition"
        />
      </div>

      {/* ✅ الترتيب */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <FiFilter className="text-cyan-300 text-lg" />
        <span>Sort:</span>

        <select className="bg-slate-900/60 border border-cyan-400/30 text-white rounded-xl px-4 py-3 focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/50 transition">
          <option>Alphabetical – A to Z</option>
          <option>Price – Low to High</option>
          <option>Price – High to Low</option>
          <option>Duration – Short to Long</option>
          <option>Duration – Long to Short</option>
        </select>
      </div>

      {/* ✅ زرّي تغيير شكل الكارد */}
      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-2 shadow-lg">
        
        {/* زر الكارد العمودي */}
        <button
          onClick={() => setLayout("vertical")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition ${
            layout === "vertical"
              ? "bg-cyan-400 text-slate-900 font-semibold"
              : "bg-slate-900/50 text-gray-300"
          }`}
        >
          <FiGrid /> Vertical
        </button>

        {/* زر الكارد الأفقي */}
        <button
          onClick={() => setLayout("horizontal")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition ${
            layout === "horizontal"
              ? "bg-cyan-400 text-slate-900 font-semibold"
              : "bg-slate-900/50 text-gray-300"
          }`}
        >
          <FiColumns /> Horizontal
        </button>
      </div>
    </div>
  );
};

export default ToursSearchBar;
