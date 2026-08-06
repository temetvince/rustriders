import './FactList.css';

import { Fragment } from 'react';

import type FactListProps from './FactListProps';

/**
 * Labelled facts set as a two-column reference list that collapses to a stack
 * on narrow screens. Rendered as a description list, so assistive technology
 * reads each value as the answer to its label.
 *
 * The list carries no spacing of its own. A page that needs it set off from
 * what precedes it should wrap it, the way the campaign section does.
 */
export default function FactList(props: FactListProps) {
  return (
    <dl className='fact-list'>
      {props.facts.map((fact) => (
        <Fragment key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
