/**
 * Contract for {@link SiteLink}.
 *
 * The `path` selects the element rendered, and the two cases are exhaustive on
 * a single-page site: a path beginning `http` is an external link that opens in
 * a new tab, and anything else is treated as a same-page anchor, which must
 * match the `id` of a section on the page or it scrolls nowhere.
 */
export default interface SiteLinkProps {
  /** Visible link text, which is also the link's accessible name. */
  readonly label: string;
  /** Destination. Its prefix decides how the link is rendered — see above. */
  readonly path: string;
  /**
   * Class applied to the rendered element. Required rather than optional
   * because every call site is styling the link somehow, and an empty class
   * attribute is worse than an explicit one.
   */
  readonly className: string;
}
