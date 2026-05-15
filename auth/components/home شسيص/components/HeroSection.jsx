// components/HeroSection.jsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../../header/Header";
import GradientOverlay from "./GradientOverlay";
import CloudBackground from "./CloudBackground";
import { useData } from "@/context/DataContext";

export default function HeroSection() {
  const { images, index } = useData();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen gap-5 text-white">
      {/* الخلفية المتغيرة */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 -z-10"
        >
            <div className="relative w-full h-screen">
              <Image
                src={images[index] || "/default-hero.jpg"}
                alt="Egypt Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
        </motion.div>
      </AnimatePresence>

      {/* الهيدر */}
      <Header />

      {/* طبقة التدرج */}
      <GradientOverlay />

      {/* السحاب */}
      <CloudBackground />
    </section>
  );
}
