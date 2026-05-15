// components/GlassToursSlider.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

export default function GlassToursSlider() {
  return (
    <section className="relative w-full py-12 bg-[#0a1c2f] text-white">
      {/* خلفية */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/photo-1562281302-809108fd533c.webp"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      {/* العنوان */}
      <div className="max-w-6xl mx-auto text-center mb-10 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
          ✨ Adventure Awaits ✨
        </h2>
        <div className="flex flex-col items-center gap-1 mt-3">
          <div className="h-[3px] w-[160px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* سليدر */}
      <div className="max-w-7xl mx-auto relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={5} // ✅ خمس كروت في الواجهة
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ أوتوماتيك
          pagination={{ clickable: true }} // ✅ نقاط أسفل السليدر
          loop={true} // ✅ دوران مستمر
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 }, // ✅ على الشاشات الكبيرة يظهر ٥ كروت
          }}
        >
          {categories.map((c) => (
            <SwiperSlide key={c.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl shadow-2xl 
             bg-white/20 backdrop-blur-xl border border-white/30"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <p className="text-lg font-bold uppercase text-white drop-shadow-lg">
                      {c.title}
                    </p>
                    <button
                      className="mt-3 px-5 py-2 text-sm font-semibold rounded-lg 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-white shadow-lg transition-transform 
                         duration-500 hover:scale-105"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
