import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function ActionsComponent({
  t,
  loginWithGoogle,
  handleSubmit,
  loading,
  handleLoginOpen,
}) {
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      {/* زر تسجيل الدخول بجوجل */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <IconButton
          style={{ borderRadius: "12px" }}
          onClick={loginWithGoogle}
          className={`w-[280px] h-[56px]`}
        >
          <FcGoogle size={28} style={{ paddingRight: "10px" }} />
          <span className="text-[#A68B5B] font-semibold">
            Sign in with Google
          </span>
        </IconButton>
      </motion.div>

      {/* زر التسجيل */}
        <Button
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
          className={`text-[#A68B5B] p-6`}
        >
          {loading ? t("Creating") : t("SignUp")}
        </Button>
      <Button fullWidth onClick={handleLoginOpen} className={`capitalize`}>
        {t("Alreadyhaveanaccount?Login")}
      </Button>
    </div>
  );
}
