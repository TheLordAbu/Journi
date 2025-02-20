import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nzquxaeuhlxfmicraxzt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cXV4YWV1aGx4Zm1pY3JheHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDYwNTQsImV4cCI6MjA1Mzk4MjA1NH0.cjLr7FMV8--QVPnrweZ8XvpYTbEc-GpJyPQye1DRXyo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
