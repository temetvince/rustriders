/**
 * Contract for {@link PointList}.
 */
export default interface PointListProps {
  /**
   * The points, in display order. Each must be unique — the text is used as the
   * React key — and the list must not be empty, since an empty list renders an
   * empty `ul` that assistive technology still announces.
   */
  readonly points: readonly string[];
}
