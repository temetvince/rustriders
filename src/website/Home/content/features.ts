/**
 * Copy for "The World" section — what is out on the map waiting to be found,
 * and the server settings that decide what it costs to take. This section is
 * the payoff for the argument the page has been making, so a card describes
 * something a player goes and earns, never something the server hands over or
 * sells.
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
    title: 'Boats, Cars, And Snowmobiles In The Wild',
    description:
      'Boats wait along the shoreline and cars sit out on the roads. Every one of them is first come, first served — the only cost is the fuel and the risk of driving it home. The snowmobile is the odd one out: it runs at full speed in every biome, so one found in the arctic will carry you across desert, forest, and grassland just as happily.',
    iconPaths: ['M12 4v11', 'M13 6l5 7h-5', 'M3 16h18', 'M5 16l1.5 4h11L19 16'],
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
  {
    title: 'Player Raids Cost Double',
    description:
      "Breaching another team's structures and deployables takes twice the explosives. Players, mounts, and traps are untouched, so fights and roams play exactly as they always have. The NPC bases are exempt, which is the whole point: with half decay you hold your own base for less, the bots are the cheap raid, and hitting a real team stays a deliberate choice rather than a Tuesday-night habit.",
    iconPaths: [
      'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      'M13 7l-3 5h4l-3 5',
    ],
  },
] as const;
