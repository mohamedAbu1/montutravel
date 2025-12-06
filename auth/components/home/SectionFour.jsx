// components/GlassToursSection.jsx
"use client";
import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="relative w-full min-h-auto text-white overflow-hidden pt-7 pb-7">
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
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400">
          ADVENTURE AWAITS
        </h2>
        <div className="flex flex-col items-center gap-1 mt-2">
          <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[120px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
          <div className="h-[3px] w-[100px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* ✅ القسم المنقسم إلى عمودين */}
      <div  style={{paddingBottom:"120px"}} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">

        {/* ✅ العمود الأول — زهرة اللوتس الهندسية */}
        <div className="flex items-center justify-center">
          <div className="relative w-[260px] h-[260px] mx-auto">

            {/* ✅ الطبقة الخارجية – 12 بتلة */}
            {[...Array(12)].map((_, i) => (
              <div
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
              <div
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
              <div
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
            <div className="absolute left-1/2 top-1/2 w-[90px] h-[90px] 
              bg-gradient-to-br from-white to-cyan-300 
              rounded-full shadow-[0_0_25px_10px_rgba(0,255,255,0.5)] 
              transform -translate-x-1/2 -translate-y-1/2">
            </div>

          </div>
        </div>

        {/* ✅ العمود الثاني — نصوص */}
        <div className="flex flex-col gap-4 text-gray-200 leading-relaxed">
          <h3 className="text-2xl font-bold text-cyan-300">Explore The Unknown</h3>

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
        </div>

      </div>
    </section>
  );
};

export default SectionFour;
