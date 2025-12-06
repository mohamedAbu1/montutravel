"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import eagleLogo from "@/public/assets/Copilot_20251201_121053.webp";
import Link from "next/link";
import { useAppFun } from "@/context/AppFun";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowRegister } = useAppFun();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 flex items-center justify-between
             bg-gradient-to-r from-blue-900/40 via-black/30 to-blue-900/40
             border-b border-white/20 shadow-lg shadow-blue-900/50"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <Image
          src={eagleLogo}
          alt="FOL Logo"
          width={50}
          height={50}
          className="drop-shadow-lg"
        />
        <h1
          className="text-xl md:text-2xl font-extrabold uppercase tracking-widest 
                 text-transparent bg-clip-text 
                 bg-gradient-to-r from-cyan-300 via-white to-cyan-400"
        >
          FOL Travel
        </h1>
      </div>

      {/* زر الموبايل */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {/* أيقونة الهامبرجر */}
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* القائمة للديسكتوب */}
      <nav className="hidden lg:flex gap-8 text-sm font-semibold">
        <Link href="/" className="transition hover:text-cyan-300">
          Home
        </Link>
        <Link href="/Tours" className="transition hover:text-cyan-300">
          Tours
        </Link>
        <Link href="/About" className="transition hover:text-cyan-300">
          About Us
        </Link>
        <Link href="/Contact" className="transition hover:text-cyan-300">
          Contact
        </Link>
        <Link href="/Admin" className="transition hover:text-cyan-300">
          Admin
        </Link>
      </nav>

      {/* القائمة للموبايل مع Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col gap-4 bg-white/10 backdrop-blur-md 
                 p-6 rounded-xl absolute top-16 left-0 w-full text-white z-50"
          >
            {/* روابط التنقل */}
            <Link href="#home" className="transition hover:text-cyan-300">
              Home
            </Link>
            <Link
              href="#destinations"
              className="transition hover:text-cyan-300"
            >
              Destinations
            </Link>
            <Link href="#about" className="transition hover:text-cyan-300">
              About Us
            </Link>
            <Link href="#contact" className="transition hover:text-cyan-300">
              Contact
            </Link>
            <Link href="#admin" className="transition hover:text-cyan-300">
              Admin
            </Link>

            {/* فاصل مرئي */}
            <hr className="border-white/20 my-2" />

            {/* Language Switcher */}
            <select className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm rounded-lg px-2 py-1">
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="fr">FR</option>
            </select>

            {/* Currency Switcher */}
            <select className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm rounded-lg px-2 py-1">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="egp">EGP</option>
            </select>

            {/* زر الحجز */}
            <motion.button
              onClick={() => setShowRegister(true)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 
    text-white px-6 py-2 rounded-full text-sm font-bold
    shadow-lg shadow-blue-900/40 transition-transform transform hover:scale-105"
            >
              Login
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Right Side: Language + Currency + CTA */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Language Switcher */}
        <select className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm rounded-lg px-2 py-1">
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
        </select>

        {/* Currency Switcher */}
        <select className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm rounded-lg px-2 py-1">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="egp">EGP</option>
        </select>

        {/* Call to Action */}
        <motion.button
          onClick={() => setShowRegister(true)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/30 
    text-white px-6 py-2 rounded-full text-sm font-bold
    shadow-lg shadow-blue-900/40 transition-transform transform hover:scale-105"
        >
          Login
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
