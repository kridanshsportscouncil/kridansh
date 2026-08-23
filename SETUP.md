# KRIDANSH Sports Club — Supabase Setup

This connects the site to a real, shared database so that whatever you (the admin) add or
delete shows up live for every visitor — not just in your own browser.

Takes about 10 minutes. You don't need to know SQL or backend development to follow these
steps — just copy/paste.

---

## 1. Create a Supabase project

1. Go to **[supabase.com](https://supabase.com)** → sign up (free tier is enough) → **New project**.
2. Pick any name/region, set a database password (save it somewhere), and wait ~2 minutes
   for it to finish provisioning.

## 2. Create the database tables

> **Already ran this before and just adding council/achievements admin now?** You don't
> need to re-run the whole file (re-running it will error on policies that already exist).
> Just copy from the `-- COUNCIL MEMBERS TABLE` comment down to the end of the file and
> run only that part.

1. In your project, open the **SQL Editor** (left sidebar) → **New query**.
2. Open `supabase/schema.sql` from this folder, copy the whole file, paste it into the editor.
3. Click **Run**.
4. You should see "Success. No rows returned." This created:
   - an `events` table
   - a `gallery_photos` table
   - a public photo storage bucket called `kridansh-photos`
   - security rules (RLS) so **anyone can view**, but **only a signed-in admin can add/edit/delete**

   > If the storage bucket line fails on your plan, just create it by hand instead:
   > **Storage** (left sidebar) → **New bucket** → name it exactly `kridansh-photos` →
   > toggle **Public bucket** ON → Save.

## 3. Create your admin login

1. Go to **Authentication** → **Users** → **Add user** → **Create new user**.
2. Enter the email and password *you* (the club admin) will log in with.
3. Tick **Auto Confirm User** so you don't need to click an email confirmation link.

## 4. Turn off public sign-ups

This makes sure nobody else can ever create an account that would pass the "signed-in admin"
check in the database rules.

1. Go to **Authentication** → **Providers** → **Email**.
2. Turn **Allow new users to sign up** OFF.

(The site's login form never offers a "sign up" option anyway — this is just a backend
safety net in case someone finds your Supabase project URL directly.)

## 5. Connect the site to your project

1. Go to **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon / public** key.
3. Open `config.js` in this folder and paste them in:

   ```js
   const SUPABASE_URL = "https://xxxxxxxxxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGciOi...";  // the long "anon public" key
   ```

   Never paste the **service_role** key here or anywhere in the site's files — that key
   bypasses every security rule and must never be exposed in the browser.

## 6. Open the site

1. Open `index.html`.
2. Click **Admin** in the footer → log in with the email/password from step 3.
3. If your `events` table is empty, an admin bar button called **"Load Starter Content"**
   will appear — click it once to load the 7 placeholder events so the site isn't blank
   while you replace them with real ones.
4. Add/edit events and photos — they'll now show up for every visitor, live, no
   republishing needed.

## Hosting

For everything above to work reliably (Supabase Auth in particular), host the files on a
real URL rather than opening `index.html` straight from your file system. Any of these work
and are free:

- **Netlify** — drag-and-drop the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `vercel deploy` or drag-and-drop via their dashboard
- **GitHub Pages** — push this folder to a repo, enable Pages in repo settings

## Storage limits (free tier)

Supabase's free tier includes 500MB of database storage and 1GB of file storage — plenty
for a club site's worth of events and photos. If you outgrow it, Supabase's paid tier scales
from there; nothing in this site needs to change, only your plan.
