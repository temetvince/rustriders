# RustRiders

The landing page for **RustRiders**, a low-population North American Rust
server. It is a single-page React + TypeScript site that pitches the server and
points players to the Discord.

The page makes a single argument, and its sections are the beats of that
argument in order:

1. **The Campaign** — the server runs in six-month campaigns, and every player
   starts one with nothing.
2. **No Tech Tree** — so this is how progression is earned rather than bought.
   Find the item, then research it.
3. **The World** — and this is what is out there to find.
4. **Join Up** — the closing call to action.

Copy that contradicts that line does not belong on the page, wherever it sits.
The composition lives in [`Home.tsx`](src/website/Home/Home.tsx); every word
lives under [`src/website/Home/content/`](src/website/Home/content/).

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
and the feature list — lives as an exported constant under
[`src/website/Home/content/`](src/website/Home/content/). Change the copy there,
not in the markup. [`HomeContent.ts`](src/website/Home/HomeContent.ts)
re-exports all of it as one module, which is what the page imports.

There is one module per part of the page:

| Module | Holds |
| --- | --- |
| `site.ts` | Brand, Discord and BattleMetrics links, header nav, footer. |
| `hero.ts` | The banner headline, deck, quick-fact chips, and buttons. |
| `progression.ts` | The six-month campaign and the no-tech-tree rule. |
| `features.ts` | What the world holds, as the card grid in "The World". |
| `join.ts` | The closing call to action. |

Three claims are stated in more than one place, so change them together:

1. **The campaign cadence** appears as a hero chip, in the hero deck, across
   the whole campaign section, and in its cadence list. Blueprints wipe at the
   first wipe of January and of July; the map wipes monthly in between.
2. **The no-tech-tree rule** appears as a hero chip, in the hero deck, and in
   its own section.
3. **Nothing is for sale** is the page's spine. It is stated in the hero deck
   and in the `Pay-To-Win` chip, and every card in "The World" describes
   something found rather than bought.

These values are most likely to need updating between campaigns:

1. **`discordUrl`** — the invite the header, hero, footer, and closing section
   all link to.
2. **`battlemetricsUrl`** — the server's public BattleMetrics page, linked from
   the footer and the closing section as a live-status signal.

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
