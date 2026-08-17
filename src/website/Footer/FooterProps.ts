/**
 * Contract for {@link Footer}.
 */
export default interface FooterProps {
  /** Site name, set beside the copyright line. */
  readonly brand: string;
  /**
   * The year printed in the copyright line. Passed in rather than read from the
   * clock, so the component stays pure and the page owns the one impure call.
   */
  readonly year: number;
  /**
   * Links rendered in order. Labels must be unique — they are used as React
   * keys. Destinations follow the path rules in {@link SiteLinkProps}.
   */
  readonly links: readonly {
    readonly label: string;
    readonly path: string;
  }[];
  /** Standing disclaimer printed on its own line beneath the links. */
  readonly note: string;
}
