/**
 * Copy for "The World" section — what is out on the map waiting to be found,
 * and how long the map gives you to take it. This section is the payoff for the
 * argument the page has been making, so every card describes something a player
 * goes and finds rather than something the server hands over or sells.
 */

/** Standfirst beneath "The World" heading. */
export const featuresLede =
  'None of this sits behind a vendor or a paywall. It is out there on the map, and it belongs to whoever reaches it first.';

/**
 * What the world holds, rendered as the feature grid. `iconPaths` holds SVG
 * path data on a 24×24 viewBox; the icons are decorative and the titles carry
 * the meaning.
 */
export const features = [
  {
    title: 'Minicopters On The Roads',
    description:
      'Minicopters spawn along the roads instead of behind a scrap wall at a vendor. Find one, fuel it, and fly. Mobility is something you earn on foot first.',
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
    title: 'Wild Horses Roam',
    description:
      'Horses appear naturally across the world rather than standing in a stable with a price on them. Spot one in the fields, saddle up, and cover ground the cheap way.',
    iconPaths: [
      'M12.8 19.6A2 2 0 1 0 14 16H2',
      'M17.5 8a2.5 2.5 0 1 1 2 4H2',
      'M9.8 4.4A2 2 0 1 1 11 8H2',
    ],
  },
  {
    title: 'Boats And Cars In The Wild',
    description:
      'Boats wait along the shoreline and cars sit out on the roads. Every one of them is first come, first served — the only cost is the fuel and the risk of driving it home.',
    iconPaths: ['M12 4v11', 'M13 6l5 7h-5', 'M3 16h18', 'M5 16l1.5 4h11L19 16'],
  },
  {
    title: 'All-Terrain Snowmobile',
    description:
      'The snowmobile runs in every biome, not just snow. Take it through desert, forest, and grassland at full speed — no more parking it at the treeline.',
    iconPaths: [
      'M2 12h20',
      'M12 2v20',
      'm4.93 4.93 14.14 14.14',
      'm19.07 4.93-14.14 14.14',
      'M12 2l2.4 2.4M12 2 9.6 4.4',
      'M12 22l2.4-2.4M12 22 9.6 19.6',
      'M2 12l2.4-2.4M2 12l2.4 2.4',
      'M22 12l-2.4-2.4M22 12l-2.4 2.4',
    ],
  },
  {
    title: 'Ten-Minute Crate Hacks',
    description:
      'Locked crates unlock in ten minutes instead of fifteen. Still long enough that every player on the map knows where you are standing, just short enough not to waste your time.',
    iconPaths: [
      'M10 2h4',
      'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
      'M12 14l3-3',
    ],
  },
  {
    title: 'Raidable NPC Bases',
    description:
      'NPC bases spawn across the map at a range of difficulties, from something a fresh spawn can chip at to a fortress worth a full team. They are objectives with loot behind them, whether three people are online or thirty.',
    iconPaths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
      'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
      'M12 12h.01',
    ],
  },
] as const;
