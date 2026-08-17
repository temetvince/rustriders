# RustRiders

The website for **RustRiders**, a North American Rust server. It is a single-page
React + TypeScript site, bundled by webpack, that argues why the server is worth
playing and points readers at the Discord.

## What the page is

The page is a **short feature list**, not a sales pitch and not a manual. It is
a banner, one grid of nine feature cards, and the two house rules — and it
should stay skimmable in under a minute.

**Each card is one feature in one sentence.** Anything that needs a paragraph
belongs in the Discord instead. Adding a card is a decision to make the page
longer, so a new one should replace an existing card rather than join it. Two
further rules govern anything added:

* **Every claim must be a setting the server actually runs.** Nothing
  aspirational, nothing rounded up.
* **Never describe the population as small or low.** Most players read that as a
  negative. Describe what it buys instead — room to build, no queue, roads you
  can drive, names you start recognising.

There is **no router**. The site is one page read top to bottom and its
navigation is same-page anchors, so a router would buy nothing and cost every
visitor the download. Nav `path` values are anchors that must match a section
`id` in [`Home.tsx`](src/website/Home/Home.tsx).

## Running locally

* `npm install`
* `npm start`

The site is served at `http://localhost:3000` in development mode.

## Building for production

* `npm run build`

This runs every gate — lint, format, docs, typecheck — and then bundles in
production mode: minified, no source maps, and with a content hash in the bundle
filename so a host can cache it indefinitely.

## Publishing

`npm run build` writes everything the site needs into `dist/`. That folder is
the complete, self-contained deployable — upload its **contents** to the root of
any static host.

A published build contains:

| File | What it is |
| --- | --- |
| `index.html` | The page shell. Loads the bundle. |
| `index_bundle.<hash>.js` | React, the app, and all CSS. |
| `assets/header.<hash>.jpg` | The banner backdrop screenshot. |
| `assets/logo.<hash>.jpg` | The RustRiders logo. |
| `favicon.png`, `apple-touch-icon.png`, `favicon.ico` | Icons, copied from `public/`. |

Two things are worth knowing before you deploy:

1. **Anything you put in `public/` is copied into `dist/` as-is**, apart from
   `index.html`, which is the template webpack builds the real page from. Put a
   `CNAME` or a `robots.txt` there and it will ship.
2. **The site is a single route (`/`).** It needs no server-side rewrite rules.

## Where the words live

Every fact the site states lives as an exported constant under
[`src/content/`](src/content/). Change the copy there, not in the markup — the
page component only composes.

| Module | Holds |
| --- | --- |
| `site.ts` | Discord and BattleMetrics links, header nav, footer. |
| `page.ts` | The banner, the nine feature cards, and the rules. |

Everything is exported `as const`, so it arrives deeply readonly at the
components that consume it. Watch two oxlint caps if the page ever grows again:
a file is limited to 300 lines and to ten dependencies, which is what split the
content into several modules the last time it got long.

One fact is stated in more than one place, so change it in both: **player bases
take half damage and raidable bases are exempt** appears on a feature card and
in the `description` meta tag in [`public/index.html`](public/index.html).

These two values are the ones most likely to need updating:

1. **`discordUrl`** — the invite the header, the banner, the closing section,
   and the footer all link to.
2. **`battlemetricsUrl`** — the server's public BattleMetrics page, linked as a
   live-status signal from the footer and the closing section.

## Components

[`App.tsx`](src/App.tsx) owns the frame — the skip link, the sticky header, the
`main` landmark, and the footer — and reads the current year, which is the only
impure call on the site. [`Home.tsx`](src/website/Home/Home.tsx) is the page
itself and renders no landmark of its own.

Everything under [`src/website/`](src/website/) takes props and renders markup,
with no exceptions. `Hero` carries the page's only `h1`. `FeatureGrid` renders a
group's cards, `PointList` renders its specifics, and `ActionLinks` is the
standard button pair.

`SiteLink` is the one place that decides how a destination is rendered: a path
beginning `http` becomes an external link that opens in a new tab, and anything
else becomes a same-page anchor. Adding a link anywhere means using it rather
than a bare `<a>`.

## Swapping the images

The site uses two bundled images under `src/assets/`:

* [`header.jpg`](src/assets/header.jpg) — the full-bleed banner backdrop.
* [`logo.jpg`](src/assets/logo.jpg) — the logo shown in the header and banner.

They live under `src/` because webpack bundles them as imported assets, not as
static files. To change one, add the new image to `src/assets/` and update the
import — `logo.jpg` is imported by both [`App.tsx`](src/App.tsx) and
[`Home.tsx`](src/website/Home/Home.tsx), and `header.jpg` by `Home.tsx`. Keep
replacements compressed for the web: the banner image is served to every
visitor, so a multi-megabyte original will slow the site down.

The favicons in `public/` are generated from the logo; regenerate them if the
logo changes.

## Updates

Updating provided by npm-check-updates:

* `npm run update`
