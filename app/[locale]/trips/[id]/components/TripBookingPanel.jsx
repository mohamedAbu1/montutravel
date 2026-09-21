"use client";

import { useMemo, useState } from "react";
import { FaCalendarAlt, FaCheck, FaLock, FaMinus, FaPlus, FaShieldAlt, FaUserTie, FaUsers } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { useData } from "@/context/DataContext";
import { usePurchase } from "@/context/PurchaseContext";

const today = new Date().toISOString().slice(0, 10);

export default function TripBookingPanel({ trip, title, currency = "USD" }) {
  const { user } = useAuth();
  const { handleLoginOpen } = useData();
  const { purchaseTrip } = usePurchase();
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [guide, setGuide] = useState(false);
  const [loading, setLoading] = useState(false);

  const price = Number(trip.price || trip.solo_price || 0);
  const total = useMemo(() => price * adults + price * 0.5 * children, [price, adults, children]);

  const updateAdults = (delta) => setAdults((value) => Math.max(1, Math.min(20, value + delta)));
  const updateChildren = (delta) => setChildren((value) => Math.max(0, Math.min(10, value + delta)));

  const submitBooking = async (event) => {
    event.preventDefault();
    if (!user) {
      handleLoginOpen();
      return;
    }
    if (!arrivalDate || !departureDate) {
      toast.error("Choose your arrival and return dates first.");
      return;
    }
    if (departureDate < arrivalDate) {
      toast.error("Return date must be after arrival date.");
      return;
    }

    setLoading(true);
    const result = await purchaseTrip({
      tripId: trip.id,
      numPersons: adults,
      hasChildren: children > 0,
      numChildren: children,
      hasPets: false,
      petTypes: [],
      hasGuide: guide,
      selectedLanguages: [],
      arrivalDate,
      departureDate,
      userId: user.id,
      status: "Pending",
      platform: "web",
    });
    setLoading(false);
    if (result.success) toast.success("Your journey request has been received.");
    else toast.error(result.error || "We could not complete the booking.");
  };

  return (
    <aside className="montu-booking-panel" aria-label="Book this journey">
      <div className="montu-booking-panel__topline"><span>PRIVATE RESERVATION</span><FaShieldAlt aria-hidden="true" /></div>
      <div className="montu-booking-panel__price"><strong>{price.toFixed(0)}</strong><span>{currency}<small> / traveller</small></span></div>
      <p className="montu-booking-panel__note">Your dates are held with care. No payment is taken until the details are confirmed.</p>

      <form onSubmit={submitBooking} className="montu-booking-form">
        <div className="montu-booking-form__dates">
          <label><span><FaCalendarAlt /> Arrival</span><input type="date" min={today} value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} required /></label>
          <label><span><FaCalendarAlt /> Return</span><input type="date" min={arrivalDate || today} value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} required /></label>
        </div>

        <div className="montu-booking-people">
          <div><span><FaUsers /> Travellers</span><small>Adults and children</small></div>
          <div className="montu-stepper"><button type="button" aria-label="Remove adult" onClick={() => updateAdults(-1)}><FaMinus /></button><b>{adults}</b><button type="button" aria-label="Add adult" onClick={() => updateAdults(1)}><FaPlus /></button></div>
        </div>
        <div className="montu-booking-people montu-booking-people--sub"><div><span>Children</span><small>50% of adult price</small></div><div className="montu-stepper"><button type="button" aria-label="Remove child" onClick={() => updateChildren(-1)}><FaMinus /></button><b>{children}</b><button type="button" aria-label="Add child" onClick={() => updateChildren(1)}><FaPlus /></button></div></div>

        <label className={`montu-booking-option ${guide ? "is-selected" : ""}`}><input type="checkbox" checked={guide} onChange={(event) => setGuide(event.target.checked)} /><span><FaUserTie /><b>Private local guide</b><small>Add a dedicated Egyptologist to your day</small></span><strong>+</strong></label>

        <div className="montu-booking-total"><span>Total estimate</span><strong>{total.toFixed(2)} {currency}</strong></div>
        <button type="submit" className="montu-booking-submit" disabled={loading}>{loading ? "Sending request…" : user ? "Reserve this journey" : "Sign in to reserve"}<span>↗</span></button>
      </form>

      <div className="montu-booking-trust"><span><FaLock /> Secure request</span><span><FaCheck /> Flexible planning</span></div>
      <p className="montu-booking-caption">Booking <b>{title}</b> means a Montu specialist will personally review your route.</p>
    </aside>
  );
}
