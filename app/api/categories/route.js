import { supabase } from "@/lib/supabaseClient";
import { localQuery } from "@/lib/localDb";
import { isLocalDbEnabled } from "@/lib/runtimeConfig";
import { getFallbackCategories } from "@/lib/fallbackData";
import { normalizeCategoryRecord } from "@/lib/media";

export async function GET() {
  try {
    if (isLocalDbEnabled) {
      const categories = await localQuery("SELECT id, created_at, images, name FROM categories ORDER BY JSON_UNQUOTE(JSON_EXTRACT(name, '$.en')) ASC");
      return Response.json({ success: true, categories: categories.map(normalizeCategoryRecord) }, { headers: { "Cache-Control": "public, max-age=3600" } });
    }
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, categories: data.map(normalizeCategoryRecord) }),
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
      JSON.stringify({ success: true, categories: getFallbackCategories(), degraded: true, source: "bundled-seed" }),
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
