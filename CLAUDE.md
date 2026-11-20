# CLAUDE.md — Auckland Shuttles (aucklandshuttles.co.nz)

## What this repo is

The Auckland-focused storefront operated by Book A Ride NZ. React/Vite frontend
only — there is **no backend here**. All `/api/*` requests are proxied by
`vercel.json` to the live bookaride.co.nz platform (shared Neon database,
shared admin, shared Stripe). The booking page under `src/pages/BookNow.jsx`
and its components are copied **verbatim** from the bookaride.co.nz repo —
never edit them here (see "Booking page mirror" below).

Sibling storefronts on the same platform: `anzdigitalboost-create/Bookaridenz`
(bookaridenz.com) and `anzdigitalboost-create/Hibiscus-to-airport`.

## Booking page mirror — NO DRIFT

`frontend/scripts/sync-booking.mjs` holds the list of mirrored files and
`frontend/scripts/booking-mirror.json` records the source commit plus a hash
per file.

- `npm run check:booking` runs before every build and **fails the build** if
  any mirrored file differs from the manifest.
- To change anything on the booking page: make the change in
  `Book-A-Ride-Gap-Digital/BookARide`, merge it there, then run
  `cd frontend && npm run sync:booking -- <path-to-BookARide>` here, commit the
  synced files + manifest, and ship.
- Never "fix" a drift failure by editing the mirrored files on this side.
- The mirrored files style themselves with `gold-*` Tailwind classes. In
  `tailwind.config.js`, `gold` is deliberately aliased to this site's `brand`
  palette so the booking page picks up the Auckland Shuttles colours. Do not
  remove that alias.

## Brand

- Name: **Auckland Shuttles**. Always disclose "operated by Book A Ride NZ"
  in the footer, About, Terms and Privacy — confirmation emails and Stripe
  receipts come from Book A Ride NZ, and the Google reviews shown are Book A
  Ride's.
- Colours (Tailwind): `brand` harbour blue, `ink` deep navy, `sun` amber
  accent. Use these names in this repo's own components, not `gold`.
- Logo: `src/components/Logo.jsx` (mark matches `public/favicon.svg`).
- Phone: 022 355 2808. Email: info@bookaride.co.nz. Both live in
  `src/config/siteConfig.js` — import from there, never hard-code in new UI.

## Content rules

- Keyword focus: "Auckland shuttle", "Auckland airport shuttle", plus the area
  pages. Copy must stay distinct from bookaride.co.nz and bookaridenz.com —
  do not paste their text here (duplicate content hurts all three sites).
- No invented testimonials, customer counts or ratings. Social proof comes
  only from the live `GoogleReviews` component.
- Do not state prices. Pricing is live on the booking page. The $15 night
  surcharge (pickups 11pm–5:59am) and free child seats are platform rules and
  may be stated; re-check `api/_lib/pricing.js` in the platform repo before
  changing those lines.
- Images: only self-hosted files in `frontend/public/images/` that have been
  visually verified. Never hotlink stock photos from this repo's own pages.
- i18n: nav, hero, stats and the sticky CTA are translated in six languages
  (en/zh/ja/ko/es/fr) in `frontend/src/i18n.js`. Keep all six in step.

## SEO infrastructure

- Area landing pages (`/areas/<slug>`) are data-driven from
  `frontend/src/data/areas.js` — add an area there and the route, footer
  link, home-page card, prerender snapshot and sitemap entry all follow.
- Page titles and descriptions live in `META` in `frontend/src/data/routes.js`
  and are used by both `<PageMeta>` and the prerender step, so they cannot
  drift apart.
- `frontend/scripts/prerender.mjs` runs as part of `npm run build`: it writes
  a static `dist/<route>/index.html` per route and generates
  `dist/sitemap.xml`.

## Deploy

Vercel project for this repo — domains aucklandshuttles.co.nz (redirects to
www) and www.aucklandshuttles.co.nz (canonical host: **www**). No environment
variables required. **Production deploys from `main`.**

Shipping: branch → `cd frontend && npm run build` must pass → push → PR →
squash-merge → confirm the deploy went live.
