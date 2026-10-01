/* ==========================================================================
   Abdullah Murtaza — portfolio
   --------------------------------------------------------------------------
   EVERY piece of text on the site lives in the CONFIG object below.
   Search the file for the word  REPLACE  to find everything you must edit
   before publishing. Nothing else in this file needs your content.

   To add a new project later: copy one { ... } object inside CONFIG.projects
   and edit it. The whole card, the counter and the filter chips are built
   from that array automatically — you never touch the HTML.
   ========================================================================== */

const CONFIG = {

  /* ------------------------------------------------------------------ you */
  meta: {
    name:     "Abdullah Murtaza",                  // REPLACE if you want your full legal name
    short:    "Abdullah",
    role:     "BS Software Engineering student · COMSATS University Islamabad, Attock Campus",
    location: "Attock, Punjab, Pakistan",
    uni:      "COMSATS University Islamabad — Attock Campus",
    program:  "BS Software Engineering",
    semester: "1st semester",
    email:    "abdullahmurtaza2260@gmail.com",     // set 29 Sep 2026
  },

  /* ----------------------------------------------------------------- hero */
  hero: {
    status: "Available for freelance work",
    lede:   "I am a first-semester Software Engineering student who builds complete things: " +
            "a 2D game written from scratch in Godot 4, and the tooling and tests that keep it working. " +
            "I learn by finishing, not by starting.",
    facts: [                                       // REPLACE / add as you go — 3 to 4 reads best
      { value: "1st",   label: "Semester · BS SE" },
      { value: "1",     label: "Game built end to end" },
      { value: "10–15", label: "Hours a week building" },
      { value: "2026",  label: "Started building" }
    ],
    terminalTitle: "abdullah@portfolio: ~",
    terminal: [                                    // typed out line by line in the hero
      { cmd: "whoami",          out: "Abdullah Murtaza — BS Software Engineering, COMSATS Islamabad (Attock Campus)" },
      { cmd: "cat focus.txt",   out: "Godot 4 / GDScript · game systems · Python · clean, tested code" },
      { cmd: "ls projects/",    out: "the-last-light/" },
      { cmd: "ls now/",         out: "semester-1/   open-to-freelance-work/" }
    ]
  },

  /* ---------------------------------------------------------------- about */
  about: {
    heading: "A first-year student who ships finished things, not half-finished ideas.",
    paragraphs: [                                  // REPLACE — keep it in your own voice
      "I am Abdullah Murtaza, a 1st-semester **BS Software Engineering** student at " +
      "COMSATS University Islamabad, Attock Campus. I started learning to build software seriously " +
      "in 2026 and I have kept one rule since: every thing I start, I finish and test.",

      "My main project is **The Last Light**, a 2D story-driven platformer I am building in **Godot 4** " +
      "with pure GDScript. There are no imported art or audio assets in it at all — every sprite is drawn " +
      "in code and every sound is generated at runtime. It ships with a **headless acceptance suite of 97 " +
      "automated checks, all passing**, so I can prove it still works instead of hoping it does.",

      "Alongside university I put in **10–15 hours a week** on projects and fundamentals. My goal is " +
      "straightforward: build a body of real, working software that people can open and use, and turn that " +
      "into remote work while I am still studying."
    ],
    stats: [                                       // REPLACE the numbers as they change
      { k: "University",  v: "COMSATS, Attock" },
      { k: "Programme",   v: "BS Software Eng." },
      { k: "Semester",    v: "1st" },
      { k: "Main stack",  v: "Godot 4 · GDScript" },
      { k: "Test suite",  v: "97 checks" },
      { k: "Time/week",   v: "10–15 hours" }
    ]
  },

  /* --------------------------------------------------------------- skills */
  skills: {
    heading: "Honest about what I can do on my own, and what I am still learning.",
    note:    "Three levels only: I can build it, I can use it, or I am learning it. " +
             "Nothing here is claimed above what I can actually do in an interview.",
    groups: [                                      // REPLACE — trim or extend to match reality
      {
        group: "Languages & engines",
        items: [
          { name: "GDScript / Godot 4", level: "Can build", note: "2D platformer systems: state machines, collision, level flow, signals." },
          { name: "Python",             level: "Can build", note: "Scripts, file and media automation, command-line tools, standard library first." },
          { name: "C++",                level: "Learning",  note: "University coursework level." }
        ]
      },
      {
        group: "Craft & workflow",
        items: [
          { name: "Automated testing",  level: "Can build", note: "Headless test scenes; 97 checks running against the game." },
          { name: "Git & GitHub",       level: "Can use",   note: "Commits, branches, remotes, publishing a site with GitHub Pages." },
          { name: "Debugging",          level: "Can use",   note: "Reading stack traces, isolating failures, fixing the cause not the symptom." }
        ]
      },
      {
        group: "Also comfortable with",
        items: [
          { name: "HTML / CSS",         level: "Can use",   note: "Hand-written, responsive, no frameworks needed." },
          { name: "JavaScript",         level: "Can use",   note: "Plain DOM work: rendering, events, observers." },
          { name: "Linux / command line", level: "Can use", note: "Navigation, pipes, running and reading builds." }
        ]
      }
    ]
  },

  /* --------------------------------------------------------------- work */
  work: {
    heading: "What I have built, and what I am building now."
  },

  /* ============================================================ PROJECTS
     Add a new project by copying one block. Fields:
       num      — leave as null and it is numbered automatically
       title    — project name
       kind     — short label shown in the badge ("Godot 4 game", "Python tool", ...)
       year     — when you built it
       summary  — 1–3 sentences, plain language, what it does
       highlights — the impressive specifics (numbers, constraints you beat)
       stack    — the chips
       tags     — used by the filter buttons; reuse existing words where possible
       image    — file in assets/images/ ; SVG placeholder works until you have a real shot
       links    — code / demo / case study. Use "" for one you do not have yet.
     ==================================================================== */
  projects: [
    {
      title: "The Last Light",
      kind: "Godot 4 game",
      year: "2026",
      summary: "A 2D story-driven platformer built in Godot 4 with pure GDScript. The whole thing runs " +
               "with zero imported assets: every visual is drawn at runtime in code and every sound is " +
               "synthesised while the game plays, so the project is portable and needs no art pipeline.",
      highlights: [
        "All art via procedural _draw() calls — no sprite files, no texture atlases",
        "All audio synthesised at runtime — no audio files shipped",
        "97-check headless acceptance suite, all passing — it builds and plays all nine levels without a human at the keyboard",
        "Game logic, level data and story text are separated, so my test suite can build and play all nine levels without a human at the keyboard",
        "Runs at 60 fps on an Intel HD 615 laptop using Godot's GL Compatibility renderer"
      ],
      stack: ["Godot 4", "GDScript", "Procedural art", "Runtime audio", "Automated tests"],
      tags: ["Game dev", "Godot", "Testing"],
      image: "assets/images/game/05_player_present_world.png",
      gallery: [                                  // thumbnails that swap the main shot on click
        { src: "assets/images/game/05_player_present_world.png",
          caption: "Chapter One — the present world. Nia carries the only light left." },
        { src: "assets/images/game/09_world_memory.png",
          caption: "The same street in the memory world — the game's core switch." },
        { src: "assets/images/game/13_journal.png",
          caption: "The journal: 27 memories across three chapters." },
        { src: "assets/images/game/17_beacon_kindled.png",
          caption: "Kindling a beacon to finish a level." }
      ],
      links: { code: "", demo: "" }               // REPLACE with real URLs when the repo/build is public
    }
    ,{
      title: "Salon OS",
      kind: "Client app · Ayan Beauty Salon",
      year: "2026",
      summary: "A salon operations app I built for Ayan Beauty Salon: customers book, staff and "
             + "time slots are managed, and every visit and wallet entry stays on the phone. It "
             + "ships as an installable web app and a signed Android APK, and it runs with no "
             + "server at all — nothing leaves the device unless the owner deliberately points it "
             + "somewhere.",
      highlights: [
        "3,236 lines of plain JavaScript — no framework, so it opens immediately on a cheap phone",
        "Offline-first: service worker plus on-device storage; the app never calls out on its own",
        "Sign-in keeps only a salted PBKDF2-HMAC-SHA256 digest, with a 5-attempt, 15-minute lockout enforced on both the phone and the server",
        "Bookings with staff and slot selection, optional add-ons, reminders, referrals and a PKR wallet ledger",
        "Schema migrations (V13/V14) so owner-managed data — including the animated haircut gallery — survives app updates",
        "Signed release APKs from a documented Gradle signing process: a 213 KB build, a SHA-256 checksum published with every release and a dated backup kept of each one",
        "No client identity is baked into the build: a fresh install shows a neutral name until the owner sets his own"
      ],
      stack: ["JavaScript", "PWA", "Service worker", "Android · Java", "Gradle", "PBKDF2 auth"],
      tags: ["Client work", "Web"],
      image: "assets/images/projects/salon-os.jpg",
      links: { code: "https://github.com/slowyy0477/barbor_shop",
               demo: "https://slowyy0477.github.io/barbor_shop/" }
    }
    ,{
      title: "Bravo Foods Kamra",
      kind: "Client site · React + Vite",
      year: "2026",
      summary: "A menu, deals and delivery site for a local restaurant, built to load quickly on "
             + "a phone over a weak connection. The owner changes a price by editing one data "
             + "file — no developer needed for the everyday changes.",
      highlights: [
        "Vite + React 19 + TypeScript, built to a static bundle that any cheap host can serve",
        "88 photos prepared for the web — 52 JPG sources through to 36 WebP — with a script that generates the menu imagery",
        "The whole menu lives in data/menu.json: one file to edit for a price change or a new deal",
        "Restaurant structured data (JSON-LD) so the name, address and hours read correctly in search results"
      ],
      stack: ["React 19", "TypeScript", "Vite", "pnpm", "WebP pipeline", "JSON-LD"],
      tags: ["Client work", "Web"],
      image: "assets/images/projects/bravo-foods.jpg",
      links: { code: "", demo: "" }
    }
    ,{
      title: "Reforge",
      kind: "Full-stack PWA",
      year: "2026",
      summary: "A habit-intelligence app: instead of another checkbox tracker it correlates "
             + "habits, tasks, focus sessions and mood into one explainable daily score, then "
             + "shows the patterns behind the best and worst days. Built as an installable PWA "
             + "with its own server, database and test suite.",
      highlights: [
        "Runs on Bun end to end — server, bundler, test runner and package manager, with no Node.js required",
        "Bun.serve backend using a typed route DSL with CSRF, auth and admin-guard middleware",
        "SQLite via bun:sqlite behind a thin data layer written so the database can be swapped for Postgres without touching route code",
        "TypeScript in strict mode with noUncheckedIndexedAccess across 96 source files",
        "Feature tests cover auth, authorization, scoring and the AI prompt layer",
        "Installable PWA — manifest and service worker — plus a Dockerfile for deployment"
      ],
      stack: ["Bun", "React 19", "TypeScript", "Bun.serve", "SQLite", "PWA"],
      tags: ["Web", "Full-stack", "Testing"],
      image: "assets/images/projects/reforge.jpg",
      links: { code: "https://github.com/slowyy0477/Reforge",
               demo: "https://slowyy0477.github.io/Reforge/" }
    }
    ,{
      title: "Quad",
      kind: "University network · database-first",
      year: "2026",
      summary: "A student network for one university: one profile for your studies, projects and "
             + "collaborations. I built it database-first, with permissions enforced in the "
             + "database rather than trusted to the screen, and it reports its own progress "
             + "honestly — a status page lists every feature and its real state, and anything "
             + "unbuilt says so instead of showing a mock-up.",
      highlights: [
        "16 migrations, 52 tables and 132 app.* SQL functions; every table carries row-level security policies",
        "296 database permission tests across 8 files, run against a real Postgres in-process",
        "Auth: sign-up, sign-in, sign-out, password reset and Google OAuth",
        "Eight written documents covering architecture, security, the database and deployment",
        "Feed reads and writes work today; likes, ranking and pagination are listed as unbuilt instead of faked"
      ],
      stack: ["Next.js", "React 19", "TypeScript", "PostgreSQL", "Row-level security", "Tailwind", "Playwright", "Vitest"],
      tags: ["Web", "Full-stack", "Testing"],
      image: "assets/images/projects/quad-cover.svg",
      links: { code: "", demo: "" }
    }
    ,{
      title: "School Management SaaS",
      kind: "Multi-tenant web app",
      year: "2026",
      summary: "A school operations product a school can run on its own Windows server with no "
             + "cloud services: people and admissions, academics, finance, communication, "
             + "documents, library, transport, hostel, inventory, reporting and audit — "
             + "multi-tenant, with access control enforced on the server.",
      highlights: [
        "Next.js 15 App Router + React 19 + Prisma 6 on PostgreSQL, TypeScript in strict mode across 184 source files",
        "A 1,898-line Prisma schema modelling the whole school domain",
        "Multi-tenant by design: every record is scoped to an organisation, with server-side role-based access control",
        "Local-first: no cloud database, no external auth provider, no telemetry and no mandatory AI provider",
        "Backup and restore scripts for both the database and uploaded files",
        "Built and documented in verified steps — steps 1 to 3 are in place; later steps are still ahead"
      ],
      stack: ["Next.js 15", "React 19", "TypeScript", "Prisma 6", "PostgreSQL", "RBAC"],
      tags: ["Web", "Full-stack"],
      image: "assets/images/projects/school-saas-cover.svg",
      links: { code: "", demo: "" }
    }
    ,{
      title: "Reel factory",
      kind: "Python pipeline",
      year: "2026",
      summary: "A one-file Python generator that turns a short story into a finished vertical "
             + "video: 1080×1920 at 30 fps, narrated and captioned word by word, with a music bed "
             + "made on the machine. Everything it uses is free and needs no account.",
      highlights: [
        "376 lines of standard-library Python — no framework and no paid API",
        "Narration from edge-tts neural voices, with word-level caption timings taken from the VTT file it writes",
        "Scene images generated from per-line prompts and fetched in parallel with a thread pool",
        "Music bed synthesised locally by ffmpeg, so nothing is downloaded",
        "Three finished reels, including a 47-second Hinglish horror story",
        "Packaged with captions and hashtags ready to post"
      ],
      stack: ["Python", "ffmpeg", "edge-tts", "libass", "ThreadPoolExecutor"],
      tags: ["Python"],
      image: "assets/images/projects/reel-factory.jpg",
      links: { code: "", demo: "" }
    }
    ,{
      title: "Civics quiz prep",
      kind: "Study app · single file",
      year: "2026",
      summary: "An offline quiz-prep app I built from my own notes for the HUM 208 Civics & "
             + "Community Engagement quiz, then published so my classmates could use it. The "
             + "whole thing is one HTML file: no build step, no sign-up, no server.",
      highlights: [
        "One self-contained 68 KB file — open it and it works, online or offline",
        "Covers two chapters of HUM 208 lecture material (Ch 1 + Ch 2)",
        "Hosted on GitHub Pages, so a classmate can open it on a phone with nothing to install"
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["Web"],
      image: "assets/images/projects/civics-quiz.jpg",
      links: { code: "https://github.com/slowyy0477/civics-quiz-prep",
               demo: "https://slowyy0477.github.io/civics-quiz-prep/" }
    }
    /* New projects go here. Example (delete the /* ... * / wrappers):
    ,{
      title: "Project name",
      kind: "Python tool",
      year: "2026",
      summary: "One or two sentences on what it does and why it is interesting.",
      highlights: [ "Specific, checkable fact", "Another one" ],
      stack: ["Python"],
      tags: ["Python"],
      image: "assets/images/placeholder.svg",
      links: { code: "", demo: "" }
    }
    */
  ],

  /* ------------------------------------------------------- in progress
     Honest "not finished yet" list. Keep it short — 2 or 3 at most,
     and remove each one as soon as it moves up into projects. */
  inProgress: {
    heading: "Currently building",
    items: [
      { title: "The Last Light — full level set",      note: "Extending the story platformer to a complete, publishable build." },
      { title: "Quad — the interface layer",           note: "The database, its permissions and 296 tests are done; the unbuilt screens are next." },
      { title: "School Management SaaS — later steps", note: "Steps 1 to 3 are in place and documented; the remaining modules are still to come." }
    ]
  },

  /* ======================================================= NOTES & PREP
     Free study material for other students. Put the file in assets/notes/
     and add one entry here. Nothing renders until there is at least one
     entry, and while the list is empty the section shows CONFIG.notes.empty
     instead of a blank gap — so it can ship before the first upload.

     Fields:
       course  — subject or course name
       topic   — what the sheet covers
       when    — "Oct 2026"
       format  — "PDF" | "Image" | "Script"
       size    — "180 KB" (optional)
       file    — path under assets/notes/ ; leave "" and the row is not linked yet
       note    — one line on what is in it or why it helped
     ==================================================================== */
  notes: {
    heading: "My semester notes, free to take.",
    note:    "Everything I make for my own quizzes and assignments ends up here. No sign-up, "
             + "nothing to pay, no email required — download it and use it.",
    empty:   "Nothing uploaded yet — my first quiz-prep sheets land here within the first few "
             + "weeks of the semester. Check back, or message me and I will send you what I have.",
    sectionTitle: "Notes & prep",
    items: [
      /* Copy this block for each upload:
      {
        course: "Programming Fundamentals",
        topic:  "Loops, functions and scope — one-page revision sheet",
        when:   "Oct 2026",
        format: "PDF",
        size:   "180 KB",
        file:   "assets/notes/pf-loops.pdf",
        note:   "The three loop types side by side, plus the off-by-one mistakes I kept making."
      }
      */
    ]
  },

  /* ========================================================== FYP HELP
     Offering to help other students shape and unblock their Final Year
     Project — ideas, scope, code and explanations. Deliberately not
     "I will do your FYP for you": that is academic misconduct for them and
     a liability for you. */
  fyp: {
    heading:  "Stuck on your FYP? I can help you shape it.",
    lede:     "Most Final Year Projects do not fail because the idea was bad. They fail because the "
              + "scope was too big, or because one piece of code would not run for three weeks. "
              + "That part I can help with.",
    ways: [
      { title: "Ideas and scope",
        body:  "We take your rough direction and cut it into something you can actually finish in two "
               + "semesters, with a demo you can show at the defence. You leave with a written scope, "
               + "not a vague plan." },
      { title: "Unblock the code",
        body:  "Your build will not run or a feature is stuck. I find the cause, fix it with you and "
               + "explain what was wrong — so you can answer questions about your own project." },
      { title: "Explain it properly",
        body:  "If a concept in your project is a black box to you, I will walk you through it until "
               + "you can explain it yourself. That is usually what the panel actually asks about." }
    ],
    examplesHeading: "Example directions I can help shape",
    examplesNote:    "These are illustration, not a menu — tell me your own idea and we will work from that.",
    examples: [
      { title: "A small 2D game",        body: "Like the one on this page: Godot 4, GDScript, procedural art, published as a downloadable build." },
      { title: "A data or automation tool", body: "Something that ingests messy real-world files and produces a clean report — easy to demo, easy to test." },
      { title: "A web app with a real user", body: "One narrow problem for a specific group (a shop, a clinic, a society), with a login and a database." }
    ],
    ratesHeading: "What it costs",
    rates: [
      { label: "Idea and scope session", price: "PKR 2,000", note: "One sitting, written scope afterwards." },
      { label: "Code help / debugging",  price: "PKR 3,000–15,000", note: "Depends how deep the problem is — I quote after I see it." },
      { label: "Explain-it walkthrough", price: "PKR 1,500 / hour", note: "Screen share, your questions, no recording unless you want one." }
    ],
    note: "One thing I will not do: write your project for you to hand in as your own. Beyond it being "
          + "misconduct you can be failed for, you cannot defend work you did not build. I will sit "
          + "beside you and make sure you can."
  },

  /* -------------------------------------------------------------- journey */
  journey: {
    heading: "Where I am, and what comes next.",
    items: [
      {
        when: "Now · Semester 1, 2026", state: "now",
        title: "BS Software Engineering — COMSATS University Islamabad, Attock Campus",
        body: "Studying the fundamentals while building real software outside class. " +
              "Right now that is The Last Light in Godot 4: game systems, testing, and finishing what I start."
      },
      {
        when: "Alongside · 2026", state: "",
        title: "Building in public",
        body: "Every project I finish goes on this site with the specifics — what it does, what it is built " +
              "with, and how it is tested. The list only grows; nothing gets quietly deleted."
      },
      {
        when: "Next · Semester 2", state: "next",
        title: "Data structures, deeper code, first paid work",
        body: "Coursework moves into data structures and systems programming, which is exactly the gap " +
              "between small projects and real products. This is also when I take on my first client work."
      },
      {
        when: "After that · Years 2–3", state: "",
        title: "Internship, then remote work",
        body: "The plan is a software internship while studying, then remote work with everything I have " +
              "built on this site in front of the people hiring."
      }
    ]
  },

  /* ------------------------------------------------------------- services */
  services: {
    heading: "Work you can hand me and forget about.",
    note:    "Straight pricing, quoted and agreed before anything starts. I am early in my degree, " +
             "so my prices match what I can genuinely deliver right now — they will go up as the work does.",
    plans: [                                        // REPLACE prices/scope with your real rates
      {
        name: "Small site or landing page",
        price: "from PKR 8,000",
        time: "3–7 days",
        who: "For: students, small businesses, personal pages.",
        includes: [
          "Hand-written HTML, CSS and JavaScript — no template",
          "Responsive on phone and desktop",
          "All text driven by one config file you can edit",
          "Works offline and loads fast with no framework weight"
        ],
        cta: "Ask about a site"
      },
      {
        name: "Script or automation",
        price: "from PKR 6,000",
        time: "2–5 days",
        who: "For: anything you currently do by hand, repeatedly.",
        includes: [
          "Python, standard library first — no paid services",
          "File, data or media processing to your spec",
          "Command-line tool with clear instructions",
          "Re-run safe: it never redoes work it already finished"
        ],
        cta: "Describe the task"
      },
      {
        name: "University project build",
        price: "from PKR 10,000",
        time: "1–3 weeks",
        who: "For: semester projects in Godot, Python or plain web.",
        includes: [
          "Built with you, explained line by line — not an anonymous hand-in",
          "Working demo, source code and a written report of what each part does",
          "Tests so you can show it working under questioning",
          "Honest answer up front if the scope is bigger than me"
        ],
        cta: "Send the brief"
      }
    ]
  },

  /* --------------------------------------------------------------- ticker
     The scrolling strip of words under the hero. Keep them to short, true
     things — tools you actually use. */
  ticker: [
    "Godot 4", "GDScript", "Procedural art", "Runtime audio", "Automated tests",
    "Python", "Git", "Debugging", "Semester 1 · 2026"
  ],

  promise: {
    heading: "My one rule",
    body: "I will not take a project I cannot finish. Send me the scope and I will tell you honestly " +
          "whether it is within what I can build today — and if it is not, I will tell you what I would " +
          "need to learn first. A missed deadline costs you more than a straight no."
  },

  /* -------------------------------------------------------------- contact */
  contact: {
    heading: "Tell me what you need built.",
    lede:    "Send the idea, the deadline and the budget — I will reply with an honest answer, " +
             "a fixed price and a date I will actually hit.",
    cta:     "Copy my email",
    status:  "Open to freelance work, part-time, remote",
    email:   "abdullahmurtaza2260@gmail.com",       // set 29 Sep 2026
    github:  "https://github.com/slowyy0477",       // verified: your real account
    linkedin:"https://www.linkedin.com/in/abdullah-murtaza-377349258/",
    whatsapp:"https://wa.me/923021817133"           // +92 302 1817133
  },

  /* --------------------------------------------------------------- footer */
  footer: {
    line:      "© 2026 Abdullah Murtaza. Built by hand.",
    builtWith: "Hand-written HTML, CSS and JavaScript. No frameworks."
  }
};

/* ========================================================================== */
/*  Everything below is the engine. You should not need to edit it.           */
/* ========================================================================== */
(function () {
  "use strict";

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Escape anything that gets built into an HTML string. */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* Allow **bold** in long-form copy only. */
  function rich(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  const isPlaceholder = (v) => !v || /REPLACE/i.test(String(v));

  /* ====================================================== 1. text binding */
  function fillConfigText(root) {
    $$("[data-config]", root || document).forEach(function (node) {
      const path = node.getAttribute("data-config").split(".");
      let value = CONFIG;
      for (let i = 0; i < path.length; i++) {
        if (value == null) break;
        value = value[path[i]];
      }
      if (value == null || value === "") return;      // leave the HTML fallback in place
      node.textContent = String(value);
    });
  }

  /* ==================================================== 2. hero sections */
  function renderHeroFacts() {
    const list = $(".hero__facts");
    if (!list) return;
    list.innerHTML = "";
    (CONFIG.hero.facts || []).forEach(function (f) {
      const li = document.createElement("li");
      li.appendChild(el("strong", null, f.value));
      li.appendChild(el("span", null, f.label));
      list.appendChild(li);
    });
  }

  function renderTicker() {
    const track = $("#tickerTrack");
    if (!track) return;
    const words = (CONFIG.ticker && CONFIG.ticker.length)
      ? CONFIG.ticker
      : ["Godot 4", "GDScript", "Procedural art", "Runtime audio", "Automated tests",
         "Python", "Git", "Problem solving", "Semester 1 · 2026"];
    track.innerHTML = "";
    /* two identical halves so the -50% keyframe loops seamlessly */
    for (let pass = 0; pass < 2; pass++) {
      words.forEach(function (w) { track.appendChild(el("span", null, w)); });
    }
  }

  /* ========================================================== 3. about */
  function renderAbout() {
    const box = $("#about .prose");
    if (box) {
      box.innerHTML = "";
      (CONFIG.about.paragraphs || []).forEach(function (p) {
        const node = document.createElement("p");
        node.innerHTML = rich(p);
        box.appendChild(node);
      });
    }
    const list = $("#statList");
    if (list) {
      list.innerHTML = "";
      (CONFIG.about.stats || []).forEach(function (s) {
        const row = document.createElement("div");
        row.appendChild(el("dt", null, s.k));
        row.appendChild(el("dd", null, s.v));
        list.appendChild(row);
      });
    }
  }

  /* ========================================================= 4. skills */
  function renderSkills() {
    const grid = $("#skillGrid");
    if (!grid) return;
    grid.innerHTML = "";
    (CONFIG.skills.groups || []).forEach(function (g) {
      const card = el("div", "skillcard");
      card.appendChild(el("h3", "skillcard__h", g.group));
      const ul = document.createElement("ul");
      (g.items || []).forEach(function (it) {
        const li = document.createElement("li");
        const name = el("div", "skillcard__name");
        name.appendChild(el("span", null, it.name));
        name.appendChild(el("span", "skillcard__lvl", it.level));
        li.appendChild(name);
        if (it.note) li.appendChild(el("div", "skillcard__note", it.note));
        ul.appendChild(li);
      });
      card.appendChild(ul);
      grid.appendChild(card);
    });
  }

  /* ======================================================= 5. projects */
  let activeTag = "All";

  function projectNode(p, index) {
    const art = el("article", "project");
    art.dataset.tags = (p.tags || []).join("|");
    art.setAttribute("data-anim", "");      // part of the reveal system

    const main = el("div", "project__main");
    main.appendChild(el("span", "project__num",
      (p.num != null ? p.num : String(index + 1).padStart(2, "0")) + (p.year ? " · " + p.year : "")));

    const h = el("h3", "project__title");
    h.appendChild(el("span", null, p.title));
    if (p.kind) h.appendChild(el("span", "project__kind", p.kind));
    main.appendChild(h);

    main.appendChild(el("p", "project__summary", p.summary));

    if (p.highlights && p.highlights.length) {
      const ul = el("ul", "project__highlights");
      p.highlights.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      main.appendChild(ul);
    }

    if (p.stack && p.stack.length) {
      const chips = el("div", "project__stack");
      p.stack.forEach(function (s) { chips.appendChild(el("span", "tag", s)); });
      main.appendChild(chips);
    }

    const links = el("div", "project__links");
    if (p.links && p.links.code) {
      const a = el("a", null, "Source code →");
      a.href = p.links.code; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    }
    if (p.links && p.links.demo) {
      const a = el("a", null, "Play it / view it →");
      a.href = p.links.demo; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    }
    if (links.childNodes.length) main.appendChild(links);
    art.appendChild(main);

    const side = el("div", "project__side");
    const shot = el("div", "project__shot");
    const img = document.createElement("img");
    img.src = p.image || "assets/images/placeholder.svg";
    img.alt = p.title + " screenshot";
    /* The first two shots load immediately: a project image that has not appeared
       yet is the one thing on this page that must never be missing. */
    img.loading = index < 2 ? "eager" : "lazy";
    img.decoding = "async";
    shot.appendChild(img);
    side.appendChild(shot);

    /* Optional screenshot gallery: a row of thumbnails that swap the main shot.
       Add `gallery: [{ src, caption }]` to a project to switch it on. */
    if (p.gallery && p.gallery.length) {
      const capId = "shotcap-" + index;
      const cap = el("p", "shots__cap", p.gallery[0].caption || "");
      cap.id = capId;

      const strip = el("div", "shots");
      strip.setAttribute("role", "group");
      strip.setAttribute("aria-label", p.title + " screenshots");

      p.gallery.forEach(function (g, gi) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "shot";
        b.setAttribute("aria-pressed", gi === 0 ? "true" : "false");
        const t = document.createElement("img");
        t.src = g.src;
        t.alt = "";
        /* Thumbnails are small and a gallery is only ever a handful of images,
           so load them all: a lazy thumbnail that never triggers shows as an
           empty box exactly where the proof is. */
        t.loading = "eager";
        t.decoding = "async";
        b.appendChild(t);
        b.addEventListener("click", function () {
          img.src = g.src;
          img.alt = p.title + (g.caption ? " — " + g.caption : " screenshot");
          cap.textContent = g.caption || "";
          $$(".shot", strip).forEach(function (c) {
            c.setAttribute("aria-pressed", c === b ? "true" : "false");
          });
        });
        strip.appendChild(b);
      });
      side.appendChild(strip);
      side.appendChild(cap);
    }

    side.appendChild(el("div", "project__meta",
      (p.stack || []).length + " technologies · " + (p.highlights || []).length + " verified details"));
    art.appendChild(side);

    return art;
  }

  function renderProjects() {
    const list = $("#projectList");
    if (!list) return;
    list.innerHTML = "";
    (CONFIG.projects || []).forEach(function (p, i) { list.appendChild(projectNode(p, i)); });

    /* filter chips built from the tags actually in use */
    const filterBox = $("#filters");
    if (filterBox) {
      filterBox.innerHTML = "";
      const tags = ["All"];
      (CONFIG.projects || []).forEach(function (p) {
        (p.tags || []).forEach(function (t) { if (tags.indexOf(t) === -1) tags.push(t); });
      });
      /* Filter buttons are pointless with a single project — they appear on
         their own as soon as there are two or more. */
      if ((CONFIG.projects || []).length < 2) { filterBox.hidden = true; }
      else {
        filterBox.hidden = false;
        tags.forEach(function (t) {
          const b = el("button", "chip", t);
          b.type = "button";
          b.setAttribute("aria-pressed", t === activeTag ? "true" : "false");
          b.addEventListener("click", function () {
            activeTag = t;
            $$(".chip", filterBox).forEach(function (c) {
              c.setAttribute("aria-pressed", c === b ? "true" : "false");
            });
            applyFilter();
          });
          filterBox.appendChild(b);
        });
      }
    }

    /* "currently building" strip — rendered next to the projects */
    const strip = $("#inProgress");
    if (strip && CONFIG.inProgress) {
      strip.innerHTML = "";
      strip.appendChild(el("h3", "inprog__h", CONFIG.inProgress.heading));
      const ul = el("ul", "inprog__list");
      (CONFIG.inProgress.items || []).forEach(function (it) {
        const li = el("li");
        li.appendChild(el("span", "inprog__title", it.title));
        li.appendChild(el("span", "inprog__note", it.note));
        ul.appendChild(li);
      });
      strip.appendChild(ul);
    }
    applyFilter();
  }

  function applyFilter() {
    let shown = 0;
    $$(".project").forEach(function (node) {
      const tags = (node.dataset.tags || "").split("|");
      const ok = activeTag === "All" || tags.indexOf(activeTag) !== -1;
      node.hidden = !ok;
      if (ok) {
        shown++;
        node.classList.add("is-in");      // never leave a filtered-in row invisible
      }
    });
    const empty = $("#emptyState");
    if (empty) empty.hidden = shown !== 0;
  }

  /* ====================================================== 6. timeline */
  function renderJourney() {
    const ol = $("#timeline");
    if (!ol) return;
    ol.innerHTML = "";
    (CONFIG.journey.items || []).forEach(function (it) {
      const li = el("li", "tl" + (it.state ? " tl--" + it.state : ""));
      li.setAttribute("data-anim", "");
      li.appendChild(el("span", "tl__when", it.when));
      li.appendChild(el("h3", "tl__title", it.title));
      li.appendChild(el("p", "tl__body", it.body));
      ol.appendChild(li);
    });
  }

  /* ====================================================== 7. services */
  function renderServices() {
    const box = $("#pricing");
    if (!box) return;
    box.innerHTML = "";
    (CONFIG.services.plans || []).forEach(function (p) {
      const card = el("div", "plan");
      card.setAttribute("data-anim", "");
      card.appendChild(el("h3", "plan__h", p.name));
      card.appendChild(el("p", "plan__price", p.price));
      card.appendChild(el("p", "plan__time", "Delivery: " + p.time));
      card.appendChild(el("p", "plan__for", p.who));
      const ul = el("ul", "plan__list");
      (p.includes || []).forEach(function (x) { ul.appendChild(el("li", null, x)); });
      card.appendChild(ul);
      const a = el("a", "plan__cta", p.cta + " →");
      a.href = "#contact";
      card.appendChild(a);
      box.appendChild(card);
    });
  }

  /* ======================================================= 8. contact */
  function renderContact() {
    const c = CONFIG.contact;

    /* optional buttons disappear cleanly when the URL is empty */
    [["#linkedinLink", c.linkedin], ["#whatsappLink", c.whatsapp], ["#githubLink", c.github]]
      .forEach(function (pair) {
        const node = $(pair[0]);
        if (!node) return;
        if (isPlaceholder(pair[1])) { node.hidden = true; return; }
        node.hidden = false;
        node.href = pair[1];
      });

    const email = (CONFIG.contact.email || CONFIG.meta.email || "");
    const emailText = $("#emailText");
    if (emailText) emailText.textContent = isPlaceholder(email) ? "— add in script.js —" : email;

    const btn = $("#copyEmail");
    if (!btn) return;
    if (isPlaceholder(email)) {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
      btn.style.opacity = ".55";
      btn.style.cursor = "not-allowed";
    }
    btn.addEventListener("click", function () {
      const hint = $("#copyHint");
      const done = function (ok) {
        if (!hint) return;
        hint.textContent = ok
          ? "Copied " + email + " — paste it in your email client."
          : "Could not copy automatically. My address is: " + email;
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else {
        /* file:// and older browsers: fall back to a temporary selection */
        try {
          const ta = document.createElement("textarea");
          ta.value = email;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed"; ta.style.top = "-1000px";
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand("copy");
          document.body.removeChild(ta);
          done(ok);
        } catch (e) { done(false); }
      }
    });
  }

  /* ======================================================== 9. terminal */
  function runTerminal() {
    const pre = $("#terminalBody code");
    if (!pre) return;

    const lines = [];
    (CONFIG.hero.terminal || []).forEach(function (l) {
      lines.push({ text: "$ " + l.cmd, cls: "p" });
      lines.push({ text: l.out, cls: "c" });
      lines.push({ text: "", cls: "" });
    });

    /* Reduced motion, or no typing support: print it all at once. */
    if (reduced) {
      pre.innerHTML = lines.map(function (l) {
        return '<span class="' + l.cls + '">' + esc(l.text) + "</span>\n";
      }).join("");
      return;
    }

    let li = 0, ci = 0, cancelled = false, caret = null;
    /* a caret element that survives across frames */
    caret = document.createElement("span");
    caret.className = "caret";

    function frame() {
      if (cancelled) return;
      if (li >= lines.length) { return; }            // finished: caret stays as a resting cursor
      const line = lines[li];
      if (ci === 0) {
        const span = document.createElement("span");
        span.className = line.cls;
        pre.appendChild(span);
        pre.appendChild(caret);
      }
      const span = pre.children[pre.children.length - 2];
      if (ci < line.text.length) {
        ci++;
        span.textContent = line.text.slice(0, ci);
        setTimeout(frame, line.cls === "p" ? 34 : 9);
      } else {
        pre.insertBefore(document.createTextNode("\n"), caret);
        li++; ci = 0;
        setTimeout(frame, line.cls === "p" ? 180 : 260);
      }
    }
    setTimeout(frame, 420);

    /* if the user leaves the tab mid-typing, finish instantly rather than
       hammering a throttled timer queue */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden && li < lines.length) {
        cancelled = true;
        pre.innerHTML = lines.map(function (l) {
          return '<span class="' + l.cls + '">' + esc(l.text) + "</span>\n";
        }).join("");
      }
    });
  }

  /* ========================================================== 10. chrome */
  function setupNav() {
    const toggle = $("#navtoggle");
    const nav = $("#navmenu");
    const bar = $("#topbar");
    const progress = $("#progress");

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      $$("a", nav).forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }

    function onScroll() {
      if (bar) bar.classList.toggle("is-stuck", window.scrollY > 8);
      if (progress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? Math.min(1, window.scrollY / h) * 100 : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* active section in the nav */
    const links = $$("#navmenu a[href^='#']");
    const sections = links
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);
    if (sections.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { io.observe(s); });
    }

    const top = $("#toTop");
    if (top) top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* ========================================================= 11. reveal */
  function setupReveal() {
    const targets = $$("[data-anim]");

    function reveal(node) {
      if (node.classList.contains("is-in")) return;
      node.classList.add("is-in");
    }

    if (!("IntersectionObserver" in window) || reduced) {
      targets.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    targets.forEach(function (t) { io.observe(t); });

    /* Safety net: anything already inside the viewport is shown no matter
       what the observer does. Prevents a blank page if IO misbehaves. */
    function sweep() {
      const h = window.innerHeight;
      $$("[data-anim]").forEach(function (n) {
        const r = n.getBoundingClientRect();
        if (r.top < h * 0.95 && r.bottom > 0) reveal(n);
      });
    }
    setTimeout(sweep, 700);
    setTimeout(function () { $$("[data-anim]").forEach(reveal); }, 3500);   // last resort
    window.addEventListener("load", sweep);
  }

  /* ================================================== 11b. notes & prep */
  function renderNotes() {
    const box = $("#noteList");
    if (!box) return;
    box.innerHTML = "";
    const items = CONFIG.notes.items || [];

    if (!items.length) {
      /* No uploads yet: say so plainly rather than showing an empty shelf. */
      const p = el("p", "notes__empty", CONFIG.notes.empty);
      box.appendChild(p);
      return;
    }

    items.forEach(function (n) {
      const row = el("article", "note");

      const main = el("div", "note__main");
      if (n.course) main.appendChild(el("p", "note__course", n.course));
      main.appendChild(el("h3", "note__topic", n.topic));
      if (n.note) main.appendChild(el("p", "note__note", n.note));
      row.appendChild(main);

      const side = el("div", "note__side");
      const meta = el("div", "note__meta");
      if (n.format) meta.appendChild(el("span", "tag", n.format));
      if (n.size)   meta.appendChild(el("span", "tag", n.size));
      if (n.when)   meta.appendChild(el("span", "note__when", n.when));
      side.appendChild(meta);

      if (n.file) {
        const a = el("a", "note__get", "Download →");
        a.href = n.file;
        a.setAttribute("download", "");
        side.appendChild(a);
      } else {
        side.appendChild(el("span", "note__soon", "Upload pending"));
      }
      row.appendChild(side);
      box.appendChild(row);
    });
  }

  /* ============================================================ 11c. FYP */
  function renderFyp() {
    const ways = $("#fypWays");
    if (ways) {
      ways.innerHTML = "";
      (CONFIG.fyp.ways || []).forEach(function (w) {
        const card = el("div", "way");
        card.setAttribute("data-anim", "");
        card.appendChild(el("h3", "way__h", w.title));
        card.appendChild(el("p", "way__p", w.body));
        ways.appendChild(card);
      });
    }

    const ex = $("#fypExamples");
    if (ex) {
      ex.innerHTML = "";
      (CONFIG.fyp.examples || []).forEach(function (e) {
        const li = el("li", "ex");
        li.appendChild(el("span", "ex__h", e.title));
        li.appendChild(el("span", "ex__p", e.body));
        ex.appendChild(li);
      });
    }

    const rates = $("#fypRates");
    if (rates) {
      rates.innerHTML = "";
      (CONFIG.fyp.rates || []).forEach(function (r) {
        const row = el("div", "rate");
        const left = el("div", "rate__left");
        left.appendChild(el("span", "rate__label", r.label));
        if (r.note) left.appendChild(el("span", "rate__note", r.note));
        row.appendChild(left);
        row.appendChild(el("span", "rate__price", r.price));
        rates.appendChild(row);
      });
    }
  }

  /* ============================================================ 12. boot */
  function init() {
    fillConfigText();
    renderHeroFacts();
    renderTicker();
    renderAbout();
    renderSkills();
    renderProjects();
    renderJourney();
    renderServices();
    renderNotes();
    renderFyp();
    renderContact();
    setupNav();
    setupReveal();
    runTerminal();

    /* console sanity report — open DevTools to confirm the content wired up */
    try {
      console.log("%cPortfolio loaded",
        "color:#ffb454;font-weight:bold",
        {
          projects: (CONFIG.projects || []).length,
          notes: (CONFIG.notes.items || []).length,
          fypWays: (CONFIG.fyp.ways || []).length,
          skills: (CONFIG.skills.groups || []).reduce(function (n, g) { return n + (g.items || []).length; }, 0),
          timeline: (CONFIG.journey.items || []).length,
          services: (CONFIG.services.plans || []).length,
          emailSet: !isPlaceholder(CONFIG.contact.email || CONFIG.meta.email)
        });
    } catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
