"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import SelectionCard from "./components/SelectionCard";
import SocialButtons from "./components/SocialButtons";
import ScrollTopButton from "./components/ScrollTopButton";
import GradientOverlay from "./components/GradientOverlay";
import CloudBackground from "./components/CloudBackground";
import Header from "../header/Header";
import FormFilter from "../home/components/FormFilter";
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
import AppDownloadButtons from "./components/AppDownloadButtons";
const WebsiteInterface = () => {  

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
      {/* الخلفية والهيدر */}
      <HeroSection />

      {/* الشعار والبحث */}
  

      {/* الكارد يظهر تحت الفورم بشكل طبيعي */}
      {width >= 1024 && destination && startDate && endDate && travelers && category && (
        <SelectionCard
          destination={destination}
          startDate={startDate}
          endDate={endDate}
          travelers={travelers}
          category={category}
          nights={nights}
        />
      )}

      {/* طبقة التدرج */}
      <GradientOverlay />

      {/* السحاب */}
      <CloudBackground />

      {/* أزرار المشاركة */}
      <SocialButtons showSocial={showSocial} setShowSocial={setShowSocial} />

      {/* زر العودة للأعلى */}
      <ScrollTopButton showScrollTop={showScrollTop} />
    </section>
  );
};

export default WebsiteInterface;
