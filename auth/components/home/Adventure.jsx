// components/GlassToursSection.jsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  { title: "Luxury Tours", img: "/assets/5116-900x600.webp" },
  {
    title: "Adventure Trips",
    img: "/assets/sebastiano-musmeci--iW9Qt70cMI-unsplash.webp",
  },
  {
    title: "Night Tours",
    img: "/assets/tseinn-wong-N8rq67rEv_I-unsplash.webp",
  },
  { title: "Group Tours", img: "/assets/Dahabeya-program-SOBEK-900x600.webp" },
  { title: "Wellness & Medical", img: "/assets/2022_6_25_17_3_10_531.webp" },
  {
    title: "Nature Tours",
    img: "/assets/art-of-hoping-lnofrtpYNJU-unsplash.webp",
  },
  {
    title: "Shopping Tours",
    img: "/assets/vadim-berg-z6NpHMoD9I0-unsplash.webp",
  },
  {
    title: "Family Friendly",
    img: "/assets/pexels-alena-evseenko-660538512-34120065.webp",
  },
  {
    title: "Spirituality",
    img: "/assets/jared-rice-NTyBbu66_SI-unsplash.webp",
  },
  { title: "One Day Trips", img: "/assets/download (5).webp" },
  {
    title: "Boat & Nile Cruises",
    img: "/assets/photo-1562281302-809108fd533c.webp",
  },
  {
    title: "Cultural & Historical",
    img: "/assets/2h-media-FeGAPlKIP4E-unsplash.webp",
  },
];

export default function GlassToursSection() {
  const [row1, setRow1] = useState(categories.slice(0, 4));
  const [row2, setRow2] = useState(categories.slice(4, 8));
  const [pool, setPool] = useState(categories.slice(8, 12));

  useEffect(() => {
    const interval = setInterval(() => {
      const removedFromRow1 = row1[0];
      const nextFromPool = pool[0];
      const removedFromRow2 = row2[0];

      const newRow1 = [...row1.slice(1), nextFromPool];
      const newRow2 = [...row2.slice(1), removedFromRow1];
      const newPool = [...pool.slice(1), removedFromRow2];

      setRow1(newRow1);
      setRow2(newRow2);
      setPool(newPool);
    }, 6000);

    return () => clearInterval(interval);
  }, [row1, row2, pool]);

  // أنيميشن راقي وهادئ
  const itemVariantsRow1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { type: "spring", stiffness: 80, damping: 18 },
  };

  const itemVariantsRow2 = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { type: "spring", stiffness: 80, damping: 18 },
  };

  return (
    <section className="hidden md:flex relative w-full min-h-auto text-white overflow-hidden pt-7 pb-7">
      {/* خلفية */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/photo-1562281302-809108fd533c.webp"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* طبقة شفافة */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(10,28,47,1)_5%,rgba(10,28,47,1)_10%,rgba(10,28,47,0.95)_35%,rgba(11,33,56,0.9)_60%,rgba(11,33,56,1)_100%)]" />

      {/* العنوان */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
          ADVENTURE AWAITS
        </h2>
        <div className="flex flex-col items-center  gap-1 mt-2">
          <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[100px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* الصف الأول */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 mb-6"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
      >
        <AnimatePresence mode="popLayout">
          {row1.map((c) => (
            <motion.div
              key={c.title}
              variants={itemVariantsRow1}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover" // نخلي الأب نفسه يستجيب للهوفر
              className="group relative overflow-hidden rounded-xl h-[250px]
             bg-white/8 backdrop-blur-md border border-white/20 
             shadow-[0_8px_30px_rgba(0,0,0,0.35)] cursor-pointer"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />

              {/* النصوص */}
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                  variants={{
                    initial: { y: 80 }, // العنوان يبدأ في الأسفل
                    hover: { y: 0 }, // عند الهوفر يطلع للمنتصف
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="text-center"
                >
                  {/* العنوان */}
                  <motion.p
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 1 }, // يفضل ظاهر
                    }}
                    className="text-lg font-bold uppercase 
                    px-4 py-2 rounded-xl
                    shadow-lg shadow-blue-900/50
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-300 via-white to-cyan-400"
                  >
                    {c.title}
                  </motion.p>

                  {/* النص الإضافي يظهر تحت العنوان عند الهوفر */}
                  <motion.p
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0 }, // يظهر تحت العنوان
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    className="text-sm text-white/80 mt-2"
                  >
                    Tour 0
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* الصف الثاني */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
      >
        <AnimatePresence mode="popLayout">
          {row2.map((c) => (
            <motion.div
              key={c.title}
              variants={itemVariantsRow1}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover" // نخلي الأب نفسه يستجيب للهوفر
              className="group relative overflow-hidden rounded-xl h-[250px]
             bg-white/8 backdrop-blur-md border border-white/20 
             shadow-[0_8px_30px_rgba(0,0,0,0.35)] cursor-pointer"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />

              {/* النصوص */}
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                  variants={{
                    initial: { y: 80 }, // العنوان يبدأ في الأسفل
                    hover: { y: 0 }, // عند الهوفر يطلع للمنتصف
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="text-center"
                >
                  {/* العنوان */}
                  <motion.p
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 1 }, // يفضل ظاهر
                    }}
                    className="text-lg font-bold uppercase 
                    px-4 py-2 rounded-xl
                    shadow-lg shadow-blue-900/50
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-cyan-300 via-white to-cyan-400"
                  >
                    {c.title}
                  </motion.p>

                  {/* النص الإضافي يظهر تحت العنوان عند الهوفر */}
                  <motion.p
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      hover: { opacity: 1, y: 0 }, // يظهر تحت العنوان
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    className="text-sm text-white/80 mt-2"
                  >
                    Tour 0
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
