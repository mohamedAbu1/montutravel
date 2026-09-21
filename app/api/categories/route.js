import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";

export async function GET() {
  try {
    if (process.env.LOCAL_DB_ENABLED === "true") {
      const categories = await localQuery("SELECT id, created_at, images, name FROM categories ORDER BY JSON_UNQUOTE(JSON_EXTRACT(name, '$.en')) ASC");
      return Response.json({ success: true, categories }, { headers: { "Cache-Control": "public, max-age=3600" } });
    }
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, categories: data }),
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
      return Response.json({ success: true, categories: [], degraded: true });
    }
    return new Response(
      JSON.stringify({ success: true, categories: [], degraded: true }),
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
