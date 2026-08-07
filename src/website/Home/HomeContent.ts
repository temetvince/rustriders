/**
 * All copy and section data for the {@link Home} page, kept apart from the
 * markup so the page file stays purely compositional. This module is the single
 * import the page reaches for; the copy itself lives in `content/`, one module
 * per beat of the page's argument:
 *
 * - `site` — brand, links, header navigation, footer.
 * - `hero` — the banner headline, deck, chips, and calls to action.
 * - `wipe` — the monthly full wipe that gives the server its shape.
 * - `features` — what the world holds for a player to find.
 * - `join` — the closing call to action.
 *
 * The page reads as one argument, in that order: every month the whole server
 * starts over together, nothing about that progress is for sale, and here is
 * what there is to go and find inside a wipe. Copy that contradicts that line
 * does not belong on the page, wherever it sits.
 *
 * Everything is exported `as const`: deeply readonly, matching the readonly
 * props contracts of the presentational components.
 */

export * from './content/features';
export * from './content/hero';
export * from './content/join';
export * from './content/site';
export * from './content/wipe';
