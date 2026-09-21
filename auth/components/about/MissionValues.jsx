"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MissionValues() {
  const { t } = useTranslation("about");
  const cards = [
    { number: "01", title: t("h2") || "Craftsmanship in every detail", text: t("p2") || "Every route, stay, and handoff is considered before your journey begins." },
    { number: "02", title: t("h3") || "A human point of view", text: t("p3") || "Local knowledge turns a list of sights into moments that feel personal." },
    { number: "03", title: t("h4") || "Travel with intention", text: t("li") || "We create comfortable experiences that respect Egypt’s places and people." },
  ];
  return <section className="montu-about-v2-section montu-about-v2-principles" id="principles" aria-labelledby="principles-title"><div className="montu-about-v2-section__heading"><p className="montu-about-v2-kicker">THE MONTU STANDARD</p><h2 id="principles-title">Three promises in every journey.</h2><p>Thoughtful planning, local perspective, and the freedom to be fully present.</p></div><div className="montu-about-v2-principles__grid">{cards.map((card, index) => <motion.article className="montu-about-v2-principle" key={card.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.08 }}><span className="montu-about-v2-principle__number">{card.number}</span><span className="montu-about-v2-principle__mark" aria-hidden="true">✦</span><h3>{card.title}</h3><p>{card.text}</p></motion.article>)}</div></section>;
}
