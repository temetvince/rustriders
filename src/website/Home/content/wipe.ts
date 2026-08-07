/**
 * Copy for "The Wipe" section — the monthly full reset that gives the server
 * its shape. Map and blueprints wipe together, so nothing carries between
 * wipes. Any copy that suggests progress survives a wipe contradicts this
 * section and is wrong.
 */

/** Headline for the wipe section. */
export const wipeHeadline = 'Every month, the whole server starts over';

/** Body paragraphs for the wipe section, in reading order. */
export const wipeParagraphs = [
  'RustRiders runs a full wipe every month. The map, the blueprints, the bases, the stashes — all of it goes at once, and the entire server hits the beach with nothing on the same day.',
  'That is the shape of the place. There is no veteran sitting on half a year of blueprints you could never catch up to, and no reason to feel late for showing up in week three, because the next clean start is never far off. A wipe here is a self-contained run: one month to find your feet, build something worth defending, and see how far you get before the map resets.',
  'It also keeps the best stretch of Rust in constant rotation. Rocks and bows, the first workbench, the first real gun you can call yours. You get to play that stretch twelve times a year instead of once.',
] as const;

/** Pulled callout printed inside the wipe section. */
export const wipeCallout =
  'Nobody here is ever a month behind. The clock resets for everyone, together.';
