/**
 * Site-wide copy and destinations: the brand, the links every section points
 * at, and the furniture that frames the page — header navigation and footer.
 * Everything is exported `as const`, so it arrives deeply readonly at the
 * presentational components that consume it.
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

/**
 * Anchor links for the sticky header, in display order. Each `path` must match
 * the `id` of a section on the page, or the link scrolls nowhere.
 */
export const navItems = [
  { label: 'The Campaign', path: '#campaign' },
  { label: 'No Tech Tree', path: '#no-tech-tree' },
  { label: 'The World', path: '#world' },
] as const;

/** Call-to-action button in the sticky header. */
export const headerCta = {
  label: 'Join Discord',
  path: discordUrl,
} as const;

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
