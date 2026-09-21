// file: app/api/cities/route.js
import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";

export async function GET() {
  try {
    if (process.env.LOCAL_DB_ENABLED === "true") {
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
    if (process.env.LOCAL_DB_ENABLED === "true") {
      return Response.json({ success: true, cities: [], degraded: true });
    }
    return new Response(
      JSON.stringify({ success: true, cities: [], degraded: true }),
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
