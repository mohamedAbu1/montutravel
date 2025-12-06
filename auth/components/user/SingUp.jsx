"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppFun } from "@/context/AppFun";
import { FiUser, FiMail, FiLock, FiX } from "react-icons/fi";

const SignUp = () => {
  const { setShowRegister, setShowLogin } = useAppFun();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 
        backdrop-blur-2xl border border-cyan-300/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]
        rounded-3xl w-full max-w-md p-8 text-white space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={() => setShowRegister(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition"
        >
          <FiX size={22} />
        </button>

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">Create Account</h2>
          <p className="text-sm text-gray-300">
            Join FOL Travel and start your journey
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        {/* Inputs */}
        <div className="space-y-4">
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-cyan-300/70" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-10 py-3 text-sm 
              focus:border-cyan-300/60 outline-none transition"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-cyan-300/70" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-10 py-3 text-sm 
              focus:border-cyan-300/60 outline-none transition"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-cyan-300/70" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-10 py-3 text-sm 
              focus:border-cyan-300/60 outline-none transition"
            />
          </div>
        </div>

        {/* Create Account Button */}
        <button
          className="w-full bg-cyan-400 text-slate-900 font-bold py-3 rounded-xl 
          hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          Create Account
        </button>

        {/* Google Button */}
        <button
          className="w-full bg-white/10 border border-white/20 py-3 rounded-xl 
          hover:bg-white/20 transition flex items-center justify-center gap-2"
        >
          <img src="/assets/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Switch to Login */}
        <button
          onClick={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
          className="w-full text-cyan-300 text-sm underline hover:text-cyan-200 transition text-center"
        >
          Already have an account? Login
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
