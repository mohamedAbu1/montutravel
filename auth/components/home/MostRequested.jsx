"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";


const MostRequested = () => {
  const tours = [
    {
      title: "Day Tour to Historical Alexandria from Cairo",
      city: "Alexandria",
      date: "2025-12-04",
      price: 200,
      reviews: 1,
      img: "/assets/5116-900x600.webp",
    },
    {
      title: "2 Days Private Guided Tour around Cairo and Giza",
      city: "Giza",
      date: "2025-12-03",
      price: 280,
      reviews: 1,
      img: "/assets/Dahabeya-program-KHNOUM-1-900x600.webp",
    },
    {
      title:
        "10-Day Egypt Experience | Cairo, Alexandria, Nile Cruise and Red Sea",
      city: "Cairo",
      date: "2025-12-05",
      price: 250,
      reviews: 1,
      img: "/assets/nacho-diaz-latorre-W4Oc4NIL5_U-unsplash-3-scaled-e1761140586107-900x600.webp",
    },
    {
      title: "One Night, Two Days Luxor Tour from Hurghada",
      city: "Luxor",
      date: "2025-12-06",
      price: 80,
      reviews: 1,
      img: "/assets/Dahabeya-program-SOBEK-900x600.webp",
    },
    {
      title: "Day Tour to Historical Alexandria from Cairo",
      city: "Alexandria",
      date: "2025-12-04",
      price: 200,
      reviews: 1,
      img: "/assets/5116-900x600.webp",
    },
    {
      title: "2 Days Private Guided Tour around Cairo and Giza",
      city: "Giza",
      date: "2025-12-03",
      price: 280,
      reviews: 1,
      img: "/assets/Dahabeya-program-KHNOUM-1-900x600.webp",
    },
    {
      title:
        "10-Day Egypt Experience | Cairo, Alexandria, Nile Cruise and Red Sea",
      city: "Cairo",
      date: "2025-12-05",
      price: 250,
      reviews: 1,
      img: "/assets/nacho-diaz-latorre-W4Oc4NIL5_U-unsplash-3-scaled-e1761140586107-900x600.webp",
    },
    {
      title: "One Night, Two Days Luxor Tour from Hurghada",
      city: "Luxor",
      date: "2025-12-06",
      price: 80,
      reviews: 1,
      img: "/assets/Dahabeya-program-SOBEK-900x600.webp",
    },
    // باقي الكروت...
  ];

  // Variants للـ container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Variants للكارد
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="hidden md:flex relative w-full min-h-auto text-white overflow-hidden pt-7 pb-7">
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
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
          OUR TOURS
        </h2>
        <div className="flex flex-col items-center  gap-1 mt-2">
          <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[100px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* Tours grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tours.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative overflow-hidden rounded-2xl 
             bg-white/10 backdrop-blur-md border border-white/0 
             shadow-[0_10px_35px_rgba(0,0,0,0.4)] 
             hover:bg-white/15 hover:border-white/30 
             transition-all duration-300"
          >
            {/* صورة الرحلة */}
            <div className="relative h-[450px]">
              <Image
                src={t.img}
                alt={t.title}
                fill
                className="object-cover object-center"
                priority
              />

              {/* طبقة شفافة */}
              <div className="absolute inset-0 z-[10] bg-gradient-to-t from-black/90 via-black/80 to-transparent pointer-events-none" />

              {/* محتوى الكارد */}
              <div className="relative z-[20] p-4 space-y-3 pt-60 ">
                <p className="text-sm font-bold text-cyan-300">${t.price}</p>

                <div className="flex items-center gap-2 text-cyan-200 text-sm">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  <span className="text-white/90">{t.city}</span>
                  <span className="mx-2 h-4 w-[1px] bg-white/20" />
                  <FaStar className="text-yellow-300" />
                  <span className="text-white/80">{t.reviews} Review</span>
                </div>

                <h4 className="text-sm font-semibold text-white/95 line-clamp-2">
                  {t.title}
                </h4>

                <p className="text-xs text-white/70">{t.date}</p>

                <div className="pt-2">
                  <button
                    className="w-full rounded-lg px-3 py-2 
                   text-sm font-bold uppercase tracking-wide
                   bg-gradient-to-r from-cyan-300 via-white to-cyan-300
                   text-black shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                   hover:opacity-90 transition-opacity"
                  >
                    View Tour
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MostRequested;
