"use client";
import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";

// إنشاء الـ Context
const AppFun = createContext();

// Provider
export const AppFunProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [travelers, setTravelers] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const nights =
    startDate && endDate
      ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
      : 0;
  return (
    <AppFun.Provider
      value={{
        destination,
        setDestination,
        category,
        setCategory,
        travelers,
        setTravelers,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        nights,
        showRegister,
        setShowRegister,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </AppFun.Provider>
  );
};

// Hook للاستخدام
export const useAppFun = () => useContext(AppFun);
