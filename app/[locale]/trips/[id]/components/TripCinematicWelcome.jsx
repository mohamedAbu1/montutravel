"use client";

import { useEffect, useRef, useState } from "react";

export default function TripCinematicWelcome({ title, destination, tripKey }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const storageKey = `montu-trip-welcome-${tripKey || destination || "journey"}`;
    if (sessionStorage.getItem(storageKey)) return undefined;
    sessionStorage.setItem(storageKey, "true");
    setVisible(true);
    document.body.classList.add("montu-trip-welcome-active");
    const close = () => {
      setVisible(false);
      document.body.classList.remove("montu-trip-welcome-active");
    };
    const timer = window.setTimeout(close, reduceMotion ? 400 : 2300);
    const onKeyDown = (event) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => ref.current?.focus(), 0);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("montu-trip-welcome-active");
    };
  }, [destination, tripKey]);

  if (!visible) return null;
  return (
    <div ref={ref} tabIndex={-1} className="montu-trip-welcome" role="dialog" aria-modal="true" aria-label={`Welcome to ${title}`}>
      <div className="montu-trip-welcome__sun" aria-hidden="true" />
      <div className="montu-trip-welcome__line" aria-hidden="true" />
      <div className="montu-trip-welcome__glyph" aria-hidden="true">𓂀</div>
      <div className="montu-trip-welcome__content">
        <span className="montu-trip-welcome__eyebrow">YOUR EGYPTIAN CHAPTER</span>
        <span className="montu-trip-welcome__destination">{destination || "EGYPT"}</span>
        <p className="montu-trip-welcome__title" role="heading" aria-level="2">{title}</p>
        <span className="montu-trip-welcome__route">CURATED BY MONTU TRAVEL</span>
      </div>
      <button type="button" className="montu-trip-welcome__skip" onClick={() => { setVisible(false); document.body.classList.remove("montu-trip-welcome-active"); }}>Skip welcome</button>
    </div>
  );
}
