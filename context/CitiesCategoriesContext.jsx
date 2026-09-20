// file: context/CitiesCategoriesContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CitiesCategoriesContext = createContext();

export function CitiesCategoriesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryKey, setRetryKey] = useState(0);

  const { i18n } = useTranslation(); // اللغة الحالية للموقع
  const getLangKey = (lang) => lang.split("-")[0];
const normalizedLang = getLangKey(i18n.language);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);
      try {
        setError(null);
        const [citiesRes, categoriesRes] = await Promise.all([
          fetch("/api/cities", { signal: controller.signal }),
          fetch("/api/categories", { signal: controller.signal }),
        ]);

        const citiesData = await citiesRes.json();
        const categoriesData = await categoriesRes.json();

        if (!citiesRes.ok || !citiesData.success) throw new Error(citiesData.error || "Unable to load cities");
        if (!categoriesRes.ok || !categoriesData.success) throw new Error(categoriesData.error || "Unable to load categories");
        setCities(citiesData.cities || []);
        setCategories(categoriesData.categories || []);
      } catch (err) {
        console.warn("Travel data is unavailable:", err.message);
        setError(err.message || "Unable to load travel data");
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    fetchData();
  }, [retryKey]);
  // فلترة أسماء المدن حسب لغة الموقع الحالي
  const localizedCities = cities.map(city => ({
    ...city,
    name: city.translations?.[normalizedLang] || city.translations?.["en"] || city.name,
  }));

  // فلترة الكاتجري حسب لغة الموقع الحالي
  const localizedCategories = categories.map(cat => ({
    ...cat,
    name: cat.name?.[normalizedLang] || cat.name?.["en"] || cat.name,
  }));

  return (
    <CitiesCategoriesContext.Provider
      value={{ cities: localizedCities, categories: localizedCategories, loading, error, retry: () => { setLoading(true); setRetryKey((key) => key + 1); } }}
    >
      {children}
    </CitiesCategoriesContext.Provider>
  );
}

export const useCitiesCategories = () => useContext(CitiesCategoriesContext);
