import './PointList.css';

import type PointListProps from './PointListProps';

/**
 * A short list of independent facts, marked with rust dashes. Used wherever a
 * section would otherwise run a set of unrelated items together into one
 * sentence — a schedule, a list of what a setting does and does not cover, or
 * the commands worth knowing.
 */
export default function PointList(props: PointListProps) {
  return (
    <ul className='point-list'>
      {props.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}
