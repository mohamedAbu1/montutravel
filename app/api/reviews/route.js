import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";

export async function GET(req) {
  if (process.env.LOCAL_DB_ENABLED === "true") {
    const { searchParams } = new URL(req.url);
    const tripId = searchParams.get("tripId");
    try {
      const reviews = await localQuery(
        `SELECT id, user_id, trip_id, rating, comment, created_at
         FROM reviews ${tripId ? "WHERE trip_id = ?" : ""}
         ORDER BY created_at DESC`,
        tripId ? [tripId] : [],
      );
      return NextResponse.json({ success: true, reviews });
    } catch {
      return NextResponse.json({ success: true, reviews: [], degraded: true });
    }
  }

  console.log("➡️ GET /api/reviews called");
  const { searchParams } = new URL(req.url);
  const tripId = searchParams.get("tripId");
  console.log("📥 tripId param:", tripId);

  let query = supabase.from("reviews").select("*").order("created_at", { ascending: false });

  if (tripId) {
    console.log("➡️ Filtering reviews by tripId:", tripId);
    query = query.eq("trip_id", tripId);
  }

  const { data, error } = await query;
  console.log("📥 Supabase query result:", data, error);

  if (error) {
    console.error("❌ Supabase error in GET /api/reviews:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }

  console.log("✅ Reviews fetched successfully:", data.length);
  return NextResponse.json({ success: true, reviews: data }, { status: 200 });
}

// ✅ إضافة تعليق جديد
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("📥 Incoming review body:", body);

    const { trip_id, user_id, rating, comment, name, avatar_url, time } = body;

    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          trip_id,
          user_id,
          rating,
          comment,
          name,
          avatar_url,
          time,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
    }

    console.log("✅ Supabase insert success:", data);
    return new Response(JSON.stringify({ success: true, review: data[0] }), { status: 201 });
  } catch (err) {
    console.error("❌ API Error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
