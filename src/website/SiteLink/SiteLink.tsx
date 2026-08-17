import type SiteLinkProps from './SiteLinkProps';

/**
 * A single link, rendered as the right element for its destination. This is the
 * one place on the site that decides between an external link and a same-page
 * anchor, so every link on the page treats a given path the same way.
 *
 * External links always carry `rel="noopener noreferrer"`, so a destination
 * added to the content modules can never reach back through `window.opener`.
 */
export default function SiteLink(props: SiteLinkProps) {
  if (props.path.startsWith('http')) {
    return (
      <a
        href={props.path}
        target='_blank'
        rel='noopener noreferrer'
        className={props.className}
      >
        {props.label}
      </a>
    );
  }

  return (
    <a
      href={props.path}
      className={props.className}
    >
      {props.label}
    </a>
  );
}
