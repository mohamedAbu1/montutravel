"use client";
import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaUserCircle,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ReviewCard({
  rev,
  idx,
  theme,
  likes,
  addLike,
  removeLike,
  deleteReview,
  updateReview,
  user,
}) {
  const isOwner = user && String(user.id) === String(rev.users?.id);
  const isAdmin = user && user?.role === "ADMIN";

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(rev.comment);
  const [editedRating, setEditedRating] = useState(rev.rating);

  const handleSave = () => {
    updateReview(rev.id, {
      comment: editedComment,
      rating: editedRating,
    });
    setIsEditing(false);
  };

  return (
   <motion.div
  key={idx}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: idx * 0.1 }}
  className="w-[48%] p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-[#C2A878]/30 shadow-xl"
>
  {/* رأس البطاقة */}
  <div className="flex items-center gap-4 mb-4">
    {rev.avatar_url ? (
      <img
        src={rev.avatar_url}
        alt={rev.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-[#C2A878] shadow-md"
      />
    ) : (
      <FaUserCircle size={64} className="text-gray-400" />
    )}
    <div className="flex flex-col">
      <span className="font-bold text-lg capitalize bg-gradient-to-r from-[#C2A878] to-[#A68B5B] bg-clip-text text-transparent">
        {rev.name}
      </span>
      <span className="text-xs opacity-70 bg-white/10 px-2 py-1 rounded-md">
        {rev.date || rev.time}
      </span>
    </div>
  </div>

  {/* التقييم */}
  <div className="flex items-center gap-1 mb-3">
    {[...Array(rev.rating)].map((_, i) => (
      <FaStar key={i} size={20} className="text-[#C2A878] drop-shadow-md" />
    ))}
  </div>

  {/* التعليق */}
  {isEditing ? (
    <textarea
      value={editedComment}
      onChange={(e) => setEditedComment(e.target.value)}
      className="w-full p-3 rounded-xl backdrop-blur-md bg-white/10 border border-[#C2A878]/40 text-[#C2A878]"
    />
  ) : (
    <p className="italic mb-4 text-[#C2A878]">{rev.comment}</p>
  )}

  {/* أزرار التحكم */}
  <div className="flex flex-wrap items-center gap-3 mt-3">
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => addLike(rev.id, user?.id)}
      className="flex items-center gap-1 px-3 py-2 rounded-full text-sm bg-green-600 text-white hover:shadow-lg"
    >
      <FaThumbsUp /> {likes[rev.id]?.count || 0}
    </motion.button>

    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => removeLike(rev.id)}
      className="flex items-center gap-1 px-3 py-2 rounded-full text-sm bg-red-600 text-white hover:shadow-lg"
    >
      <FaThumbsDown /> Unlike
    </motion.button>

    {isOwner && (
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsEditing(true)}
        className="flex items-center gap-1 px-3 py-2 rounded-full text-sm bg-yellow-500 text-white hover:shadow-lg"
      >
        <FaEdit /> Edit
      </motion.button>
    )}

    {(isAdmin || isOwner) && (
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => deleteReview(rev.id)}
        className="flex items-center gap-1 px-3 py-2 rounded-full text-sm bg-red-700 text-white hover:shadow-lg"
      >
        <FaTrash /> Delete
      </motion.button>
    )}
  </div>
</motion.div>

  );
}
