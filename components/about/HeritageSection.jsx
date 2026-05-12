"use client";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DividerWithIcon from "../layout/DividerWithIcon";

export default function HeritageSection() {
  const { themeName } = useTheme();
  const { t } = useTranslation("about");

  // ✨ إعدادات الأنيميشن
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative z-10 pb-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`max-w-7xl mx-auto rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border text-gradient`}
      >
        {/* النص */}
        <motion.div variants={fadeLeft} className="flex-1">
          <h3
            className={`about-p text-2xl font-bold mb-3 text-gradient`}
          >
            {t("h5")}
          </h3>
          <DividerWithIcon />

          <p
            className={`text-center text-gradient`}
          >
            {t("p4")}
          </p>
        </motion.div>

        {/* الصورة */}
        <motion.div
          variants={fadeRight}
          className="flex-1 relative w-full h-56"
        >
          <Image
           src={
              themeName === "dark"
                ? "/HomePageImage/pexels-axp-photography-500641970-18934596.webp"
                : "/Nile_Cruise/Dahabeya-program-SOBEK-900x600.webp"
            }
            alt="Egyptian Heritage"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
