# Ayesha Azeem — Portfolio

Personal portfolio built with **Next.js (App Router), TypeScript and Tailwind CSS**.
Static, fast, accessible, and editable from a single `content/` folder.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (run this before pushing)
```

Requires Node.js 20.9 or newer.

## Where to edit things

| What | File |
| --- | --- |
| Name, email, LinkedIn, GitHub, availability, hero, about, "What I bring", contact copy | `content/profile.ts` |
| Skills | `content/skills.ts` |
| Work history | `content/experience.ts` |
| Projects and case studies | `content/projects.ts` |

### Placeholders (`TODO:`)

Any text starting with `TODO:` is a placeholder for information only you can provide
(your role, contribution, responsibilities, challenges, outcomes).

- In `npm run dev` they show up as **yellow dashed notes**, so you can see what is missing.
- In production they are **hidden automatically**, so nothing unfinished or invented ever goes live.

Replace them with real, specific statements, e.g.
`"Built the patient booking flow in Next.js and connected it to the scheduling API."`

### Projects

Each project in `content/projects.ts` has:

- `featured: true` → large card in the top grid; `false` → smaller card under "More projects".
- `stack` → technologies **detected from the live website's public source**. While
  `stackConfirmed: false`, the site labels it "Live site stack". Edit the list to what you
  actually used and set `stackConfirmed: true` to show "Built with" / "Technologies used".
- `caseStudy` → the sections of the `/work/<slug>` page. Empty/TODO sections are hidden in production.

## Replace project screenshots

Screenshots are in `public/projects/` (1440×900 JPG of each homepage).

1. Take a screenshot at roughly a 16:10 ratio (e.g. 1440×900).
2. Save it with the **same file name** (e.g. `public/projects/lumnbio.jpg`) to overwrite.
3. To use a different name, update `image` for that project in `content/projects.ts`.
4. Set `image: undefined` to show a clean placeholder instead.

Next.js automatically serves optimized AVIF/WebP versions at the right size.

## Add your CV

Save your CV as **`public/cv/Ayesha-Azeem-CV.pdf`** (exact name).
Every "Request CV" button automatically becomes **"Download CV"** on the next build.
Until the file exists, those buttons open an email to you instead, so there is never a broken link.

## Deploy free on Vercel

1. Push this repository to GitHub.
2. Go to <https://vercel.com>, sign in with GitHub, click **Add New → Project**, and import the repo.
3. Vercel detects Next.js automatically. Keep the defaults and click **Deploy**.
4. Optional: in **Settings → Environment Variables**, add
   `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://ayeshaazeem.dev`) so SEO and
   social-preview links use your custom domain. Without it, the Vercel URL is used.
5. Optional: add a custom domain under **Settings → Domains**.

Every push to `main` redeploys automatically.

## Project structure

```
app/            pages, layout, SEO (metadata, Open Graph image, sitemap, robots)
  work/[slug]/  case study pages (statically generated)
components/     UI sections and building blocks
content/        all editable text and data
lib/            small helpers (placeholders, CV detection, site URL)
public/         screenshots and CV
_legacy-cra/    the previous Create React App version (safe to delete)
```
