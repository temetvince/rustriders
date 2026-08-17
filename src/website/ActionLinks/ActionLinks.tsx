import './ActionLinks.css';

import SiteLink from '../SiteLink/SiteLink';
import type ActionLinksProps from './ActionLinksProps';

/**
 * The site's standard pair of call-to-action buttons: one filled, one outlined,
 * side by side, stacking when they will not fit on a line. Used by the banner
 * and by the closing section, so the two buttons are always the same size and
 * in the same order wherever a reader meets them.
 */
export default function ActionLinks(props: ActionLinksProps) {
  return (
    <div className='action-links'>
      <SiteLink
        label={props.primary.label}
        path={props.primary.path}
        className='button button-primary'
      />
      <SiteLink
        label={props.secondary.label}
        path={props.secondary.path}
        className='button button-secondary'
      />
    </div>
  );
}
