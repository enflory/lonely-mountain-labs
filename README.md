# Lonely Mountain Labs

The website for [Lonely Mountain Labs](https://lonelymtnlabs.com) — an outpost experimenting with ways technology can give people more space for what matters.

## What's Here

The main website — a React + Vite single-page site. The page runs Hero → About → Projects → Notes → Contact.

Projects are presented in two tiers:

- **Featured** — Pinecone (Stio's internal AI agent), Susy Flory & Shake Ridge Press (client work), and naur (electric backpacking stove research).
- **The ledger** — a build-volume stat line plus the two shipped projects worth clicking: The Lord of the Rings RPG and Hush.

## Design

The site uses a "Field Notes" editorial theme — warm cream paper background, deep ink text, and an ember accent color. Typography pairs Newsreader (serif headlines), Inter (body), and JetBrains Mono (meta labels). A Mt Hood SVG illustration sits as a subtle parallax backdrop behind the hero, and each project card includes an animated mini-visual.

## Project Structure

```
├── client/                  # React frontend source
│   ├── public/assets/       # Static assets (Mt Hood SVG)
│   ├── src/
│   │   ├── components/      # UI components and page sections
│   │   ├── pages/           # Route pages (Home, 404)
│   │   └── main.tsx         # App entry point
│   └── index.html           # HTML template
├── server/                  # Express server (used in Replit, not needed for static hosting)
├── attached_assets/         # Images and static assets used by the site
├── docs/                    # GitHub Pages deployment directory (built site output)
└── shared/                  # Shared types/schemas
```

## Hosting

The site is hosted via **GitHub Pages**, served from the `docs/` directory on the `main` branch with a custom domain (`lonelymtnlabs.com`) managed through Squarespace DNS.

## Development

To run locally:

```bash
npm install
npm run dev
```

## Deploying Changes

1. Make changes to the source in `client/` on a feature branch
2. Build: `npx vite build`
3. Copy output to docs: `cp -r dist/public/* docs/`
4. Commit both the source changes and the rebuilt `docs/` output
5. Push the branch and open a pull request for review
6. Once merged to `main`, GitHub Pages automatically redeploys the site
