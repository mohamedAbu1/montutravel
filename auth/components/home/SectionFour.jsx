/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <section className="hidden md:flex relative w-full text-white overflow-hidden py-16">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1c2f] via-[#0b2138]/90 to-[#0b2138]" />

      {/* العنوان */}
      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl mt-42.5 font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-lg">
          ADVENTURE AWAITS
        </h2>
        <div className="flex flex-col items-center gap-1 mt-4">
          <div className="h-[3px] w-[160px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* ✅ القسم المنقسم إلى عمودين */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* ✅ العمود الأول — زهرة اللوتس الهندسية */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="relative w-[280px] h-[280px] mx-auto"
          >
            {/* ✅ الطبقة الخارجية – 12 بتلة */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-[120px] h-[180px] 
                bg-gradient-to-b from-cyan-300/40 to-cyan-500/10 
                rounded-full opacity-60"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  transformOrigin: "50% 80%",
                }}
              />
            ))}

            {/* ✅ الطبقة المتوسطة – 6 بتلات */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-[130px] h-[170px] 
                bg-gradient-to-b from-cyan-200/70 to-cyan-500/20 
                rounded-full opacity-80"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                  transformOrigin: "50% 80%",
                }}
              />
            ))}

            {/* ✅ الطبقة الداخلية – 6 بتلات */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-[110px] h-[130px] 
                bg-gradient-to-b from-white/80 to-cyan-300/40 
                rounded-full opacity-90"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg) scale(0.8)`,
                  transformOrigin: "50% 80%",
                }}
              />
            ))}

            {/* ✅ مركز الزهرة */}
            <div className="absolute left-1/2 top-1/2 w-[100px] h-[100px] 
              bg-gradient-to-br from-white to-cyan-300 
              rounded-full shadow-[0_0_25px_12px_rgba(0,255,255,0.5)] 
              transform -translate-x-1/2 -translate-y-1/2">
            </div>
          </motion.div>
        </div>

        {/* ✅ العمود الثاني — نصوص */}
        <div className="flex flex-col gap-6 text-gray-200 leading-relaxed">
          <h3 className="text-3xl font-bold text-cyan-300">Explore The Unknown</h3>

          <p>
            Embark on a journey where every step leads to a new discovery. 
            From ancient wonders to breathtaking landscapes, adventure is waiting 
            for those who dare to explore.
          </p>

          <p>
            Whether you're seeking thrilling experiences or peaceful escapes, 
            our curated adventures are designed to awaken your spirit and 
            connect you with the beauty of the world.
          </p>

          <p>
            Let your heart guide you, and let the journey transform you. 
            Adventure isn't just a destination — it's a way of life.
          </p>

          <button className="mt-4 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
