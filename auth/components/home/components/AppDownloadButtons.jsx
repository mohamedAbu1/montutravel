// components/AppDownloadButtons.jsx
"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function AppDownloadButtons() {
  return (
    <div
     className="flex md:hidden flex-col"
      style={{
        gap: 21,
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      {/* ✅ زر Google Play */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.yourapp"
        target="_blank"
        aria-label="Download from Google Play"
      >
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          startIcon={<AndroidIcon />}
          sx={{
            borderRadius: "12px",
            px: 3,
            py: 1.5,
            fontWeight: "700",
            fontFamily: "Cairo, sans-serif",
            fontSize: "16px",
            background: "linear-gradient(135deg, #34A853, #0F9D58)", // ✅ ألوان Google Play
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            backdropFilter: "blur(6px)", // ✅ تأثير زجاجي
            "&:hover": {
              background: "linear-gradient(135deg, #0F9D58, #34A853)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
            },
          }}
        >
          Get it on Google Play
        </MotionButton>
      </Link>

      {/* ✅ زر App Store */}
      <Link
        href="https://apps.apple.com/app/id000000000"
        target="_blank"
        aria-label="Download from Apple App Store"
      >
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          startIcon={<AppleIcon />}
          sx={{
            borderRadius: "12px",
            px: 3,
            py: 1.5,
            fontWeight: "700",
            fontFamily: "Cairo, sans-serif",
            fontSize: "16px",
            background: "linear-gradient(135deg, #000000, #434343)", // ✅ ألوان Apple Store
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            backdropFilter: "blur(6px)", // ✅ تأثير زجاجي
            "&:hover": {
              background: "linear-gradient(135deg, #434343, #000000)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
            },
          }}
        >
          Download on the App Store
        </MotionButton>
      </Link>
    </div>
  );
}
