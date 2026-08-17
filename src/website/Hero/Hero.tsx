import './Hero.css';

import ActionLinks from '../ActionLinks/ActionLinks';
import type HeroProps from './HeroProps';

/**
 * The landing-page banner: a full-bleed backdrop behind the logo mark, the
 * headline, a deck, a row of quick-fact chips, and the standard button pair.
 * Renders the page's only `h1`, so the composing page must not render another
 * and must not also render a {@link PageHeader}.
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
        <ActionLinks
          primary={props.primaryCta}
          secondary={props.secondaryCta}
        />
      </div>
    </section>
  );
}
