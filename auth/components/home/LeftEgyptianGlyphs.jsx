"use client";

import { motion } from "framer-motion";

const glyphs = ["𓂀", "𓋹", "𓆣", "𓇼", "𓊹", "𓅓", "𓏏"];

export default function LeftEgyptianGlyphs() {
  return (
    <aside className="montu-left-glyphs" aria-hidden="true">
      <span className="montu-left-glyphs__line" />
      <div className="montu-left-glyphs__stack">
        {glyphs.map((glyph, index) => (
          <motion.span
            key={glyph + "-" + index}
            className="montu-left-glyph"
            animate={{ y: [0, index % 2 ? -5 : 5, 0], rotateY: [0, 8, 0] }}
            transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          >
            {glyph}
          </motion.span>
        ))}
      </div>
      <span className="montu-left-glyphs__label">MONTU · EGYPT</span>
    </aside>
  );
}
