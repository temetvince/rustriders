# RustRiders

The landing page for **RustRiders**, a low-population North American Rust
server. It is a single-page React + TypeScript site that pitches the server and
points players to the Discord. All page copy and section data live in
[`src/website/Home/Home.tsx`](src/website/Home/Home.tsx) and
[`src/website/Home/HomeContent.ts`](src/website/Home/HomeContent.ts).

## Running Locally

To run the website locally, use the following commands:

* `npm install`
* `npm start`

The site is served at `http://localhost:3000` in development mode.

## Building for Production

To build the website for production, use the following command:

* `npm run build`

This runs every gate — lint, format, docs, typecheck — and then bundles in
production mode: minified, no source maps, and with a content hash in the
bundle filename so a host can cache it indefinitely.

## Publishing

`npm run build` writes everything the site needs into `dist/`. That folder is
the complete, self-contained deployable — upload its **contents** to the root
of any static host.

A published build contains:

| File | What it is |
| --- | --- |
| `index.html` | The page shell. Loads the bundle. |
| `index_bundle.<hash>.js` | React, the app, and all CSS. |
| `assets/header.<hash>.jpg` | The hero backdrop screenshot. |
| `assets/logo.<hash>.jpg` | The RustRiders logo. |
| `favicon.png`, `apple-touch-icon.png`, `favicon.ico` | Icons, copied from `public/`. |

Two things are worth knowing before you deploy:

1. **Anything you put in `public/` is copied into `dist/` as-is**, apart from
   `index.html`, which is the template webpack builds the real page from. Put a
   `CNAME` or a `robots.txt` there and it will ship.
2. **The site is a single route (`/`).** It needs no server-side rewrite rules.
   If you ever add a second route, configure the host to serve `index.html` for
   unknown paths.

## Editing server details

Every fact the page states — the Discord invite, the wipe cadence, team size,
the feature list, and the connect string — lives as an exported constant in
[`src/website/Home/HomeContent.ts`](src/website/Home/HomeContent.ts). Change the
copy there, not in the markup.

These values are most likely to need updating between wipes:

1. **`discordUrl`** — the invite the header, hero, and footer all link to.
2. **`battlemetricsUrl`** — the server's public BattleMetrics page, linked from
   the footer and the "The Server" section as a live-status signal.

## Swapping the images

The site uses two bundled images under `src/assets/`:

* [`header.jpg`](src/assets/header.jpg) — the full-bleed hero backdrop.
* [`logo.jpg`](src/assets/logo.jpg) — the logo shown in the header and hero.

They live under `src/` because webpack bundles them as imported assets, not as
static files. To change one, add the new image to `src/assets/` and update the
import at the top of [`src/website/Home/Home.tsx`](src/website/Home/Home.tsx).
Keep replacements compressed for the web — the hero image is served to every
visitor, so a multi-megabyte original will slow the page.

The favicons in `public/` are generated from the logo; regenerate them if the
logo changes.

## Updates

Updating provided by npm-check-updates:

* `npm run update`
