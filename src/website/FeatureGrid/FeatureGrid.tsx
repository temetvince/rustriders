import './FeatureGrid.css';

import type FeatureGridProps from './FeatureGridProps';

/**
 * Responsive grid of feature cards, each with a line icon, headline, and
 * passage. Icons are decorative and hidden from assistive technology; the
 * headline carries the meaning.
 */
export default function FeatureGrid(props: FeatureGridProps) {
  return (
    <div className='card-grid'>
      {props.features.map((feature) => (
        <article
          key={feature.title}
          className='card'
        >
          <svg
            className='feature-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            {feature.iconPaths.map((d) => (
              <path
                key={d}
                d={d}
              />
            ))}
          </svg>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
