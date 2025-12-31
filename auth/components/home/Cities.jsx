"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const citiesData = [
  { name: "Sharm El Sheikh", image: "/assets/istockphoto-1173359888-2048x2048.webp" },
  { name: "Aswan", image: "/assets/Copilot_20251003_102422.webp" },
  { name: "Marsa Alam", image: "/assets/pexels-mo-ismail-2130628-22643902.webp" },
  { name: "Hurghada", image: "/assets/pexels-vika-glitter-392079-31166906.webp" },
  { name: "Luxor", image: "/assets/dmitrii-zhodzishskii-jSPx-qvt518-unsplash.webp" },
  { name: "Cairo", image: "/assets/omar-elsharawy-pwMbtwA9LRc-unsplash.webp" },
  { name: "Giza", image: "/assets/pexels-diego-f-parra-33199-15127306.webp" },
  { name: "Alexandria", image: "/assets/alexandria-egypt-december-panorama-stanley-beach-view-scenic-bridge-towers-sunset-december-109151414.webp" },
];

const Cities = () => {
  return (
    <section className=" hidden md:flex relative w-full min-h-auto text-white overflow-hidden pt-7 pb-7">
      {/* خلفية */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/viktor-ritsvall-FWJinfDsIn8-unsplash.webp"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* طبقة شفافة */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(10,28,47,1)_5%,rgba(10,28,47,1)_10%,rgba(10,28,47,0.95)_35%,rgba(11,33,56,0.9)_60%,rgba(11,33,56,1)_100%)]" />

      {/* العنوان */}
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
          Egyptian cities
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[100px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* ✅ السليدر */}
      <div className="max-w-8xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {citiesData.map((city, index) => (
            <SwiperSlide key={index}>
              <motion.div
                style={{ cursor: "pointer" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[220px] rounded-xl overflow-hidden shadow-lg border border-white/10 group"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute bottom-0 z-20 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-2xl text-center font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
                    {city.name}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cities;
