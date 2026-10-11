# Tirunova Technologies website

Marketing website for Tirunova Technologies — an IT, security, software and solar solutions company based in Jaipur.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript

## GitHub Pages

The site is a static Next.js export. After Pages is enabled (Settings → Pages → Source: **GitHub Actions**), pushes to `main` or `feature/company-website` publish to:

`https://kailash-dev.github.io/tiruonva-tech-website/`

This repository is currently private. GitHub Pages on a private repo requires GitHub Pro; otherwise make the repository public first.

For a custom domain such as `tirunovatechnologies.co.in`, add the domain in Pages settings and point DNS to GitHub. Then rebuild without a project `basePath` (leave `NEXT_PUBLIC_BASE_PATH` empty).

## Branding

Use `public/logo.jpg` exactly as supplied. Do not recreate or alter the logo artwork.
