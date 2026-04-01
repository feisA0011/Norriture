# Norriture — Luxury Private Dining Landing Page

Production-grade Next.js App Router landing page for a bespoke private dining and catering brand.

## Stack
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- Framer Motion
- shadcn-style UI primitives (`components/ui/button.tsx`)

## Local development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production build
```bash
npm run build
npm run start
```


## Deploy now (fastest)
### One-time setup
```bash
npm i -g vercel
vercel login
vercel link
```

### Production deploy
```bash
npm run deploy:vercel
```

Or use the helper script:
```bash
npm run deploy:vercel:script
```

## Deploy to Vercel (exact steps)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to Vercel dashboard → **Add New Project**.
3. Import the repository.
4. Framework preset: **Next.js** (auto-detected).
5. Build command: `npm run build`.
6. Output setting: leave default (Next.js managed output).
7. Click **Deploy**.

## Environment variables
No environment variables are required for the current version.

If wiring the enquiry form to Resend/Formspree/Supabase later, add values in `.env.local` and Vercel Project Settings:
```bash
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
FORM_ENDPOINT=
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

## Project structure
- `app/layout.tsx` — SEO metadata + root layout
- `app/page.tsx` — entry page
- `components/landing-page.tsx` — all landing sections
- `components/ui/button.tsx` — reusable button primitive
- `lib/utils.ts` — className merge helper
- `tailwind.config.ts` — design system tokens
