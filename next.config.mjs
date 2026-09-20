/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/:locale/Abouta", destination: "/:locale/about", permanent: true },
      { source: "/:locale/Contacta", destination: "/:locale/contact", permanent: true },
      { source: "/:locale/Tours", destination: "/:locale/trips", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dxpbyrcbklqrjlytmkum.supabase.co" },
      { protocol: "https", hostname: "bsrlydzntfpuyxcqwjpl.supabase.co" },
      { protocol: "https", hostname: "lkwlrezhuxercfvtjiiw.supabase.co" },
    ],
    qualities: [75, 85, 100], // ✅ لتفادي التحذير في Next.js 16
  },
};

export default nextConfig;
