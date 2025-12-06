"use client";

import Header from "@/auth/components/Header/Header";
import Footer from "@/auth/components/home/Footer";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-24 md:py-32 bg-[#020617]"
    >
        <Header />
      {/* ===== خلفية مائية احترافية ===== */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617,#030814,#020617)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(56,189,248,0.22),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.18),transparent_65%)]" />
      </div>

      {/* ===== ديكور: موجات + أعمدة ضوء ===== */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-x-0 top-0 h-40 opacity-60 blur-[2px] bg-[radial-gradient(circle_at_20%_0,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_80%_0,rgba(59,130,246,0.28),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 opacity-65 blur-[3px] bg-[radial-gradient(circle_at_10%_100%,rgba(34,211,238,0.3),transparent_60%),radial-gradient(circle_at_90%_100%,rgba(56,189,248,0.24),transparent_60%)]" />
        <div className="absolute left-[18%] top-0 w-[14%] h-full bg-gradient-to-b from-cyan-400/18 via-transparent to-transparent blur-3xl" />
        <div className="absolute right-[18%] top-0 w-[14%] h-full bg-gradient-to-b from-cyan-300/16 via-transparent to-transparent blur-3xl" />
      </div>

      {/* ===== الحاوية ===== */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== العنوان ===== */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-sm md:text-[15px] text-gray-300/90 max-w-xl mx-auto leading-relaxed"
          >
            Connect with Flower of Life • Travel & Experiences and let our team
            help you craft a journey filled with comfort, meaning, and the spirit of the Nile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col items-center gap-1 mt-5"
          >
            <div className="h-[3px] w-[200px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full" />
            <div className="h-[3px] w-[140px] bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full" />
          </motion.div>
        </div>

        {/* ===== الشبكة: فورم + معلومات ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ===== الفورم ===== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* ديكور جانبي */}
            <div className="pointer-events-none absolute -left-6 top-10 hidden md:block h-32 w-[2px] bg-gradient-to-b from-cyan-400 via-white/70 to-cyan-400/0" />

            <div className="relative rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_45px_rgba(34,211,238,0.35)]">

              {/* كبسولة */}
              <div className="absolute -top-5 right-8 px-4 py-1.5 rounded-full bg-slate-900/85 border border-cyan-400/40 text-[10px] tracking-[0.25em] uppercase text-cyan-200">
                Send a Message
              </div>

              <form className="space-y-6">
                {/* الاسم + الإيميل */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-cyan-200 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl bg-slate-950/50 border border-cyan-400/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/60 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-cyan-200 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl bg-slate-950/50 border border-cyan-400/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/60 transition"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* الهاتف */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-cyan-200 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl bg-slate-950/50 border border-cyan-400/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/60 transition"
                    placeholder="+20 ..."
                  />
                </div>

                {/* الرسالة */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-cyan-200 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl bg-slate-950/50 border border-cyan-400/30 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300/60 transition resize-none"
                    placeholder="Tell us about your journey, dates, and preferences..."
                  />
                </div>

                {/* زر الإرسال */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-white to-cyan-400 text-slate-900 text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

          {/* ===== معلومات الاتصال ===== */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* هالة خلفية */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.35),transparent_62%)] blur-[2px]" />
            </div>

            <div className="rounded-3xl border border-cyan-400/25 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-3">
                Contact Details
              </p>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5">
                Let us guide your next journey.
              </h3>

              <p className="text-sm text-gray-200/90 leading-relaxed mb-8">
                Whether you're planning a spiritual retreat, a Nile cruise, or a
                custom-designed experience across Egypt, our team is here to help
                you shape every detail with care.
              </p>

              <div className="space-y-6 text-sm text-gray-200/90">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@floweroflife-travel.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    info@floweroflife-travel.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200 mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+201234567890"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    +20 123 456 7890
                  </a>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200 mb-1">
                    Locations
                  </p>
                  <p>Luxor · Aswan · Cairo · Giza</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200 mb-1">
                    Hours
                  </p>
                  <p>Daily from 9:00 AM to 9:00 PM (Cairo time)</p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-cyan-400/20 text-[12px] text-gray-300/80">
                Flower of Life • Travel & Experiences  
                <br />
                Based in Luxor · Serving travelers worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
