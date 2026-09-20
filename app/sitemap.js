const locales = ["en", "fr", "de", "it", "es", "zh"];
const routes = ["", "/trips", "/about", "/contact"];

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3004";
  return locales.flatMap((locale) => routes.map((route) => ({ url: `${baseUrl}/${locale}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "daily" : "weekly", priority: route === "" ? 1 : 0.7 })));
}
