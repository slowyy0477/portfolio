# DEPLOY.md — put this site online, free, in about 10 minutes

You end up with a public link like:

```
https://slowyy0477.github.io/portfolio/
```

No hosting bill, no domain needed, works on phones, and you can update it any time with a
single `git push`.

---

## Before you start

Create the GitHub repository. Go to **https://github.com/new** while signed in as **slowyy0477**:

- **Repository name:** `portfolio`
- **Visibility:** Public *(required for free Pages hosting)*
- Do **not** tick "Add a README" — the folder already has one.

Then come back here.

---

## Step 1 — Tell git who you are (one time, this project only)

Open a terminal in the portfolio folder and run these, replacing the email with yours:

```bash
cd "C:/Users/Bullza/projects/portfolio"
git init
git branch -M main
git config user.name "Abdullah Murtaza"
git config user.email "abdullahmurtaza2260@gmail.com"
```

`git config` here is **local** to this one repository, so it will not disturb any other
project you work on.

---

## Step 2 — Commit and push

```bash
git add .
git commit -m "Portfolio site"
git remote add origin https://github.com/slowyy0477/portfolio.git
git push -u origin main
```

On the first push, Git for Windows will pop up a browser window asking you to sign in to
GitHub. Approve it (that is Git Credential Manager storing a token so you never type a
password). If it asks for a username/password instead, do **not** type your GitHub password —
use a Personal Access Token: GitHub → Settings → Developer settings → Personal access
tokens → Tokens (classic) → Generate new token → tick `repo` → copy it and paste it as the
password.

---

## Step 3 — Turn on Pages

1. Open **https://github.com/slowyy0477/portfolio/settings/pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. **Branch:** `main` · **Folder:** `/ (root)` → **Save**
4. Wait 1–2 minutes, refresh the page. It will show the live URL.

Your site is now at **https://slowyy0477.github.io/portfolio/**

---

## Step 4 — Updating it later

You only need three commands each time:

```bash
cd "C:/Users/Bullza/projects/portfolio"
git add .
git commit -m "Update projects"
git push
```

Live within a minute.

---

## Step 5 — Screenshot it for your CV

Open the live link on your phone, take a screenshot, and use that in your CV, LinkedIn,
Fiverr gigs and WhatsApp profile. `student` + a live portfolio URL is a completely different
first impression from just `student`.

---

## Do-not-forget list before the site is public

- [ ] `meta.email` and `contact.email` filled in (`script.js`) — the email button is dead without it
- [ ] A real screenshot of your game replacing the placeholder in `assets/images/`
- [ ] Confirmed your name is spelled the way you want it, everywhere
- [ ] Read the About section out loud once — change anything that does not sound like you
- [ ] Prices in the Services section are ones you would actually accept
- [ ] Opened the live URL on your phone and scrolled the whole page

---

## Later, if you want a real domain

A `.com` costs about PKR 3,500 a year, a `.dev` or `.me` similar. Buy from Namecheap or
Cloudflare, then in **Settings → Pages → Custom domain** type your domain and follow the DNS
instructions. Do this later — the free `github.io` link works fine until you have paying
clients.

---

## Note on your other GitHub account

Your first account (`slowyy047`) is suspended and GitHub allows only one free account per
person, so all of this goes on `slowyy0477`. Do not create a third account — repeated
duplicate accounts is what gets a second one flagged.
