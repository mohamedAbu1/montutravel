"use client";
import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { usePurchase } from "@/context/PurchaseContext";
import { useTheme } from "@/context/ThemeContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = usePurchase();
  const { theme, themeName } = useTheme();

  return (
    <div className="fixed bottom-6 left-6 z-[99]">
      <Select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        size="small"
        IconComponent={() => null}
        sx={{
          padding: "8px 16px",
          borderRadius: "12px",
          fontWeight: "600",
          // ✅ خلفية الزر من الثيم
          background: themeName === "dark" 
            ? "linear-gradient(to right, #ff7b00, #ffae42)" 
            : "linear-gradient(to right, #06b6d4, #22d3ee)",
          boxShadow: theme.shadow,
          "& .MuiSelect-select": {
            color: themeName === "dark" ? "#fff" : "#0A2E36",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover": {
            background: themeName === "dark"
              ? "linear-gradient(to right, #ffae42, #ff7b00)"
              : "linear-gradient(to right, #22d3ee, #06b6d4)",
          },
        }}
      >
        <MenuItem value="USD" sx={{ color: theme.icon }}>
          USD $
        </MenuItem>
        <MenuItem value="EUR" sx={{ color: theme.iconHover }}>
          EUR €
        </MenuItem>
      </Select>
    </div>
  );
}
