"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Dialog, DialogContent, Divider, InputAdornment, TextField } from "@mui/material";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useData } from "@/context/DataContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useSecurity } from "@/context/SecurityContext";
import { useTranslation } from "react-i18next";
import { supabase } from "@/lib/supabaseClient";

export default function LoginModal() {
  const { loginOpen, handleLoginClose, handleOpen } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation("home");
  const { login, loading, error, handleClose } = useAuth();
  const { validateField } = useSecurity();

  const handleSubmit = async (event) => {
    event?.preventDefault();
    const emailError = validateField("Email", email);
    const passwordError = validateField("Password", password);
    if (emailError || passwordError) {
      toast.error(emailError || passwordError);
      return;
    }
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      handleLoginClose();
      handleClose();
    } catch (err) {
      toast.error("❌ Error: The email or password is incorrect.");
    }
  };

  const loginWithGoogle = async () => {
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: process.env.NEXT_PUBLIC_BASE_URL + "/api/auth/callback/google" },
    });
    if (oauthError) toast.error(oauthError.message);
  };

  return (
    <Dialog open={loginOpen} onClose={handleLoginClose} fullWidth maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="montu-auth-dialog montu-auth-dialog--login"
      >
        <aside className="montu-auth-visual" aria-hidden="true">
          <span className="montu-auth-visual__eyebrow">MONTU TRAVEL · EGYPT</span>
          <div className="montu-auth-visual__seal">𓂀</div>
          <div className="montu-auth-visual__copy">
            <span className="montu-auth-visual__overline">YOUR NEXT CHAPTER</span>
            <strong>Return to the story.</strong>
            <span>Desert routes, timeless cities, and memories worth carrying home.</span>
          </div>
          <span className="montu-auth-visual__route">CAI <i /> LXR <i /> ASW</span>
        </aside>
        <section className="montu-auth-form">
          <div className="montu-auth-form__header">
            <span className="montu-auth-form__kicker">WELCOME BACK</span>
            <h2>{t("Login")}</h2>
            <p>Pick up where your Egyptian journey left off.</p>
          </div>
          <DialogContent className="montu-auth-dialog__content">
            <form className="montu-auth-form__body" onSubmit={handleSubmit}>
              <TextField className="montu-auth-field" label={t("Email")} type="email" autoComplete="email" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><MdEmail /></InputAdornment> }} />
              <TextField className="montu-auth-field" label={t("Password")} type="password" autoComplete="current-password" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><MdLock /></InputAdornment> }} />
              {error && <p className="montu-auth-status" role="alert">{error}</p>}
              <Button className="montu-auth-primary" type="submit" fullWidth disabled={loading}>{loading ? t("Loggingin") : t("Login")}</Button>
              <div className="montu-auth-divider"><Divider>{t("orcontinuewith")}</Divider></div>
              <button type="button" className="montu-auth-social" onClick={loginWithGoogle}><FcGoogle aria-hidden="true" /> <span>Continue with Google</span></button>
              <p className="montu-auth-switch">{t("Don’thaveanaccount?SignUp")} <button type="button" onClick={() => { handleLoginClose(); handleOpen(); }}>Create account</button></p>
            </form>
          </DialogContent>
        </section>
      </motion.div>
    </Dialog>
  );
}
