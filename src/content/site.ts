/**
 * Site-wide destinations and the furniture that frames the page: the brand, the
 * header navigation, and the footer.
 *
 * The two URLs are exported on their own because {@link page} imports them.
 * Everything is exported `as const`, so it arrives deeply readonly at the
 * presentational components that consume it.
 */

/**
 * The RustRiders Discord invite. The site's own domain is `rustriders.net`,
 * which is the name the in-game post tells players to look for; this is where
 * that name actually leads.
 */
export const discordUrl = 'https://discord.gg/y5J5rC5Gj';

/**
 * The server's public BattleMetrics page — live population, uptime, and rank.
 * Linked openly as a transparency signal: anyone can check the real numbers
 * rather than take the site's word for them.
 */
export const battlemetricsUrl =
  'https://www.battlemetrics.com/servers/rust/39735861';

/**
 * The frame around the page. Every `path` in `navItems` must match the `id` of
 * a section rendered by {@link Home}, or the link scrolls nowhere.
 */
export const site = {
  /** Site name, set in display type in the header and footer. */
  brand: 'RustRiders',

  /** Anchor links for the sticky header, one per section, in page order. */
  navItems: [
    { label: 'Features', path: '#features' },
    { label: 'Rules', path: '#join' },
  ],

  /** Call-to-action button pinned to the end of the header navigation. */
  headerCta: {
    label: 'Join Discord',
    path: discordUrl,
  },

  /** External links shown in the footer, in display order. */
  footerLinks: [
    { label: 'Discord', path: discordUrl },
    { label: 'Live Status', path: battlemetricsUrl },
  ],

  /**
   * Standing footer disclaimer. Rust is a Facepunch Studios product; this is an
   * independent community server, and the line says so plainly.
   */
  footerNote:
    'RustRiders is an independent community server and is not affiliated with Facepunch Studios.',
} as const;
