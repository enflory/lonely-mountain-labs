# CLAUDE.md

## Project Overview

This is the Lonely Mountain Labs website — a portfolio/landing page for personal software projects. Hosted on GitHub Pages at lonelymtnlabs.com.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4
- **Typography:** Newsreader (serif), Inter (sans), JetBrains Mono (mono)
- **Design:** "Field Notes" editorial theme — cream paper, deep ink, ember accent (#9c6b3a)
- **UI Components:** Radix UI primitives with shadcn/ui patterns
- **Routing:** Wouter
- **Hosting:** GitHub Pages (static), served from `docs/` on `main` branch
- **Domain:** lonelymtnlabs.com (DNS via Squarespace)

## Key Directories

- `client/src/components/sections/` — main page sections (Hero, About, Projects, Notes, Contact, ProjectVisuals)
- `client/src/components/layout/` — Navbar and Footer
- `client/src/components/ui/` — reusable UI primitives (shadcn/ui)
- `docs/` — built static output deployed by GitHub Pages
- `server/` — Express server from original Replit setup, not used in current static hosting

## Build & Deploy

```bash
npx vite build                           # builds to dist/public/
cp -r dist/public/* docs/                # copy to GitHub Pages dir
# push to main — auto-deploys
```

## Important Notes

- The `docs/` directory is the live deployment. Changes to `client/` source need to be built and copied to `docs/` to take effect.
- The `server/` directory and database config (`drizzle.config.ts`) are artifacts from the original Replit full-stack setup. They are not used for the current static deployment.
- The Replit-specific Vite plugins are conditionally loaded and only activate in a Replit environment.
- `About.tsx` is the identity section: who Ethan is, the career arc, and outbound links (LinkedIn, GitHub, email). It carries the frame that makes the varied project list read as range rather than randomness.
- `Projects.tsx` renders two tiers from two arrays. `FEATURED` (Pinecone, Susy Flory & Shake Ridge Press, naur) gets full-size cards; `SHIPPED` (LOTR RPG, Hush) gets `compact` cards under an "Also in the lab" stat line. Both use the same `Card` component; card links come from a `links: {label, href}[]` array.
- `Notes.tsx` renders **nothing** while its `NOTES` array is empty, so the site never advertises writing it does not have. Add an entry and the section appears.
- The Pinecone copy is a draft pending a current read of the project; the local mirror in `~/Documents/Projects/pinecone` is stale (June 2026) and the canonical repo is `eflory-stio/pinecone`.
- `client/public/assets/mt_hood_clean.svg` — Mt Hood illustration used as the hero backdrop.
- `ProjectVisuals.tsx` contains the animated mini-visuals rendered inside each project card. Live kinds: `volume` (Hush), `pages` (Susy work), `lotr` (LOTR RPG), `agent` (Pinecone), `heat` (naur). Visuals for retired tiles were removed rather than left as dead code.
- Framer Motion is still a dependency but is no longer used in the current components. It can be removed if desired.
