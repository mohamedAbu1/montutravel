"use client";
import { useReviews } from "@/context/ReviewsContext";
import { useTheme } from "@/context/ThemeContext";
import { FaStar, FaUserCircle, FaQuoteLeft, FaHeart, FaThumbsUp, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EgyptianBackground from "@/components/layouta/EgyptianBackground";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { useState } from "react";

// Editorial fallback content keeps the section visually complete while the API
// is empty. These records are intentionally local and never sent to Supabase.
const DEMO_REVIEWS = [
  {
    id: "demo-nile",
    name: "Lina Morgan",
    comment: "The Nile at sunset felt completely different from any trip we had taken before. Every detail was calm, thoughtful, and beautifully timed.",
    rating: 5,
    likesCount: 128,
    created_at: "2025-02-18T10:00:00.000Z",
    tripLabel: "Nile at Golden Hour",
    demo: true,
  },
  {
    id: "demo-desert",
    name: "Daniel Reed",
    comment: "A rare combination of desert silence and warm local hosting. Montu made the journey feel personal from the first welcome to the last drive.",
    rating: 5,
    likesCount: 96,
    created_at: "2025-01-26T10:00:00.000Z",
    tripLabel: "Desert Horizons",
    demo: true,
  },
  {
    id: "demo-heritage",
    name: "Amelia Chen",
    comment: "The itinerary had a wonderful rhythm: iconic places, quiet discoveries, and enough space to enjoy each moment without rushing.",
    rating: 5,
    likesCount: 84,
    created_at: "2024-12-12T10:00:00.000Z",
    tripLabel: "Ancient Egypt, Reframed",
    demo: true,
  },
];

export default function TopReviewsSection() {
  const { allReviews, likes, addLike, user } = useReviews();
  const { theme } = useTheme();
  const { t } = useTranslation("home");

  // ✅ تأكد أن المصفوفة صحيحة
  const safeReviews = Array.isArray(allReviews) ? allReviews : [];

  // ✅ جلب أكثر 5 تعليقات لهم لايكات
  const topLikedReviews = safeReviews
    .map((rev) => ({
      ...rev,
      likesCount: likes[rev.id]?.count || 0,
    }))
    .filter((rev) => rev.likesCount > 0)
    .sort((a, b) => b.likesCount - a.likesCount)
    .slice(0, 5);

  // ✅ إدارة حالة "اقرأ المزيد" بشكل صحيح
  const [expandedIds, setExpandedIds] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const reviewsToDisplay = topLikedReviews.length > 0 ? topLikedReviews : DEMO_REVIEWS;

  const handleLike = async (review) => {
    if (review.demo) {
      setLikedIds((previous) =>
        previous.includes(review.id)
          ? previous.filter((id) => id !== review.id)
          : [...previous, review.id],
      );
      return;
    }

    if (user?.id) await addLike(review.id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="reviews"
      className={`montu-reviews-section py-20 px-8 ${theme.background} ${theme.text} w-screen max-w-full`}
    >
      <EgyptianBackground />
      <div className="montu-reviews-heading">
        <span className="montu-reviews-kicker">Montu journal</span>
        <h2>{t("h6")}</h2>
        <p>Small moments, remembered long after the journey ends.</p>
      </div>

      {reviewsToDisplay.length > 0 ? (
        <Slider {...settings}>
          {reviewsToDisplay.map((rev, idx) => {
            const expanded = expandedIds.includes(rev.id);
            const isLiked = likedIds.includes(rev.id);
            const displayedLikes = rev.demo
              ? rev.likesCount + (isLiked ? 1 : 0)
              : likes[rev.id]?.count || 0;
            const comment =
              rev.comment?.length > 150 && !expanded
                ? rev.comment.slice(0, 150) + "..."
                : rev.comment;

            return (
              <motion.div
                 key={rev.id || idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="montu-review-card flex flex-col gap-6 p-8 mx-4 rounded-2xl min-h-[220px]"
              >
                <div className="montu-review-card__topline">
                  <span className="montu-review-card__eyebrow">
                    {rev.demo ? "Editorial preview" : rev.tripLabel || "Verified journey"}
                  </span>
                  <FaCheckCircle aria-label="Featured review" />
                </div>

                <div className="flex items-center gap-4 border-b pb-3 montu-review-card__author">
                  {rev.avatar_url ? (
                    <img
                      src={rev.avatar_url}
                      alt={rev.name}
                      className="w-16 h-16 rounded-full border-2 object-cover"
                      style={{ borderColor: theme.logoBorder }}
                    />
                  ) : (
                    <FaUserCircle size={64} className={theme.icon} />
                  )}
                  <div>
                    <h3 className={`font-bold text-lg ${theme.heading} capitalize`}>
                      {rev.name || "Anonymous"}
                    </h3>
                    <div className="flex gap-1" aria-label={`${rev.rating || 0} out of 5 stars`}>
                      {[...Array(rev.rating || 0)].map((_, i) => (
                        <FaStar key={i} className={theme.icon} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex-1 mt-6">
                  <FaQuoteLeft className="absolute top-0 left-0 text-3xl opacity-20 montu-review-card__quote" />
                  <p
                    className={`italic leading-relaxed text-base pl-10 ${theme.subText}`}
                    style={{ textAlign: "justify" }}
                  >
                    {comment}
                  </p>
                  {rev.comment?.length > 150 && (
                    <button
                      onClick={() => toggleExpand(rev.id)}
                      className="text-sm mt-2 montu-review-card__more"
                    >
                      {expanded ? "إخفاء" : "اقرأ المزيد"}
                    </button>
                  )}
                </div>

                {/* Footer */}
                <div className="montu-review-card__footer flex justify-between items-center mt-6 border-t pt-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>
                      {rev.created_at
                        ? format(new Date(rev.created_at), "dd MMM yyyy")
                        : "Unknown date"}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`montu-review-like ${isLiked ? "is-liked" : ""}`}
                    onClick={() => handleLike(rev)}
                    aria-pressed={isLiked}
                    aria-label={isLiked ? "Remove your like" : "Like this review"}
                    disabled={!rev.demo && !user?.id}
                  >
                    <FaThumbsUp />
                    <span>{displayedLikes}</span>
                    <span className="montu-review-like__label">Helpful</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      ) : (
        <p className={`text-center opacity-70 ${theme.subText}`}>{t("p6")}</p>
      )}
    </section>
  );
}
