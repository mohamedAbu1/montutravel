"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation("about");
  const locale = usePathname()?.split("/")[1] || "en";
  return (
    <section className="montu-about-v2-hero" aria-labelledby="about-page-title">
      <div className="montu-about-v2-hero__inner">
        <motion.div className="montu-about-v2-hero__copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="montu-about-v2-kicker">MONTU TRAVEL <span>/</span> OUR STORY</p>
          <h1 id="about-page-title">{t("h1") || "Luxury journeys crafted with heritage and heart"}</h1>
          <p className="montu-about-v2-lead">{t("p") || "We design immersive experiences across Egypt—from the Nile’s timeless elegance to the White Desert’s quiet wonder."}</p>
          <div className="montu-about-v2-actions"><Link className="montu-about-v2-button montu-about-v2-button--primary" href={`/${locale}/trips`}>Explore journeys <span aria-hidden="true">↗</span></Link><Link className="montu-about-v2-button montu-about-v2-button--quiet" href={`/${locale}/contact`}>Talk to a designer</Link></div>
          <nav className="montu-about-v2-local-nav" aria-label="About page sections"><a href="#story">01 <span>Story</span></a><a href="#principles">02 <span>Principles</span></a><a href="#heritage">03 <span>Heritage</span></a></nav>
        </motion.div>
        <motion.div className="montu-about-v2-hero__visual" initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }} id="story">
          <div className="montu-about-v2-image montu-about-v2-image--main"><Image src="/Aswan/pexels-radwa-magdy-1718930-28144568.webp" alt="A peaceful Nile scene in Aswan" fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div>
          <div className="montu-about-v2-image montu-about-v2-image--small"><Image src="/Siwa/pexels-ast4rk-33661271.webp" alt="Golden desert landscape near Siwa" fill sizes="(max-width: 900px) 42vw, 20vw" /></div>
          <div className="montu-about-v2-stamp" aria-label="Crafted in Egypt"><span>✦</span> Crafted in Egypt</div><p className="montu-about-v2-visual-caption">From river light to desert silence</p>
        </motion.div>
      </div>
    </section>
  );
}
