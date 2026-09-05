# Abu Ubaida — Portfolio

A mature, minimalist dark-mode portfolio showcasing Full-Stack & AI engineering work. Built with **Vite + React + TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide**.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS (dark, glassmorphism surfaces)
- Framer Motion (subtle scroll-triggered reveals)
- Lucide icons
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev        # local dev server
```

## Production

```bash
npm run build      # typecheck + build to dist/
npm run preview    # serve the production build locally
```

## Deploy

**Pushing to `master` auto-deploys** — the GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds and publishes `dist/` to the
`gh-pages` branch, which GitHub Pages serves.

To deploy manually instead:

```bash
npm run deploy
```

## Structure

```
src/
  data/resume.ts      # single source of truth for all content
  components/          # Nav, Hero, ExperienceTimeline, Projects,
                       # TechStackGrid, Impact, Contact, Footer
  App.tsx              # page composition
  index.css            # Tailwind + theme tokens
public/
  Abu-Ubaida-Resume.pdf   # downloadable resume
  favicon.svg
```

## Editing Content

All text, experience, projects, skills, recognition, and contact info live in
`src/data/resume.ts`. Edit there and push to deploy.