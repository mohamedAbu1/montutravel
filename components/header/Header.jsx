"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Button from "@mui/material/Button";
import { useAuth } from "@/context/AuthContext";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";

export default function Header() {
  const { theme, themeName } = useTheme();
  const { isLoggedIn, logout, handleOpen } = useAuth();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${theme.border} ${theme.shadow}`}
      style={{
        borderTopRadius: "0px",
        background: themeName === "dark"
          ? "rgba(0,0,0,0.85)"
          : "rgba(255,255,255,0.25)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-8xl container mx-auto px-6 py-4 flex items-center justify-between">
        {/* شعار الموقع */}
        <Logo />

        {/* روابط التنقل */}
        <NavBar />

        {/* يمين الهيدر (تبديل الثيم + المستخدم) */}
        <RightBar />

        {/* زر تسجيل الدخول/الخروج */}
        <motion.div whileHover={{ scale: 1.05 }} className="hidden lg:flex">
          <Button
            onClick={isLoggedIn ? logout : handleOpen}
            className={`transition-all font-semibold tracking-wide uppercase shadow-md flex items-center gap-2 px-6 py-3 rounded-xl ${
              isLoggedIn ? theme.buttonSecondary : theme.buttonPrimary
            }`}
            style={{
              color: themeName === "dark" ? "#ededed" : theme.inputText,
              borderColor: theme.inputBorder,
            }}
          >
            {isLoggedIn ? (
              <>
                <FaSignOutAlt
                  size={20}
                  className={`${theme.icon} hover:${theme.iconHover}`}
                />
                <span>Logout</span>
              </>
            ) : (
              <>
                <FaUserPlus
                  size={20}
                  className={`${theme.icon} hover:${theme.iconHover}`}
                />
                <span>Sign Up</span>
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
