import Header from "@/auth/components/Header/Header";
import Footer from "@/auth/components/home/Footer";
import SidebarFilter from "@/auth/components/Tours/SidebarFilter";
import TourGrid from "@/auth/components/Tours/TourGrid";
import ToursSearchBar from "@/auth/components/Tours/ToursSearchBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="relative w-full py-20 bg-[#020617]">
      <Header />

      {/* ✅ خلفية مائية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.15),transparent_60%)]" />

      {/* ✅ صورة بانورامية */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16 overflow-hidden  shadow-[0_0_40px_rgba(34,211,238,0.15)] border border-cyan-400/20 mx-auto">
        <Image
          src="/assets/_2182_1.jpg" // ← غيّر المسار حسب الصورة
          alt="Panoramic view of Sharm El Sheikh"
          fill
          className="object-cover object-center"
          priority
        />
        {/* ✅ عنوان فوق الصورة */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className=" from-cyan-300 via-white to-cyan-400 text-2xl md:text-4xl font-bold tracking-wide text-center drop-shadow-lg">
            Sharm El Sheikh · Desert · Mountains · Camels
          </h2>
        </div>
      </div>

      {/* ✅ محتوى الصفحة */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10">
        <SidebarFilter />
        <section>
          <ToursSearchBar />
          <TourGrid />
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default page;
