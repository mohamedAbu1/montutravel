"use client";
import { useEffect, useState } from "react";

const stops = [["hero", "Arrival"], ["journey-builder", "Your way"], ["categories", "The edit"], ["top-trips", "Journeys"], ["destinations", "Wander"], ["about", "Our story"], ["reviews", "Voices"], ["car-transfer", "Transfer"]];

export default function JourneyMapNavigator() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const targets = stops.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-34% 0px -48% 0px", threshold: [0.1, 0.35, 0.7] });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  const navigateTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 18;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return <nav className="journey-map" aria-label="Journey map">
    <span className="journey-map__title">MONTU<br />ROUTE</span>
    <span className="journey-map__hint">USE THE MAP</span>
    <svg className="journey-map__path" viewBox="0 0 80 760" aria-hidden="true" preserveAspectRatio="none"><path d="M39 24 C72 82 9 128 42 190 S66 288 34 346 S8 450 43 500 S66 610 38 736" /></svg>
    <div className="journey-map__stops">{stops.map(([id, label], index) => { const activeIndex = stops.findIndex(([stopId]) => stopId === active); return <button key={id} type="button" className={`journey-map__stop journey-map__stop--${index} ${active === id ? "is-active" : ""} ${activeIndex >= index ? "is-passed" : ""}`} onClick={() => navigateTo(id)} aria-label={`Go to ${label}`} aria-current={active === id ? "step" : undefined}><span className="journey-map__orb" /><span className="journey-map__label">{label}</span></button>; })}</div>
  </nav>;
}
