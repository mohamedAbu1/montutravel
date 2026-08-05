"use client";
import { FaStar } from "react-icons/fa";

export default function ReviewsHeader({ title, averageRating,average, reviewsCount, theme, t }) {
  return (
   <div className="flex items-center justify-between mb-6 border-b p-4 backdrop-blur-md bg-white/5 rounded-xl shadow-md">
  <h2 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
    {title}
  </h2>
  {reviewsCount > 0 && (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-[#C2A878]">{average}</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={22}
            className={i < Math.round(averageRating) ? "text-[#C2A878] drop-shadow-md" : "text-gray-400"}
          />
        ))}
      </div>
      <span className="ml-2 text-[#C2A878]">({averageRating})</span>
    </div>
  )}
</div>

  );
}
