"use client";

import React from "react";
import { FiChevronDown, FiGlobe } from "react-icons/fi";
import { usePurchase } from "@/context/PurchaseContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = usePurchase();

  return (
    <div className="montu-currency-selector" role="group" aria-label="Currency preferences">
      <div className="montu-currency-selector__label" aria-hidden="true">
        <FiGlobe />
        <span>Currency</span>
      </div>
      <label className="montu-currency-selector__control">
        <span className="sr-only">Select currency</span>
        <select value={currency || "USD"} onChange={(event) => setCurrency(event.target.value)} aria-label="Select currency">
          <option value="USD">USD · $</option>
          <option value="EUR">EUR · €</option>
        </select>
        <FiChevronDown aria-hidden="true" />
      </label>
    </div>
  );
}
