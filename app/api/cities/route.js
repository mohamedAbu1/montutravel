// file: app/api/cities/route.js
import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";
import { isLocalDbEnabled } from "@/lib/runtimeConfig";
import { getFallbackCities } from "@/lib/fallbackData";

export async function GET() {
  try {
    if (isLocalDbEnabled) {
      const cities = await localQuery("SELECT id, name, images FROM cities ORDER BY id ASC");
      return Response.json({ success: true, cities }, { headers: { "Cache-Control": "public, max-age=3600" } });
    }
    const { data, error } = await supabase
      .from("cities")
      .select(`id, name, images`)
      .order("id", { ascending: true }); // الترتيب ثابت

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, cities: data }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600" // ✅ تخزين لمدة ساعة
        }
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: true, cities: getFallbackCities(), degraded: true, source: "bundled-seed" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store" // ✅ لا تخزن الأخطاء
        }
      }
    );
  }
}
