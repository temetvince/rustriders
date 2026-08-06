/**
 * Copy for the front-page banner: the page's only `h1`, its deck, the row of
 * quick-fact chips, and the two calls to action.
 */

import { discordUrl } from './site';

/** Headline set as the page's only `h1`, in the hero. */
export const heroHeadline = 'Nothing is bought Everything is earned';

/** Supporting deck beneath the hero headline. */
export const heroDeck =
  "A laid back North American Rust server built for players who want freedom and challenge. There is no pay-to-win; you earn your progression here. The tech tree is removed, so everything you carry is something you went out and found at least once. The playstyle is designed for 6 month campaigns for up to three people per team- starting with nothing, half decay to respect your time, and a monthly map wipe to keep the server fresh. Littered across the landscape you will find horses, cars, boats, minicopters, and NPC raidable bases, so there's always something to do.";

/**
 * Quick-fact chips in the hero, in display order. Values are set in display
 * capitals on a single line, so keep them to a couple of words — the section
 * they summarise carries the detail.
 */
export const heroChips = [
  { label: 'Region', value: 'North America' },
  { label: 'Campaign', value: '6 Months' },
  { label: 'Tech Tree', value: 'Off' },
  { label: 'Pay-To-Win', value: 'None' },
  { label: 'Map Wipe', value: 'Monthly' },
  { label: 'Team', value: 'Max 3' },
  { label: 'Fair Play', value: 'Premium' },
] as const;

/** Primary hero call-to-action — the Discord invite. */
export const heroPrimaryCta = {
  label: 'Join the Discord',
  path: discordUrl,
} as const;

/** Secondary hero link, pointing at the opening beat of the story. */
export const heroSecondaryCta = {
  label: 'How A Campaign Works',
  path: '#campaign',
} as const;
