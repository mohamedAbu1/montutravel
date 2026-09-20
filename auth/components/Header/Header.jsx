"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Button from '@mui/material/Button';
import { useAuth } from "@/context/AuthContext";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const { user, isLoggedIn, logout, handleOpen } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`desert-header fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${theme.background} ${theme.border} ${theme.shadow}`
          : "bg-transparent"
      }`}
    >
      <div className="montu-header-inner max-w-8xl container mx-auto px-6 py-4 flex items-center justify-between">
        {/* شعار الموقع */}
        <Logo scrolled={scrolled} />

        {/* روابط التنقل */}
        <NavBar scrolled={scrolled} />

        {/* يمين الهيدر (تبديل الثيم + المستخدم) */}
        <RightBar scrolled={scrolled} />

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="desert-mobile-menu lg:hidden"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* زر تسجيل الدخول/الخروج */}
        <motion.div whileHover={{ scale: 1.05 }} className="hidden lg:flex">
          <Button
            onClick={isLoggedIn ? logout : handleOpen}
            className={`montu-header-cta transition-all text-white font-semibold tracking-wide uppercase shadow-md flex items-center gap-2 px-6 py-3 rounded-xl ${
              isLoggedIn ? theme.buttonSecondary : theme.buttonPrimary
            }`}
          >
            {isLoggedIn ? (
              <>
                <FaSignOutAlt size={20} />
                <span>Logout</span>
              </>
            ) : (
              <>
                <FaUserPlus size={20} />
                <span>Sign Up</span>
              </>
            )}
          </Button>
        </motion.div>
      </div>
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="desert-mobile-nav lg:hidden"
        >
          {["Home", "Trips", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item === "Home" ? "en" : `en/${item.toLowerCase()}`}`} onClick={() => setMobileOpen(false)}>
              {item}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
