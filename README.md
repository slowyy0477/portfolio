# Abdullah Murtaza — portfolio site

A hand-written portfolio site: **no frameworks, no CDNs, no build step, no web fonts.**
Open `index.html` and it works — even offline, even straight off disk.

```
portfolio/
├── index.html                     structure only (you will rarely touch this)
├── style.css                      all styling; colours/type tokens at the very top
├── script.js                      CONFIG (every word of your content) + the engine
├── CUSTOMIZE.md                   ← read this first: what to edit, how to add projects
├── DEPLOY.md                      ← how to put it online with GitHub Pages
├── EARNING-PLAN.md                ← how to turn this into paid work from semester 1
├── preview.bat                    double-click to open the site in your browser
└── assets/
    ├── images/
    │   ├── game/                   real screenshots from The Last Light
    │   ├── placeholder.svg         generic fallback image
    │   ├── favicon.svg             the little "A" in the browser tab
    │   └── README.txt              what goes here
    └── notes/                      ← drop your quiz-prep files here
        └── README.txt
```

## Run it

Double-click **`preview.bat`** — or just double-click `index.html`.

## Edit it

Open **`script.js`** in VS Code, press `Ctrl+F`, search for **`REPLACE`**. Everything you need
to change is flagged. All text lives in the `CONFIG` object at the top of that file —
`index.html` never needs editing.

Adding a new project = pasting one `{ ... }` block into `CONFIG.projects`. The card, the
numbering, the filter buttons and the counters all rebuild themselves from that array.

Full instructions: **`CUSTOMIZE.md`**.

## What is built into it

- **Config-driven** — all copy in one `CONFIG` object, bound to the page via `data-config`
  attributes. No sentence exists in two places.
- **Works with JavaScript disabled** — content is visible, not stuck at `opacity: 0`; the
  reveal system is gated behind a `.js` class set by an inline script, and has a timer
  fallback that force-reveals anything the observer misses.
- **Respects `prefers-reduced-motion`** — the hero terminal prints instantly, the ticker and
  reveals stop, nothing moves.
- **Keyboard and touch friendly** — skip link, 44px minimum hit targets, focus rings, `Esc`
  closes the mobile menu, no hover-only state.
- **Cheap to load** — system fonts, no images until the project shots, animations limited to
  `transform` and `opacity`, loops paused when the tab is hidden.
- **Print-friendly** — `Ctrl+P` gives a clean text version (useful as a CV attachment).

## Verified

Checked in real headless Chrome at 1440×900 and 390×844, plus a reduced-motion pass — see the
end of the build conversation for the exact numbers, console state and measurements.
