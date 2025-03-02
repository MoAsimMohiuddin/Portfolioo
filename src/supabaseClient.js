import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://arwdmiivfbyzsqttjocs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyd2RtaWl2ZmJ5enNxdHRqb2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NzA2MTMsImV4cCI6MjA1NTE0NjYxM30.ZZ4YAhkPSxzz0bAG4Nuc5CuzY0MTWy3-mrnqStKF3Zc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
