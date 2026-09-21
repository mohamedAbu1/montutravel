"use client";

import { use, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaArrowRight, FaCalendarAlt, FaCheck, FaClock, FaMapMarkerAlt, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import { useTrip } from "@/context/TripContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { usePurchase } from "@/context/PurchaseContext";
import { resolveTravelImage } from "@/lib/media";
import Footer from "@/auth/components/home/Footer";
import Header from "@/auth/components/Header/Header";
import EgyptianBackground from "@/components/layout/EgyptianBackground";
import LoginModal from "@/auth/components/home/components/LoginModal";
import SignUpButton from "@/auth/components/home/components/SignUpButton";
import ChatWidget from "@/components/layout/ChatWidget";
import TripItinerary from "./components/TripItinerary";
import TripReviews from "./components/TripReviews";
import TripBookingPanel from "./components/TripBookingPanel";
import TripCinematicWelcome from "./components/TripCinematicWelcome";
import CancelButton from "./components/CancelButton";

const localized = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || Object.values(value).find(Boolean) || "";
};

const imageValue = (value) => (typeof value === "object" ? value?.url : value);

function DetailLoading({ theme }) {
  return <main className={`montu-trip-page ${theme.text}`}><Header /><div className="montu-trip-loading"><span>𓂀</span><p>Preparing your private Egypt journey…</p></div></main>;
}

export default function TripPage({ params }) {
  const { id } = use(params);
  const { trips, fetchTrips, getTripById, loadingTrips } = useTrip();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const { user } = useAuth();
  const { purchases, currency } = usePurchase();

  useEffect(() => {
    if (!trips.length) fetchTrips();
  }, [trips.length, fetchTrips]);

  const trip = getTripById(id);
  const title = localized(trip?.title, lang);
  const destination = localized(trip?.trip_cities?.[0]?.cities?.name, lang) || "Egypt";
  const gallery = useMemo(() => {
    if (!trip) return [];
    const sources = [trip.cover_image, ...(trip.gallery_images || [])].filter(Boolean);
    const resolved = sources.map((source, index) => resolveTravelImage(imageValue(source), { label: trip.title, index }));
    const visualFallbacks = [
      "/Nile_Cruise/pexels-sahilcaptures-35645491.webp",
      "/Luxor/pexels-oualid-soussi-2150533856-35050672.webp",
      "/HomePageImage/pexels-ahad-hasan-1816309676-34248486.webp",
    ];
    return [...new Set([...resolved, ...visualFallbacks])].slice(0, 4);
  }, [trip]);

  if (loadingTrips || !trips.length) return <DetailLoading theme={theme} />;
  if (!trip) return <main className={`montu-trip-page ${theme.text}`}><Header /><div className="montu-trip-loading"><span>𓋹</span><h1>Journey not found</h1><p>This route may have moved. Explore our current collection instead.</p></div></main>;

  const description = localized(trip.description, lang);
  const hasActivePurchase = purchases.some((purchase) => purchase.trip_id === trip.id && purchase.user_id === user?.id && purchase.status !== "Cancelled");
  const duration = trip.duration || trip.days || 1;

  return (
    <main className={`montu-trip-page ${theme.text}`}>
      <TripCinematicWelcome title={title} destination={destination} tripKey={trip.id} />
      <Header />
      <EgyptianBackground />

      <div className="montu-trip-shell">
        <nav className="montu-trip-breadcrumb" aria-label="Breadcrumb"><span>Montu Travel</span><FaArrowRight /><span>Egypt journeys</span><FaArrowRight /><strong>{destination}</strong></nav>

        <section className="montu-trip-hero">
          <div className="montu-trip-gallery">
            <div className="montu-trip-gallery__main">
              <Image src={gallery[0] || "/HomePageImage/pexels-adventistasia-25662334.webp"} alt={title} fill priority sizes="(max-width: 900px) 100vw, 62vw" className="object-cover" />
              <div className="montu-trip-gallery__veil" />
              <span className="montu-trip-gallery__stamp">𓂀 MONTU</span>
              <span className="montu-trip-gallery__count">{Math.max(gallery.length, 1)} views of Egypt</span>
            </div>
            <div className="montu-trip-gallery__rail">{gallery.slice(1, 4).map((image, index) => <div key={`${image}-${index}`} className="montu-trip-gallery__thumb"><Image src={image} alt={`${title} view ${index + 2}`} fill sizes="180px" className="object-cover" /></div>)}</div>
          </div>

          <div className="montu-trip-hero__copy">
            <span className="montu-trip-eyebrow">CURATED EGYPTIAN JOURNEY <i /> {destination.toUpperCase()}</span>
            <h1>{title}</h1>
            <p className="montu-trip-hero__intro">A considered route through ancient places, local stories and the quiet details that make Egypt stay with you.</p>
            <div className="montu-trip-facts"><span><FaClock /> {duration} {trip.duration_unit || "days"}</span><span><FaUsers /> Private or small group</span><span><FaStar /> 4.9 guest rating</span></div>
            <div className="montu-trip-hero__rule" />
            <p className="montu-trip-hero__quote">“The best journeys do not rush history. They give it room to speak.”</p>
          </div>
        </section>

        <div className="montu-trip-content-grid">
          <article className="montu-trip-main-column">
            <section className="montu-trip-story montu-trip-card">
              <div className="montu-trip-section-heading"><span>THE STORY</span><h2>Go beyond the postcard.</h2></div>
              <div className="montu-trip-description">{description.split(/\n+/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </section>

            <section className="montu-trip-highlights montu-trip-card">
              <div className="montu-trip-section-heading"><span>YOUR ROUTE</span><h2>Designed around the way you travel.</h2></div>
              <div className="montu-trip-chip-grid">
                <div><FaMapMarkerAlt /><b>Destinations</b><span>{trip.trip_cities?.map((item) => localized(item.cities?.name, lang)).filter(Boolean).join(" · ") || destination}</span></div>
                <div><FaShieldAlt /><b>Included with care</b><span>{trip.includes?.slice(0, 3).map((item) => localized(item.include_translations, lang)).filter(Boolean).join(" · ") || "Local planning support"}</span></div>
                <div><FaCalendarAlt /><b>Flexible rhythm</b><span>Private planning around your dates</span></div>
                <div><FaCheck /><b>Travel style</b><span>{trip.trip_categories?.map((item) => localized(item.categories?.name, lang)).filter(Boolean).join(" · ") || "Curated Egypt experience"}</span></div>
              </div>
            </section>

            <TripItinerary trip={trip} lang={lang} theme={theme} />
            <TripReviews trip={trip} lang={lang} theme={theme} />
          </article>

          <div className="montu-trip-booking-column">
            <TripBookingPanel trip={trip} title={title} currency={currency || trip.currency || "USD"} />
            {hasActivePurchase && <div className="montu-trip-reserved"><FaCheck /><span>Your reservation is active for this journey.</span></div>}
            {hasActivePurchase && <CancelButton trip={trip} theme={theme} />}
          </div>
        </div>
      </div>

      <Footer />
      <SignUpButton />
      <LoginModal />
      {user && <ChatWidget />}
    </main>
  );
}
