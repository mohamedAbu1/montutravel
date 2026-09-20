"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

const OurSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/").filter(Boolean)[0] || "en";
  const { themeName } = useTheme();
  const { t } = useTranslation("home");

  return (
    <section id="about" className={`montu-about-section montu-editorial-section ${themeName}`}>
      <div className="montu-editorial-kicker"><span>02</span><i /> The Montu point of view</div>
      <div className="montu-about-grid">
        <motion.div className="montu-about-media montu-editorial-mosaic" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
          <div className="montu-mosaic-main"><Image src="/HomePageImage/pexels-adventistasia-25662334.webp" alt="Traveller crossing the Giza desert by camel" fill sizes="(max-width: 900px) 100vw, 56vw" /><div className="montu-mosaic-caption"><span>01 / 04</span><strong>Desert mornings</strong><small>Giza · Egypt</small></div></div>
          <div className="montu-mosaic-side"><div className="montu-mosaic-small"><Image src="/HomePageImage/pexels-ahad-hasan-1816309676-34248486.webp" alt="A group discovering the Egyptian desert" fill sizes="240px" /></div><div className="montu-mosaic-note"><b>𓂀</b><span>Travel slowly.<br />See deeply.</span></div></div>
          <div className="montu-mosaic-stamp">M<br />T</div>
        </motion.div>
        <motion.div className="montu-about-copy montu-editorial-copy" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <span className="montu-section-label">{t("AboutUs") || "About Montu"}</span>
          <h2>Egypt is not a destination.<br /><em>It is a feeling.</em></h2>
          <p className="montu-editorial-lead">{t("At")} <strong>Montu Travel</strong>, we turn ancient places into personal stories — shaped around your pace, your curiosity, and the moments you will carry home.</p>
          <p className="montu-editorial-body">From a quiet sunrise above the Nile to a private walk through temples after the crowds leave, every detail is considered by people who know Egypt intimately.</p>
          <div className="montu-about-stats"><div><strong>12+</strong><span>years of local insight</span></div><div><strong>84</strong><span>handcrafted journeys</span></div><div><strong>4.9</strong><span>traveller rating</span></div></div>
          <button type="button" className="montu-editorial-link" onClick={() => router.push(`/${locale}/about`)}>{t("LearnMoreAboutUs") || "Meet the people behind the journeys"}<span>↗</span></button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSection;
