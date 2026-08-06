/**
 * Contract for {@link FactList}.
 */
export default interface FactListProps {
  /**
   * The facts rendered in order, each as a label and its value. Every `label`
   * must be unique — it is used as the React key. Labels are set in small mono
   * capitals, so keep them to a few words; the value carries the detail.
   */
  readonly facts: readonly {
    readonly label: string;
    readonly value: string;
  }[];
}
