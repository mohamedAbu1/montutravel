"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import DividerWithIcon from "../../../components/layout/DividerWithIcon";
import Decor from "../../../components/layout/Decor";

const OurSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/").filter(Boolean)[0] || "en";
  const { theme, themeName } = useTheme();
  const { t } = useTranslation("home");

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  const symbols = [
    "𓂀",
    "𓋹",
    "𓆣",
    "𓇼",
    "𓇯",
    "𓏏",
    "𓎛",
    "𓊽",
    "𓃾",
    "𓅓",
    "𓈇",
    "𓉐",
    "𓊹",
    "𓌙",
    "𓍿",
    "𓎟",
  ];

  return (
    <section
      id="section-four"
      className={`desert-about-section flex relative w-full min-h-screen px-4 sm:py-10 md:py-12 lg:py-0 flex-col items-center justify-start ${theme.background} ${theme.text}`}
      style={{ paddingBottom: "40px", paddingTop: "20px" }}
    >
      {/* خلفية الرموز الفرعونية */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.25, y: 0 }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            className="absolute text-7xl"
            style={{
              top: `${(i * 41) % 100}%`,
              left: `${(i * 59) % 100}%`,
              transform: `rotate(${(i * 31) % 360}deg)`,
              color: theme.icon,
            }}
          >
              {symbols[i % symbols.length]}
          </motion.span>
        ))}
      </div>

      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* ✅ Slider */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden"
          style={{ boxShadow: theme.shadow }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full h-full"
          >
            {[
              "/HomePageImage/png-ancient-egyptian-decorative-column-illustration.png",
            ].map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[85vh]">
                  <Image
                    src={imgSrc || "/fallback.jpg"}
              alt={`Montu Travel journey slide ${index + 1}`}
                    fill
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* ✅ Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-start gap-9"
          style={{ paddingLeft: "13px" }}
        >
          <Decor pos={"top"} />

          <p className="sc-p text-sm uppercase mb-2 tracking-wide text-gradient">
            {t("AboutUs")}
          </p>

          <h2 className="sc-title text-3xl lg:text-4xl font-bold mb-4 leading-snug text-gradient">
            {t("DiscoverWasetTravel")}
          </h2>

          <DividerWithIcon />

          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: theme.text }}
          >
            {t("At")}{" "}
            <span style={{ color: theme.logoBorder, fontWeight: 600 }}>
              Montu Travel
            </span>
            {t("AtP")}{" "}
            <span style={{ color: theme.logoBorder, fontWeight: 600 }}>
              {t("professionalguides")}
            </span>{" "}
            {t("AtPP")}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(`/${locale}/about`)}
            className={`w-full rounded-[4px] px-6 py-3 font-semibold tracking-wide cursor-pointer transition-all duration-300 shadow-lg ${theme.buttonPrimary}`}
            style={{
              color: `${theme.subText}`,
              border: `2px solid ${theme.logoBorder}`,
            }}
          >
            {t("LearnMoreAboutUs")}
          </motion.button>

          <Decor pos={"bottom"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-secondary-slider w-full lg:w-1/2 rounded-3xl overflow-hidden"
          style={{ boxShadow: theme.shadow }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full h-full"
          >
            {[
              "/HomePageImage/png-ancient-egyptian-decorative-column-illustration.png",
            ].map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[85vh]">
                  <Image
                    src={imgSrc || "/fallback.jpg"}
              alt={`Montu Travel journey slide ${index + 1}`}
                    fill
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[150px] opacity-100 pointer-events-none">
        <Image
          src={
              themeName === "dark"
                ? "/HomePageImage/luxor-cityscape-egypt_250484-204-1-1-e1758012287222-removebg-preview.png"
                : "/HomePageImage/luxor-cityscape-egypt_250484-204-1-1-e1758012287222-removebg-preview.png"
            }
          alt="Decorative Style"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default OurSection;
