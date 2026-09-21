"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeritageSection() {
  const { t } = useTranslation("about");
  return <section className="montu-about-v2-section montu-about-v2-heritage" id="heritage" aria-labelledby="heritage-title"><div className="montu-about-v2-heritage__image"><Image src="/Nile_Cruise/Dahabeya-program-SOBEK-900x600.webp" alt="A traditional dahabeya sailing on the Nile" fill sizes="(max-width: 900px) 100vw, 48vw" /><span>THE NILE / EGYPT</span></div><div className="montu-about-v2-heritage__copy"><p className="montu-about-v2-kicker">THE PLACE WE CALL HOME</p><h2 id="heritage-title">{t("h5") || "Rooted in Egyptian heritage"}</h2><p>{t("p4") || "Our journeys are shaped by the rhythm of the Nile, the warmth of its people, and the quiet details that make Egypt unforgettable."}</p><ul><li><span>✦</span> Local hosts and considered pacing</li><li><span>✦</span> Beautiful stays with a sense of place</li><li><span>✦</span> Support before, during, and after you travel</li></ul></div></section>;
}
