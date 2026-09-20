export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3004";
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/Admin", "/api/", "/oauth/"] }], sitemap: `${baseUrl}/sitemap.xml` };
}
