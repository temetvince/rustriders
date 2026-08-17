import './App.css';

import logoImg from './assets/logo.jpg';
import { site } from './content/site';
import Footer from './website/Footer/Footer';
import Header from './website/Header/Header';
import Home from './website/Home/Home';

/**
 * Application root. It installs the global stylesheet and owns the frame around
 * the page — the skip link, the sticky header, the `main` landmark, and the
 * footer — leaving {@link Home} to be nothing but the argument the site makes.
 *
 * There is no router. The site is a single page read top to bottom and its
 * navigation is same-page anchors, so a router would buy nothing and cost every
 * visitor the download.
 *
 * The current year is read here rather than inside {@link Footer}, so the one
 * impure call on the site sits at its root and every component below stays
 * purely a function of its props. Must be rendered exactly once.
 */
export default function App() {
  return (
    <div
      className='app'
      id='top'
    >
      <a
        href='#main'
        className='skip-link'
      >
        Skip to content
      </a>

      <Header
        brand={site.brand}
        brandPath='#top'
        logoSrc={logoImg}
        navItems={site.navItems}
        cta={site.headerCta}
      />

      <main id='main'>
        <Home />
      </main>

      <Footer
        brand={site.brand}
        year={new Date().getFullYear()}
        links={site.footerLinks}
        note={site.footerNote}
      />
    </div>
  );
}
