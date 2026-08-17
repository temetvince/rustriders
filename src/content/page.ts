/**
 * Every word on the page.
 *
 * The page is a short feature list, not a sales pitch or a manual. Each card is
 * one feature in one sentence, and the whole page should stay skimmable in
 * under a minute — anything needing a paragraph belongs in the Discord, not
 * here. Adding a card is a decision to make the page longer, so it should
 * replace one rather than join it.
 *
 * Two constraints on anything added. Every entry must be a setting the server
 * actually runs — nothing aspirational, nothing rounded up. And the copy never
 * describes the population as small or low; most players read that as a
 * negative, so state what it buys instead.
 *
 * `iconPaths` holds SVG path data drawn as line strokes on a 24×24 viewBox. The
 * icons are decorative; the card titles carry the meaning.
 */

import { battlemetricsUrl, discordUrl } from './site';

/** The page, in reading order. */
export const page = {
  hero: {
    headline:
      'A fun PVP server with PVE raidable bases and a mid-wipe catchup feature',
    deck: 'North American. Full wipe every month, five NPC raidable bases live at all times, and player bases take half damage from a raider. No Pay-to-Win.',

    /** Quick facts. Values are display capitals on one line — two words each. */
    chips: [
      { label: 'Region', value: 'North America' },
      { label: 'Server', value: 'Premium' },
      { label: 'Wipe', value: 'Full, Monthly' },
      { label: 'Team', value: 'Max 3' },
      { label: 'Tech Tree', value: 'On A Timer' },
      { label: 'Raid Bases', value: 'Five Live' },
      { label: 'Nights', value: 'Ten Minutes' },
    ],

    primaryCta: { label: 'Join the Discord', path: discordUrl },
    secondaryCta: { label: 'See The Features', path: '#features' },
  },

  features: {
    eyebrow: 'Features',
    headline: 'What the server runs',
    lede: 'The first three are written for this server and run nowhere else.',
    cards: [
      {
        title: 'Tech Tree On A Timer',
        description:
          'Free unlocks for the whole server: electrical at one week, workbench 1 at two, workbench 2 at three. Tier 3 stays on the grind. Players who have never connected get it on their first join.',
        iconPaths: [
          'M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
          'M5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
          'M19 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
          'M12 7v4',
          'M12 11l-6 5',
          'M12 11l6 5',
        ],
      },
      {
        title: 'Post, Not Popups',
        description:
          'Server news arrives as letters in a mailbox, one at a time. Public terminals stand in every safe zone, and a late arrival is owed the whole backlog.',
        iconPaths: ['M3 5h18v14H3z', 'M3 6l9 7 9-7'],
      },
      {
        title: 'Ten-Minute Nights',
        description:
          'Night takes ten real minutes end to end and day takes seventy, so a whole night comes round about every hour and a quarter.',
        iconPaths: ['M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'],
      },
      {
        title: 'Five Raidable Bases, Always Up',
        description:
          'Two easy, two medium, one hard, one expert, one nightmare, live somewhere on the map at every hour of the wipe. Ten designs behind each difficulty.',
        iconPaths: [
          'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
          'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
          'M12 12h.01',
        ],
      },
      {
        title: 'Player Bases Take Half Damage',
        description:
          'Raiding one costs double, online or offline. It is free and comes from the tool cupboard, so place one and auth your team. Raidable bases are exempt.',
        iconPaths: [
          'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
          'M9 12l2 2 4-4',
        ],
      },
      {
        title: 'Vehicles Spawn Wild',
        description:
          'Minicopters, cars, horses, rowboats and balloons are scattered across the map by the square kilometre rather than sold at a vendor.',
        iconPaths: [
          'M3 5h18',
          'M12 5v3',
          'M6 8h6a4 4 0 0 1 4 4v3H6z',
          'M16 11h5',
          'M21 9v4',
          'M5 19h11',
          'M8 15v4',
          'M13 15v4',
        ],
      },
      {
        title: 'All-Terrain Snowmobiles',
        description:
          'Snowmobiles run at full speed in every biome here, not just snow.',
        iconPaths: [
          'M3 19h14a3 3 0 0 0 0-6H9L7 9h5',
          'M3 22h18',
          'M12 9h4l2 4',
        ],
      },
      {
        title: 'Ten-Minute Crate Hacks',
        description: 'Hackable locked crates take ten minutes, not fifteen.',
        iconPaths: [
          'M10 2h4',
          'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
          'M12 14l3-3',
        ],
      },
      {
        title: 'Full Wipe Every Month',
        description:
          'Map and blueprints go together, so nothing carries between wipes for anybody.',
        iconPaths: [
          'M4 5h16v16H4z',
          'M4 10h16',
          'M8 3v4',
          'M16 3v4',
          'M9 15l2 2 4-4',
        ],
      },
    ],
  },

  join: {
    eyebrow: 'Rules',
    headline: 'Two of them, then come play',
    lede: 'No application and no whitelist. There is room to build, no queue at the door, and you will start recognising names inside a week.',
    rules: [
      'Maximum team size of three.',
      'Premium access is required to connect.',
    ],
    note: 'Premium access is an anti-cheat measure rather than gatekeeping, and the game enforces it rather than a moderator. In-game chat is mirrored into the Discord.',
    primaryCta: { label: 'Join the Discord', path: discordUrl },
    secondaryCta: { label: 'See Who Is Online', path: battlemetricsUrl },
  },
} as const;
