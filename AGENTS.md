<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository charter

Personal portfolio for Isaac Obidi Wonah — Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Netlify.

## How work is done here
- Governance lives in `.cursor/rules/` and is enforced on every task:
  - `git-and-pr-conventions` — branch off `development`, conventional commits, PRs < 400 lines.
  - `security-and-pii` — never log PII in the clear; mask it (`email: j***@doma.in`). No hardcoded secrets.
  - `api-design` — route handlers return `{ entity, error, status }`; kebab-case, versioned paths; validate input.
  - `error-handling` — external calls get timeouts, bounded retries (no retry on 4xx), and PII-safe logging.
  - `frontend-standards` — typed props, accessible + keyboard-operable UI, content in `src/lib/content.ts`.
- Deliver in small, atomic, reviewable diffs. Write tests alongside the change.
- Prefer editing existing files; keep copy and data in `src/lib/content.ts`.

## Commands
- `npm run dev` — local dev server
- `npm run lint` — ESLint
- `npm run build` — production build
