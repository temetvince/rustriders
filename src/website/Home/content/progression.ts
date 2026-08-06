/**
 * Copy for the two sections that describe how progression works: the six-month
 * campaign that resets it, and the no-tech-tree rule that earns it. They are
 * one story told in two halves, so keep them consistent — a change to how
 * blueprints are earned or wiped almost always touches both.
 */

/** Headline for the campaign section. */
export const campaignHeadline = 'Six months. One campaign. Everyone at zero.';

/** Body paragraphs for the campaign section, in reading order. */
export const campaignParagraphs = [
  'RustRiders runs in six-month campaigns. One begins at the first wipe of January, the next at the first wipe of July, and on both of those days every player on the server owns exactly the same thing: nothing. No blueprints, no stash, no head start.',
  'From there the campaign is one long climb, and every step of it stays yours. The map still wipes monthly to keep the ground fresh, but your blueprints ride through every one of those wipes. A new map costs you the base you built and the supplies you gathered; it never costs you the research progress you earned. Week one is rocks and improvisation. Month five is a locker full of gear you learned the hard way.',
  'The reset is what keeps the climb worth making. On a server where progress never ends, the veterans eventually own everything and a new player never catches up. Twice a year that clock goes back to zero for everybody at once, and the whole server gets to play the opening days together again.',
] as const;

/** Pulled callout printed inside the campaign section. */
export const campaignCallout =
  'Twice a year everyone wakes up with nothing. It is the best morning of the campaign.';

/**
 * The wipe cadence, rendered as a labelled list beneath the campaign pitch. It
 * states what resets and what survives at each interval, so a player can tell
 * at a glance what a given wipe will cost them.
 */
export const campaignCadence = [
  {
    label: 'Every Month',
    value:
      'The map wipes. New terrain, new monuments to learn, and every base and stash gone. Your blueprints are untouched.',
  },
  {
    label: 'January & July',
    value:
      'A new campaign. The map and the blueprints wipe together, and the whole server starts from nothing on the same morning.',
  },
  {
    label: 'In Between',
    value:
      'Nothing else resets. There is no surprise blueprint wipe and no mid-campaign reset to plan around.',
  },
] as const;

/** Headline for the no-tech-tree section. */
export const noTechTreeHeadline = 'Find it before you can build it';

/** Body paragraphs for the no-tech-tree section, in reading order. */
export const noTechTreeParagraphs = [
  'There is no tech tree on RustRiders. You cannot pick a tier, pour scrap into a branch, and walk away holding a rifle you have never seen.',
  'Every blueprint on this server is earned the long way. Find the item first — out of a crate, off a body, or from an NPC base you cracked — then carry it home and break it down at a research table with the scrap the blueprint costs. Workbenches still gate what you can craft, so the tiers matter. They just do not sell you the recipe.',
  'It changes what a monument run is worth. Scrap becomes fuel for the things you actually recovered rather than a currency you grind to skip the search, and the gun on your back is proof that somebody went out and found one. What you research keeps its value too, because blueprints ride out the monthly map wipes and only reset when the campaign does.',
] as const;

/** Pulled callout printed inside the no-tech-tree section. */
export const noTechTreeCallout =
  'No recipe here was ever bought. Every one of them was found first.';
