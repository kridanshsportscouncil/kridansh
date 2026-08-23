/* =========================================================================
   KRIDANSH SPORTS CLUB — Graphic Era Hill University
   -------------------------------------------------------------------------
   HOW TO EDIT THIS SITE
   Every piece of replaceable content lives in the DATA section below.
   Swap names, photos, positions, event details, and copy there — the
   layout, cards, filters, and animations keep working automatically.
   Placeholders are rendered by ph(); pass a real image URL as `src` and
   it renders that image instead — no markup changes needed.
   ========================================================================= */

/* ==================================== DATA ==================================== */

const NAV = [
  { id: "about", label: "About" },
  { id: "council", label: "Council" },
  { id: "events", label: "Events" },
  { id: "gallery", label: "Gallery" },
  { id: "sports", label: "Sports" },
  { id: "achievements", label: "Achievements" },
];

const ABOUT_POINTS = [
  { title: "Mission", body: "To build a competitive, inclusive sporting culture that develops discipline, teamwork and athletic excellence across every department." },
  { title: "Vision", body: "To be the benchmark student sports body in the region — where every athlete has a pathway to compete and grow." },
  { title: "Objectives", body: "Organise year-round leagues, represent GEHU at inter-university events, and give every student a route into competitive sport." },
  { title: "Club Culture", body: "Sportsmanship, leadership and student development sit at the centre of everything KRIDANSH runs, on and off the field." },
];

const DEFAULT_COUNCIL = [
  { id: "1", name: "Aarav Sharma", position: "President", category: "Core", dept: "B.Tech CSE", year: "3rd Year", bio: "Leads KRIDANSH's vision, strategy and university-level sports relations.", email: "president@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "2", name: "Ishita Verma", position: "Vice President", category: "Core", dept: "B.Tech ME", year: "3rd Year", bio: "Oversees inter-college coordination and council operations.", email: "vp@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "3", name: "Kabir Singh", position: "General Secretary", category: "Core", dept: "BBA", year: "2nd Year", bio: "Manages documentation, correspondence and club governance.", email: "secretary@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "4", name: "Meher Kapoor", position: "Joint Secretary", category: "Core", dept: "B.Tech CSE", year: "2nd Year", bio: "Supports the secretariat and member onboarding processes.", email: "jointsec@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "5", name: "Rohan Malhotra", position: "Treasurer", category: "Core", dept: "B.Com", year: "3rd Year", bio: "Handles budgeting, sponsorships and financial planning.", email: "treasurer@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "6", name: "Ananya Rawat", position: "Event Coordinator", category: "Coordinators", dept: "B.Tech IT", year: "2nd Year", bio: "Plans and executes flagship tournaments end-to-end.", email: "events@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "7", name: "Dev Bisht", position: "Sports Coordinator", category: "Coordinators", dept: "B.Tech Civil", year: "3rd Year", bio: "Coordinates trials, teams and match-day logistics.", email: "sports@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "8", name: "Priya Negi", position: "Media Head", category: "Heads", dept: "BA Journalism", year: "2nd Year", bio: "Runs KRIDANSH's photography, video and social presence.", email: "media@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
  { id: "9", name: "Yash Rana", position: "Design Head", category: "Heads", dept: "B.Des", year: "2nd Year", bio: "Owns the club's visual identity and creative assets.", email: "design@kridansh.club", linkedin: "#", instagram: "#", photoUrl: "" },
];
const COUNCIL_CATEGORIES = ["All", "Core", "Coordinators", "Heads"];

const DEFAULT_EVENTS = [
  {
    id: "kridansh-premier-league", name: "KRIDANSH Premier League", sport: "Cricket", date: "Mar 14–21, 2026",
    venue: "GEHU Cricket Ground", tag: "Flagship", status: "completed",
    description: "The university's marquee inter-department cricket championship, played across a week of league and knockout fixtures.",
    highlights: ["16 department teams", "Live scoring & commentary", "Player of the Match awards each fixture"],
    timeline: [{ time: "Day 1–4", label: "League matches" }, { time: "Day 5", label: "Quarter-finals" }, { time: "Day 6", label: "Semi-finals" }, { time: "Day 7", label: "Final & closing ceremony" }],
    organizers: ["KRIDANSH Sports Club", "Dept. of Physical Education"],
    chiefGuests: ["Placeholder Guest Name — Former State Cricketer"],
    results: [{ pos: "Champions", team: "Dept. of CSE" }, { pos: "Runners-up", team: "Dept. of Mechanical" }],
    participants: 320, sponsors: ["Sponsor One", "Sponsor Two"],
    achievements: ["Highest attended fixture in club history"],
    images: [],
  },
  {
    id: "hoops-carnival", name: "Hoops Carnival", sport: "Basketball", date: "Apr 5–6, 2026",
    venue: "Indoor Sports Complex", tag: "Annual", status: "completed",
    description: "A fast-paced 3x3 basketball carnival open to all years, featuring a slam-dunk exhibition and a mixed-team showcase.",
    highlights: ["3x3 knockout format", "Slam dunk exhibition", "Mixed faculty-student showcase match"],
    timeline: [{ time: "Day 1", label: "Group stage" }, { time: "Day 2 AM", label: "Knockouts" }, { time: "Day 2 PM", label: "Finals & exhibition" }],
    organizers: ["KRIDANSH Sports Club"],
    chiefGuests: ["Placeholder Guest Name — University Alumnus"],
    results: [{ pos: "Champions", team: "Team Falcons" }, { pos: "Runners-up", team: "Team Titans" }],
    participants: 140, sponsors: ["Sponsor Three"],
    achievements: ["Record 3-point streak by Team Falcons"],
    images: [],
  },
  {
    id: "smash-fest", name: "Smash Fest", sport: "Badminton", date: "Feb 2–4, 2026",
    venue: "GEHU Badminton Courts", tag: "Open", status: "completed",
    description: "Singles and doubles badminton championship with separate men's, women's and mixed-doubles brackets.",
    highlights: ["Men's, women's & mixed brackets", "Professional umpiring", "Live bracket tracker"],
    timeline: [{ time: "Day 1", label: "Qualifiers" }, { time: "Day 2", label: "Pre-quarters & quarters" }, { time: "Day 3", label: "Semis & finals" }],
    organizers: ["KRIDANSH Sports Club"],
    chiefGuests: ["Placeholder Guest Name — District Coach"],
    results: [{ pos: "Champions (Singles)", team: "Placeholder Player" }, { pos: "Champions (Doubles)", team: "Placeholder Pair" }],
    participants: 96, sponsors: ["Sponsor Four"],
    achievements: ["First mixed-doubles bracket introduced"],
    images: [],
  },
  {
    id: "gridiron-cup", name: "Gridiron Cup", sport: "Football", date: "Nov 10–17, 2025",
    venue: "GEHU Football Field", tag: "Flagship", status: "completed",
    description: "An eight-day football tournament crowning the university's top departmental side under floodlights.",
    highlights: ["Floodlit night matches", "Fan zone & DJ nights", "Best Goalkeeper award"],
    timeline: [{ time: "Day 1–5", label: "League stage" }, { time: "Day 6", label: "Semi-finals" }, { time: "Day 7", label: "Final" }],
    organizers: ["KRIDANSH Sports Club", "Student Council"],
    chiefGuests: ["Placeholder Guest Name — Ex-professional Footballer"],
    results: [{ pos: "Champions", team: "Dept. of Civil" }, { pos: "Runners-up", team: "Dept. of IT" }],
    participants: 260, sponsors: ["Sponsor Five", "Sponsor Six"],
    achievements: ["Highest single-match attendance recorded"],
    images: [],
  },
  {
    id: "spike-off", name: "The Spike Off", sport: "Volleyball", date: "Jan 18–19, 2026",
    venue: "Open Courts, Sports Complex", tag: "Annual", status: "completed",
    description: "A weekend volleyball invitational featuring round-robin pools followed by a single-elimination final four.",
    highlights: ["Round-robin pools", "Final four format", "Best Server award"],
    timeline: [{ time: "Day 1", label: "Pool matches" }, { time: "Day 2", label: "Final four & final" }],
    organizers: ["KRIDANSH Sports Club"],
    chiefGuests: ["Placeholder Guest Name"],
    results: [{ pos: "Champions", team: "Team Spartans" }],
    participants: 110, sponsors: ["Sponsor Seven"],
    achievements: ["New club record for spikes in a single set"],
    images: [],
  },
  {
    id: "track-day", name: "KRIDANSH Track & Field Day", sport: "Athletics", date: "Oct 4, 2025",
    venue: "University Athletic Track", tag: "Open", status: "completed",
    description: "A single-day athletics meet covering sprints, relays, throws and jumps for all departments.",
    highlights: ["100m, 200m & relay events", "Long jump & shot put", "Department point tally"],
    timeline: [{ time: "Morning", label: "Track events" }, { time: "Afternoon", label: "Field events & prize distribution" }],
    organizers: ["KRIDANSH Sports Club", "Dept. of Physical Education"],
    chiefGuests: ["Placeholder Guest Name — National Athlete"],
    results: [{ pos: "Overall Champions", team: "Dept. of Mechanical" }],
    participants: 400, sponsors: ["Sponsor Eight"],
    achievements: ["Meet record broken in 200m sprint"],
    images: [],
  },
  {
    id: "winter-championship", name: "KRIDANSH Winter Championship", sport: "Football", date: "Dec 5–12, 2026",
    venue: "GEHU Football Field", tag: "Flagship", status: "upcoming",
    description: "The next flagship football championship — registrations open soon. Council will add full details closer to the date.",
    highlights: ["Registrations opening soon"],
    timeline: [{ time: "TBA", label: "Schedule to be announced" }],
    organizers: ["KRIDANSH Sports Club"],
    chiefGuests: [],
    results: [],
    participants: 0, sponsors: [],
    achievements: [],
    images: [],
  },
];

/** Sport filter options — recomputed from whatever events currently exist (default + admin-added). */
function eventSportOptions() { return ["All", ...new Set(STATE.events.map((e) => e.sport))]; }

const DEFAULT_GALLERY = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  category: ["Cricket", "Basketball", "Football", "Athletics", "Badminton", "Volleyball"][i % 6],
  caption: `Moment ${i + 1} — placeholder`,
  tall: i % 3 === 0,
  src: "",
}));

/** Gallery category filter options — recomputed from whatever photos currently exist. */
function galleryCategoryOptions() { return ["All", ...new Set(STATE.gallery.map((g) => g.category))]; }

const SPORTS = [
  { name: "Basketball", icon: "circle-dot", desc: "Fast-break 5v5 and 3x3 formats with year-round league play." },
  { name: "Football", icon: "flag", desc: "11-a-side departmental leagues and floodlit knockout cups." },
  { name: "Cricket", icon: "target", desc: "T20-format inter-department league culminating in playoffs." },
  { name: "Volleyball", icon: "waves", desc: "Indoor and open-court volleyball across mixed divisions." },
  { name: "Badminton", icon: "zap", desc: "Singles and doubles play with ranked club ladder standings." },
  { name: "Table Tennis", icon: "circle-dot", desc: "Fast-paced singles and doubles club championship." },
  { name: "Chess", icon: "swords", desc: "Classical and rapid-format tournaments for strategic minds." },
  { name: "Carrom", icon: "circle-dot", desc: "Competitive carrom leagues and knockout cups for all students." },
];

const DEFAULT_ACHIEVEMENTS = [
  { id: "1", icon: "trophy", title: "University Champions", description: "Overall points table winners, Inter-University Sports Meet.", year: "2025", photoUrl: "" },
  { id: "2", icon: "medal", title: "State Level Winners", description: "Gold medal finish at the State Collegiate Cricket Championship.", year: "2025", photoUrl: "" },
  { id: "3", icon: "award", title: "Best Sports Club Award", description: "Recognised by the university for outstanding student engagement.", year: "2024", photoUrl: "" },
  { id: "4", icon: "star", title: "National Participation", description: "Represented the university at the National Athletics Meet.", year: "2024", photoUrl: "" },
  { id: "5", icon: "medal", title: "42 Medals Won", description: "Cumulative medal count across all tournaments this season.", year: "2025–26", photoUrl: "" },
  { id: "6", icon: "trophy", title: "Runner-Up, Zonal Basketball", description: "Silver finish at the Zonal Inter-College Basketball Cup.", year: "2024", photoUrl: "" },
];

const STATS = [
  { label: "Events Organized", value: 45, suffix: "+" },
  { label: "Sports Conducted", value: 9, suffix: "" },
  { label: "Council Members", value: 20, suffix: "" },
  { label: "Participants", value: 2500, suffix: "+" },
  { label: "Awards Won", value: 40, suffix: "+" },
  { label: "Years of Excellence", value: 4, suffix: "" },
];

/* ==================================== SUPABASE BACKEND ====================================
   Real shared storage: events and photos live in a Supabase Postgres database, photos in
   Supabase Storage. Anyone who opens the site reads from the same database — so whatever
   the admin adds or deletes is what every visitor sees (Realtime pushes updates live, no
   refresh needed).

   Admin access is enforced by the DATABASE (Row Level Security), not by JS in the browser —
   see supabase/schema.sql. Only a signed-in Supabase Auth user can write; everyone can read.
   SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_PHOTO_BUCKET come from config.js.
   ============================================================================================ */

const supabaseClient = (window.supabase && SUPABASE_URL && !SUPABASE_URL.includes("YOUR-PROJECT"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

let currentSession = null; // set by the auth listener; null = not logged in

function isAdmin() {
  return !!currentSession;
}

function isBackendConfigured() {
  return !!supabaseClient;
}

/* ---------- DB <-> JS field mapping (events.chief_guests <-> chiefGuests, etc.) ---------- */
function fromDbEvent(row) {
  return {
    id: row.id, name: row.name, sport: row.sport, date: row.date, venue: row.venue,
    tag: row.tag, status: row.status, description: row.description, participants: row.participants,
    highlights: row.highlights || [], timeline: row.timeline || [], organizers: row.organizers || [],
    chiefGuests: row.chief_guests || [], results: row.results || [], sponsors: row.sponsors || [],
    achievements: row.achievements || [], images: row.images || [],
  };
}
function toDbEvent(e) {
  return {
    id: e.id, name: e.name, sport: e.sport, date: e.date, venue: e.venue, tag: e.tag, status: e.status,
    description: e.description, participants: e.participants, highlights: e.highlights, timeline: e.timeline,
    organizers: e.organizers, chief_guests: e.chiefGuests, results: e.results, sponsors: e.sponsors,
    achievements: e.achievements, images: e.images,
  };
}

function fromDbCouncil(row) {
  return {
    id: row.id, name: row.name, position: row.position, category: row.category, dept: row.dept,
    year: row.year, bio: row.bio, email: row.email, linkedin: row.linkedin, instagram: row.instagram,
    photoUrl: row.photo_url || "", storagePath: row.storage_path || "", rank: row.rank ?? 999,
  };
}
function toDbCouncil(m) {
  return {
    id: m.id, name: m.name, position: m.position, category: m.category, dept: m.dept, year: m.year,
    bio: m.bio, email: m.email, linkedin: m.linkedin, instagram: m.instagram,
    photo_url: m.photoUrl || "", storage_path: m.storagePath || null, rank: Number(m.rank) || 999,
  };
}

function fromDbAchievement(row) {
  return {
    id: row.id, icon: row.icon, title: row.title, description: row.description, year: row.year,
    photoUrl: row.photo_url || "", storagePath: row.storage_path || "",
  };
}
function toDbAchievement(a) {
  return {
    id: a.id, icon: a.icon, title: a.title, description: a.description, year: a.year,
    photo_url: a.photoUrl || "", storage_path: a.storagePath || null,
  };
}
function fromDbAd(row) {
  return {
    id: row.id, title: row.title, description: row.description,
    posterUrl: row.poster_url || "", storagePath: row.storage_path || "", active: row.active,
  };
}
function toDbAd(m) {
  return {
    id: m.id, title: m.title, description: m.description,
    poster_url: m.posterUrl || "", storage_path: m.storagePath || null, active: m.active,
  };
}

let STATE = { events: [], gallery: [], council: [], achievements: [], ad: null };
/** Loads events, gallery photos, council members, and achievements from Supabase.
 *  Falls back to bundled placeholder content (read-only) if config.js hasn't been
 *  filled in yet, so the site still looks right before you've connected a database. */
async function loadState() {
  if (!isBackendConfigured()) {
    STATE = { events: DEFAULT_EVENTS, gallery: DEFAULT_GALLERY, council: DEFAULT_COUNCIL, achievements: DEFAULT_ACHIEVEMENTS, ad: null };
    return;
  }
  const [eventsRes, galleryRes, councilRes, achievementsRes, adRes] = await Promise.all([
    supabaseClient.from("events").select("*").order("created_at", { ascending: false }),
    supabaseClient.from("gallery_photos").select("*").order("created_at", { ascending: false }),
    supabaseClient.from("council_members").select("*").order("created_at", { ascending: true }),
    supabaseClient.from("achievements").select("*").order("created_at", { ascending: false }),
    supabaseClient.from("site_ad").select("*").eq("active", true).order("created_at", { ascending: false }).limit(1),
  ]);
  if (eventsRes.error) console.error("KRIDANSH: could not load events", eventsRes.error);
  if (galleryRes.error) console.error("KRIDANSH: could not load gallery photos", galleryRes.error);
  if (councilRes.error) console.error("KRIDANSH: could not load council members", councilRes.error);
  if (achievementsRes.error) console.error("KRIDANSH: could not load achievements", achievementsRes.error);
  if (adRes.error) console.error("KRIDANSH: could not load site ad", adRes.error);
  STATE = {
    events: eventsRes.error ? [] : eventsRes.data.map(fromDbEvent),
    gallery: galleryRes.error ? [] : galleryRes.data,
    council: councilRes.error ? [] : councilRes.data.map(fromDbCouncil),
    achievements: achievementsRes.error ? [] : achievementsRes.data.map(fromDbAchievement),
    ad: (!adRes.error && adRes.data.length > 0) ? fromDbAd(adRes.data[0]) : null,
  };
}

/** One-time helper for first-time setup: pushes bundled placeholder events, council
 *  members, and achievements into whichever of your Supabase tables are still empty,
 *  so the site isn't blank while you add real content. Safe to click more than once —
 *  it skips any table that already has rows in it. */
async function seedStarterContent() {
  if (!isBackendConfigured() || !isAdmin()) return;
  if (!confirm("Load starter placeholder content into any empty tables (events, council, achievements)?")) return;

  const tasks = [];
  if (STATE.events.length === 0) tasks.push(supabaseClient.from("events").insert(DEFAULT_EVENTS.map(toDbEvent)));
  if (STATE.council.length === 0) tasks.push(supabaseClient.from("council_members").insert(DEFAULT_COUNCIL.map((m) => { const { id, ...rest } = toDbCouncil(m); return rest; })));
  if (STATE.achievements.length === 0) tasks.push(supabaseClient.from("achievements").insert(DEFAULT_ACHIEVEMENTS.map((a) => { const { id, ...rest } = toDbAchievement(a); return rest; })));

  const results = await Promise.all(tasks);
  const failed = results.find((r) => r.error);
  if (failed) alert("Some starter content could not be loaded: " + failed.error.message);

  await loadState();
  renderEvents(); buildEventFilters();
  renderCouncil(); buildCouncilFilters();
  renderAchievements();
  renderAdminRibbon();
}
function renderAdPopup() {
  const popup = document.getElementById("ad-popup");
  if (!popup) return;
  if (!STATE.ad || !STATE.ad.active) {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    return;
  }
  document.getElementById("ad-popup-title").textContent = STATE.ad.title;
  document.getElementById("ad-popup-description").textContent = STATE.ad.description;
  document.getElementById("ad-popup-poster").innerHTML = STATE.ad.posterUrl
    ? `<img src="${STATE.ad.posterUrl}" alt="${escAttr(STATE.ad.title)}" class="w-full h-auto block" />`
    : "";
  popup.classList.remove("hidden");
  popup.classList.add("flex");
  renderIcons();
  document.getElementById("ad-popup-close").addEventListener("click", () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  }, { once: true });
}

function openAdForm() {
  if (!isAdmin()) return;
  const v = STATE.ad || { id: null, title: "", description: "", posterUrl: "", storagePath: "", active: true };
  const modal = document.getElementById("ad-form-modal");
  const content = document.getElementById("ad-form-content");

  content.innerHTML = `
    <div class="flex items-center justify-between p-6 border-b border-line">
      <h3 class="f-display font-bold text-xl text-charcoal">${STATE.ad ? "Edit Event Advertisement" : "Add Event Advertisement"}</h3>
      <button id="close-ad-form" class="text-[#8A93A0] hover:text-charcoal"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <form id="ad-form" class="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
      <div>
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Poster</span>
        <div class="flex items-center gap-4 mt-2">
          <div id="ad-form-photo-preview" class="w-24 h-28 rounded-lg overflow-hidden border border-line shrink-0 bg-mist">
            ${v.posterUrl ? `<img src="${v.posterUrl}" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center text-[#B0B6BE]"><i data-lucide="image" class="w-5 h-5"></i></div>`}
          </div>
          <div class="flex flex-col gap-2">
            <label class="inline-flex items-center gap-2 f-util text-[12px] font-bold uppercase tracking-wide text-royal cursor-pointer">
              <i data-lucide="upload" class="w-[14px] h-[14px]"></i> Upload Poster
              <input type="file" id="ad-form-photo-input" accept="image/*" class="hidden" />
            </label>
            <span id="ad-form-upload-status" class="f-util text-[11px] text-[#8A93A0]"></span>
          </div>
        </div>
      </div>
      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Event Title *</span>
        <input name="title" required value="${escAttr(v.title)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
      </label>
      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Short Description</span>
        <textarea name="description" rows="3" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(v.description)}</textarea>
      </label>
      <label class="inline-flex items-center gap-2">
        <input type="checkbox" name="active" ${v.active ? "checked" : ""} class="h-4 w-4" />
        <span class="f-body text-sm text-charcoal">Show this popup on the site</span>
      </label>
      <div class="flex flex-wrap gap-3 pt-2">
        <button type="submit" class="ripple f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full text-white bg-forest">Save</button>
        <button type="button" id="cancel-ad-form" class="f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full border border-line text-[#5B6472]">Cancel</button>
        ${STATE.ad ? `<button type="button" id="remove-ad-btn" class="f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full border border-red-200 text-red-500">Remove Popup</button>` : ""}
      </div>
    </form>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  renderIcons();

  let posterUrl = v.posterUrl || "";
  let storagePath = v.storagePath || "";

  document.getElementById("ad-form-photo-input").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const status = document.getElementById("ad-form-upload-status");
    status.textContent = "Uploading…";
    try {
      const { url, path } = await uploadPhoto(file, "ads");
      posterUrl = url; storagePath = path;
      document.getElementById("ad-form-photo-preview").innerHTML = `<img src="${posterUrl}" class="w-full h-full object-cover" />`;
    } catch (err) {
      alert("Poster upload failed: " + err.message);
    }
    status.textContent = "";
    e.target.value = "";
  });

  const closeForm = () => { modal.classList.add("hidden"); modal.classList.remove("flex"); };
  document.getElementById("close-ad-form").addEventListener("click", closeForm);
  document.getElementById("cancel-ad-form").addEventListener("click", closeForm);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeForm(); });

  const removeBtn = document.getElementById("remove-ad-btn");
  if (removeBtn) removeBtn.addEventListener("click", async () => {
    if (!confirm("Remove the event advertisement popup?")) return;
    await supabaseClient.from("site_ad").delete().eq("id", v.id);
    if (v.storagePath) await supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).remove([v.storagePath]);
    STATE.ad = null;
    closeForm();
    renderAdPopup();
    renderAdminRibbon();
  });

  document.getElementById("ad-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector("#ad-form button[type=submit]");
    const fd = new FormData(e.target);
    const newAd = {
      id: v.id || undefined,
      title: fd.get("title").trim(),
      description: fd.get("description").trim(),
      active: fd.get("active") === "on",
      posterUrl, storagePath,
    };
    submitBtn.disabled = true;
    submitBtn.textContent = "Saving…";
    const dbRow = toDbAd(newAd);
    const query = v.id
      ? supabaseClient.from("site_ad").update(dbRow).eq("id", v.id).select().single()
      : supabaseClient.from("site_ad").insert(dbRow).select().single();
    const { data, error } = await query;
    if (error) { alert("Could not save ad: " + error.message); submitBtn.disabled = false; submitBtn.textContent = "Save"; return; }
    STATE.ad = fromDbAd(data);
    closeForm();
    renderAdPopup();
    renderAdminRibbon();
  });
}

function slugify(str) {
  const base = String(str || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return base ? `${base}-${Date.now().toString(36)}` : `event-${Date.now().toString(36)}`;
}

/** Uploads a file to the public Storage bucket and returns its public URL + storage path. */
async function uploadPhoto(file, folder) {
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_")}`;
  const { error } = await supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).upload(path, file);
  if (error) throw error;
  const { data } = supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, path };
}

/* ==================================== HELPERS ==================================== */

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };

/** Placeholder image block. Pass `src` for a real image later — everything else stays the same. */
function ph({ icon = "activity", label = "", ratio = "aspect-[4/5]", rounded = "rounded-2xl", tone = "", src = "" }) {
  if (src) return `<div class=" ${rounded} overflow-hidden"><img src="${src}" alt="${label}" /></div>`;
  const toneClass = tone ? `tone-${tone}` : "";
  return `
    <div class="ph ${ratio} ${rounded} ${toneClass}">
      <i data-lucide="${icon}" class="ph-icon" style="width:${label ? 30 : 40}px;height:${label ? 30 : 40}px;stroke-width:1.4"></i>
      ${label ? `<span class="ph-label">${label}</span>` : ""}
    </div>`;
}

function attachRipple(scope = document) {
  scope.querySelectorAll(".ripple").forEach((btn) => {
    if (btn.dataset.rippleBound) return;
    btn.dataset.rippleBound = "1";
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const d = Math.max(btn.clientWidth, btn.clientHeight);
      const circle = document.createElement("span");
      circle.style.width = circle.style.height = `${d}px`;
      circle.style.left = `${e.clientX - rect.left - d / 2}px`;
      circle.style.top = `${e.clientY - rect.top - d / 2}px`;
      circle.className = "ripple-el";
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

function observeReveals(scope = document) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  scope.querySelectorAll(".reveal:not(.in)").forEach((elm) => io.observe(elm));
}

function renderIcons() { if (window.lucide) window.lucide.createIcons(); }

/* ==================================== NAVBAR ==================================== */

function buildNav() {
  const desktop = document.getElementById("nav-links-desktop");
  const mobile = document.getElementById("mobile-menu");
  const footerLinks = document.getElementById("footer-links");

  NAV.forEach((n) => {
    const a = el("button", "f-util text-[13px] font-semibold tracking-wide uppercase transition-colors nav-link", n.label);
    a.dataset.goto = n.id;
    desktop.appendChild(a);

    const m = el("button", "f-util text-sm font-semibold uppercase tracking-wide text-left text-charcoal", n.label);
    m.dataset.goto = n.id;
    mobile.appendChild(m);

    const f = el("a", "f-body text-sm text-white/60 hover:text-white transition-colors", n.label);
    f.href = `#${n.id}`;
    footerLinks.appendChild(f);
  });

}

function initNavBehavior() {
  const header = document.getElementById("navbar");
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const brandName = document.getElementById("brand-name");
  const brandSub = document.getElementById("brand-sub");

  function setSolid(solid) {
    header.classList.toggle("bg-white/90", solid);
    header.classList.toggle("backdrop-blur-md", solid);
    header.style.boxShadow = solid ? "0 1px 0 0 #E7E9EC" : "none";
    document.querySelectorAll(".nav-link").forEach((l) => {
      l.classList.toggle("text-charcoal", solid);
      l.classList.toggle("text-white/85", !solid);
    });
    brandName.classList.toggle("text-charcoal", solid);
    brandName.classList.toggle("text-white", !solid);
    brandSub.classList.toggle("text-royal", solid);
    brandSub.classList.toggle("text-white/70", !solid);
    menuIcon.classList.toggle("text-black", solid);
    menuIcon.classList.toggle("text-white", !solid);
  }
  setSolid(false);

  window.addEventListener("scroll", () => setSolid(window.scrollY > 40));

  menuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    menuIcon.setAttribute("data-lucide", isOpen ? "menu" : "x");
    renderIcons();
  });

  document.querySelectorAll("[data-goto]").forEach((b) => {
    b.addEventListener("click", () => {
      document.getElementById(b.dataset.goto)?.scrollIntoView({ behavior: "smooth" });
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
      menuIcon.setAttribute("data-lucide", "menu");
      renderIcons();
    });
  });
}

/* ==================================== ABOUT ==================================== */

function buildAbout() {
  const wrap = document.getElementById("about-points");
  ABOUT_POINTS.forEach((p, i) => {
    const borderColor = i % 2 ? "var(--forest)" : "var(--royal)";
    const d = el("div", "reveal");
    d.style.animationDelay = `${i * 90}ms`;
    d.innerHTML = `
      <div class="pl-4 border-l-2" style="border-color:${borderColor}">
        <h3 class="f-display font-semibold text-lg mb-1.5 text-charcoal">${p.title}</h3>
        <p class="f-body text-sm leading-relaxed text-[#5B6472]">${p.body}</p>
      </div>`;
    wrap.appendChild(d);
  });
}

/* ==================================== COUNCIL ==================================== */

let councilCat = "All";
let councilQuery = "";

function buildCouncilFilters() {
  const wrap = document.getElementById("council-filters");
  wrap.innerHTML = "";
  COUNCIL_CATEGORIES.forEach((c) => {
    const btn = el("button", "f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors", c);
    applyFilterStyle(btn, c === councilCat, "royal");
    btn.addEventListener("click", () => { councilCat = c; renderCouncil(); buildCouncilFilters(); });
    wrap.appendChild(btn);
  });
}

function applyFilterStyle(btn, active, color) {
  if (active) {
    btn.classList.add("text-white", "border-transparent");
    btn.classList.remove("text-[#5B6472]", "border-line", "bg-white");
    btn.style.background = color === "royal" ? "var(--royal)" : "var(--forest)";
  } else {
    btn.classList.remove("text-white", "border-transparent");
    btn.classList.add("text-[#5B6472]", "border-line", "bg-white");
    btn.style.background = "";
  }
}

function renderCouncilAdminActions() {
  const wrap = document.getElementById("council-admin-actions");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (!isAdmin()) return;
  const btn = el("button", "ripple f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2.5 rounded-full text-white bg-royal flex items-center gap-1.5");
  btn.innerHTML = `<i data-lucide="plus" class="w-[14px] h-[14px]"></i> Add Member`;
  btn.addEventListener("click", () => openCouncilForm(null));
  wrap.appendChild(btn);
  renderIcons();
}

function renderCouncil() {
  const grid = document.getElementById("council-grid");
  const empty = document.getElementById("council-empty");
  grid.innerHTML = "";
  const list = STATE.council.filter((m) =>
    (councilCat === "All" || m.category === councilCat) &&
    (m.name.toLowerCase().includes(councilQuery.toLowerCase()) || m.position.toLowerCase().includes(councilQuery.toLowerCase()))
  ).sort((a, b) => (Number(a.rank) || 999) - (Number(b.rank) || 999));
  empty.classList.toggle("hidden", list.length > 0);
  const admin = isAdmin();

  list.forEach((m, i) => {
    const card = el("div", "reveal");
    card.style.animationDelay = `${(i % 4) * 80}ms`;
    card.innerHTML = `
      <div class="group relative bg-white rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(15,76,129,0.25)]">
        ${admin ? `
          <div class="absolute top-3 right-3 flex gap-1.5 z-10">
            <button class="edit-council h-7 w-7 rounded-full bg-mist flex items-center justify-center hover:bg-[#EEF1F4]" data-id="${m.id}" title="Edit member">
              <i data-lucide="pencil" class="w-[13px] h-[13px] text-royal"></i>
            </button>
            <button class="delete-council h-7 w-7 rounded-full bg-mist flex items-center justify-center hover:bg-[#EEF1F4]" data-id="${m.id}" title="Remove member">
              <i data-lucide="trash-2" class="w-[13px] h-[13px] text-red-500"></i>
            </button>
          </div>` : ""}
        <div class="relative w-24 h-24 mx-auto mb-5">
          <div class="absolute inset-0 rounded-full p-[2px]" style="background:linear-gradient(135deg, var(--royal), var(--forest))">
            <div class="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
              ${ph({ icon: "users", ratio: "aspect-square", rounded: "rounded-full", src: m.photoUrl })}
            </div>
          </div>
        </div>
        <div class="text-center">
          <h3 class="f-display font-semibold text-base text-charcoal">${m.name}</h3>
          <p class="f-util text-[11px] font-bold uppercase tracking-wide mt-1 text-royal">${m.position}</p>
          <p class="f-body text-[12px] text-[#8A93A0] mt-1">${m.dept} · ${m.year}</p>
          <p class="f-body text-[13px] text-[#5B6472] mt-3 leading-relaxed">${m.bio}</p>
          <div class="flex items-center justify-center gap-3 mt-5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <a href="mailto:${m.email}" class="h-8 w-8 rounded-full flex items-center justify-center bg-mist hover:bg-royal hover:text-white transition-colors"><i data-lucide="mail" class="w-[14px] h-[14px]"></i></a>
            <a href="${m.linkedin}" class="h-8 w-8 rounded-full flex items-center justify-center bg-mist hover:bg-royal hover:text-white transition-colors"><i data-lucide="linkedin" class="w-[14px] h-[14px]"></i></a>
          </div>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  renderIcons();
  observeReveals();
  document.querySelectorAll(".edit-council").forEach((b) => b.addEventListener("click", () => openCouncilForm(b.dataset.id)));
  document.querySelectorAll(".delete-council").forEach((b) => b.addEventListener("click", () => deleteCouncilMember(b.dataset.id)));
}

async function deleteCouncilMember(id) {
  const m = STATE.council.find((x) => String(x.id) === String(id));
  if (!m) return;
  if (!confirm(`Remove ${m.name} from the council?`)) return;
  const { error } = await supabaseClient.from("council_members").delete().eq("id", id);
  if (error) { alert("Could not remove member: " + error.message); return; }
  if (m.storagePath) await supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).remove([m.storagePath]);
  STATE.council = STATE.council.filter((x) => String(x.id) !== String(id));
  renderCouncil();
}

/* ---------- Admin: add / edit council member form ---------- */

function openCouncilForm(id) {
  if (!isAdmin()) return;
  const editing = id ? STATE.council.find((m) => String(m.id) === String(id)) : null;
  const modal = document.getElementById("council-form-modal");
  const content = document.getElementById("council-form-content");
  const v = editing || { name: "", position: "", category: "Core", dept: "", year: "", bio: "", email: "", linkedin: "", instagram: "", photoUrl: "", storagePath: "", rank: 999 };
  content.innerHTML = `
    <div class="flex items-center justify-between p-6 border-b border-line">
      <h3 class="f-display font-bold text-xl text-charcoal">${editing ? "Edit Council Member" : "Add Council Member"}</h3>
      <button id="close-council-form" class="text-[#8A93A0] hover:text-charcoal"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <form id="council-form" class="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
      <div>
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Photo</span>
        <div class="flex items-center gap-4 mt-2">
          <div id="council-form-photo-preview" class="w-20 h-20 rounded-full overflow-hidden border border-line shrink-0">
            ${ph({ icon: "users", ratio: "aspect-square", rounded: "rounded-full", src: v.photoUrl })}
          </div>
          <div class="flex flex-col gap-2">
            <label class="inline-flex items-center gap-2 f-util text-[12px] font-bold uppercase tracking-wide text-royal cursor-pointer">
              <i data-lucide="upload" class="w-[14px] h-[14px]"></i> Upload Photo
              <input type="file" id="council-form-photo-input" accept="image/*" class="hidden" />
            </label>
            <button type="button" id="council-form-remove-photo" class="text-left f-util text-[12px] font-bold uppercase tracking-wide text-red-500 ${v.photoUrl ? "" : "hidden"}">Remove Photo</button>
            <span id="council-form-upload-status" class="f-util text-[11px] text-[#8A93A0]"></span>
          </div>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Full Name *</span>
          <input name="name" required value="${escAttr(v.name)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Position *</span>
          <input name="position" required value="${escAttr(v.position)}" placeholder="e.g. President" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Hierarchy Order *</span>
          <input name="rank" type="number" required value="${v.rank ?? 999}" placeholder="e.g. 1 = shown first" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Category *</span>
          <select name="category" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal">
            ${COUNCIL_CATEGORIES.filter((c) => c !== "All").map((c) => `<option value="${c}" ${v.category === c ? "selected" : ""}>${c}</option>`).join("")}
          </select>
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Department</span>
          <input name="dept" value="${escAttr(v.dept)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Academic Year</span>
          <input name="year" value="${escAttr(v.year)}" placeholder="e.g. 3rd Year" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Email</span>
          <input name="email" type="email" value="${escAttr(v.email)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
      </div>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Short Bio</span>
        <textarea name="bio" rows="2" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(v.bio)}</textarea>
      </label>

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">LinkedIn URL</span>
          <input name="linkedin" value="${escAttr(v.linkedin)}" placeholder="https://linkedin.com/in/…" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Instagram URL</span>
          <input name="instagram" value="${escAttr(v.instagram)}" placeholder="https://instagram.com/…" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
      </div>

      <div class="flex gap-3 pt-2">
        <button type="submit" class="ripple f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full text-white bg-royal">${editing ? "Save Changes" : "Add Member"}</button>
        <button type="button" id="cancel-council-form" class="f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full border border-line text-[#5B6472]">Cancel</button>
      </div>
    </form>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  renderIcons();

  let photoUrl = v.photoUrl || "";
  let storagePath = v.storagePath || "";

  const updatePreview = () => {
    document.getElementById("council-form-photo-preview").innerHTML = ph({ icon: "users", ratio: "aspect-square", rounded: "rounded-full", src: photoUrl });
    document.getElementById("council-form-remove-photo").classList.toggle("hidden", !photoUrl);
  };

  document.getElementById("council-form-photo-input").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const status = document.getElementById("council-form-upload-status");
    status.textContent = "Uploading…";
    try {
      const { url, path } = await uploadPhoto(file, "council");
      photoUrl = url;
      storagePath = path;
      updatePreview();
    } catch (err) {
      alert("Photo upload failed: " + err.message);
    }
    status.textContent = "";
    e.target.value = "";
  });

  document.getElementById("council-form-remove-photo").addEventListener("click", () => {
    photoUrl = "";
    storagePath = "";
    updatePreview();
  });

  const closeForm = () => { modal.classList.add("hidden"); modal.classList.remove("flex"); };
  document.getElementById("close-council-form").addEventListener("click", closeForm);
  document.getElementById("cancel-council-form").addEventListener("click", closeForm);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeForm(); });

  document.getElementById("council-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector("#council-form button[type=submit]");
    const fd = new FormData(e.target);
    const newMember = {
      id: editing ? editing.id : undefined,
      name: fd.get("name").trim(),
      position: fd.get("position").trim(),
      category: fd.get("category"),
      dept: fd.get("dept").trim(),
      year: fd.get("year").trim(),
      bio: fd.get("bio").trim(),
      email: fd.get("email").trim(),
      linkedin: fd.get("linkedin").trim(),
      instagram: fd.get("instagram").trim(),
      photoUrl, storagePath,
      rank: Number(fd.get("rank")) || 999,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Saving…";
    const dbRow = toDbCouncil(newMember);
    const query = editing
      ? supabaseClient.from("council_members").update(dbRow).eq("id", editing.id).select().single()
      : supabaseClient.from("council_members").insert(dbRow).select().single();
    const { data, error } = await query;

    if (error) {
      alert("Could not save member: " + error.message);
      submitBtn.disabled = false;
      submitBtn.textContent = editing ? "Save Changes" : "Add Member";
      return;
    }

    const saved = fromDbCouncil(data);
    if (editing) STATE.council = STATE.council.map((m) => (String(m.id) === String(editing.id) ? saved : m));
    else STATE.council = [...STATE.council, saved];

    closeForm();
    renderCouncil();
  });
}

function initCouncil() {
  buildCouncilFilters();
  renderCouncil();
  renderCouncilAdminActions();
  document.getElementById("council-search").addEventListener("input", (e) => { councilQuery = e.target.value; renderCouncil(); });
}

/* ==================================== EVENTS ==================================== */

let eventSport = "All";
let eventStatus = "Completed";
let eventQuery = "";

const STATUS_BADGE = {
  upcoming: `<span class="f-util text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full text-white bg-royal">Upcoming</span>`,
  completed: `<span class="f-util text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full text-white bg-forest">Completed</span>`,
};

function buildEventFilters() {
  const wrap = document.getElementById("event-filters");
  wrap.innerHTML = "";
  const admin = isAdmin();
  eventSportOptions().forEach((s) => {
    const item = el("div", "relative inline-flex group");
    const btn = el("button", "f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors", s);
    applyFilterStyle(btn, s === eventSport, "royal");
    btn.addEventListener("click", () => { eventSport = s; renderEvents(); buildEventFilters(); });
    item.appendChild(btn);
    if (admin && s !== "All") {
      const del = el("button", "absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity leading-none", "×");
      del.title = `Remove "${s}" tag`;
      del.addEventListener("click", (e) => { e.stopPropagation(); deleteEventSportTag(s); });
      item.appendChild(del);
    }
    wrap.appendChild(item);
  });

  const statusWrap = document.getElementById("event-status-filters");
  statusWrap.innerHTML = "";
  const statusLabel = el("span", "f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0] mr-1", "Status:");
  statusWrap.appendChild(statusLabel);
  [["upcoming", "Upcoming"], ["completed", "Completed"]].forEach(([val, label]) => {
    const btn = el("button", "f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors", label);
    applyFilterStyle(btn, val === eventStatus, "forest");
    btn.addEventListener("click", () => { eventStatus = val; renderEvents(); buildEventFilters(); });
    statusWrap.appendChild(btn);
  });
}

async function deleteEventSportTag(oldSport) {
  if (!isAdmin()) return;
  const affected = STATE.events.filter((e) => e.sport === oldSport);
  if (!confirm(`Delete the "${oldSport}" tag? This affects ${affected.length} event${affected.length === 1 ? "" : "s"}.`)) return;

  const replacement = prompt(`Re-tag the ${affected.length} event(s) currently under "${oldSport}" as (leave blank to delete those events entirely):`, "General");
  if (replacement === null) return;

  if (replacement.trim() === "") {
    if (!confirm(`Leaving this blank will permanently DELETE ${affected.length} event(s) under "${oldSport}". Continue?`)) return;
    for (const e of affected) {
      const { error } = await supabaseClient.from("events").delete().eq("id", e.id);
      if (error) { alert("Could not delete event: " + error.message); return; }
    }
    STATE.events = STATE.events.filter((e) => e.sport !== oldSport);
  } else {
    const { error } = await supabaseClient.from("events").update({ sport: replacement.trim() }).eq("sport", oldSport);
    if (error) { alert("Could not update events: " + error.message); return; }
    STATE.events = STATE.events.map((e) => e.sport === oldSport ? { ...e, sport: replacement.trim() } : e);
  }
  if (eventSport === oldSport) eventSport = "All";
  renderEvents();
  buildEventFilters();
}

function renderEventAdminActions() {
  const wrap = document.getElementById("events-admin-actions");
  wrap.innerHTML = "";
  if (!isAdmin()) return;
  const btn = el("button", "ripple f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2.5 rounded-full text-white bg-royal flex items-center gap-1.5");
  btn.innerHTML = `<i data-lucide="plus" class="w-[14px] h-[14px]"></i> Add Event`;
  btn.addEventListener("click", () => openEventForm(null));
  wrap.appendChild(btn);
  renderIcons();
}

function renderGalleryAdminActions() {
  const wrap = document.getElementById("gallery-admin-actions");
  wrap.innerHTML = "";
  if (!isAdmin()) return;
  const btn = el("button", "ripple f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2.5 rounded-full text-white bg-forest flex items-center gap-1.5");
  btn.innerHTML = `<i data-lucide="upload" class="w-[14px] h-[14px]"></i> Add Photos`;
  btn.addEventListener("click", () => document.getElementById("gallery-upload-input").click());
  wrap.appendChild(btn);
  renderIcons();
}
let eventsVisibleCount = 6;
let lastEventFilterKey = "";
function renderEvents() {
  const grid = document.getElementById("events-grid");
  const empty = document.getElementById("events-empty");
  grid.innerHTML = "";
  const list = STATE.events.filter((e) =>
    (eventSport === "All" || e.sport === eventSport) &&
    (eventStatus === "Completed" || e.status === eventStatus) &&
    e.name.toLowerCase().includes(eventQuery.toLowerCase())
  );

  const filterKey = `${eventSport}|${eventStatus}|${eventQuery}`;
  if (filterKey !== lastEventFilterKey) {
    eventsVisibleCount = 6;
    lastEventFilterKey = filterKey;
  }

  empty.classList.toggle("hidden", list.length > 0);
  const admin = isAdmin();
  const visibleList = list.slice(0, eventsVisibleCount);

  visibleList.forEach((e, i) => {
    const card = el("div", "reveal");
    card.style.animationDelay = `${(i % 3) * 90}ms`;
    const cover = e.images && e.images[0];
    card.innerHTML = `
      <div class="group bg-white rounded-2xl border border-line overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(15,76,129,0.28)]">
        <div class="relative overflow-hidden">
          <div class="transition-transform duration-500 group-hover:scale-105">
            ${ph({ icon: "trophy", ratio: "aspect-[16/10]", rounded: "rounded-none", label: e.sport, src: cover })}
          </div>
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="f-util text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-royal">${e.tag}</span>
            ${STATUS_BADGE[e.status] || ""}
          </div>
          ${admin ? `
            <div class="absolute top-4 right-4 flex gap-2">
              <button class="edit-event h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white" data-id="${e.id}" title="Edit event">
                <i data-lucide="pencil" class="w-[14px] h-[14px] text-royal"></i>
              </button>
              <button class="delete-event h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white" data-id="${e.id}" title="Delete event">
                <i data-lucide="trash-2" class="w-[14px] h-[14px] text-red-500"></i>
              </button>
            </div>` : ""}
        </div>
        <div class="p-6">
          <h3 class="f-display font-semibold text-lg text-charcoal">${e.name}</h3>
          <div class="flex items-center gap-4 mt-3 f-body text-[12.5px] text-[#8A93A0]">
            <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-[13px] h-[13px]"></i>${e.date}</span>
            <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-[13px] h-[13px]"></i>${e.venue}</span>
          </div>
          <p class="f-body text-sm text-[#5B6472] mt-3 leading-relaxed line-clamp-2">${e.description}</p>
          <button class="view-event mt-5 flex items-center gap-1.5 f-util text-[12px] font-bold uppercase tracking-wide text-royal" data-id="${e.id}">
            View Details <i data-lucide="arrow-right" class="w-[14px] h-[14px]"></i>
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  renderIcons();
  observeReveals();
  document.querySelectorAll(".view-event").forEach((b) => b.addEventListener("click", () => openEventModal(b.dataset.id)));
  document.querySelectorAll(".edit-event").forEach((b) => b.addEventListener("click", (ev) => { ev.stopPropagation(); openEventForm(b.dataset.id); }));
  document.querySelectorAll(".delete-event").forEach((b) => b.addEventListener("click", (ev) => { ev.stopPropagation(); deleteEvent(b.dataset.id); }));

  const existingBtn = document.getElementById("events-show-more");
  if (existingBtn) existingBtn.remove();
  if (list.length > eventsVisibleCount) {
    const showMoreWrap = el("div", "flex justify-center mt-10");
    showMoreWrap.id = "events-show-more";
    const btn = el("button", "ripple f-util text-sm font-bold uppercase tracking-wide px-8 py-3.5 rounded-full border border-royal text-royal hover:bg-royal hover:text-white transition-colors", "Show More Events");
    btn.addEventListener("click", () => {
      eventsVisibleCount += 6;
      renderEvents();
    });
    showMoreWrap.appendChild(btn);
    grid.insertAdjacentElement("afterend", showMoreWrap);
  }
}
async function deleteEvent(id) {
  const ev = STATE.events.find((e) => e.id === id);
  if (!ev) return;
  if (!confirm(`Delete "${ev.name}"? This can't be undone.`)) return;
  const { error } = await supabaseClient.from("events").delete().eq("id", id);
  if (error) { alert("Could not delete event: " + error.message); return; }
  STATE.events = STATE.events.filter((e) => e.id !== id);
  renderEvents();
  buildEventFilters();
}

function openEventModal(id) {
  const ev = STATE.events.find((e) => e.id === id);
  if (!ev) return;
  const modal = document.getElementById("event-modal");
  const content = document.getElementById("event-modal-content");
  const cover = ev.images && ev.images[0];
  const galleryImages = ev.images && ev.images.length ? ev.images : [null, null, null];
  content.innerHTML = `
    <div class="relative">
      ${ph({ icon: "trophy", ratio: "aspect-[16/7]", rounded: "rounded-none", label: ev.sport, tone: "ink", src: cover })}
      <button id="close-event-modal" class="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white">
        <i data-lucide="x" class="w-[18px] h-[18px]"></i>
      </button>
      <div class="absolute bottom-4 left-6 flex gap-2">
        <span class="f-util text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-white text-royal">${ev.tag}</span>
        ${STATUS_BADGE[ev.status] || ""}
      </div>
    </div>
    <div class="p-7 sm:p-9">
      <div class="flex items-start justify-between gap-4">
        <h3 class="f-display font-bold text-2xl sm:text-3xl text-charcoal">${ev.name}</h3>
        ${isAdmin() ? `<button id="modal-edit-event" class="ripple shrink-0 f-util text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full border border-royal text-royal flex items-center gap-1.5"><i data-lucide="pencil" class="w-[13px] h-[13px]"></i> Edit</button>` : ""}
      </div>
      <div class="flex flex-wrap items-center gap-5 mt-3 f-body text-sm text-[#8A93A0]">
        <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-[14px] h-[14px]"></i>${ev.date}</span>
        <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-[14px] h-[14px]"></i>${ev.venue}</span>
        <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-[14px] h-[14px]"></i>${ev.participants} participants</span>
      </div>
      <p class="f-body text-[15px] text-[#5B6472] mt-5 leading-relaxed">${ev.description}</p>

      <div class="grid sm:grid-cols-2 gap-8 mt-8">
        <div>
          <h4 class="f-util text-[11px] font-bold uppercase tracking-wide mb-3 text-royal">Timeline</h4>
          <ul class="space-y-2.5">
            ${ev.timeline.map((t) => `<li class="flex gap-3 text-sm f-body"><span class="font-semibold text-[#0F1720] w-24 shrink-0">${t.time}</span><span class="text-[#5B6472]">${t.label}</span></li>`).join("") || `<li class="text-sm f-body text-[#8A93A0]">To be announced.</li>`}
          </ul>
        </div>
        <div>
          <h4 class="f-util text-[11px] font-bold uppercase tracking-wide mb-3 text-royal">Highlights</h4>
          <ul class="space-y-2">
            ${ev.highlights.map((h) => `<li class="flex gap-2.5 text-sm f-body text-[#5B6472]"><i data-lucide="zap" class="w-[14px] h-[14px] shrink-0 mt-0.5" style="color:var(--forest)"></i>${h}</li>`).join("") || `<li class="text-sm f-body text-[#8A93A0]">To be announced.</li>`}
          </ul>
        </div>
        <div>
          <h4 class="f-util text-[11px] font-bold uppercase tracking-wide mb-3 text-royal">Results</h4>
          <ul class="space-y-2">
            ${ev.results.map((r) => `<li class="flex justify-between text-sm f-body border-b border-[#F0F1F3] pb-2"><span class="text-[#8A93A0]">${r.pos}</span><span class="font-semibold text-[#0F1720]">${r.team}</span></li>`).join("") || `<li class="text-sm f-body text-[#8A93A0]">Not yet available.</li>`}
          </ul>
        </div>
        <div>
          <h4 class="f-util text-[11px] font-bold uppercase tracking-wide mb-3 text-royal">Organizers & Guests</h4>
          <p class="f-body text-sm text-[#5B6472] mb-1"><span class="font-semibold text-[#0F1720]">Organized by:</span> ${ev.organizers.join(", ") || "—"}</p>
          <p class="f-body text-sm text-[#5B6472]"><span class="font-semibold text-[#0F1720]">Chief Guest:</span> ${ev.chiefGuests.join(", ") || "—"}</p>
        </div>
      </div>

      <div class="mt-8">
        <h4 class="f-util text-[11px] font-bold uppercase tracking-wide mb-3 text-royal">Gallery</h4>
        <div class="grid grid-cols-3 gap-3">
          ${galleryImages.map((src, idx) => `<div class="${src ? "cursor-pointer" : ""}" ${src ? `data-gallery-idx="${idx}"` : ""}>${ph({ icon: "users", ratio: "aspect-square", src })}</div>`).join("")}
        </div>
      </div>

      <div class="flex flex-wrap gap-6 mt-8 pt-6 border-t border-[#F0F1F3]">
        <div>
          <h4 class="f-util text-[10px] font-bold uppercase tracking-wide text-[#8A93A0] mb-1.5">Sponsors</h4>
          <p class="f-body text-sm text-[#0F1720]">${ev.sponsors.join(" · ") || "—"}</p>
        </div>
        <div>
          <h4 class="f-util text-[10px] font-bold uppercase tracking-wide text-[#8A93A0] mb-1.5">Achievements</h4>
          <p class="f-body text-sm text-[#0F1720]">${ev.achievements.join(" · ") || "—"}</p>
        </div>
      </div>
    </div>`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  renderIcons();
  document.getElementById("close-event-modal").addEventListener("click", closeEventModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeEventModal(); });
  const editBtn = document.getElementById("modal-edit-event");
  if (editBtn) editBtn.addEventListener("click", () => { closeEventModal(); openEventForm(ev.id); });
  document.querySelectorAll("#event-modal-content [data-gallery-idx]").forEach((thumb) => {
    thumb.addEventListener("click", () => openEventGalleryLightbox(ev.images, Number(thumb.dataset.galleryIdx)));
  });
}
function closeEventModal() {
  const modal = document.getElementById("event-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
function openEventGalleryLightbox(images, startIndex) {
  const lightbox = document.getElementById("gallery-lightbox");
  let idx = startIndex;
  const render = () => {
    document.getElementById("gallery-lightbox-img").src = images[idx];
    document.getElementById("gallery-lightbox-count").textContent = `${idx + 1} / ${images.length}`;
  };
  render();
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");

  const prevBtn = document.getElementById("gallery-lightbox-prev");
  const nextBtn = document.getElementById("gallery-lightbox-next");
  const closeBtn = document.getElementById("gallery-lightbox-close");
  prevBtn.classList.toggle("hidden", images.length <= 1);
  nextBtn.classList.toggle("hidden", images.length <= 1);

  const goPrev = () => { idx = (idx - 1 + images.length) % images.length; render(); };
  const goNext = () => { idx = (idx + 1) % images.length; render(); };
  const close = () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    document.removeEventListener("keydown", onKey);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  prevBtn.onclick = goPrev;
  nextBtn.onclick = goNext;
  closeBtn.onclick = close;
  lightbox.onclick = (e) => { if (e.target === lightbox) close(); };
  document.addEventListener("keydown", onKey);
}

/* ---------- Admin: add / edit event form ---------- */

function openEventForm(id) {
  if (!isAdmin()) return;
  const editing = id ? STATE.events.find((e) => e.id === id) : null;
  const modal = document.getElementById("event-form-modal");
  const content = document.getElementById("event-form-content");
  const v = editing || {
    name: "", sport: "", date: "", venue: "", tag: "Annual", status: "upcoming",
    description: "", participants: 0, highlights: [], timeline: [], organizers: [],
    chiefGuests: [], results: [], sponsors: [], achievements: [], images: [],
  };
  const join = (arr) => (arr || []).join("\n");
  const joinTimeline = (arr) => (arr || []).map((t) => `${t.time} | ${t.label}`).join("\n");
  const joinResults = (arr) => (arr || []).map((r) => `${r.pos} | ${r.team}`).join("\n");

  content.innerHTML = `
    <div class="flex items-center justify-between p-6 border-b border-line">
      <h3 class="f-display font-bold text-xl text-charcoal">${editing ? "Edit Event" : "Add New Event"}</h3>
      <button id="close-event-form" class="text-[#8A93A0] hover:text-charcoal"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <form id="event-form" class="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Event Name *</span>
          <input name="name" required value="${escAttr(v.name)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Sport *</span>
          <input name="sport" required value="${escAttr(v.sport)}" placeholder="e.g. Cricket" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Date *</span>
          <input name="date" required value="${escAttr(v.date)}" placeholder="e.g. Mar 14–21, 2026" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Venue *</span>
          <input name="venue" required value="${escAttr(v.venue)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Status *</span>
          <select name="status" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal">
            <option value="upcoming" ${v.status === "upcoming" ? "selected" : ""}>Upcoming</option>
            <option value="completed" ${v.status === "completed" ? "selected" : ""}>Completed</option>
          </select>
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Tag</span>
          <input name="tag" value="${escAttr(v.tag)}" placeholder="Flagship / Annual / Open" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Participants</span>
          <input name="participants" type="number" min="0" value="${v.participants || 0}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
      </div>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Description *</span>
        <textarea name="description" required rows="3" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(v.description)}</textarea>
      </label>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Highlights <span class="font-normal normal-case text-[#B0B6BE]">(one per line)</span></span>
        <textarea name="highlights" rows="3" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(join(v.highlights))}</textarea>
      </label>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Timeline <span class="font-normal normal-case text-[#B0B6BE]">(one per line: Time | Label)</span></span>
        <textarea name="timeline" rows="3" placeholder="Day 1 | League matches" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(joinTimeline(v.timeline))}</textarea>
      </label>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Results <span class="font-normal normal-case text-[#B0B6BE]">(one per line: Position | Team, leave blank until decided)</span></span>
        <textarea name="results" rows="2" placeholder="Champions | Dept. of CSE" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(joinResults(v.results))}</textarea>
      </label>

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Organizers <span class="font-normal normal-case text-[#B0B6BE]">(comma separated)</span></span>
          <input name="organizers" value="${escAttr(join(v.organizers).replace(/\n/g, ", "))}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Chief Guests <span class="font-normal normal-case text-[#B0B6BE]">(comma separated)</span></span>
          <input name="chiefGuests" value="${escAttr(join(v.chiefGuests).replace(/\n/g, ", "))}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Sponsors <span class="font-normal normal-case text-[#B0B6BE]">(comma separated)</span></span>
          <input name="sponsors" value="${escAttr(join(v.sponsors).replace(/\n/g, ", "))}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Achievements <span class="font-normal normal-case text-[#B0B6BE]">(comma separated)</span></span>
          <input name="achievements" value="${escAttr(join(v.achievements).replace(/\n/g, ", "))}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
      </div>

      <div>
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Event Photos</span>
        <div id="event-form-images" class="grid grid-cols-4 gap-2 mt-2"></div>
        <div class="mt-2 flex items-center gap-3">
          <label class="inline-flex items-center gap-2 f-util text-[12px] font-bold uppercase tracking-wide text-royal cursor-pointer">
            <i data-lucide="upload" class="w-[14px] h-[14px]"></i> Upload Photos
            <input type="file" id="event-form-image-input" accept="image/*" multiple class="hidden" />
          </label>
          <span id="event-form-upload-status" class="f-util text-[11px] text-[#8A93A0]"></span>
        </div>
      </div>

      <div class="flex gap-3 pt-2">
        <button type="submit" class="ripple f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full text-white bg-royal">${editing ? "Save Changes" : "Add Event"}</button>
        <button type="button" id="cancel-event-form" class="f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full border border-line text-[#5B6472]">Cancel</button>
      </div>
    </form>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  renderIcons();

  let formImages = [...(v.images || [])];
  const renderFormImages = () => {
    const wrap = document.getElementById("event-form-images");
    wrap.innerHTML = formImages.map((src, idx) => `
      <div class="relative aspect-square rounded-lg overflow-hidden border border-line">
        <img src="${src}" class="w-full h-full object-cover" />
        <button type="button" data-idx="${idx}" class="remove-form-image absolute top-1 right-1 h-6 w-6 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80">
          <i data-lucide="x" class="w-3 h-3"></i>
        </button>
      </div>`).join("");
    renderIcons();
    wrap.querySelectorAll(".remove-form-image").forEach((b) => b.addEventListener("click", () => {
      formImages.splice(Number(b.dataset.idx), 1);
      renderFormImages();
    }));
  };
  renderFormImages();

  document.getElementById("event-form-image-input").addEventListener("change", async (e) => {
    const files = Array.from(e.target.files || []);
    const status = document.getElementById("event-form-upload-status");
    for (const [idx, file] of files.entries()) {
      status.textContent = `Uploading ${idx + 1} of ${files.length}…`;
      try {
        const { url } = await uploadPhoto(file, "events");
        formImages.push(url);
      } catch (err) {
        console.error(err);
        alert("Photo upload failed: " + err.message);
      }
    }
    status.textContent = "";
    renderFormImages();
    e.target.value = "";
  });

  const closeForm = () => { modal.classList.add("hidden"); modal.classList.remove("flex"); };
  document.getElementById("close-event-form").addEventListener("click", closeForm);
  document.getElementById("cancel-event-form").addEventListener("click", closeForm);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeForm(); });

  document.getElementById("event-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector("#event-form button[type=submit]");
    const fd = new FormData(e.target);
    const splitLines = (str) => String(str || "").split("\n").map((s) => s.trim()).filter(Boolean);
    const splitCommas = (str) => String(str || "").split(",").map((s) => s.trim()).filter(Boolean);
    const newEvent = {
      id: editing ? editing.id : slugify(fd.get("name")),
      name: fd.get("name").trim(),
      sport: fd.get("sport").trim(),
      date: fd.get("date").trim(),
      venue: fd.get("venue").trim(),
      status: fd.get("status"),
      tag: fd.get("tag").trim() || "Annual",
      description: fd.get("description").trim(),
      participants: Number(fd.get("participants")) || 0,
      highlights: splitLines(fd.get("highlights")),
      timeline: splitLines(fd.get("timeline")).map((line) => {
        const [time, ...rest] = line.split("|");
        return { time: (time || "").trim(), label: rest.join("|").trim() };
      }),
      results: splitLines(fd.get("results")).map((line) => {
        const [pos, ...rest] = line.split("|");
        return { pos: (pos || "").trim(), team: rest.join("|").trim() };
      }),
      organizers: splitCommas(fd.get("organizers")),
      chiefGuests: splitCommas(fd.get("chiefGuests")),
      sponsors: splitCommas(fd.get("sponsors")),
      achievements: splitCommas(fd.get("achievements")),
      images: formImages,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Saving…";
    const dbRow = toDbEvent(newEvent);
    const { error } = editing
      ? await supabaseClient.from("events").update(dbRow).eq("id", editing.id)
      : await supabaseClient.from("events").insert(dbRow);

    if (error) {
      alert("Could not save event: " + error.message);
      submitBtn.disabled = false;
      submitBtn.textContent = editing ? "Save Changes" : "Add Event";
      return;
    }

    if (editing) {
      STATE.events = STATE.events.map((ev) => (ev.id === editing.id ? newEvent : ev));
    } else {
      STATE.events = [newEvent, ...STATE.events];
    }
    closeForm();
    renderEvents();
    buildEventFilters();
  });
}

function escHtml(str) { return String(str || "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])); }
function escAttr(str) { return escHtml(str).replace(/"/g, "&quot;"); }

function initEvents() {
  buildEventFilters();
  renderEvents();
  renderEventAdminActions();
  document.getElementById("event-search").addEventListener("input", (e) => { eventQuery = e.target.value; renderEvents(); });
}

/* ==================================== GALLERY ==================================== */

let galleryCat = "All";

function buildGalleryFilters() {
  const wrap = document.getElementById("gallery-filters");
  wrap.innerHTML = "";
  if (galleryCat !== "All") {
    const back = el("button", "f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2 rounded-full border border-line text-charcoal hover:border-forest flex items-center gap-1.5");
    back.innerHTML = `<i data-lucide="arrow-left" class="w-[13px] h-[13px]"></i> All Folders`;
    back.addEventListener("click", () => { galleryCat = "All"; renderGallery(); buildGalleryFilters(); });
    wrap.appendChild(back);
    renderIcons();
  }
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("gallery-empty");
  grid.innerHTML = "";

  if (galleryCat === "All") {
    // Folder view — one card per sport/category.
    grid.className = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5";
    const categories = galleryCategoryOptions().filter((c) => c !== "All");
    empty.classList.toggle("hidden", categories.length > 0);
    categories.forEach((cat, i) => {
      const photosInCat = STATE.gallery.filter((g) => g.category === cat);
      const cover = photosInCat.find((g) => g.src)?.src || "";
      const folder = el("button", "reveal group text-left");
      folder.style.animationDelay = `${(i % 8) * 60}ms`;
      folder.innerHTML = `
        <div class="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-line">
          ${ph({ icon: "folder", ratio: "aspect-[4/3]", rounded: "rounded-2xl", label: cat, src: cover })}
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <p class="f-display font-semibold text-sm mt-2.5 text-charcoal">${cat}</p>
        <p class="f-util text-[11px] text-[#8A93A0]">${photosInCat.length} photo${photosInCat.length === 1 ? "" : "s"}</p>`;
      folder.addEventListener("click", () => { galleryCat = cat; renderGallery(); buildGalleryFilters(); });
      grid.appendChild(folder);
    });
    renderIcons();
    observeReveals();
    return;
  }

  // A folder is open — show its photos, same as the old flat grid.
  grid.className = "columns-2 sm:columns-3 lg:columns-4 gap-4";
  const list = STATE.gallery.filter((g) => g.category === galleryCat);
  empty.classList.toggle("hidden", list.length > 0);
  const admin = isAdmin();
  list.forEach((g, i) => {
    const item = el("div", "reveal break-inside-avoid mb-4");
    item.style.animationDelay = `${(i % 8) * 60}ms`;
    const ratio = g.tall ? "aspect-[3/4]" : "aspect-square";
    item.innerHTML = `
      <div class="relative group">
        <button class="gallery-item block w-full relative overflow-hidden rounded-xl" data-id="${g.id}">
          <div class="transition-transform duration-500 group-hover:scale-110">
            ${ph({ icon: "users", ratio, rounded: "rounded-xl", label: g.category, tone: i % 2 ? "forest" : "", src: g.src })}
          </div>
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
        </button>
        ${admin ? `
          <button class="delete-photo absolute top-2 right-2 h-7 w-7 rounded-full bg-black/60 hover:bg-red-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity" data-id="${g.id}" title="Delete photo">
            <i data-lucide="trash-2" class="w-[13px] h-[13px]"></i>
          </button>` : ""}
      </div>`;
    grid.appendChild(item);
  });
  renderIcons();
  observeReveals();
  document.querySelectorAll(".gallery-item").forEach((b) => b.addEventListener("click", () => openLightbox(b.dataset.id)));
  document.querySelectorAll(".delete-photo").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); deletePhoto(b.dataset.id); }));
}

async function deletePhoto(id) {
  const photo = STATE.gallery.find((g) => String(g.id) === String(id));
  if (!photo) return;
  if (!confirm("Delete this photo? This can't be undone.")) return;
  const { error } = await supabaseClient.from("gallery_photos").delete().eq("id", id);
  if (error) { alert("Could not delete photo: " + error.message); return; }
  if (photo.storage_path) {
    await supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).remove([photo.storage_path]);
  }
  STATE.gallery = STATE.gallery.filter((g) => String(g.id) !== String(id));
  renderGallery();
  buildGalleryFilters();
}

function openLightbox(id) {
  const g = STATE.gallery.find((x) => String(x.id) === String(id));
  if (!g) return;
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = `
    ${ph({ icon: "users", ratio: "aspect-square", label: g.category, src: g.src })}
    <p class="f-body text-white/70 text-sm text-center mt-4">${g.caption}</p>`;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  renderIcons();
}
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
}

async function handleGalleryUpload(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  const category = prompt(
    `Category for ${files.length > 1 ? "these photos" : "this photo"}?\n(existing: ${galleryCategoryOptions().filter((c) => c !== "All").join(", ")})`,
    galleryCategoryOptions().find((c) => c !== "All") || "General"
  );
  if (category === null) return;
  for (const file of files) {
    try {
      const { url, path } = await uploadPhoto(file, "gallery");
      const row = { category: category.trim() || "General", caption: file.name, tall: false, src: url, storage_path: path };
      const { data, error } = await supabaseClient.from("gallery_photos").insert(row).select().single();
      if (error) throw error;
      STATE.gallery.unshift(data);
    } catch (err) {
      console.error(err);
      alert("Could not add photo: " + err.message);
    }
  }
  renderGallery();
  buildGalleryFilters();
}

function initGallery() {
  buildGalleryFilters();
  renderGallery();
  renderGalleryAdminActions();
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.getElementById("gallery-upload-input").addEventListener("change", (e) => { handleGalleryUpload(e.target.files); e.target.value = ""; });
}

/* ==================================== SPORTS OFFERED ==================================== */

function buildSports() {
  const grid = document.getElementById("sports-grid");
  SPORTS.forEach((s, i) => {
    const card = el("div", "reveal");
    card.style.animationDelay = `${(i % 3) * 80}ms`;
    card.innerHTML = `
      <div class="group p-7 rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-18px_rgba(15,76,129,0.25)]">
        <div class="h-12 w-12 rounded-xl flex items-center justify-center mb-5 bg-royal/10">
          <i data-lucide="${s.icon}" class="w-[22px] h-[22px] text-royal"></i>
        </div>
        <h3 class="f-display font-semibold text-lg mb-1.5 text-charcoal">${s.name}</h3>
        <p class="f-body text-sm text-[#5B6472] leading-relaxed">${s.desc}</p>
      </div>`;
    grid.appendChild(card);
  });
}

/* ==================================== ACHIEVEMENTS ==================================== */

const ACHIEVEMENT_ICONS = ["trophy", "medal", "award", "star", "flag", "target"];

function renderAchievementAdminActions() {
  const wrap = document.getElementById("achievements-admin-actions");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (!isAdmin()) return;
  const btn = el("button", "ripple f-util text-[12px] font-bold uppercase tracking-wide px-4 py-2.5 rounded-full text-white bg-forest flex items-center gap-1.5");
  btn.innerHTML = `<i data-lucide="plus" class="w-[14px] h-[14px]"></i> Add Achievement`;
  btn.addEventListener("click", () => openAchievementForm(null));
  wrap.appendChild(btn);
  renderIcons();
}

function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  grid.innerHTML = "";
  const admin = isAdmin();
  STATE.achievements.forEach((a, i) => {
    const card = el("div", "reveal");
    card.style.animationDelay = `${(i % 3) * 80}ms`;
    card.innerHTML = `
      <div class="group relative bg-white rounded-2xl border border-line h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(31,111,80,0.22)]">
        ${admin ? `
          <div class="absolute top-3 right-3 flex gap-1.5 z-10">
            <button class="edit-achievement h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white" data-id="${a.id}" title="Edit achievement">
              <i data-lucide="pencil" class="w-[13px] h-[13px] text-royal"></i>
            </button>
            <button class="delete-achievement h-7 w-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white" data-id="${a.id}" title="Delete achievement">
              <i data-lucide="trash-2" class="w-[13px] h-[13px] text-red-500"></i>
            </button>
          </div>` : ""}
        ${a.photoUrl ? ph({ icon: a.icon, ratio: "aspect-[16/9]", rounded: "rounded-none", src: a.photoUrl }) : ""}
        <div class="p-7">
          <div class="flex items-center justify-between mb-5">
            <div class="h-12 w-12 rounded-xl flex items-center justify-center bg-forest/10">
              <i data-lucide="${a.icon}" class="w-[22px] h-[22px] text-forest"></i>
            </div>
            <span class="f-util text-[11px] font-bold text-[#8A93A0]">${a.year}</span>
          </div>
          <h3 class="f-display font-semibold text-lg mb-1.5 text-charcoal">${a.title}</h3>
          <p class="f-body text-sm text-[#5B6472] leading-relaxed">${a.description}</p>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  renderIcons();
  observeReveals();
  document.querySelectorAll(".edit-achievement").forEach((b) => b.addEventListener("click", () => openAchievementForm(b.dataset.id)));
  document.querySelectorAll(".delete-achievement").forEach((b) => b.addEventListener("click", () => deleteAchievement(b.dataset.id)));
}

async function deleteAchievement(id) {
  const a = STATE.achievements.find((x) => String(x.id) === String(id));
  if (!a) return;
  if (!confirm(`Delete "${a.title}"?`)) return;
  const { error } = await supabaseClient.from("achievements").delete().eq("id", id);
  if (error) { alert("Could not delete achievement: " + error.message); return; }
  if (a.storagePath) await supabaseClient.storage.from(SUPABASE_PHOTO_BUCKET).remove([a.storagePath]);
  STATE.achievements = STATE.achievements.filter((x) => String(x.id) !== String(id));
  renderAchievements();
}

/* ---------- Admin: add / edit achievement form ---------- */

function openAchievementForm(id) {
  if (!isAdmin()) return;
  const editing = id ? STATE.achievements.find((a) => String(a.id) === String(id)) : null;
  const modal = document.getElementById("achievement-form-modal");
  const content = document.getElementById("achievement-form-content");
  const v = editing || { icon: "trophy", title: "", description: "", year: "", photoUrl: "", storagePath: "" };

  content.innerHTML = `
    <div class="flex items-center justify-between p-6 border-b border-line">
      <h3 class="f-display font-bold text-xl text-charcoal">${editing ? "Edit Achievement" : "Add Achievement"}</h3>
      <button id="close-achievement-form" class="text-[#8A93A0] hover:text-charcoal"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <form id="achievement-form" class="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
      <div>
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Photo <span class="font-normal normal-case text-[#B0B6BE]">(optional — shows above the icon if added)</span></span>
        <div class="flex items-center gap-4 mt-2">
          <div id="achievement-form-photo-preview" class="w-28 h-16 rounded-lg overflow-hidden border border-line shrink-0">
            ${v.photoUrl ? ph({ icon: v.icon, ratio: "aspect-[16/9]", rounded: "rounded-lg", src: v.photoUrl }) : `<div class="w-full h-full flex items-center justify-center bg-mist text-[#B0B6BE]"><i data-lucide="image" class="w-5 h-5"></i></div>`}
          </div>
          <div class="flex flex-col gap-2">
            <label class="inline-flex items-center gap-2 f-util text-[12px] font-bold uppercase tracking-wide text-royal cursor-pointer">
              <i data-lucide="upload" class="w-[14px] h-[14px]"></i> Upload Photo
              <input type="file" id="achievement-form-photo-input" accept="image/*" class="hidden" />
            </label>
            <button type="button" id="achievement-form-remove-photo" class="text-left f-util text-[12px] font-bold uppercase tracking-wide text-red-500 ${v.photoUrl ? "" : "hidden"}">Remove Photo</button>
            <span id="achievement-form-upload-status" class="f-util text-[11px] text-[#8A93A0]"></span>
          </div>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Title *</span>
          <input name="title" required value="${escAttr(v.title)}" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Year</span>
          <input name="year" value="${escAttr(v.year)}" placeholder="e.g. 2025" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal" />
        </label>
        <label class="block sm:col-span-2">
          <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Icon</span>
          <select name="icon" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal">
            ${ACHIEVEMENT_ICONS.map((ic) => `<option value="${ic}" ${v.icon === ic ? "selected" : ""}>${ic}</option>`).join("")}
          </select>
        </label>
      </div>

      <label class="block">
        <span class="f-util text-[11px] font-bold uppercase tracking-wide text-[#8A93A0]">Description</span>
        <textarea name="description" rows="3" class="mt-1.5 f-body text-sm px-4 py-3 rounded-xl border border-line w-full outline-none focus:border-royal resize-none">${escHtml(v.description)}</textarea>
      </label>

      <div class="flex gap-3 pt-2">
        <button type="submit" class="ripple f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full text-white bg-forest">${editing ? "Save Changes" : "Add Achievement"}</button>
        <button type="button" id="cancel-achievement-form" class="f-util text-sm font-bold uppercase tracking-wide px-7 py-3.5 rounded-full border border-line text-[#5B6472]">Cancel</button>
      </div>
    </form>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  renderIcons();

  let photoUrl = v.photoUrl || "";
  let storagePath = v.storagePath || "";

  const updatePreview = () => {
    const iconNow = document.querySelector('#achievement-form select[name="icon"]').value;
    document.getElementById("achievement-form-photo-preview").innerHTML = photoUrl
      ? ph({ icon: iconNow, ratio: "aspect-[16/9]", rounded: "rounded-lg", src: photoUrl })
      : `<div class="w-full h-full flex items-center justify-center bg-mist text-[#B0B6BE]"><i data-lucide="image" class="w-5 h-5"></i></div>`;
    renderIcons();
    document.getElementById("achievement-form-remove-photo").classList.toggle("hidden", !photoUrl);
  };

  document.getElementById("achievement-form-photo-input").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const status = document.getElementById("achievement-form-upload-status");
    status.textContent = "Uploading…";
    try {
      const { url, path } = await uploadPhoto(file, "achievements");
      photoUrl = url;
      storagePath = path;
      updatePreview();
    } catch (err) {
      alert("Photo upload failed: " + err.message);
    }
    status.textContent = "";
    e.target.value = "";
  });

  document.getElementById("achievement-form-remove-photo").addEventListener("click", () => {
    photoUrl = "";
    storagePath = "";
    updatePreview();
  });

  const closeForm = () => { modal.classList.add("hidden"); modal.classList.remove("flex"); };
  document.getElementById("close-achievement-form").addEventListener("click", closeForm);
  document.getElementById("cancel-achievement-form").addEventListener("click", closeForm);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeForm(); });

  document.getElementById("achievement-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector("#achievement-form button[type=submit]");
    const fd = new FormData(e.target);
    const newAchievement = {
      id: editing ? editing.id : undefined,
      icon: fd.get("icon"),
      title: fd.get("title").trim(),
      description: fd.get("description").trim(),
      year: fd.get("year").trim(),
      photoUrl, storagePath,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = "Saving…";
    const dbRow = toDbAchievement(newAchievement);
    const query = editing
      ? supabaseClient.from("achievements").update(dbRow).eq("id", editing.id).select().single()
      : supabaseClient.from("achievements").insert(dbRow).select().single();
    const { data, error } = await query;

    if (error) {
      alert("Could not save achievement: " + error.message);
      submitBtn.disabled = false;
      submitBtn.textContent = editing ? "Save Changes" : "Add Achievement";
      return;
    }

    const saved = fromDbAchievement(data);
    if (editing) STATE.achievements = STATE.achievements.map((a) => (String(a.id) === String(editing.id) ? saved : a));
    else STATE.achievements = [saved, ...STATE.achievements];

    closeForm();
    renderAchievements();
  });
}

function initAchievements() {
  renderAchievements();
  renderAchievementAdminActions();
}

/* ==================================== STATS (animated counters) ==================================== */

function buildStats() {
  const grid = document.getElementById("stats-grid");
  STATS.forEach((s, i) => {
    const item = el("div", "reveal text-center lg:text-left stat-item");
    item.style.animationDelay = `${i * 70}ms`;
    item.dataset.value = s.value;
    item.dataset.suffix = s.suffix;
    item.innerHTML = `
      <div class="f-display font-bold text-white text-4xl sm:text-5xl"><span class="stat-num">0</span>${s.suffix}</div>
      <p class="f-util text-[11px] uppercase tracking-widest text-white/50 mt-2">${s.label}</p>`;
    grid.appendChild(item);
  });
}

function animateCounter(item) {
  const target = parseInt(item.dataset.value, 10);
  const numEl = item.querySelector(".stat-num");
  const duration = 1600;
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    numEl.textContent = Math.floor(eased * target).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
    else numEl.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

function initStatsCounters() {
  const items = document.querySelectorAll(".stat-item");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCounter(entry.target); io.unobserve(entry.target); }
    });
  }, { threshold: 0.3 });
  items.forEach((i) => io.observe(i));
}

/* ==================================== SCROLL PROGRESS + SCROLL TOP ==================================== */

function initScrollExtras() {
  const progressBar = document.getElementById("scroll-progress");
  const scrollTopBtn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progressBar.style.width = `${p || 0}%`;
    const show = h.scrollTop > 800;
    scrollTopBtn.classList.toggle("opacity-100", show);
    scrollTopBtn.classList.toggle("translate-y-0", show);
    scrollTopBtn.classList.toggle("pointer-events-auto", show);
    scrollTopBtn.classList.toggle("opacity-0", !show);
    scrollTopBtn.classList.toggle("translate-y-3", !show);
    scrollTopBtn.classList.toggle("pointer-events-none", !show);
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ==================================== ADMIN UI (ribbon, login) ==================================== */

function renderAdminRibbon() {
  const ribbon = document.getElementById("admin-ribbon");
  if (!isAdmin()) {
    ribbon.classList.add("hidden");
    ribbon.innerHTML = "";
    document.body.classList.remove("has-admin-ribbon");
    return;
  }
  document.body.classList.add("has-admin-ribbon");
  ribbon.classList.remove("hidden");
  ribbon.innerHTML = `
    <div class="bg-ink text-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-4">
        <div class="flex items-center gap-2 f-util text-[12px] font-bold uppercase tracking-wide text-white/90">
          <i data-lucide="shield-check" class="w-4 h-4" style="color:#4C8FCB"></i> Admin Mode
          <span class="hidden sm:inline text-white/50 normal-case font-normal">— ${currentSession?.user?.email || ""}</span>
        </div>
        <div class="flex items-center gap-2">
          ${(STATE.events.length === 0 || STATE.council.length === 0 || STATE.achievements.length === 0) ? `
            <button id="admin-seed-btn" class="f-util text-[11px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-full border border-white/25 text-white/85 hover:bg-white/10 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-[13px] h-[13px]"></i> Load Starter Content
            </button>` : ""}
          <button id="admin-logout-btn" class="f-util text-[11px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5">
            <i data-lucide="log-out" class="w-[13px] h-[13px]"></i> Log Out
          </button>
          <button id="admin-ad-btn" class="f-util text-[11px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-full border border-white/25 text-white/85 hover:bg-white/10 flex items-center gap-1.5">
            <i data-lucide="megaphone" class="w-[13px] h-[13px]"></i> ${STATE.ad ? "Edit Event Ad" : "Add Event Ad"}
          </button>
          <button id="admin-ad-btn" class="f-util text-[11px] font-bold uppercase tracking-wide px-3.5 py-2 rounded-full border border-white/25 text-white/85 hover:bg-white/10 flex items-center gap-1.5">
            <i data-lucide="megaphone" class="w-[13px] h-[13px]"></i> ${STATE.ad ? "Edit Event Ad" : "Add Event Ad"}
          </button>
        </div>
      </div>
    </div>`;
  renderIcons();
  document.getElementById("admin-logout-btn").addEventListener("click", adminLogout);
  const seedBtn = document.getElementById("admin-seed-btn");
  if (seedBtn) seedBtn.addEventListener("click", seedStarterContent);
  document.getElementById("admin-ad-btn").addEventListener("click", openAdForm);
}

function refreshAdminDependentUI() {
  // Re-render everything that shows different controls depending on admin state.
  renderAdminRibbon();
  renderEvents();
  renderEventAdminActions();
  renderGallery();
  renderGalleryAdminActions();
  renderCouncil();
  renderCouncilAdminActions();
  renderAchievements();
  renderAchievementAdminActions();
}

async function adminLogin(email, password) {
  if (!isBackendConfigured()) {
    return { error: "This site isn't connected to a database yet — fill in config.js first (see SETUP.md)." };
  }
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  currentSession = data.session;
  refreshAdminDependentUI();
  return { error: null };
}

async function adminLogout() {
  if (isBackendConfigured()) await supabaseClient.auth.signOut();
  currentSession = null;
  refreshAdminDependentUI();
}

function initAdmin() {
  renderAdminRibbon();

  const loginModal = document.getElementById("admin-login-modal");
  const openLogin = () => {
    if (isAdmin()) return; // already logged in, nothing to do
    loginModal.classList.remove("hidden");
    loginModal.classList.add("flex");
    document.getElementById("admin-login-error").classList.add("hidden");
    document.getElementById("admin-email-input").value = "";
    document.getElementById("admin-password-input").value = "";
    document.getElementById("admin-email-input").focus();
  };
  const closeLogin = () => {
    loginModal.classList.add("hidden");
    loginModal.classList.remove("flex");
  };

  document.getElementById("footer-admin-link").addEventListener("click", openLogin);
  document.getElementById("admin-login-close").addEventListener("click", closeLogin);
  loginModal.addEventListener("click", (e) => { if (e.target === loginModal) closeLogin(); });

  document.getElementById("admin-login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("admin-login-submit");
    const errorEl = document.getElementById("admin-login-error");
    submitBtn.disabled = true;
    submitBtn.textContent = "Logging in…";
    const { error } = await adminLogin(
      document.getElementById("admin-email-input").value,
      document.getElementById("admin-password-input").value
    );
    submitBtn.disabled = false;
    submitBtn.textContent = "Log In";
    if (error) {
      errorEl.textContent = error;
      errorEl.classList.remove("hidden");
    } else {
      closeLogin();
    }
  });

  // If the browser already has a Supabase session (e.g. you logged in earlier and didn't
  // log out), pick it back up automatically instead of asking you to log in again.
  if (isBackendConfigured()) {
    supabaseClient.auth.getSession().then(({ data }) => {
      currentSession = data.session;
      refreshAdminDependentUI();
    });
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentSession = session;
      refreshAdminDependentUI();
    });
  }
}

/** Live sync: when the admin adds/edits/deletes anything, every open browser tab
 *  (including visitors who never logged in) re-fetches and re-renders automatically. */
function initRealtime() {
  if (!isBackendConfigured()) return;
  supabaseClient
    .channel("public:events")
    .on("postgres_changes", { event: "*", schema: "public", table: "events" }, async () => {
      await loadState();
      renderEvents();
      buildEventFilters();
      renderAdminRibbon();
    })
    .subscribe();

  supabaseClient
    .channel("public:gallery_photos")
    .on("postgres_changes", { event: "*", schema: "public", table: "gallery_photos" }, async () => {
      await loadState();
      renderGallery();
      buildGalleryFilters();
    })
    .subscribe();

  supabaseClient
    .channel("public:council_members")
    .on("postgres_changes", { event: "*", schema: "public", table: "council_members" }, async () => {
      await loadState();
      renderCouncil();
      renderAdminRibbon();
    })
    .subscribe();

  supabaseClient
    .channel("public:achievements")
    .on("postgres_changes", { event: "*", schema: "public", table: "achievements" }, async () => {
      await loadState();
      renderAchievements();
      renderAdminRibbon();
    })
    .subscribe();
}

/* ==================================== INIT ==================================== */

document.addEventListener("DOMContentLoaded", async () => {
  buildNav();
  initNavBehavior();
  buildAbout();
  buildSports();
  buildStats();
  initScrollExtras();

  await loadState(); // fetch events, gallery, council, achievements from Supabase before first render
  renderAdPopup();
  initCouncil();
  initEvents();
  initGallery();
  initAchievements();
  initAdmin();
  initRealtime();

  renderIcons();
  attachRipple();
  observeReveals();
  initStatsCounters();

  if (!isBackendConfigured()) {
    console.warn(
      "KRIDANSH: config.js still has placeholder Supabase credentials. " +
      "The site is showing bundled placeholder content in read-only mode until you connect a database — see SETUP.md."
    );
  }

  // Ripple + reveal need to be reattached whenever dynamic content re-renders
  const globalObserver = new MutationObserver(() => { attachRipple(); });
  globalObserver.observe(document.body, { childList: true, subtree: true });
});
