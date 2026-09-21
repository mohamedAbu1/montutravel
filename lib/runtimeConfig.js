// Local MySQL is intentionally never used by a Vercel deployment.
// Keeping this guard in code prevents a copied local .env value from
// silently producing empty collections in production.
export const isLocalDbEnabled =
  process.env.VERCEL !== "1" && process.env.LOCAL_DB_ENABLED === "true";

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder"),
);
