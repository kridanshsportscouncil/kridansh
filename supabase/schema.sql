-- ============================================================================
-- KRIDANSH Sports Club — Supabase schema
-- ----------------------------------------------------------------------------
-- HOW TO USE THIS FILE
-- 1. Go to your Supabase project → SQL Editor → "New query"
-- 2. Paste this entire file in and click "Run"
-- 3. That's it — tables, security rules, and the photo storage bucket are
--    all created in one go.
-- ============================================================================

create extension if not exists pgcrypto; -- needed for gen_random_uuid()

-- ============================================================================
-- EVENTS TABLE
-- ============================================================================
create table if not exists public.events (
  id            text primary key,
  name          text not null,
  sport         text not null,
  date          text not null,
  venue         text not null,
  tag           text not null default 'Annual',
  status        text not null default 'upcoming' check (status in ('upcoming', 'completed')),
  description   text not null default '',
  participants  integer not null default 0,
  highlights    jsonb not null default '[]',   -- array of strings
  timeline      jsonb not null default '[]',   -- array of {time, label}
  organizers    jsonb not null default '[]',   -- array of strings
  chief_guests  jsonb not null default '[]',   -- array of strings
  results       jsonb not null default '[]',   -- array of {pos, team}
  sponsors      jsonb not null default '[]',   -- array of strings
  achievements  jsonb not null default '[]',   -- array of strings
  images        jsonb not null default '[]',   -- array of public photo URLs
  created_at    timestamptz not null default now()
);

alter table public.events enable row level security;

-- Everyone (including anonymous visitors) can read events.
create policy "Public can read events"
  on public.events for select
  using (true);

-- Only a signed-in user (i.e. you, the admin, once logged in) can write.
create policy "Signed-in admin can add events"
  on public.events for insert
  with check (auth.role() = 'authenticated');

create policy "Signed-in admin can edit events"
  on public.events for update
  using (auth.role() = 'authenticated');

create policy "Signed-in admin can delete events"
  on public.events for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- GALLERY PHOTOS TABLE
-- ============================================================================
create table if not exists public.gallery_photos (
  id          uuid primary key default gen_random_uuid(),
  category    text not null default 'General',
  caption     text default '',
  tall        boolean not null default false,
  src         text not null,      -- public URL of the photo in Storage
  storage_path text,               -- path inside the bucket, used to delete the file later
  created_at  timestamptz not null default now()
);

alter table public.gallery_photos enable row level security;

create policy "Public can read gallery photos"
  on public.gallery_photos for select
  using (true);

create policy "Signed-in admin can add photos"
  on public.gallery_photos for insert
  with check (auth.role() = 'authenticated');

create policy "Signed-in admin can delete photos"
  on public.gallery_photos for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- STORAGE BUCKET FOR PHOTOS
-- ============================================================================
-- Creates a public bucket named "kridansh-photos". If this insert fails for
-- your project (permissions vary by plan), just create it by hand instead:
-- Dashboard → Storage → "New bucket" → name it exactly kridansh-photos →
-- toggle "Public bucket" ON.
insert into storage.buckets (id, name, public)
values ('kridansh-photos', 'kridansh-photos', true)
on conflict (id) do nothing;

-- Public bucket = anyone can VIEW a photo via its URL without any policy.
-- These policies control who can UPLOAD or DELETE files in that bucket.
create policy "Signed-in admin can upload photos"
  on storage.objects for insert
  with check (bucket_id = 'kridansh-photos' and auth.role() = 'authenticated');

create policy "Signed-in admin can delete photo files"
  on storage.objects for delete
  using (bucket_id = 'kridansh-photos' and auth.role() = 'authenticated');

-- ============================================================================
-- REALTIME (so visitors see your edits appear live, no refresh needed)
-- ============================================================================
alter publication supabase_realtime add table public.events;
alter publication supabase_realtime add table public.gallery_photos;

-- ============================================================================
-- COUNCIL MEMBERS TABLE
-- ============================================================================
create table if not exists public.council_members (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  position    text not null,
  category    text not null default 'Core' check (category in ('Core', 'Coordinators', 'Heads', 'Faculty')),
  dept        text default '',
  year        text default '',
  bio         text default '',
  email       text default '',
  linkedin    text default '',
  instagram   text default '',
  photo_url    text default '',
  storage_path text,
  created_at  timestamptz not null default now()
);

alter table public.council_members enable row level security;

create policy "Public can read council members"
  on public.council_members for select
  using (true);

create policy "Signed-in admin can add council members"
  on public.council_members for insert
  with check (auth.role() = 'authenticated');

create policy "Signed-in admin can edit council members"
  on public.council_members for update
  using (auth.role() = 'authenticated');

create policy "Signed-in admin can delete council members"
  on public.council_members for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- ACHIEVEMENTS TABLE
-- ============================================================================
create table if not exists public.achievements (
  id          uuid primary key default gen_random_uuid(),
  icon        text not null default 'trophy',
  title       text not null,
  description text default '',
  year        text default '',
  photo_url    text default '',
  storage_path text,
  created_at  timestamptz not null default now()
);

alter table public.achievements enable row level security;

create policy "Public can read achievements"
  on public.achievements for select
  using (true);

create policy "Signed-in admin can add achievements"
  on public.achievements for insert
  with check (auth.role() = 'authenticated');

create policy "Signed-in admin can edit achievements"
  on public.achievements for update
  using (auth.role() = 'authenticated');

create policy "Signed-in admin can delete achievements"
  on public.achievements for delete
  using (auth.role() = 'authenticated');

alter publication supabase_realtime add table public.council_members;
alter publication supabase_realtime add table public.achievements;

-- Storage policies already created earlier in this file (for the events/gallery
-- section) cover the whole kridansh-photos bucket, so council + achievement
-- photos work with no extra storage setup.

-- ============================================================================
--   1. Create your admin login under Authentication → Users → "Add user"
--   2. Turn OFF public sign-ups under Authentication → Providers → Email
--      (so nobody else can ever create an account that would pass the
--      "authenticated" check above)
--   3. Copy your Project URL + anon public key into config.js
-- ============================================================================
