/**
 * Copy for the closing call to action — the last thing a reader sees before the
 * footer, and the only place on the page that asks for anything.
 */

import { battlemetricsUrl, discordUrl } from './site';

/** Headline for the closing call-to-action section. */
export const joinHeadline = 'Come earn your spot';

/** Body paragraphs for the closing section, in reading order. */
export const joinParagraphs = [
  'RustRiders is a North American server kept deliberately low-population: room to build, no queue at the door, and roads you can actually drive. The Discord is where the rest of it lives — wipe news, looking-for-group, clips, and the in-game chat mirrored across so the server keeps talking while you are at work.',
  'Rust Premium is switched on, so the fight you lose was lost to a person and not a program. A wipe is running right now, and the next one starts everybody at nothing. Either is a good day to show up.',
] as const;

/** Primary closing call-to-action — the Discord invite. */
export const joinPrimaryCta = {
  label: 'Join the Discord',
  path: discordUrl,
} as const;

/** Secondary closing link — the public, verifiable population numbers. */
export const joinSecondaryCta = {
  label: 'See Who Is Online',
  path: battlemetricsUrl,
} as const;
