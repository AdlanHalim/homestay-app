import { createClient } from '@supabase/supabase-js';

// TODO: Replace with your actual Supabase URL and Anon Key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xeefhgcfjelafyycsznb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZWZoZ2NmamVsYWZ5eWNzem5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMjA0NTMsImV4cCI6MjA3OTg5NjQ1M30.5qddVtMoOd4oB7ZIOZiECRQV45YA5JS0fbpW-G4Pr7A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
