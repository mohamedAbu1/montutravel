"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCitiesCategories } from "@/context/CitiesCategoriesContext";
import DividerWithIcon from "../../../components/layout/DividerWithIcon";
import { useRouter } from "next/navigation";
import EgyptianBackground from "../../../components/layout/EgyptianBackground";
import Divider from "@/components/layout/Divider";

const encodeData = (obj) => btoa(JSON.stringify(obj));

function CategoryCard({ cat, theme, language }) {
  const [imgIndex, setImgIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % (cat.images?.length || 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [cat.images]);

  const displayName =
    typeof cat.name === "object"
      ? cat.name?.[language] || cat.name?.en || cat.name
      : cat.name;

  const luxuryNames = [
    "Luxusreisen",
    "Luxury Tours",
    "Tours de lujo",
    "Voyages de luxe",
    "Tour di lusso",
    "豪华旅游",
  ];

  const handleClick = () => {
    const queryObj = {
      city: "all",
      category: [displayName],
      price: luxuryNames.includes(displayName) ? "Luxury" : "All",
      popular: false,
    };
    const encoded = encodeData(queryObj);
    router.push(`/trips?data=${encoded}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden group cursor-pointer h-[320px] transition-all duration-500 hover:scale-[1.06] hover:shadow-2xl ${theme.card}`}
      style={{ border: `1px solid ${theme.logoBorder}` }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={imgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={
              cat.images?.[imgIndex]?.startsWith("/")
                ? cat.images[imgIndex]
                : cat.images?.[imgIndex]?.startsWith("http")
                ? cat.images[imgIndex]
                : "/fallback.jpg"
            }
            alt={displayName}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className={`absolute inset-0 ${theme.overlay} flex items-end justify-center pb-4`}
      >
        <p
          className={`trips-text text-lg font-bold tracking-wide drop-shadow-lg ${theme.title}`}
        >
          {displayName}
        </p>
      </div>
    </div>
  );
}

const CategoriesSection = () => {
  const { theme, themeName } = useTheme();
  const { t, i18n } = useTranslation("home");
  const { categories, loading, error } = useCitiesCategories();
  const [index, setIndex] = useState(0);
  const normalizedLang = i18n.language.split("-")[0];

  const looped = [...categories, ...categories];
  const cardWidth = 220;
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!categories.length) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [categories.length]);

  if (loading) {
    return (
      <section className={`desert-data-section ${theme.background}`} aria-label="Loading categories">
        <div className="desert-section-heading"><span>THE MONTU EDIT</span><h2>Explore categories</h2></div>
        <div className="desert-skeleton-grid">{[1, 2, 3, 4].map((item) => <div key={item} className="desert-skeleton-card" />)}</div>
      </section>
    );
  }

  if (!categories.length) {
    return <section className={`desert-data-section ${theme.background}`}><div className="desert-empty-state"><span className="desert-empty-state__icon">𓋹</span><h2>{error ? "Categories unavailable" : "More journeys are coming"}</h2><p>{error ? "Connect the local database to load the Montu collection." : "Our travel categories will appear here soon."}</p></div></section>;
  }

  const symbols = ["𓂀","𓋹","𓆣","𓇼","𓇯","𓏏","𓎛","𓊽","𓃾","𓅓","𓈇","𓉐","𓊹","𓌙","𓍿","𓎟"];

  return (
    <section
      className={`desert-data-section flex flex-col py-24 px-6 w-full mx-auto bg-cover bg-center relative transition-colors duration-500 ${theme.background}`}
       style={{
        backgroundImage:
          "url('/HomePageImage/420046069_b520e5b4-b7a6-434e-bd8b-7191da0f4e29.svg')",
      }}
    >
      {/* خلفية الرموز */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-10 pointer-events-none">
        {symbols.map((sym, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="text-6xl m-6"
            style={{ color: theme.icon }}
          >
            {sym}
          </motion.span>
        ))}
      </div>

      <EgyptianBackground />

      {/* العنوان */}
      <div className="max-w-7xl mx-auto mb-10 text-start relative z-10">
        <h2 className={`sc-title-first text-5xl font-extrabold tracking-wide drop-shadow-md ${theme.title}`}>
          <span className="inline-block transform scale-x-[-1] mr-4">{symbols[2]}</span>
          {t("ExploreCategories")}
          <span className="inline-block ml-4">{symbols[2]}</span>
        </h2>

        <p className={`sc-p-first mt-4 text-lg opacity-1 text-start`}>
          {t("Discover")}
        </p>

        <DividerWithIcon />
      </div>


      {/* الكروت */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto z-10">
        <motion.div
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: -looped.length * cardWidth, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: -index * cardWidth }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {looped.map((cat, i) => (
            <div
              key={i}
              className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[20%] p-3"
            >
              <CategoryCard
                cat={cat}
                theme={theme}
                language={normalizedLang}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
