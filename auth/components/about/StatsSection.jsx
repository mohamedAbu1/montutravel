"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [["10+", "years of local insight"], ["25k+", "travellers welcomed"], ["120+", "curated routes"], ["60+", "trusted local partners"]];
  return <section className="montu-about-v2-proof" aria-label="Montu Travel by the numbers">{stats.map(([value, label], index) => <motion.div className="montu-about-v2-proof__item" key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}><strong>{value}</strong><span>{label}</span></motion.div>)}</section>;
}
