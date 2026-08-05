"use client";
import EmojiPicker from "emoji-picker-react";

export default function ReviewForm({
  comment,
  setComment,
  showEmojiPicker,
  setShowEmojiPicker,
  onEmojiClick,
  onSubmit,
  placeholder,
  submitLabel,
  theme,
}) {
  return (
 <form onSubmit={onSubmit} className="space-y-4">
  <div className="flex items-center gap-3">
    <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder={placeholder}
      className="w-[70%] p-4 rounded-xl backdrop-blur-md bg-white/10 border border-[#C2A878]/40 text-[#C2A878] focus:outline-none shadow-md"
      rows={3}
    />
    <button
      type="button"
      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      className="w-10 h-10 rounded-full bg-white/10 border border-[#C2A878]/40 text-xl hover:bg-[#C2A878]/20 transition"
    >
      😀
    </button>
    {showEmojiPicker && (
      <EmojiPicker onEmojiClick={onEmojiClick} theme={theme.name === "dark" ? "dark" : "light"} />
    )}
  </div>

  <button
    type="submit"
    className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#C2A878] to-[#A68B5B] text-white hover:scale-105 transition shadow-lg"
  >
    {submitLabel}
  </button>
</form>

  );
}
