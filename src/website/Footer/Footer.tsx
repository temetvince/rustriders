import './Footer.css';

import SiteLink from '../SiteLink/SiteLink';
import type FooterProps from './FooterProps';

/**
 * The site footer: copyright, the standing external links, and the disclaimer.
 * Rendered once, so nothing else on the site should render a `contentinfo`
 * landmark.
 */
export default function Footer(props: FooterProps) {
  return (
    <footer className='site-footer'>
      <div className='site-footer-inner'>
        <p>
          © {props.year} {props.brand}
        </p>
        <ul className='site-footer-links'>
          {props.links.map((link) => (
            <li key={link.label}>
              <SiteLink
                label={link.label}
                path={link.path}
                className='site-footer-link'
              />
            </li>
          ))}
        </ul>
        <p className='site-footer-note'>{props.note}</p>
      </div>
    </footer>
  );
}
