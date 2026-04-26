// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const carsData = [
//   {
//     left: "/assets/Copilot_20251205_120311.webp",
//     right: "/assets/Copilot_20251205_120311.webp",
//     title: "Our Vehicles… Your Comfort Comes First",
//     text: "We provide a premium fleet equipped with the highest standards of comfort and safety.",
//   },
//   {
//     left: "/assets/Copilot_20251205_154112-removebg-preview.webp",
//     right: "/assets/Copilot_20251205_154112-removebg-preview.webp",
//     title: "Luxury Buses for Long Journeys",
//     text: "Experience unmatched comfort with our modern long‑distance buses designed for smooth travel.",
//   },
//   {
//     left: "/assets/Copilot_20251205_153853-removebg-preview.webp",
//     right: "/assets/Copilot_20251205_153853-removebg-preview.webp",
//     title: "Premium Vans for Private Tours",
//     text: "Enjoy private tours with our elegant vans offering privacy, comfort, and style.",
//   },
// ];

// const SectionFive = () => {
//   const [index, setIndex] = useState(0);

//   // تغيير المحتوى تلقائيًا كل 5 ثواني
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % carsData.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const current = carsData[index];

//   return (
//     <section className="hidden md:flex relative w-full min-h-auto text-white overflow-hidden pt-14 pb-16">
//       {/* الخلفية */}
//       <div className="absolute inset-0 -z-20">
//         <Image
//           src="/HomePageImage/pexels-berk-ozdemir-1761205-3779825.webp"
//           alt="Background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>

//       {/* طبقة شفافة */}
//       <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(10,28,47,1)_5%,rgba(10,28,47,1)_10%,rgba(10,28,47,0.95)_35%,rgba(11,33,56,0.9)_60%,rgba(11,33,56,1)_100%)]" />

//       {/* المحتوى */}
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* العنوان */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
//             OUR PREMIUM FLEET
//           </h2>

//           <div className="flex flex-col items-center gap-1 mt-2">
//             <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
//             <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
//             <div className="h-[3px] w-[100px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
//           </div>
//         </div>

//         {/* السيارات + النص */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10"
//           >
//             {/* السيارة اليسار */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="w-[260px] md:w-[380px]"
//             >
//               <Image
//                 src={current.left}
//                 alt="Vehicle Left"
//                 width={500}
//                 height={500}
//                 className="object-contain"
//               />
//             </motion.div>

//             {/* النص */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="text-center max-w-md"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-cyan-300">
//                 {current.title}
//               </h3>

//               <p className="text-gray-200 leading-relaxed">{current.text}</p>

//               <button className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
//                 Book Your Trip Now
//               </button>
//             </motion.div>

//             {/* السيارة اليمين */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="w-[260px] md:w-[380px]"
//             >
//               <Image
//                 src={current.right}
//                 alt="Vehicle Right"
//                 width={500}
//                 height={500}
//                 className="object-contain scale-x-[-1]"
//               />
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default SectionFive;
/* eslint-disable react-hooks/purity */
"use client";
import React from "react";
import { FaCarSide } from "react-icons/fa";
import Image from "next/image";
// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DividerWithIcon from "@/components/layout/DividerWithIcon";
// import { useAuth } from "@/context/AuthContext";

const CarBookingSection = () => {
  // const { t } = useTranslation("home");
  // const { user } = useAuth();

  const symbols = [
    "𓂀",
    "𓋹",
    "𓆣",
    "𓇼",
    "𓇯",
    "𓏏",
    "𓎛",
    "𓊽",
    "𓃾",
    "𓅓",
    "𓈇",
    "𓉐",
    "𓊹",
    "𓌙",
    "𓍿",
    "𓎟",
  ];

  // ✨ إعدادات الأنيميشن
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="hidden lg:flex relative w-full items-center justify-center py-24 px-6 overflow-hidden bg-[linear-gradient(to_bottom,rgba(10,28,47,0.5)_5%,rgba(10,28,47,0.5)_10%,rgba(10,28,47,0.5)_35%,rgba(11,33,56,0.5)_60%,rgba(11,33,56,0.5)_10%)] text-white"
    >
      {/* خلفية السيارة */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/HomePageImage/Copilot_20251003_105735.webp"
          alt="Luxury Car Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/10"></div>
      </div>

      {/* رموز هيروغليفية */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-lg opacity-20 text-6xl animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {symbols[Math.floor(Math.random() * symbols.length)]}
          </span>
        ))}
      </div>

      {/* المحتوى */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full mx-auto"
      >
        {/* صورة السيارة */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 relative w-full h-80 lg:h-[420px]"
        >
          <Image
            src="/HomePageImage/car-png-39057.png"
            alt="Luxury Car"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(201,163,74,0.5)]"
            priority
            quality={85}
          />
        </motion.div>

        {/* النص */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-lg ">
            Premium Car Transfer
          </h2>

          {/* Divider ذهبي */}
          <div className="flex flex-col items-center lg:items-start gap-1 mt-3">
            <div className="h-[3px] w-[140px]  bg-gradient-to-r from-cyan-400 via-white to-cyan-400rounded-full"></div>
            <div className="h-[3px] w-[110px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
            <div className="h-[3px] w-[90px]  bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          </div>

          <p className="mt-6 text-lg opacity-80 leading-relaxed max-w-xl">
            Enjoy a luxurious travel experience with our premium car transfer
            service.
          </p>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-lg font-semibold opacity-90 italic text-center lg:text-left from-cyan-400 via-white to-cyan-400"
          >
            Please log in and book your car now ✨
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CarBookingSection;
