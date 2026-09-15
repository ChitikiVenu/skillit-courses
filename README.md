# Skill IT Courses

A single React + Vite app hosting all of Skill IT Education's course sites under one "Our
Programmes" menu, instead of three separate repos.

## What's here

- **Header** — deliberately minimal: just the "Our Programmes" dropdown, nothing else (no logo,
  no other links).
- **Footer** — deliberately empty, a placeholder boundary at the bottom of every page.
- **Our Programmes menu** — five entries:
  - Cyber Security → `/cyber-security` (real content, 6 modules)
  - AI & ML → `/ai-ml` (real content, 7 modules)
  - Data Science → `/data-science` ("coming soon" placeholder — no content yet)
  - SOC → `/soc-analyst` (real content, 5 modules)
  - Data Analyst → `/data-analyst` ("coming soon" placeholder — no content yet)
- **`/`** (root) — a blank landing page with just the header/footer and a one-line prompt to use
  the menu.

The three real courses are the same content previously built out as separate repos
([skillit-cybersecurity-course](https://github.com/ChitikiVenu/skillit-cybersecurity-course),
[skillit-ai-ml-course](https://github.com/ChitikiVenu/skillit-ai-ml-course),
[skillit-soc-analyst-course](https://github.com/ChitikiVenu/skillit-soc-analyst-course)) —
consolidated here into one app so they share one header/footer/nav instead of being three
disconnected sites.

## Stack

React 19, React Router 7, Vite, react-helmet-async — same as the other rebuilt course repos and
the main production site.

## Structure

```
src/
  constants.js          # DOMAIN, PHONE, and the PROGRAMMES list that drives the "Our Programmes" menu
  data/
    cyberSecurity.js     # all Cyber Security content + routeBase: "/cyber-security"
    aiMl.js               # all AI & ML content + routeBase: "/ai-ml"
    socAnalyst.js         # all SOC Analyst content + routeBase: "/soc-analyst"
  components/
    Header.jsx            # "Our Programmes" dropdown — the entire header
    Footer.jsx             # empty placeholder
    Layout.jsx              # Header + <Outlet/> + Footer, wraps every route
    HeroVisual.jsx          # ImageHeroVisual (Cyber Security / AI & ML) + SocDashboardSvg (SOC)
    Seo.jsx, LeadForm.jsx, ToolCard.jsx, H1Wave.jsx, ScrollToTop.jsx
  pages/
    LandingPage.jsx         # "/" — blank shell
    CourseHomePage.jsx       # generic course overview page, takes a `course` prop
    CourseModulePage.jsx     # generic module deep-dive page, takes a `course` prop, reads :slug from the URL
    ComingSoonPage.jsx       # Data Science / Data Analyst placeholder
    NotFoundPage.jsx
  App.jsx                  # mounts each course's data at its routeBase, wires up the coming-soon routes
public/
  img/                    # hero images + favicons (de-duplicated — identical favicons across
                            courses are stored once)
  downloads/              # all three brochure PDFs
```

`CourseHomePage` and `CourseModulePage` are fully generic — adding a fourth real course later
means adding one `src/data/<course>.js` file and one line in `App.jsx`'s `COURSES` array; no page
component changes needed.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

**This is a client-side-rendered SPA.** Any static host serving `dist/` needs a history-fallback
rewrite (all paths → `index.html`) so a direct visit to, say, `/ai-ml/module-5-agentic-ai-engineering`
doesn't 404. On Vercel this is automatic for a Vite SPA; on other hosts add the equivalent rewrite
rule (Netlify: a `_redirects` file with `/* /index.html 200`).

## Notes for whoever deploys this

- The lead-capture forms have no backend — submitting one just flips local React state to show a
  confirmation message. Wire `LeadForm.jsx`'s submit handler to a real endpoint before relying on
  it to capture leads.
- "Book Career Counselling" links via `tel:` to the number in `src/constants.js`.
- Data Science and Data Analyst currently only show a "coming soon" placeholder — add
  `src/data/dataScience.js` / `src/data/dataAnalyst.js` (same shape as the other three) and wire
  them into `App.jsx`'s `COURSES` array and `constants.js`'s `PROGRAMMES` list once that content
  exists.
- Meta tags are set client-side via `react-helmet-async` rather than baked into static HTML per
  page at build time — a real SEO trade-off, consistent with the other rebuilt repos and the main
  production app.
