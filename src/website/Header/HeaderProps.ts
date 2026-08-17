/**
 * Contract for {@link Header}.
 *
 * Every destination follows the path rules described in {@link SiteLinkProps}.
 * Navigation labels must be unique — they are used as React keys.
 */
export default interface HeaderProps {
  /** Site name shown at the left edge, beside the logo mark. */
  readonly brand: string;
  /**
   * Where the wordmark links, normally the anchor at the top of the page. The
   * page must render an element with that `id`.
   */
  readonly brandPath: string;
  /**
   * Resolved image URL for the logo mark shown before the brand name. Purely
   * decorative — the brand text carries the accessible name, so the image is
   * hidden from assistive technology.
   */
  readonly logoSrc: string;
  /** Navigation links rendered in order. */
  readonly navItems: readonly {
    readonly label: string;
    readonly path: string;
  }[];
  /** Emphasised call to action rendered after the navigation links. */
  readonly cta: {
    readonly label: string;
    readonly path: string;
  };
}
