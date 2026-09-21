import { createClient } from "@supabase/supabase-js";

// Keep module evaluation safe during `next build`; runtime requests still require
// the real Supabase variables to be configured in the hosting environment.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Frontend client (متاح في المتصفح)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client (backend فقط)
export const supabaseAdmin = () => {
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key";
  return createClient(supabaseUrl, supabaseServiceRoleKey);
};
