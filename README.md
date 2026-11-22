# Parvathy Krishnan — Lead SDET Profile

A single-page portfolio for a Lead Software Development Engineer in Test, built
with React and Vite. It leads with quality-engineering outcomes, then covers
the career timeline, automation depth, recognition and a QA-focused ATS check.

Live site: <https://parvathy-krishnan.github.io/parvathy-krishnan-portfolio/>

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build      # production build in dist/
npm run preview    # preview the production build
```

The site uses a relative base path (`base: "./"` in `vite.config.js`), so the
contents of `dist/` can be hosted at a domain root or in a subdirectory.

## Editing content

All copy and links live in one place:

- `src/data.js` — metrics, profile, career timeline, skills, awards,
  education, languages and CV URLs.
- `src/components/` — one component per section.
- `src/components/AtsCheck.jsx` — the ATS check UI (paste or upload a job
  description, then show the score, breakdown and gaps).
- `src/ats.js` — the QA-focused keyword and requirements taxonomy behind the
  ATS check.
- `scripts/cv-content.mjs` — the single source of truth for the English,
  German and French CV content.
- `src/styles.css` — design tokens, typography, layout and responsive rules.

The visual system is warm and editorial: ivory paper, plum ink, sage and clay
accents, Fraunces for display type and Inter for body copy. It deliberately
differs from the companion profile at
<https://littleadam.github.io/arul-muruga-portfolio/> while sharing the same
content discipline.

## CV formats

The “Download CV” button opens a chooser with four formats, each available as
PDF and DOCX:

- `public/Parvathy_Krishnan_EU_CV.pdf` / `.docx` — English EU-format CV.
- `public/Parvathy_Krishnan_Lebenslauf_DE.pdf` / `.docx` — German tabular
  Lebenslauf.
- `public/Parvathy_Krishnan_EU_CV_FR.pdf` / `.docx` — French EU-format CV.
- `public/Parvathy_Krishnan_Europass_CV.pdf` / `.docx` — Europass CV.

Every PDF is two pages. All formats carry the portfolio URL and a statement of
willingness to relocate to the job location. No certifications are claimed
beyond the German A1 currently in progress.

Regenerate every CV file after editing `scripts/cv-content.mjs`:

```bash
npm run cv
```

The command writes the English and French EU CVs first, then the German
Lebenslauf and Europass CV from `scripts/generate-extra-cvs.mjs`.

## Assets

- `public/og-cover.png` — 1200 × 630 social share image, referenced by the
  Open Graph and Twitter meta tags through
  `https://parvathy-krishnan.github.io/parvathy-krishnan-portfolio/og-cover.png`.
- `public/favicon.svg` — PK monogram favicon.
- `public/robots.txt` and `public/sitemap.xml` — crawler metadata for the
  GitHub Pages URL.

## ATS check

The check runs entirely in the browser. It reads pasted text or extracts text
from PDF, DOCX, TXT and Markdown files locally; no job description is uploaded
or stored. It is a transparent requirements/keyword check, not an employer’s
proprietary ATS. Scoring covers technical and domain skills, test leadership
and delivery, experience and seniority, languages, and domain overlap.

## Deployment

Netlify and Vercel detect Vite automatically:

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every
push to `main`. One-time setup:

1. Create a repository on GitHub and push `main` to it.
2. In **Settings → Pages → Build and deployment**, set **Source** to
   **GitHub Actions**.
3. Open `https://<username>.github.io/<repository>/` once the workflow
   finishes.

## Accessibility and QA

- axe-core scan against WCAG 2.1 A/AA at 1440 px and 390 px: no violations.
- No horizontal overflow at 1440, 1024, 768, 390 and 360 px.
- Skip link, visible focus states, keyboard-operable navigation, a mobile menu
  that closes on Escape and returns focus to its trigger, reduced-motion
  support, and semantic landmarks and headings.
- Fonts are bundled locally with `@fontsource-variable`; no runtime font
  requests.
