/**
 * Contract for {@link ActionLinks}.
 *
 * Both destinations follow the path rules described in {@link SiteLinkProps}.
 * The pair is ordered by weight, not by importance to the reader: `primary` is
 * the filled button and should be the action the page most wants taken.
 */
export default interface ActionLinksProps {
  /** The emphasised action, rendered as the filled button. */
  readonly primary: {
    readonly label: string;
    readonly path: string;
  };
  /** The quieter action, rendered as the outlined button beside it. */
  readonly secondary: {
    readonly label: string;
    readonly path: string;
  };
}
