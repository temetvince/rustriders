import './Hero.css';

import type HeroProps from './HeroProps';

/**
 * The front-page banner: a full-bleed atmospheric backdrop behind the branded
 * logo, a headline, a deck, a row of quick-fact chips, and a pair of
 * call-to-action links. Renders the page's only `h1`, so the composing page
 * must not render another. A call-to-action whose `path` begins with `http`
 * opens in a new tab.
 */
export default function Hero(props: HeroProps) {
  return (
    <section className='hero'>
      <img
        src={props.backdropSrc}
        alt=''
        aria-hidden='true'
        className='hero-backdrop'
      />
      <div className='hero-inner'>
        <img
          src={props.logoSrc}
          alt=''
          aria-hidden='true'
          className='hero-logo'
        />
        <h1>{props.headline}</h1>
        <p className='hero-deck'>{props.deck}</p>
        <ul className='hero-chips'>
          {props.chips.map((chip) => (
            <li
              key={chip.label}
              className='hero-chip'
            >
              <span className='hero-chip-label'>{chip.label}</span>
              <span className='hero-chip-value'>{chip.value}</span>
            </li>
          ))}
        </ul>
        <div className='hero-actions'>
          {props.primaryCta.path.startsWith('http') ?
            <a
              href={props.primaryCta.path}
              target='_blank'
              rel='noopener noreferrer'
              className='button button-primary'
            >
              {props.primaryCta.label}
            </a>
          : <a
              href={props.primaryCta.path}
              className='button button-primary'
            >
              {props.primaryCta.label}
            </a>
          }
          <a
            href={props.secondaryCta.path}
            className='button button-secondary'
          >
            {props.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
