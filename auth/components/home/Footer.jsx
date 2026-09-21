"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";
  const { t } = useTranslation("footer");
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    [FaInstagram, "Instagram", process.env.NEXT_PUBLIC_INSTAGRAM_URL],
    [FaFacebookF, "Facebook", process.env.NEXT_PUBLIC_FACEBOOK_URL],
    [FaTwitter, "Twitter", process.env.NEXT_PUBLIC_TWITTER_URL],
    [FaYoutube, "YouTube", process.env.NEXT_PUBLIC_YOUTUBE_URL],
  ];
  const link = (path) => `/${locale}${path ? `/${path}` : ""}`;
  const homeHash = (hash) => `/${locale}${hash}`;

  return (
    <footer className="montu-footer montu-editorial-footer">
      <div className="montu-footer-orbit" aria-hidden="true" />
      <div className="montu-footer-grid">
        <div className="montu-footer-brand-block"><span className="montu-footer-eyebrow">EST. 2026 · EGYPT</span><div className="montu-footer-brand">MONTU<br /><em>TRAVEL</em></div><p>Journeys with a sense of place. Crafted in Egypt, remembered everywhere.</p></div>
        <div className="montu-footer-column"><span>Explore</span><Link href={link("")}>Home</Link><Link href={link("trips")}>{t("Tours") || "Curated journeys"}</Link><Link href={link("about")}>{t("AboutUs") || "Our story"}</Link><Link href={link("contact")}>{t("Contact") || "Contact"}</Link></div>
        <div className="montu-footer-column"><span>Plan your Egypt</span><Link href={homeHash("#journey-builder")}>Build a journey</Link><Link href={homeHash("#destinations")}>Destinations</Link><Link href={homeHash("#reviews")}>Traveller notes</Link><Link href={homeHash("#car-transfer")}>Private transfers</Link></div>
        <div className="montu-footer-column montu-footer-connect"><span>Keep in touch</span><p>Stories, new routes and quiet places worth knowing.</p><div className="montu-footer-social">{socialLinks.map(([Icon, label, href]) => href ? <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a> : <span key={label} aria-label={`${label} profile coming soon`} title={`${label} profile coming soon`}><Icon /></span>)}</div></div>
      </div>
      <div className="montu-footer-bottom"><span>© {currentYear} Montu Travel. All rights reserved.</span><span>Made for the curious · القاهرة / Cairo</span></div>
    </footer>
  );
};

export default Footer;
