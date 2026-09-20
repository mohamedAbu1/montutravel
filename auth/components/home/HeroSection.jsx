"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const glyphs = ["𓂀", "𓋹", "𓆣", "𓇼", "𓊹", "𓅓"];

export default function HeroSection() {
  const pathname = usePathname();
  const { t } = useTranslation("home");
  const locale = pathname.split("/").filter(Boolean)[0] || "en";

  return (
    <section className="desert-hero">
      <div className="desert-hero__grain" />
      <div className="desert-hero__sun" />
      <div className="desert-hero__moon" />
      <div className="desert-hero__scene">
        <div className="desert-hero__veil" />
        <div className="desert-hero__dunes" />
        <div className="desert-hero__horizon" />
        <div className="desert-hero__pyramid desert-hero__pyramid--one" />
        <div className="desert-hero__pyramid desert-hero__pyramid--two" />
      </div>
      <div className="desert-hero__constellation" aria-hidden="true">
        {glyphs.map((glyph, i) => (
          <motion.span key={glyph} initial={{ opacity: 0, y: 18 }} animate={{ opacity: [0.25, 0.8, 0.25], y: [0, -14, 0] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }} style={{ left: `${12 + i * 15}%`, top: `${18 + (i % 3) * 23}%` }}>{glyph}</motion.span>
        ))}
      </div>
      <div className="desert-hero__content">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="desert-hero__copy">
          <span className="desert-kicker"><i /> Curated journeys · Egypt <i /></span>
          <p className="desert-hero__eyebrow">{t("Discover") || "Discover the soul of Egypt"}</p>
          <h1>Where the <em>desert</em><br />remembers your name.</h1>
          <p className="desert-hero__lead">Private escapes, ancient temples and Nile horizons shaped into extraordinary journeys.</p>
          <div className="desert-hero__actions">
            <Link href={`/${locale}/trips`} className="desert-button desert-button--gold">Explore the collection <span>↗</span></Link>
            <Link href={`/${locale}/about`} className="desert-button desert-button--ghost">Our story <span>◌</span></Link>
          </div>
          <div className="desert-hero__trust"><div className="desert-avatars"><b>OT</b><b>EG</b><b>✦</b></div><span><strong>4.9 / 5</strong><br />from travellers who went beyond</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }} className="desert-hero__artifact" aria-hidden="true">
          <div className="desert-ring desert-ring--one" /><div className="desert-ring desert-ring--two" /><div className="desert-hero__seal">𓂀</div><span className="desert-hero__artifact-label">EST. 2026</span>
        </motion.div>
      </div>
      <div className="desert-hero__scroll"><span /> Scroll to wander</div>
      <div className="desert-hero__index">01 <span>/</span> 01</div>
    </section>
  );
}
