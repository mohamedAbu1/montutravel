import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";

const supabase = supabaseAdmin();

// ================== GET ==================
export async function GET(req, context) {
  try {
    const { id } = await context.params;
    if (process.env.LOCAL_DB_ENABLED === "true") {
      const rows = await localQuery("SELECT * FROM trips WHERE id = ? LIMIT 1", [id]);
      const data = rows[0];
      if (!data) return NextResponse.json({ success: false, error: "Trip not found" }, { status: 404 });
      const cities = await localQuery("SELECT c.id, c.name FROM trip_cities tc JOIN cities c ON c.id = tc.city_id WHERE tc.trip_id = ?", [id]);
      const categories = await localQuery("SELECT c.id, c.name FROM trip_categories tc JOIN categories c ON c.id = tc.category_id WHERE tc.trip_id = ?", [id]);
      const includes = await localQuery("SELECT id, include_translations FROM includes WHERE trip_id = ?", [id]);
      const days = await localQuery("SELECT id, day_number FROM trip_days WHERE trip_id = ? ORDER BY day_number", [id]);
      const itinerary = [];
      for (const day of days) itinerary.push({ ...day, activities: await localQuery("SELECT id, time, activity_translations FROM day_activities WHERE day_id = ? ORDER BY time", [day.id]) });
      return NextResponse.json({ success: true, trip: { ...data, cities, categories, includes, itinerary } });
    }
    console.log("➡️ [GET] Trip ID:", id);

    const { data, error } = await supabase
      .from("trips")
      .select(
        `
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
          id,
          city_id,
          cities ( id, name )
        ),
        trip_categories (
          id,
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
        )
      `,
      )
      .eq("id", id)
      .single();

    console.log("➡️ [GET] Raw data:", data);

    if (error) {
      console.error("❌ [GET] Error:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 },
      );
    }
    if (!data) {
      console.warn("⚠️ [GET] Trip not found");
      return NextResponse.json(
        { success: false, error: "Trip not found" },
        { status: 404 },
      );
    }

    // ✅ رجّع العلاقات كاملة بدل تحويلها لأسماء فقط
    const trip = {
      ...data,
      cities:
        data.trip_cities?.map((c) => ({
          id: c.city_id,
          name: c.cities?.name, // هترجع كل الترجمات لو مخزنة كـ JSON
        })) || [],
      categories:
        data.trip_categories?.map((c) => ({
          id: c.category_id,
          name: c.categories?.name,
        })) || [],
      includes: data.includes || [],
      itinerary:
        data.trip_days?.map((day) => ({
          id: day.id,
          day_number: day.day_number,
          activities: day.day_activities || [],
        })) || [],
    };

    console.log("✅ [GET] Final trip object:", trip);

    return NextResponse.json({ success: true, trip }, { status: 200 });
  } catch (error) {
    console.error("❌ [GET] Exception:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// ================== PUT ==================
export async function PUT(req, context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    if (process.env.LOCAL_DB_ENABLED === "true") {
      await localQuery(
        `UPDATE trips SET title = ?, description = ?, price = ?, duration = ?, priceLevel = ?, cover_image = ?, gallery_images = ? WHERE id = ?`,
        [JSON.stringify(body.title || {}), JSON.stringify(body.description || {}), Number(body.price || 0), Number(body.duration || 0), body.priceLevel || "", body.cover_image || "", JSON.stringify(body.gallery_images || []), id],
      );
      if (Array.isArray(body.categories)) {
        await localQuery("DELETE FROM trip_categories WHERE trip_id = ?", [id]);
        for (const categoryId of body.categories) await localQuery("INSERT INTO trip_categories (trip_id, category_id) VALUES (?, ?)", [id, categoryId]);
      }
      if (Array.isArray(body.cities)) {
        await localQuery("DELETE FROM trip_cities WHERE trip_id = ?", [id]);
        for (const cityId of body.cities) await localQuery("INSERT INTO trip_cities (trip_id, city_id) VALUES (?, ?)", [id, cityId]);
      }
      return NextResponse.json({ success: true, updatedTrip: { id, ...body } });
    }

    console.log("➡️ [PUT] Trip ID:", id);
    console.log("➡️ [PUT] Request body:", JSON.stringify(body, null, 2));

    const tripPayload = {
      title: body.title,
      description: body.description,
      price: Number(body.price),
      duration: body.duration,
      priceLevel: body.priceLevel,
      cover_image: body.cover_image,
      gallery_images: body.gallery_images,
    };

    console.log("➡️ [PUT] Trip payload:", tripPayload);

    // ✅ تحديث بيانات الرحلة الأساسية
    const { data, error } = await supabase
      .from("trips")
      .update(tripPayload)
      .eq("id", id)
      .select()
      .single();

    console.log("➡️ [PUT] Updated trip:", data);

    if (error) {
      console.error("❌ [PUT] Error updating trip:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 },
      );
    }

    // ✅ تحديث الفئات
    if (Array.isArray(body.categories)) {
      console.log("➡️ [PUT] Updating categories:", body.categories);
      await supabase.from("trip_categories").delete().eq("trip_id", id);
      const categoriesData = body.categories.map((catId) => ({
        trip_id: id,
        category_id: catId,
      }));
      console.log("➡️ [PUT] Categories payload:", categoriesData);
      if (categoriesData.length > 0) {
        await supabase.from("trip_categories").insert(categoriesData);
      }
    }

    // ✅ تحديث المدن
    if (Array.isArray(body.cities)) {
      console.log("➡️ [PUT] Updating cities:", body.cities);
      await supabase.from("trip_cities").delete().eq("trip_id", id);
      const citiesData = body.cities.map((cityId) => ({
        trip_id: id,
        city_id: cityId,
      }));
      console.log("➡️ [PUT] Cities payload:", citiesData);
      if (citiesData.length > 0) {
        await supabase.from("trip_cities").insert(citiesData);
      }
    }

    // ✅ تحديث الـ includes
    if (Array.isArray(body.includes)) {
      console.log("➡️ [PUT] Updating includes:", body.includes);
      await supabase.from("includes").delete().eq("trip_id", id);
      const includesData = body.includes.map((inc) => ({
        trip_id: id,
        include_translations: inc.include_translations, // ✅ استخدم البنية الصحيحة
      }));
      console.log("➡️ [PUT] Includes payload:", includesData);
      if (includesData.length > 0) {
        await supabase.from("includes").insert(includesData);
      }
    }

    // ✅ تحديث الأيام والأنشطة اليومية
    if (Array.isArray(body.itinerary)) {
      console.log("➡️ [PUT] Updating itinerary:", body.itinerary);
      await supabase.from("trip_days").delete().eq("trip_id", id);

      const daysData = body.itinerary.map((day, index) => ({
        trip_id: id,
        day_number: day.day_number || index + 1,
      }));
      console.log("➡️ [PUT] Days payload:", daysData);

      const { data: insertedDays, error: daysError } = await supabase
        .from("trip_days")
        .insert(daysData)
        .select();

      if (daysError) throw daysError;
      console.log("✅ [PUT] Inserted days:", insertedDays);

      const activitiesData = [];
      insertedDays.forEach((dayRow, index) => {
        const activities = body.itinerary[index].activities || [];
        console.log(
          `➡️ [PUT] Activities for day ${dayRow.day_number}:`,
          activities,
        );
        activities.forEach((act) => {
          activitiesData.push({
            day_id: dayRow.id,
            time: act.time,
            activity_translations: act.activity_translations, // ✅ استخدم البنية الصحيحة
          });
        });
      });

      console.log("➡️ [PUT] Activities payload:", activitiesData);

      if (activitiesData.length > 0) {
        await supabase.from("day_activities").insert(activitiesData);
      }
    }

    console.log("✅ [PUT] Trip update complete");

    return NextResponse.json(
      { success: true, updatedTrip: data },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ [PUT] Exception:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
// ================== DELETE ==================
export async function DELETE(req, context) {
  try {
    const { id } = await context.params;
    if (process.env.LOCAL_DB_ENABLED === "true") {
      await localQuery("DELETE FROM day_activities WHERE day_id IN (SELECT id FROM trip_days WHERE trip_id = ?)", [id]);
      await localQuery("DELETE FROM trip_days WHERE trip_id = ?", [id]);
      await localQuery("DELETE FROM trip_cities WHERE trip_id = ?", [id]);
      await localQuery("DELETE FROM trip_categories WHERE trip_id = ?", [id]);
      await localQuery("DELETE FROM includes WHERE trip_id = ?", [id]);
      await localQuery("DELETE FROM trips WHERE id = ?", [id]);
      return NextResponse.json({ success: true, message: "Trip deleted successfully" });
    }
    console.log("➡️ [DELETE] Trip ID:", id);

    // ✅ احذف العلاقات المرتبطة أولاً لو محتاج (مدن، فئات، أيام، أنشطة، إلخ)
    await supabase.from("trip_cities").delete().eq("trip_id", id);
    await supabase.from("trip_categories").delete().eq("trip_id", id);
    await supabase.from("includes").delete().eq("trip_id", id);
    await supabase.from("trip_days").delete().eq("trip_id", id);
    await supabase.from("day_activities").delete().eq("day_id", id);

    // ✅ احذف الرحلة نفسها
    const { error } = await supabase.from("trips").delete().eq("id", id);

    if (error) {
      console.error("❌ [DELETE] Error:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    console.log("✅ [DELETE] Trip deleted successfully");
    return NextResponse.json(
      { success: true, message: "Trip deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ [DELETE] Exception:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
