// app/dashboard/layout.tsx أو layout.jsx

"use client";

import { ReactNode } from "react";
import { FiHome, FiMap, FiLayers, FiUsers, FiSettings, FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: FiBarChart2 },
  { href: "/dashboard/tours", label: "Tours", icon: FiLayers },
  { href: "/dashboard/cities", label: "Cities", icon: FiMap },
  { href: "/dashboard/bookings", label: "Bookings", icon: FiHome },
  { href: "/dashboard/customers", label: "Customers", icon: FiUsers },
  { href: "/dashboard/settings", label: "Settings", icon: FiSettings },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-[#020617] text-white">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-cyan-400/20 bg-slate-950/60 backdrop-blur-xl">
        <div className="px-6 py-5 border-b border-cyan-400/20">
          <div className="text-lg font-semibold tracking-[0.2em] uppercase text-cyan-300">
            FOL ADMIN
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Manage tours, bookings and destinations
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                  ${active
                    ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/40"
                    : "text-gray-300 hover:bg-slate-900/70 hover:text-cyan-200"
                  }`}
              >
                <Icon className="text-base" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-cyan-400/20 text-xs text-gray-500">
          © {new Date().getFullYear()}  flower of life
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="h-14 px-4 md:px-8 flex items-center justify-between border-b border-cyan-400/20 bg-slate-950/50 backdrop-blur-xl">
          <h1 className="text-sm md:text-base font-semibold text-cyan-100">
            Dashboard
          </h1>
          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
            <span className="hidden sm:inline text-gray-400">Logged in as</span>
            <span className="font-medium text-cyan-200">Admin</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-slate-700 border border-cyan-300/40" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 md:px-8 py-6 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)]">
          {children}
        </main>
      </div>
    </div>
  );
}
