"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";

const CarBookingSection = () => {
  const { t } = useTranslation("home");
  const { user } = useAuth();

  const openBooking = () => window.dispatchEvent(new CustomEvent("openCarBookingChat"));

  return (
    <section id="car-transfer" className="montu-car-booking montu-editorial-section">
      <div className="montu-editorial-kicker"><span>06</span><i /> Arrive in your own style</div>
      <div className="montu-car-panel">
        <motion.div className="montu-car-copy" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="montu-section-label">Montu Concierge</span>
          <h2>Your journey begins<br /><em>before the first step.</em></h2>
          <p>{t("Experience") || "Move through Egypt with a private driver, cool water, and the confidence that every transition is already taken care of."}</p>
          <div className="montu-concierge-perks"><span><b>01</b> Private airport welcome</span><span><b>02</b> Licensed local drivers</span><span><b>03</b> Available day & night</span></div>
          {user ? <button type="button" className="montu-editorial-link" onClick={openBooking}>{t("Book") || "Book your transfer"}<span>↗</span></button> : <p className="montu-login-hint">Sign in to request your private transfer <span>→</span></p>}
        </motion.div>
        <motion.div className="montu-car-visual" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="montu-car-image-frame"><Image src="/HomePageImage/White-Kia-PNG-High-Quality-Image.webp" alt="Private Montu Travel transfer vehicle" fill sizes="(max-width: 900px) 100vw, 56vw" /></div>
          <div className="montu-car-badge"><strong>VIP</strong><span>door to<br />destination</span></div>
          <div className="montu-car-route"><span>CAI</span><i /><span>LXR</span></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarBookingSection;
