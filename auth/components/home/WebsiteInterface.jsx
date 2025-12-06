"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import eagleLogo from "@/public/assets/Copilot_20251201_121053.webp";
import luxorBg from "@/public/assets/bahaa-mourad-4wB6TZFvMHQ-unsplash.webp";
import nileBg from "@/public/assets/bahaa-mourad-JQJ2MTtL_TU-unsplash.webp";
import templeBg from "@/public/assets/eibner-saliba-3T9dDY0WqDI-unsplash.webp";
import templeBg2 from "@/public/assets/derek-thomson-TWoL-QCZubY-unsplash.webp";
import templeBg3 from "@/public/assets/rowan-heuvel-U6t80TWJ1DM-unsplash.webp";
import templeBg4 from "@/public/assets/frank-mckenna-OD9EOzfSOh0-unsplash.webp";
import Header from "../Header/Header";
import FormFilter from "./components/FormFilter";
import useWindowSize from "@/components/hook/UseWindowSize";
import {
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useAppFun } from "@/context/AppFun";
import { FaMapMarkerAlt, FaUsers, FaBed } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";
const WebsiteInterface = () => {
  const backgrounds = [
    luxorBg,
    nileBg,
    templeBg,
    templeBg2,
    templeBg4,
    templeBg3,
  ];
  const [index, setIndex] = useState(0);
  // تغيير الخلفية كل 6 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  console.log(backgrounds[index]);
  const [showSocial, setShowSocial] = useState(false);

  const { width, height } = useWindowSize();
  const { destination, category, travelers, startDate, endDate, nights } =
    useAppFun();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen gap-5 text-white">
      {/* الخلفية */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={backgrounds[index]}
            alt="Egypt Background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* طبقة تدرج شفافة */}

      {/* الهيدر */}
      <Header />

      {/* الشعار */}
      <motion.div
        layout // 👈 يخلي الحركة سلسة عند تغيّر مكان العنصر
        transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10, y: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={eagleLogo}
            alt="Flower of Life Eagle"
            width={520}
            height={280}
            priority
            quality={100}
          />
        </motion.div>

        {/* اسم الشركة */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center 
             px-4 md:px-8 py-2 md:py-4 rounded-xl
             shadow-lg shadow-blue-900/50
             text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          flower of life
        </motion.h1>

        {/* Search Interface */}
        <FormFilter />
      </motion.div>

      {/* الكارد يظهر تحت الفورم بشكل طبيعي */}
      {width >= 1024 && (
        <AnimatePresence>
          {destination && startDate && endDate && travelers && category && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 
                   rounded-xl p-6 shadow-lg shadow-blue-900/40 
                   text-sm text-cyan-200 font-semibold space-y-4 w-full max-w-md"
            >
              <p
                className="text-lg font-bold text-transparent bg-clip-text 
                      bg-gradient-to-r from-cyan-300 via-white to-cyan-400 text-center mb-4"
              >
                ✨ Your Selection ✨
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-300" />
                Destination: <span className="text-white">{destination}</span>
              </p>
              <p className="flex items-center gap-2">
                <MdDateRange className="text-cyan-300" />
                Check-in:{" "}
                <span className="text-white">
                  {startDate?.toLocaleDateString()}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MdDateRange className="text-cyan-300" />
                Check-out:{" "}
                <span className="text-white">
                  {endDate?.toLocaleDateString()}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaUsers className="text-cyan-300" />
                Travelers: <span className="text-white">{travelers}</span>
              </p>
              <p className="flex items-center gap-2">
                <MdCategory className="text-cyan-300" />
                Category: <span className="text-white">{category}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaBed className="text-cyan-300" />
                {nights} night{nights > 1 ? "s" : ""}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-950/60 to-transparent -z-10" />

      {/* Cloud image في الأسفل */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 w-full h-[200px] -z-10"
      >
        <Image
          src="/assets/Copilot_20251201_134057.webp"
          alt="Realistic Cloud"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </motion.div>
      <motion.button
        onClick={() => setShowSocial((prev) => !prev)}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ cursor: "pointer" }}
        className="fixed  bottom-6 left-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md shadow-blue-900/40"
      >
        <FaShareAlt className="text-cyan-300 text-xl" />
      </motion.button>
      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed bottom-20 left-6 z-50 flex flex-col gap-4"
          >
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md shadow-blue-900/40"
                >
                  <Icon className="text-cyan-300 text-xl" />
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full 
                 bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-lg shadow-blue-900/40 text-cyan-300"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* طبقة شفافة فوق السحاب والخلفية */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-950/60 to-transparent -z-10" />
    </section>
  );
};

export default WebsiteInterface;
