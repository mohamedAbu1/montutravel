import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";
import { isLocalDbEnabled } from "@/lib/runtimeConfig";

async function getLocalTrips() {
  const trips = await localQuery("SELECT * FROM trips ORDER BY created_at DESC");
  for (const trip of trips) {
    trip.trip_cities = await localQuery("SELECT tc.city_id, c.id, c.name FROM trip_cities tc JOIN cities c ON c.id = tc.city_id WHERE tc.trip_id = ?", [trip.id]);
    trip.trip_categories = await localQuery("SELECT tc.category_id, c.id, c.name FROM trip_categories tc JOIN categories c ON c.id = tc.category_id WHERE tc.trip_id = ?", [trip.id]);
    trip.includes = await localQuery("SELECT id, include_translations FROM includes WHERE trip_id = ?", [trip.id]);
    trip.trip_days = await localQuery("SELECT id, day_number FROM trip_days WHERE trip_id = ? ORDER BY day_number", [trip.id]);
    for (const day of trip.trip_days) day.day_activities = await localQuery("SELECT id, time, activity_translations FROM day_activities WHERE day_id = ? ORDER BY time", [day.id]);
    trip.reviews = await localQuery("SELECT id, user_id, trip_id, rating, comment, created_at FROM reviews WHERE trip_id = ? ORDER BY created_at DESC", [trip.id]);
  }
  return trips;
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (isLocalDbEnabled) {
      const result = await localQuery(
        `INSERT INTO trips (title, description, price, currency, duration, duration_unit, cover_image, gallery_images, priceLevel)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [JSON.stringify(body.title || {}), JSON.stringify(body.description || {}), Number(body.price || 0), body.currency || "USD", Number(body.duration || 0), body.duration_unit || "days", body.cover_image || "", JSON.stringify(body.gallery_images || []), body.priceLevel || ""],
      );
      const tripId = result.insertId;
      for (const cityId of body.cities || []) await localQuery("INSERT INTO trip_cities (trip_id, city_id) VALUES (?, ?)", [tripId, cityId]);
      for (const categoryId of body.categories || []) await localQuery("INSERT INTO trip_categories (trip_id, category_id) VALUES (?, ?)", [tripId, categoryId]);
      return Response.json({ success: true, trip: { id: tripId, ...body } }, { status: 201 });
    }
    console.log("📥 Request body:", JSON.stringify(body, null, 2));

    // ✅ إدخال الرحلة في جدول trips
    console.log("➡️ Inserting trip...");
    const { data: trip, error: tripError } = await supabase
      .from("trips")
      .insert({
        title: body.title,
        description: body.description,
        price: body.price,
        currency: body.currency,
        duration: body.duration,
        duration_unit: body.duration_unit,
        cover_image: body.cover_image,
        gallery_images: body.gallery_images,
        priceLevel: body.priceLevel,
      })
      .select()
      .single();

    if (tripError) throw tripError;
    console.log("✅ Trip inserted:", trip);

    // ✅ إدخال الـ includes
    if (body.includes?.length > 0) {
      console.log("➡️ Inserting includes:", body.includes);
      const includesData = body.includes.map((inc) => ({
        trip_id: trip.id,
        include_translations: {
          en: inc.en,
          es: inc.es,
          fr: inc.fr,
          de: inc.de,
          it: inc.it,
          zh: inc.zh,
        },
      }));
      const { error: includesError } = await supabase
        .from("includes")
        .insert(includesData);
      if (includesError) throw includesError;
      console.log("✅ Includes inserted");
    }

    // ✅ إدخال المدن (باستخدام IDs مباشرة)
    if (body.cities?.length > 0) {
      console.log("➡️ Linking cities:", body.cities);
      const citiesData = body.cities.map((cityId) => ({
        trip_id: trip.id,
        city_id: cityId,
      }));
      const { error: citiesError } = await supabase
        .from("trip_cities")
        .insert(citiesData);
      if (citiesError) throw citiesError;
      console.log("✅ Cities linked to trip");
    }

    // ✅ إدخال التصنيفات (باستخدام IDs مباشرة)
    if (body.categories?.length > 0) {
      console.log("➡️ Linking categories:", body.categories);
      const categoriesData = body.categories.map((catId) => ({
        trip_id: trip.id,
        category_id: catId,
      }));
      const { error: categoriesError } = await supabase
        .from("trip_categories")
        .insert(categoriesData);
      if (categoriesError) throw categoriesError;
      console.log("✅ Categories linked to trip");
    }

    // ✅ إدخال الأيام والأنشطة
    if (body.itinerary?.length > 0) {
      console.log("➡️ Inserting days:", body.itinerary);
      const daysData = body.itinerary.map((day, index) => ({
        trip_id: trip.id,
        day_number: day.day || index + 1,
      }));

      const { data: insertedDays, error: daysError } = await supabase
        .from("trip_days")
        .insert(daysData)
        .select();

      if (daysError) throw daysError;
      console.log("✅ Days inserted:", insertedDays);

      const activitiesData = [];
      insertedDays.forEach((dayRow, index) => {
        const activities = body.itinerary[index].activities || [];
        console.log(`➡️ Activities for day ${dayRow.day_number}:`, activities);
        activities.forEach((act) => {
          activitiesData.push({
            day_id: dayRow.id,
            time: act.time,
            activity_translations: act.activity || {
              en: act.en || null,
              es: act.es || null,
              fr: act.fr || null,
              de: act.de || null,
              it: act.it || null,
              zh: act.zh || null,
            },
          });
        });
      });

      console.log("📦 Final activities payload:", activitiesData);

      if (activitiesData.length > 0) {
        const { error: activitiesError } = await supabase
          .from("day_activities")
          .insert(activitiesData);
        if (activitiesError) throw activitiesError;
        console.log("✅ Activities inserted");
      }
    }

    return new Response(JSON.stringify({ success: true, trip }), {
      status: 201,
    });
  } catch (err) {
    console.error("❌ API Error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    if (isLocalDbEnabled) {
      const trips = await getLocalTrips();
      return new Response(JSON.stringify({ success: true, trips }), { status: 200, headers: { "Cache-Control": "public, max-age=3600" } });
    }
    const { data: trips, error } = await supabase.from("trips").select(`
      id,
      title,
      description,
      price,
      currency,
      duration,
      duration_unit,
      priceLevel,
      cover_image,
      gallery_images,
      trip_cities (
        city_id,
        cities ( id, name )
      ),
      trip_categories (
        category_id,
        categories ( id, name )
      ),
      includes (
        id,
        include_translations
      ),
      trip_days (
        id,
        day_number,
        day_activities (
          id,
          time,
          activity_translations
        )
      ),
       reviews (
          id,
          user_id,
          trip_id,
          rating,
          comment,
          created_at
        )
    `);

    if (error) {
      console.error("Trips fetch error:", error);
      throw error;
    }

    return new Response(JSON.stringify({ success: true, trips }), {
  status: 200,
  headers: { "Cache-Control": "public, max-age=3600" } // ساعة
});

  } catch (err) {
    if (isLocalDbEnabled) {
      return new Response(JSON.stringify({ success: true, trips: [], degraded: true }), {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      });
    }
    console.warn("GET /api/trips degraded response:", err.message);
    return new Response(
      JSON.stringify({ success: true, trips: [], degraded: true }),
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  }
}
