# CUSTOMIZE.md — everything you must edit, and how

All of the site's text lives in **one place: the `CONFIG` object at the top of `script.js`.**
Open `script.js` in VS Code, press `Ctrl+F`, and search for **`REPLACE`**. Every hit is
something that is yours to fill in. You never need to touch `index.html`.

**Already done for you:** your email (`abdullahmurtaza2260@gmail.com`) is set in both
`meta.email` and `contact.email`, and four real screenshots from The Last Light are wired into
the project gallery.

---

## 1. What is still yours to fill in

| # | What | Where in `script.js` | Why it matters |
|---|------|----------------------|----------------|
| 1 | Your LinkedIn and WhatsApp links | `contact.linkedin`, `contact.whatsapp` | Left as `""` the button hides itself — which is fine, but two more ways to reach you beats one. |
| 2 | Your prices | `services.plans[].price`, `fyp.rates[].price` | The amounts there are a starting suggestion, not gospel. Never advertise a number you would not accept. |
| 3 | Your own words in the About section | `about.paragraphs` | It is written well, but a client can tell. Read it out loud and change anything that does not sound like you. |
| 4 | Your first quiz-prep uploads | `notes.items` | See section 4 below. The section shows a polite "nothing yet" message until you add one. |
| 5 | Any service you would not actually take | `services.plans` | Delete it. A service you dread is worse than a shorter list. |

---

## 2. Writing rules for this site

- **Never claim something you cannot demonstrate in an interview.** Every skill has one of
  three levels — `Can build`, `Can use`, `Learning`. Moving one up a level is a promise.
- **Numbers beat adjectives.** "97 automated checks" beats "highly tested". "Runs at 60 fps
  on an Intel HD 615" beats "optimised".
- **Keep the tone plain.** Short sentences. No "passionate about leveraging synergies".
- `**bold**` works inside `about.paragraphs` and nowhere else.
- Running the game's test suite means
  `Godot_v4.7.2-stable_win64_console.exe --headless --path "<game>" res://tests/smoke.tscn`
  and it prints `=== 97 checks, 0 failures -> PASS ===`. It is green as of
  **29 Sep 2026**, so the site is allowed to say "all passing". If you change the game and
  the suite goes red, fix it (or soften that wording) *before* you push the site.

---

## 3. How to add a new project (this is the main thing you will do)

Open `script.js`, find `projects: [ ... ]`, and paste a block like this after the existing one
— **mind the comma before `{`**:

```js
    ,{
      title: "WhatsApp chat analyser",
      kind: "Python tool",
      year: "2027",
      summary: "Reads an exported chat file and reports who talks most, busiest hours, and reply times.",
      highlights: [
        "Handles 200k+ messages without loading the file into memory twice",
        "Charts generated locally with no internet connection",
        "Unit tests for the parser"
      ],
      stack: ["Python", "Pandas", "CSV parsing"],
      tags: ["Python", "Automation"],     // these become the filter buttons automatically
      image: "assets/images/whatsapp-analyser.png",
      gallery: [                          // optional — delete this whole block for one image
        { src: "assets/images/whatsapp-analyser.png", caption: "Busiest hours, per contact." }
      ],
      links: { code: "https://github.com/slowyy0477/whatsapp-analyser", demo: "" }
    }
```

That is it. You do not touch `index.html`, the numbering, the filter chips or the counters —
they all rebuild themselves from this array. Filter buttons only appear once you have two or
more projects.

Then:
1. Drop the screenshot in `assets/images/` and point `image:` at it.
2. Delete the matching entry from `CONFIG.inProgress.items` — a project should never appear
   in both "Work" and "Currently building".

---

## 4. Uploading quiz prep and semester notes

1. Put the file in **`assets/notes/`** — e.g. `assets/notes/pf-loops-revision.pdf`.
   Short filenames, dashes, no spaces.
2. In `script.js`, find `notes.items` and add one entry:

```js
      {
        course: "Programming Fundamentals",
        topic:  "Loops, functions and scope — one-page revision sheet",
        when:   "Oct 2026",
        format: "PDF",
        size:   "180 KB",
        file:   "assets/notes/pf-loops-revision.pdf",
        note:   "The three loop types side by side, plus the off-by-one mistakes I kept making."
      }
```

3. Save. The section renders automatically: course label, topic, your note, format and size
   tags, and a **Download** link.

Notes:
- Leave `file: ""` and the row shows **Upload pending** instead of a link — handy for
  announcing something before it is ready.
- The section shows a friendly "nothing uploaded yet" message while `notes.items` is empty,
  so the site is safe to publish before your first upload.
- **Only upload material that is yours to share.** Not a lecturer's slides, not a scanned
  textbook. Your own revision sheets and answer keys are fine.

---

## 5. The FYP help section

`CONFIG.fyp` holds everything: the three ways you help (`ways`), example project directions
(`examples`), your rates (`rates`), and the note about not writing someone's project for them.

**Do not remove the last note (`fyp.note`).** It is the thing that makes the whole section
credible — it tells a worried student you are safe to talk to, and it protects you. Building
*with* someone is a service; ghost-writing is a liability you do not need while you still have
a degree to finish.

---

## 6. Changing the look

All colours and rhythm are CSS variables at the top of `style.css`:

```css
--accent:    #ffb454;   /* the amber. swap for one colour you like */
--accent-2:  #6ee7c8;   /* the mint secondary */
--bg:        #0b0c0f;   /* page background */
```

Change `--accent` and the whole site follows — buttons, links, chips, timeline dots,
the terminal prompt, the progress bar.

Fonts are system fonts on purpose (no Google Fonts): the page loads instantly, works with no
internet, and never flashes unstyled text.

---

## 7. Preview it

Double-click **`preview.bat`** — it opens the site in your browser. Re-run it after any edit.
(You can also just double-click `index.html`; the site works straight off disk, no server.)

---

## 8. Publishing it (free, 10 minutes)

See **`DEPLOY.md`** — your GitHub account `slowyy0477` is already wired in. You will end up
with a link like `https://slowyy0477.github.io/portfolio/` that you can put on a CV, a Fiverr
profile, LinkedIn and your email signature.

---

## 9. The files

```
portfolio/
├── index.html              structure only — you will rarely open this
├── style.css               all styling, tokens at the top
├── script.js               CONFIG (your content) + the engine below it
├── CUSTOMIZE.md            this file
├── DEPLOY.md               how to put it online
├── EARNING-PLAN.md         how to turn this into actual paid work
├── preview.bat             open the site in your browser
└── assets/
    ├── images/             screenshots (game/ has the real ones) + favicon
    └── notes/              ← your quiz-prep and revision files go here
```

The page runs in this order: **Hero → About → Skills → Work → Notes & prep → Journey →
Services → FYP help → Contact**. Nav labels and section numbers are in `index.html`; if you
delete a whole section, take its `<a href="#...">` out of the nav too.
