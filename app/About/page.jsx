"use client";

import Header from "@/auth/components/Header/Header";
import Footer from "@/auth/components/home/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Header />

      <section className="relative w-full overflow-hidden py-20 md:py-28">
        {/* الخلفية المائية العميقة */}
        <div className="absolute inset-0 -z-30">
          {/* طبقة أساس داكنة */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617,#030814,#020617)]" />
          {/* توهج علوي */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(56,189,248,0.24),transparent_60%)]" />
          {/* توهج سفلي */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.18),transparent_60%)]" />
        </div>

        {/* ديكور: موجات + خطوط ضوء */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          {/* موجات عليا */}
          <div className="absolute inset-x-0 top-0 h-40 opacity-55 blur-[2px] bg-[radial-gradient(circle_at_15%_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_85%_0,rgba(59,130,246,0.28),transparent_55%)]" />
          {/* موجات سفلية */}
          <div className="absolute inset-x-0 bottom-0 h-52 opacity-65 blur-[3px] bg-[radial-gradient(circle_at_10%_100%,rgba(34,211,238,0.3),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(56,189,248,0.24),transparent_60%)]" />
          {/* أعمدة ضوء عمودية */}
          <div className="absolute left-[20%] top-0 w-[16%] h-full bg-gradient-to-b from-cyan-400/18 via-transparent to-transparent blur-3xl" />
          <div className="absolute right-[18%] top-0 w-[16%] h-full bg-gradient-to-b from-cyan-300/16 via-transparent to-transparent blur-3xl" />
        </div>

        {/* ديكور: إطار علوي رفيع */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[78%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* الحاوية الرئيسية */}
        <div className="relative max-w-7xl mx-auto px-6">
          {/* عنوان الصفحة */}
          <header className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
            >
              About Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col items-center gap-1 mt-4"
            >
              <div className="h-[3px] w-[180px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full" />
              <div className="h-[3px] w-[130px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full" />
            </motion.div>
          </header>

          {/* شبكة المحتوى */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* العمود النصي */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* ديكور: خط جانبي رأسي */}
              <div className="pointer-events-none absolute -left-6 top-8 hidden md:block h-32 w-[2px] bg-gradient-to-b from-cyan-400 via-white/70 to-cyan-400/0" />

              {/* الكارد الزجاجي */}
              <div className="relative rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-7 md:p-8 shadow-[0_0_45px_rgba(34,211,238,0.35)]">
                {/* ديكور: كبسولة أعلى الكارد */}
                <div className="absolute -top-5 right-10 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/40 text-[10px] tracking-[0.25em] uppercase text-cyan-200">
                  Nile • Sacred Journeys
                </div>

                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-4">
                  Flower of Life • Travel & Experiences
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 leading-snug">
                  We create journeys that flow with the spirit of the Nile.
                </h2>

                <p className="text-[15px] text-gray-200/90 leading-relaxed mb-6">
                  Our mission is to blend comfort, safety, and spiritual depth
                  into every journey. From Luxor to Aswan and beyond, we design
                  experiences that honor the energy of the Nile, ancient
                  temples, and the timeless stories carried by this sacred land.
                </p>

                {/* نقاط القوة */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-white to-cyan-400 flex items-center justify-center text-[11px] font-bold text-slate-900 shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                      FLEET
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-200">
                        Premium Vehicles
                      </p>
                      <p className="text-xs text-gray-300/80 mt-1">
                        Modern, comfortable, and fully equipped for both long
                        and short journeys.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 via-white to-cyan-400 flex items-center justify-center text-[11px] font-bold text-slate-900 shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                      SOUL
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-cyan-200">
                        Meaningful Travel
                      </p>
                      <p className="text-xs text-gray-300/80 mt-1">
                        Experiences crafted to connect you with history, energy,
                        and inner peace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* زر + سطر معلومات */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-slate-900 text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
                    Discover Our Story
                  </button>
                  <p className="text-xs text-gray-300/80">
                    Based in Luxor · Serving travelers across Egypt and beyond
                  </p>
                </div>
              </div>
            </motion.div>

            {/* العمود البصري / الصورة + ديكور */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              {/* ديكور: هالة مائية خلف الصورة */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.38),transparent_62%)] blur-[2px]" />
              </div>

              {/* ديكور: إطار هندسي حول الصورة */}
              <div className="absolute -top-6 right-6 w-16 h-16 rounded-3xl border border-cyan-400/40 bg-white/5 backdrop-blur-xl hidden md:block" />
              <div className="absolute -bottom-8 left-4 w-24 h-24 rounded-full border border-cyan-400/30 bg-cyan-400/5 blur-[1px] hidden md:block" />

              {/* الصورة الرئيسية */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-cyan-300/60 bg-slate-900/70 shadow-[0_0_40px_rgba(34,211,238,0.75)]"
              >
                <Image
                  src="/assets/nile-about.webp" // ضع صورتك هنا
                  alt="Nile Journey"
                  fill
                  className="object-cover object-center"
                />

                {/* طبقة ضوء مائي فوق الصورة */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.38),transparent_58%)] mix-blend-soft-light" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
