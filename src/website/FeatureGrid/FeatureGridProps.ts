/**
 * Contract for {@link FeatureGrid}.
 */
export default interface FeatureGridProps {
  /**
   * Features rendered as cards, in order. `iconPaths` holds SVG path data
   * drawn as line strokes on a 24×24 viewBox; each feature's `title` must be
   * unique — it is used as the React key.
   */
  readonly features: readonly {
    readonly title: string;
    readonly description: string;
    readonly iconPaths: readonly string[];
  }[];
}
