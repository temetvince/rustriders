/**
 * All copy and section data for the {@link Home} page, kept apart from the
 * markup so the page file stays purely compositional. Everything is exported
 * `as const`: deeply readonly, matching the readonly props contracts of the
 * presentational components.
 */

/** The RustRiders Discord invite — the server's single front door. */
export const discordUrl = 'https://discord.gg/nAAUx3AQ7';

/**
 * The server's public BattleMetrics page — live population, uptime, and rank.
 * Shared openly as a transparency signal: anyone can check the real numbers.
 */
export const battlemetricsUrl =
  'https://www.battlemetrics.com/servers/rust/39735861';

/** Site name, set in display type in the header and footer. */
export const brand = 'RustRiders';

/** Anchor links for the sticky header, in display order. */
export const navItems = [
  { label: 'Features', path: '#features' },
  { label: 'Community', path: '#community' },
  { label: 'Fair Play', path: '#fair-play' },
  { label: 'The Server', path: '#server' },
] as const;

/** Call-to-action button in the sticky header. */
export const headerCta = {
  label: 'Join Discord',
  path: discordUrl,
} as const;

/** Headline set as the page's only `h1`, in the hero. */
export const heroHeadline = 'Low population. Never low on things to do.';

/** Supporting deck beneath the hero headline. */
export const heroDeck =
  'A North American Rust server built for players who want room to breathe and a reason to log in. Vanilla at heart, with a handful of quality-of-life tweaks and spawnable NPC bases so the map is never empty of a fight.';

/** Quick-fact chips in the hero, in display order. */
export const heroChips = [
  { label: 'Region', value: 'North America' },
  { label: 'Access', value: 'Premium' },
  { label: 'Mode', value: 'Vanilla+' },
  { label: 'Wipe', value: 'Monthly Map' },
  { label: 'Team', value: 'Max 3' },
  { label: 'Blueprints', value: 'Kept' },
] as const;

/** Primary hero call-to-action — the Discord invite. */
export const heroPrimaryCta = {
  label: 'Join the Discord',
  path: discordUrl,
} as const;

/** Secondary hero link, pointing at the "what makes us different" section. */
export const heroSecondaryCta = {
  label: 'What Sets Us Apart',
  path: '#features',
} as const;

/** Standfirst beneath the "What Makes It Different" heading. */
export const featuresLede =
  'Vanilla rules where they matter, with a short list of changes that respect the grind instead of skipping it. No kits, no pay-to-win — just less busywork and more riding.';

/**
 * The server's gameplay changes, rendered as the feature grid. `iconPaths`
 * holds SVG path data on a 24×24 viewBox; the icons are decorative and the
 * titles carry the meaning.
 */
export const features = [
  {
    title: 'Blueprints Persist',
    description:
      'The map wipes monthly, but your blueprints never do. Learn a recipe once and keep it — every wipe starts you at the workbench, not back at the research table.',
    iconPaths: [
      'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z',
      'M14 3v5h5',
      'M9 13h6',
      'M9 17h6',
    ],
  },
  {
    title: 'Minicopters On The Roads',
    description:
      'Mini copters spawn along the roads instead of hiding behind a scrap wall at a vendor. Find one, fuel it, and fly — mobility is something you earn on foot, not something you buy.',
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
      'Horses appear naturally across the world rather than sitting in a stable for sale. Spot one in the fields, saddle up, and cover ground the cheap way.',
    iconPaths: [
      'M12.8 19.6A2 2 0 1 0 14 16H2',
      'M17.5 8a2.5 2.5 0 1 1 2 4H2',
      'M9.8 4.4A2 2 0 1 1 11 8H2',
    ],
  },
  {
    title: 'Half Decay',
    description:
      'Most structures decay at half the usual rate, so a base survives a workday and a weekend away. Upkeep still matters — it just does not punish you for having a life.',
    iconPaths: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'],
  },
  {
    title: 'All-Terrain Snowmobile',
    description:
      'The snowmobile runs on every biome, not just snow. Take it through desert, forest, and grassland at full speed — no more parking it at the treeline.',
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
    title: 'Spawnable NPC Bases',
    description:
      'A low-pop map can go quiet — so it does not. Raidable NPC bases spawn as fresh objectives whenever the server needs content, giving you loot to fight for even when the online count is small.',
    iconPaths: [
      'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
      'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
      'M12 12h.01',
    ],
  },
] as const;

/** Headline for the welcoming community section. */
export const communityHeadline = 'Small crew, open door';

/** Body paragraphs for the community section, in reading order. */
export const communityParagraphs = [
  'RustRiders is a low-population North American server on purpose. That means room to build, no queue to get in, and roads you can actually drive — but it also means we get to know who shows up. This is a place to settle in, learn the map, and recognise the names on the scoreboard.',
  'New to Rust, or coming back after a few wipes? You are welcome here. The pace is friendlier than a 200-slot zerg server, the admins are active and play alongside everyone else, and the Discord is where the whole thing lives — wipe news, looking-for-group, clips, and the in-game chat mirrored so the server keeps talking even when you are at work.',
  'And you will never log in to a dead map. Spawnable NPC bases drop in as fresh raid targets, minicopters wait on the roads, and wild horses give you a reason to range out. There is always something to do within reach, whether three people are online or thirty.',
] as const;

/** Pulled callout printed inside the community section. */
export const communityCallout =
  'Small enough to know everyone. Busy enough that there is always something to do.';

/** Headline for the fair-play section. */
export const fairPlayHeadline = 'Fair fights, by design';

/** Body paragraphs for the fair-play section, in reading order. */
export const fairPlayParagraphs = [
  'The fastest way to kill a Rust server is one cheater nobody catches. A wall-hacker or a scripter turns every fight into a coin flip, and once players stop trusting the fights, they stop logging in. We would rather solve that at the door than chase it around the map afterwards.',
  'RustRiders is a premium server, and that is the whole point. Getting in costs a little, so when a cheater is banned they cannot just spin up a free throwaway account and be back by dinner. Coming back costs them real money, every single time — a small, one-time barrier for you, and an expensive, repeating one for them. Most never bother.',
  'What is left is the server we actually want to play on: fights decided by aim, positioning, and nerve, not by whatever someone downloaded. Reports go to admins who are online and have skin in the game, and our numbers are public on BattleMetrics for anyone who wants to check them.',
] as const;

/** Pulled callout printed inside the fair-play section. */
export const fairPlayCallout =
  'A ban should cost something. Here it costs a cheater the price of admission — every time they try to come back.';

/** Standfirst beneath the "The Server" heading. */
export const glanceLede = 'The settings that define a wipe, at a glance.';

/** Definitive server settings, rendered as a labelled list in display order. */
export const glance = [
  { label: 'Region', value: 'North American — hosted for low ping across NA.' },
  {
    label: 'Mode',
    value:
      'Vanilla at heart, with the quality-of-life tweaks listed above. No kits, no ranks for sale, no pay-to-win.',
  },
  {
    label: 'Fair Play',
    value:
      'Premium access — a paid barrier that makes every ban expensive for cheaters, so the ones we remove do not come back.',
  },
  {
    label: 'Population',
    value: 'Low by design. Expect elbow room, not a queue.',
  },
  { label: 'Max Team Size', value: 'Three. Group limits are enforced.' },
  {
    label: 'Map Wipe',
    value: 'Monthly. The map resets; your blueprints do not.',
  },
  {
    label: 'Outpost & Bandit Camp',
    value:
      'Kept as two separate monuments — two safe zones, two sets of vendors.',
  },
  {
    label: 'In-Game Chat',
    value:
      'Mirrored to the RustRiders Discord, so the server keeps talking even when you are away from your keyboard.',
  },
] as const;

/** External links shown in the footer, in display order. */
export const footerLinks = [
  {
    label: 'Discord',
    path: discordUrl,
  },
  {
    label: 'Live Status',
    path: battlemetricsUrl,
  },
] as const;

/**
 * Standing footer disclaimer. Rust is a Facepunch Studios product; this is an
 * independent community server, and the line says so plainly.
 */
export const footerNote =
  'RustRiders is an independent community server and is not affiliated with Facepunch Studios.';
