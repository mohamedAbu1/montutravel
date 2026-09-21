"use client";

import { useEffect, useRef, useState } from "react";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const introKey = "montu-cinematic-intro-seen";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (sessionStorage.getItem(introKey)) return undefined;

    sessionStorage.setItem(introKey, "true");
    setVisible(true);
    document.body.classList.add("montu-intro-active");

    const duration = reduceMotion ? 700 : 2800;
    const timer = window.setTimeout(dismiss, duration);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => introRef.current?.focus(), 0);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("montu-intro-active");
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    document.body.classList.remove("montu-intro-active");
  };

  if (!visible) return null;

  return (
    <div ref={introRef} tabIndex={-1} className="montu-cinematic-intro" role="dialog" aria-modal="true" aria-labelledby="montu-intro-title">
      <div className="montu-cinematic-intro__grain" aria-hidden="true" />
      <div className="montu-cinematic-intro__sun" aria-hidden="true" />
      <div className="montu-cinematic-intro__horizon" aria-hidden="true" />
      <div className="montu-cinematic-intro__glyph montu-cinematic-intro__glyph--left" aria-hidden="true">𓂀</div>
      <div className="montu-cinematic-intro__glyph montu-cinematic-intro__glyph--right" aria-hidden="true">𓋹</div>

      <div className="montu-cinematic-intro__content">
        <div className="montu-cinematic-intro__mark" aria-hidden="true">
          <svg viewBox="0 0 92 92" role="presentation">
            <circle cx="46" cy="46" r="40" />
            <path d="M17 51c11-16 29-21 50-10-10 1-19 5-25 14-7 8-15 7-25-4Z" />
            <circle cx="43" cy="47" r="5" />
            <path d="M23 57 17 68m12-9-2 13m13-14 4 13m7-16 10 8M26 71c12-5 27-5 42 0" />
          </svg>
        </div>
        <p className="montu-cinematic-intro__eyebrow">A NEW WAY TO SEE EGYPT</p>
        <p id="montu-intro-title" className="montu-cinematic-intro__title" role="heading" aria-level="2"><span>MONTU</span><em>TRAVEL</em></p>
        <p className="montu-cinematic-intro__tagline">Luxury Egyptian journeys, thoughtfully revealed.</p>
        <div className="montu-cinematic-intro__line" aria-hidden="true" />
      </div>

      <button type="button" className="montu-cinematic-intro__skip" onClick={dismiss}>Skip intro</button>
    </div>
  );
}
