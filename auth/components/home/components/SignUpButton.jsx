"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button, Dialog, DialogContent, Divider, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFemale, FaMale } from "react-icons/fa";
import { useData } from "@/context/DataContext";
import { toast } from "react-toastify";
import { useSecurity } from "@/context/SecurityContext";
import { useTranslation } from "react-i18next";

export default function SignUpModal() {
  const { handleLoginOpen } = useData();
  const { validateField } = useSecurity();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const { t } = useTranslation("home");
  const { register, loading, error, open, handleClose } = useAuth();

  const handleSubmit = async (event) => {
    event?.preventDefault();
    const nameError = validateField("Full Name", fullName);
    const emailError = validateField("Email", email);
    const passwordError = validateField("Password", password);
    if (nameError || emailError || passwordError || !gender) {
      toast.error(nameError || emailError || passwordError || "Gender is required");
      return;
    }
    try {
      await register(email, password, fullName, gender);
      toast.success("✅ A confirmation message has been sent to your account.");
      handleClose();
    } catch (err) {
      toast.error("❌ Error: " + err.message);
    }
  };

  const signupWithGoogle = () => {
    window.location.href = "/api/oauth/google";
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="montu-auth-dialog montu-auth-dialog--signup"
      >
        <aside className="montu-auth-visual" aria-hidden="true">
          <span className="montu-auth-visual__eyebrow">MONTU TRAVEL · EGYPT</span>
          <div className="montu-auth-visual__seal">𓂀</div>
          <div className="montu-auth-visual__copy">
            <span className="montu-auth-visual__overline">THE JOURNEY AWAITS</span>
            <strong>Begin your Egypt story.</strong>
            <span>Trade the ordinary for golden horizons and beautifully unrushed days.</span>
          </div>
          <span className="montu-auth-visual__route">CAI <i /> LXR <i /> ASW</span>
        </aside>
        <section className="montu-auth-form">
          <div className="montu-auth-form__header">
            <span className="montu-auth-form__kicker">MAKE IT YOURS</span>
            <h2>{t("SignUp")}</h2>
            <p>Create a private travel compass for every Montu moment.</p>
          </div>
          <DialogContent className="montu-auth-dialog__content">
            <form className="montu-auth-form__body" onSubmit={handleSubmit}>
              <TextField className="montu-auth-field" label={t("FullName")} variant="outlined" fullWidth value={fullName} autoComplete="name" onChange={(event) => setFullName(event.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><MdPerson /></InputAdornment> }} />
              <TextField className="montu-auth-field" label={t("Email")} type="email" variant="outlined" fullWidth value={email} autoComplete="email" onChange={(event) => setEmail(event.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><MdEmail /></InputAdornment> }} />
              <TextField className="montu-auth-field" label={t("Password")} type="password" variant="outlined" fullWidth value={password} autoComplete="new-password" onChange={(event) => setPassword(event.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><MdLock /></InputAdornment> }} />
              <fieldset className="montu-auth-gender">
                <FormLabel component="legend">{t("Gender")}</FormLabel>
                <RadioGroup row value={gender} onChange={(event) => setGender(event.target.value)}>
                  <FormControlLabel value={t("male")} control={<Radio />} label={<span><FaMale aria-hidden="true" /> {t("male")}</span>} />
                  <FormControlLabel value={t("female")} control={<Radio />} label={<span><FaFemale aria-hidden="true" /> {t("female")}</span>} />
                </RadioGroup>
              </fieldset>
              {error && <p className="montu-auth-status" role="alert">{error}</p>}
              <Button className="montu-auth-primary" type="submit" fullWidth disabled={loading}>{loading ? t("Creating") : t("SignUp")}</Button>
              <div className="montu-auth-divider"><Divider>{t("orsignupwith")}</Divider></div>
              <button type="button" className="montu-auth-social" onClick={signupWithGoogle}><FcGoogle aria-hidden="true" /> <span>Continue with Google</span></button>
              <p className="montu-auth-switch">{t("Alreadyhaveanaccount?Login")} <button type="button" onClick={() => { handleClose(); handleLoginOpen(); }}>Sign in</button></p>
            </form>
          </DialogContent>
        </section>
      </motion.div>
    </Dialog>
  );
}
