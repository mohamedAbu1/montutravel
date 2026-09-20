"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const cities = ["Luxor", "Aswan", "Cairo", "Hurghada", "Siwa"];
const categories = ["Historical Tours", "Nile Cruises", "Desert Adventures", "Luxury Escapes"];

export default function JourneyBuilderSection() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/").filter(Boolean)[0] || "en";
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const canSearch = useMemo(() => Boolean(city && category), [city, category]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSearch) return;
    const data = btoa(JSON.stringify({ city, category, price: "All", popular: false, startDate, endDate }));
    router.push(`/${locale}/trips?data=${data}`);
  };

  return (
    <section id="journey-builder" className="journey-builder-section" aria-labelledby="journey-builder-title">
      <div className="journey-builder-shell">
        <div className="journey-builder-intro">
          <span className="journey-builder-kicker">MONTU TRAVEL · YOUR WAY</span>
          <h2 id="journey-builder-title">Build your perfect Egypt trip</h2>
          <p>Choose the rhythm, destination and experience. We will shape the rest around you.</p>
          <div className="journey-builder-trust" aria-label="Montu Travel benefits">
            <span>Local planning support</span><span>Flexible booking</span><span>Secure checkout</span>
          </div>
        </div>
        <motion.form className="journey-builder-card" onSubmit={handleSubmit} whileHover={{ rotateX: 1, rotateY: -1, y: -4 }}>
          <div className="journey-builder-card__top"><span>01</span><strong>Find an Egypt journey</strong><span>𓂀</span></div>
          <div className="journey-builder-fields">
            <label> <span>Select city</span><select value={city} onChange={(event) => setCity(event.target.value)}><option value="">Choose city</option>{cities.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
            <label> <span>Select category</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="">Choose category</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
            <label> <span>Travel dates</span><input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} /></label>
            <label> <span>Return date</span><input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} /></label>
          </div>
          <button type="submit" disabled={!canSearch}>{canSearch ? "Explore available journeys ↗" : "Select a city and category to continue"}</button>
        </motion.form>
      </div>
    </section>
  );
}
