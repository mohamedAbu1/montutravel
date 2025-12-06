"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiLayers,
  FiMapPin,
  FiShoppingBag,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";

const stats = [
  { label: "Total Tours", value: 32, icon: FiLayers },
  { label: "Active Cities", value: 8, icon: FiMapPin },
  { label: "Bookings (This Month)", value: 124, icon: FiShoppingBag },
  { label: "Customers", value: 89, icon: FiUsers },
];

export default function DashboardHome() {
  return (
    <div className="space-y-10">

      {/* ✅ Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            High-level insights about your tours, bookings, and customers.
          </p>
        </div>

        {/* ✅ زر العودة للصفحة الرئيسية */}
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl
          bg-white/5 backdrop-blur-xl border border-cyan-400/20
          text-cyan-200 hover:text-slate-900 hover:bg-cyan-300
          transition-all duration-300 shadow-lg"
        >
          <FiArrowLeft className="text-lg" />
          <span className="text-sm font-medium">Back Home</span>
        </Link>
      </div>

      {/* ✅ Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* ✅ Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 
              rounded-2xl p-5 shadow-[0_0_25px_rgba(34,211,238,0.12)]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
              transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-900/70 
                border border-cyan-400/40 flex items-center justify-center 
                text-cyan-300 shadow-inner">
                  <Icon className="text-xl" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ✅ Charts & Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-2 bg-white/5 backdrop-blur-xl border 
          border-cyan-400/20 rounded-2xl p-6 h-72 flex items-center 
          justify-center text-gray-400 text-sm shadow-[0_0_25px_rgba(34,211,238,0.12)]"
        >
          Chart area (Revenue, bookings, etc.)
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 
          rounded-2xl p-6 h-72 flex items-center justify-center 
          text-gray-400 text-sm shadow-[0_0_25px_rgba(34,211,238,0.12)]"
        >
          Recent bookings / latest tours panel
        </motion.div>

      </div>
    </div>
  );
}
