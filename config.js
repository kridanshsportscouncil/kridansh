/* =========================================================================
   KRIDANSH — Supabase connection config
   -------------------------------------------------------------------------
   Fill these two values in from your own Supabase project:
   Dashboard → Project Settings → API → "Project URL" and "anon public" key.

   The anon key is SAFE to put in public front-end code — it's designed for
   this. Never put your "service_role" key here or anywhere in the browser;
   that key bypasses all security rules.
   ========================================================================= */
const SUPABASE_URL = "https://enlmvcdxipmxbcocersd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVubG12Y2R4aXBteGJjb2NlcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4ODQyMjUsImV4cCI6MjEwMDQ2MDIyNX0.kllaDrBjUYbkh7yVL5t5cJLmCEc71CcQJ0B2Tq5bKig";
                            
/* Name of the Storage bucket created by supabase/schema.sql. Only change
   this if you renamed the bucket in the Supabase dashboard. */
const SUPABASE_PHOTO_BUCKET = "kridansh-photos";
