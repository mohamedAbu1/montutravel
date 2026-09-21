import { AppFunProvider } from "@/context/AppFun";

const supportedLocales = ["en", "fr", "de", "it", "es", "zh"];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = supportedLocales.includes(locale) ? locale : "en";
  const titles = { en: "Montu Travel | Luxury Egypt Journeys", fr: "Montu Travel | Voyages de luxe en Égypte", de: "Montu Travel | Luxuriöse Ägyptenreisen", it: "Montu Travel | Viaggi di lusso in Egitto", es: "Montu Travel | Viajes de lujo en Egipto", zh: "Montu Travel | 埃及豪华旅行" };
  const descriptions = { en: "Discover Egypt through curated luxury journeys, desert escapes and Nile adventures with Montu Travel.", fr: "Découvrez l'Égypte avec des voyages de luxe, des escapades dans le désert et des aventures sur le Nil.", de: "Entdecken Sie Ägypten mit luxuriösen Reisen, Wüstenerlebnissen und Nil-Abenteuern.", it: "Scopri l'Egitto con viaggi di lusso, avventure nel deserto e itinerari sul Nilo.", es: "Descubre Egipto con viajes de lujo, escapadas al desierto y aventuras por el Nilo.", zh: "通过 Montu Travel 探索埃及的豪华旅程、沙漠体验和尼罗河冒险。" };
  return {
    title: titles[lang],
    description: descriptions[lang],
    keywords: "Montu Travel, Egypt luxury tours, Nile cruises, desert safaris, Luxor, Aswan",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://montutravel.vercel.app"),
    alternates: { canonical: `/${lang}`, languages: Object.fromEntries(supportedLocales.map((item) => [item, `/${item}`])) },
    openGraph: { title: titles[lang], description: descriptions[lang], type: "website", siteName: "Montu Travel", url: `/${lang}` },
    twitter: { card: "summary_large_image", title: titles[lang], description: descriptions[lang] },
  };
}

export default async function RootLayout({ children, params }) {
  return (
    <AppFunProvider>
      {children}
    </AppFunProvider>
  );
}
