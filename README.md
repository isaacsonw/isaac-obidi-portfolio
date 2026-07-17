# Isaac Obidi — Portfolio

Personal portfolio for **Isaac Obidi Wonah**, Senior/Lead Frontend Engineer (fintech · identity · payments).

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, deployed on Vercel. The site itself is part of the pitch: it doubles as a case study in how I run AI agents as governed, staff-level teammates.

## Sections

- **Hero** — editorial positioning statement
- **Selected Work** — image-led project index across two markets: Dojah, The North Face XPLR Pass (VF Corp), SeerBit, Anchor USD, SureGifts, Luzoma
- **How I Work with AI** — embedded demo video + the governance model (rules, atomic diffs, subagents, MCP)
- **About** — background, scale, mentorship, toolkit
- **Contact** — email + LinkedIn

## Design

Deliberately non-generic: a warm paper palette (not cool gray/blue), a high-contrast serif display face (Fraunces) paired with Geist Sans/Mono, hairline rules, and index-numbered sections. Project screenshots live in `public/projects/`.

## Editing content

All copy and metrics live in a single typed module: [`src/lib/content.ts`](src/lib/content.ts). Update values there rather than in components.

To embed the AI-workflow demo video, set `aiWorkflow.videoSrc` (and optionally `videoPoster`) in that file — a hosted URL or a path under `/public`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Notes

- Dark mode: manual toggle + system preference, applied before paint to avoid flash.
- Accessibility: skip link, visible focus rings, reduced-motion support, labelled sections.
- No runtime data fetching — the page is fully static.
