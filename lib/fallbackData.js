import seed from "@/database/fallbackData.json";
import { normalizeImageList, resolveTravelImage } from "@/lib/media";

const parseJson = (value, fallback) => {
  if (value == null || value === "") return fallback;
  if (typeof value !== "string") return value;
  try { return JSON.parse(value); } catch { return fallback; }
};

const cities = seed.cities.map((city) => {
  const name = parseJson(city.name, {});
  return { ...city, name, images: normalizeImageList(city.images, { kind: "destination", label: name }) };
});
const categories = seed.categories.map((category) => {
  const name = parseJson(category.name, {});
  return { ...category, name, images: normalizeImageList(category.images, { kind: "category", label: name }) };
});
const cityById = new Map(cities.map((city) => [city.id, city]));
const categoryById = new Map(categories.map((category) => [category.id, category]));

export function getFallbackCities() { return cities; }
export function getFallbackCategories() { return categories; }

export function getFallbackTrips() {
  return seed.trips.map((trip) => {
    const tripCities = seed.trip_cities.filter((link) => link.trip_id === trip.id).map((link) => ({ city_id: link.city_id, cities: cityById.get(link.city_id) })).filter((link) => link.cities);
    const tripCategories = seed.trip_categories.filter((link) => link.trip_id === trip.id).map((link) => ({ category_id: link.category_id, categories: categoryById.get(link.category_id) })).filter((link) => link.categories);
    const tripDays = seed.trip_days.filter((day) => day.trip_id === trip.id).map((day) => ({
      id: day.id,
      day_number: Number(day.day_number),
      day_activities: seed.day_activities.filter((activity) => activity.day_id === day.id).map((activity) => ({ id: activity.id, time: activity.time, activity_translations: parseJson(activity.activity_translations, {}) })),
    }));
    return {
      ...trip,
      title: parseJson(trip.title, {}),
      description: parseJson(trip.description, {}),
      gallery_images: normalizeImageList(trip.gallery_images, { label: parseJson(trip.title, {}) }),
      cover_image: resolveTravelImage(trip.cover_image, { label: parseJson(trip.title, {}) }),
      price: Number(trip.solo_price ?? trip.group_price ?? 0),
      trip_cities: tripCities,
      trip_categories: tripCategories,
      includes: seed.includes.filter((item) => item.trip_id === trip.id).map((item) => ({ ...item, include_translations: parseJson(item.include_translations, {}) })),
      trip_days: tripDays,
      reviews: [],
    };
  });
}
