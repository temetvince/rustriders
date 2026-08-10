/**
 * Copy for the front-page banner: the page's only `h1`, its deck, the row of
 * quick-fact chips, and the two calls to action.
 */

import { discordUrl } from './site';

/** Headline set as the page's only `h1`, in the hero. */
export const heroHeadline = 'Ride free with PVE & PVP';

/** Supporting deck beneath the hero headline. */
export const heroDeck =
  "A laid back North American Rust server built for players who want freedom and challenge. There is no pay-to-win; you earn your progression here. Everything wipes once a month — map and blueprints. Teams of up to three, with half decay to respect your time. Raiding a player base costs double, so the NPC bases are the cheaper target. Littered across the landscape you will find horses, cars, boats, minicopters, and NPC raidable bases, so there's always something to do.";

/**
 * Quick-fact chips in the hero, in display order. Values are set in display
 * capitals on a single line, so keep them to a couple of words — the section
 * they summarise carries the detail.
 */
export const heroChips = [
  { label: 'Server', value: 'Premium' },
  { label: 'Region', value: 'North America' },
  { label: 'Wipe', value: 'Monthly' },
  { label: 'Blueprints', value: 'Wipe' },
  { label: 'Team', value: 'Max 3' },
  { label: 'Decay', value: 'Half Rate' },
  { label: 'Player Raids', value: 'Double Cost' },
] as const;

/** Primary hero call-to-action — the Discord invite. */
export const heroPrimaryCta = {
  label: 'Join the Discord',
  path: discordUrl,
} as const;

/** Secondary hero link, pointing at the opening beat of the story. */
export const heroSecondaryCta = {
  label: 'How A Wipe Works',
  path: '#wipe',
} as const;
