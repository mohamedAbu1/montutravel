"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation("about");
  const locale = usePathname()?.split("/")[1] || "en";
  return <section className="montu-about-v2-cta" aria-labelledby="about-cta-title"><div><p className="montu-about-v2-kicker">YOUR EGYPT, YOUR WAY</p><h2 id="about-cta-title">{t("h6") || "Ready to plan your journey?"}</h2><p>{t("p5") || "Tell us what you want to feel, and we will shape the route around it."}</p></div><Link className="montu-about-v2-button montu-about-v2-button--primary" href={"/" + locale + "/contact"}>{t("a") || "Contact us"} <span aria-hidden="true">↗</span></Link></section>;
}
