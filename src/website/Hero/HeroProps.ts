/**
 * Contract for {@link Hero}.
 *
 * The hero holds no copy of its own — every string here is supplied by the
 * composing page. It renders the page's only `h1`, so the composing page must
 * not render another.
 */
export default interface HeroProps {
  /**
   * Resolved image URL for the full-bleed atmospheric backdrop. Rendered
   * decorative (empty alt) behind a scrim, so it never carries meaning the
   * copy does not already state.
   */
  readonly backdropSrc: string;
  /**
   * Resolved image URL for the branded logo mark shown above the headline.
   * Decorative: the wordmark and headline carry the accessible name, so the
   * logo is hidden from assistive technology.
   */
  readonly logoSrc: string;
  /** Main headline, rendered as the page's only `h1`. */
  readonly headline: string;
  /** Supporting passage rendered beneath the headline as the deck. */
  readonly deck: string;
  /**
   * Quick-fact chips rendered in a row beneath the deck, in order. Each `label`
   * must be unique — it is used as the React key.
   */
  readonly chips: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  /** Primary call-to-action link (e.g. the Discord invite). */
  readonly primaryCta: {
    readonly label: string;
    readonly path: string;
  };
  /** Quieter secondary link rendered beside the primary call-to-action. */
  readonly secondaryCta: {
    readonly label: string;
    readonly path: string;
  };
}
