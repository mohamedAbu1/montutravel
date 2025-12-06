"use client";
import Adventure from "@/auth/components/home/Adventure";
import MostRequested from "@/auth/components/home/MostRequested";
import WebsiteInterface from "@/auth/components/home/WebsiteInterface";
import Cities from "@/auth/components/home/Cities";
import { ToastContainer } from "react-toastify";
import SectionFour from "@/auth/components/home/SectionFour";
import SectionFive from "@/auth/components/home/SectionFive";
import Footer from "@/auth/components/home/Footer";
import LogIn from "@/auth/components/user/LogIn";
import SingUp from "@/auth/components/user/SingUp";
import { useAppFun } from "@/context/AppFun";

export default function HeroSection() {
  const { showRegister, showLogin } = useAppFun();
  return (
    <main className="w-full h-full overflow-x-hidden text-white z-0">
      <WebsiteInterface />
      <Adventure />
      <MostRequested />
      <Cities />
      <SectionFour />
      <SectionFive />
      <Footer />
      {showLogin && <LogIn />}
      {showRegister && <SingUp />}
    </main>
  );
}
