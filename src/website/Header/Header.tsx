import './Header.css';

import SiteLink from '../SiteLink/SiteLink';
import type HeaderProps from './HeaderProps';

/**
 * Sticky site header: a logo mark and wordmark linking back to the top, the
 * section navigation, and a call-to-action button. Purely presentational — all
 * labels and destinations come from props.
 */
export default function Header(props: HeaderProps) {
  return (
    <header className='site-header'>
      <a
        href={props.brandPath}
        className='site-header-brand'
      >
        <img
          src={props.logoSrc}
          alt=''
          aria-hidden='true'
          className='site-header-logo'
        />
        {props.brand}
      </a>
      <nav
        className='site-header-nav'
        aria-label='Main'
      >
        {props.navItems.map((item) => (
          <SiteLink
            key={item.label}
            label={item.label}
            path={item.path}
            className='site-header-link'
          />
        ))}
        <SiteLink
          label={props.cta.label}
          path={props.cta.path}
          className='button button-primary site-header-cta'
        />
      </nav>
    </header>
  );
}
