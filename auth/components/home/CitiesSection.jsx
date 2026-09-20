"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCitiesCategories } from "@/context/CitiesCategoriesContext";
import DividerWithIcon from "../../../components/layout/DividerWithIcon";
import { useRouter } from "next/navigation";

const encodeData = (obj) => btoa(JSON.stringify(obj));

function CityCard({ city, themeName, theme, language, t }) {
  const router = useRouter();
  const cityName =
    city.name?.[language] || city.name?.["en"] || city.name || "";

  const handleExplore = () => {
    const queryObj = {
      city: [cityName],
      category: "all",
      price: "All",
      popular: false,
    };
    const encoded = encodeData(queryObj);
    router.push(`/trips?data=${encoded}`);
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const images = city.images?.slice(0, 2) || ["/fallback.jpg", "/fallback.jpg"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-w-[250px] p-4"
    >
      <div
        className={`relative h-82 rounded-2xl overflow-hidden group cursor-pointer
          ${theme.card} ${theme.border} ${theme.shadow}
          transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:-rotate-1`}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={cityName || "City image"}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className={`absolute inset-0 ${theme.overlay} flex flex-col items-center justify-end pb-6`}
        >
          <p
            className={`trips-text text-lg font-bold mb-2 ${theme.title}`}
            style={{
              WebkitTextStroke:
                themeName === "dark" ? "1px #C2A878" : "1px #ffffff",
              textShadow:
                themeName === "dark"
                  ? "2px 2px 6px rgba(0,0,0,0.6)"
                  : "2px 2px 6px rgba(255,255,255,0.3)",
            }}
          >
            {cityName}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
            className={`rounded-[9px] px-3 py-2 font-semibold tracking-wide cursor-pointer transition-all duration-300 shadow-lg ${theme.buttonPrimary}`}
            style={{ border: `2px solid ${theme.logoBorder}` }}
          >
            {t("Explore")}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

const CitiesSection = () => {
  const { theme, themeName } = useTheme();
  const { t, i18n } = useTranslation("home");
  const { cities, loading, error, retry } = useCitiesCategories();
  const normalizedLang = i18n.language.split("-")[0];

  // ✅ hooks لازم تكون فوق
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <section id="destinations" className={`desert-data-section ${theme.background}`} aria-label="Loading destinations">
        <div className="desert-section-heading"><span>WHERE WILL YOU WANDER?</span><h2>Explore destinations</h2></div>
        <div className="desert-skeleton-grid">{[1, 2, 3, 4].map((item) => <div key={item} className="desert-skeleton-card" />)}</div>
      </section>
    );
  }

  if (!cities.length) {
    return <section id="destinations" className={`desert-data-section ${theme.background}`}><div className="desert-empty-state"><span className="desert-empty-state__icon">𓇼</span><h2>{error ? "Destinations unavailable" : "Egypt is waiting"}</h2><p>{error ? "We could not load destinations right now." : "Destination guides will appear here soon."}</p>{error && <button type="button" onClick={retry} className="desert-empty-state__action">Retry destinations ↗</button>}</div></section>;
  }

  const looped = [...cities, ...cities];

  // ✅ الرموز الفرعونية للديكور
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
      id="destinations"
      className={`desert-data-section flex flex-col py-24 px-6 w-full mx-auto bg-cover bg-center relative transition-colors duration-500 ${theme.background}`}
       style={{
        backgroundImage:
          "url('/HomePageImage/420046069_b520e5b4-b7a6-434e-bd8b-7191da0f4e29.svg')",
      }}
    >
      {/* خلفية الرموز */}
      <div className="absolute inset-0 pointer-events-none">
        {symbols.map((sym, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 1.2, delay: i * 0.1 }}
            className="absolute text-6xl"
            style={{
              top: `${(i * 43) % 100}%`,
              left: `${(i * 67) % 100}%`,
              transform: `rotate(${(i * 23) % 360}deg)`,
              color: theme.icon,
            }}
          >
            {sym}
          </motion.span>
        ))}
      </div>

      {/* صورة SVG ديكور جانبية */}
      {/* <div
        className="absolute opacity-40 pointer-events-none"
        style={{
          right: screenSize.width * 0.05, // 10% من عرض الشاشة
          bottom: screenSize.height * 0.49, // 20% من ارتفاع الشاشة
          width: "250px",
          height: "200px",
        }}
      >
        <Image
            src={
              themeName === "dark"
                ? "/HomePageImage/Temple-of-Bell-Street-2015100903.svg"
                : "/HomePageImage/johnny_automatic_ocean_liner.svg"
            }
          alt="Decorative Style"
          fill
          className="object-contain"
        />
      </div> */}

      <div className="max-w-2xl mx-auto mb-16 w-full relative z-10">
        <h2 className="sc-title-first text-5xl font-extrabold tracking-wide drop-shadow-md text-center text-gradient">
          <span className="inline-block transform scale-x-[-1] mr-4">𓆣</span>
          {t("ExploreCities")}
          <span className="inline-block ml-4">𓆣</span>
        </h2>
        <DividerWithIcon />
      </div>

      {/* <div
        className="absolute scale-x-[-1] opacity-40 pointer-events-none"
        style={{
          left: screenSize.width * 0.05, // 10% من عرض الشاشة
          bottom: screenSize.height * 0.49, // 20% من ارتفاع الشاشة
          width: "250px",
          height: "200px",
        }}
      >
        <Image
           src={
              themeName === "dark"
                ? "/HomePageImage/Temple-of-Bell-Street-2015100903.svg"
                : "/HomePageImage/johnny_automatic_ocean_liner.svg"
            }
          alt="Decorative Style"
          fill
          className="object-contain"
        />
      </div> */}
      {/* ✅ Marquee Animation */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto h-[410px] z-10">
        <motion.div
          className="flex h-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {looped.map((city, i) => (
            <CityCard
              key={i}
              city={city}
              t={t}
              themeName={themeName}
              theme={theme}
              language={normalizedLang}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CitiesSection;
