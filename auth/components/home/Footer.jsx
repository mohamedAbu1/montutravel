// components/Footer.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%),_linear-gradient(to_bottom,_#020617,_#020617)] text-gray-200">
      {/* خط علوي متدرج مثل هويتك */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400" />

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* اللوجو + الوصف */}
          <div className="space-y-4">
            {/* لو عندك لوجو بصيغة شفافة */}
            {/* استبدل src بشعارك */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-white to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.6)]">
                <span className="text-xs font-bold text-slate-900 tracking-wide">
                  FOL
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-300 tracking-[0.18em] uppercase">
                  Flower of Life Travels
                </p>
                <p className="text-xs text-cyan-100/70">
                  Sacred journeys · Nile experiences
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300/90 leading-relaxed max-w-sm">
              We craft spiritually inspired journeys across Egypt, combining
              comfort, safety, and deeply meaningful experiences around the Nile,
              ancient temples, and energy-filled sacred sites.
            </p>
          </div>

          {/* روابط التصفح */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-300 tracking-[0.2em] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#tours"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Tours & Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="#fleet"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* التواصل الاجتماعي + معلومات الاتصال */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-cyan-300 tracking-[0.2em] uppercase">
              Connect
            </h4>

            <div className="space-y-1 text-sm">
              <p className="text-gray-300/90">
                Email:{" "}
                <a
                  href="mailto:info@floweroflife-travel.com"
                  className="hover:text-cyan-300 transition-colors"
                >
                  info@floweroflife-travel.com
                </a>
              </p>
              <p className="text-gray-300/90">
                Phone:{" "}
                <a
                  href="tel:+201234567890"
                  className="hover:text-cyan-300 transition-colors"
                >
                  +20 123 456 7890
                </a>
              </p>
              <p className="text-gray-300/80">
                Luxor · Aswan · Cairo · Giza
              </p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cyan-400/40 flex items-center justify-center text-xs hover:bg-cyan-400 hover:text-slate-900 transition"
              >
                FB
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cyan-400/40 flex items-center justify-center text-xs hover:bg-cyan-400 hover:text-slate-900 transition"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-cyan-400/40 flex items-center justify-center text-xs hover:bg-cyan-400 hover:text-slate-900 transition"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        {/* خط فاصل */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* الشريط السفلي */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
          <p>
            © {new Date().getFullYear()} Flower of Life Travels. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:text-cyan-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="#"
              className="hover:text-cyan-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
