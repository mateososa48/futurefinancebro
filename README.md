# Ledger — Finance Blog

A clean, editorial finance blog built for a client. Readers can browse articles across financial categories; the client publishes everything through a no-code admin panel.

---

## Project Goal

Build a fully functional, content-managed finance blog where:
- Readers can browse articles by category, switch between layout views, and read full posts
- The client (non-technical) can log into a dashboard, write a post, upload an image, pick a category, and hit Publish — with the article appearing on the site automatically
- The site automatically matches the reader's system dark/light mode preference, with a manual toggle available

---

## Tech Stack

| Tool | Role |
|---|---|
| **Next.js** (App Router, JavaScript) | Website framework — handles pages, routing, rendering |
| **Sanity** | Headless CMS — the client's admin panel for writing and publishing posts |
| **Vercel** | Hosting — deploys automatically when code is pushed to GitHub |
| **Tailwind CSS** | Utility CSS framework, built into Next.js |
| **Sentient** (local `.otf`) | Primary display/heading font |
| **Alexandria** (Google Fonts) | Body and UI font |

---

## Design System

**Colors (CSS variables defined in `app/globals.css`):**

| Variable | Light mode | Dark mode |
|---|---|---|
| `--bg` | `#F8F8F5` | `#0D0D0B` |
| `--bg-elevated` | `#EFEFEB` | `#181816` |
| `--text-primary` | `#1A2440` | `#EDEEE8` |
| `--text-secondary` | `#4E5A6E` | `#8A8E84` |
| `--text-muted` | `#8E97A3` | `#5A5E56` |
| `--border` | `#E0DED8` | `#2A2C26` |
| `--mint-text` | `#21492F` | `#B7E6C3` |
| `--green-dark` | `#1E3A28` | `#2C4E38` |

**Dark/light mode:** Defaults to system preference via `prefers-color-scheme`. User can override with a toggle in the header (saved to `localStorage`).

---

## Navigation

`Home` · `Markets` · `Investing` · `Economy` · `Personal Finance` · `About` + **Subscribe** button

---

## Pages to Build

### Done (UI only, placeholder data)
- [x] **Homepage** — hero section, 3 switchable layout views (Grid, Split, Editorial), view selector

### In Progress
- [ ] **Homepage** — connect to real Sanity data (replace hardcoded articles)

### To Do
- [ ] **Article page** (`/[category]/[slug]`) — full post: hero image, title, body text, author, date, related articles
- [ ] **Category pages** (`/markets`, `/investing`, `/economy`, `/personal-finance`) — filtered article grids
- [ ] **About page**
- [ ] **Footer** — links, copyright, newsletter signup

---

## CMS Setup (Sanity)

Sanity will be set up as a separate project in `/studio` and connected to the blog via API.

**Content schema for a Post:**
- `title` (string)
- `slug` (auto-generated from title)
- `category` (one of: Markets, Investing, Economy, Personal Finance)
- `publishedAt` (date)
- `mainImage` (image with alt text)
- `body` (rich text / block content)
- `excerpt` (short description, shown on cards)

Once set up, the client visits their Sanity Studio URL, writes a post, and publishes. Next.js fetches the post via Sanity's API and renders it on the site.

---

## Deployment Plan

1. Push code to GitHub
2. Connect the GitHub repo to **Vercel** (one-click)
3. Vercel auto-deploys on every push to `main`
4. Set environment variables in Vercel (Sanity project ID, dataset, API token)
5. Connect a custom domain (client's domain) in Vercel dashboard

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (runs on port 3001)
npm run dev -- --port 3001
```

Open `http://localhost:3001`.

---

## File Structure

```
app/
  components/
    HomeContent.js   # Client component — homepage layouts + view switcher
  fonts/             # Sentient .otf font files (symlinked from public/)
  globals.css        # CSS variables, font-face declarations, base reset
  layout.js          # Root layout — fonts, theme logic, nav, metadata
  page.js            # Homepage — hero + <HomeContent />
public/
  fonts/             # Sentient-Light.otf, Sentient-Regular.otf, Sentient-Medium.otf
```

---

## Client Handoff Checklist

- [ ] Sanity Studio deployed and accessible at a URL
- [ ] Client has a Sanity account and can log in
- [ ] At least one real article published as a test
- [ ] Custom domain connected in Vercel
- [ ] Client shown how to write, publish, and unpublish posts
