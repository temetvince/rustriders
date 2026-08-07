import './Home.css';

import headerImg from '../../assets/header.jpg';
import logoImg from '../../assets/logo.jpg';
import FeatureGrid from '../FeatureGrid/FeatureGrid';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import * as content from './HomeContent';

/**
 * The complete landing page for RustRiders. The page makes one argument, and
 * the sections are its beats in order: a banner hero, the monthly full wipe
 * that puts everybody back at nothing together, what the world holds for a
 * player to find inside a wipe, and the invitation to join. All copy and
 * section data come from {@link module:HomeContent} and are passed down to
 * purely presentational components; this module only composes.
 *
 * Sections alternate between the base and `section-alt` backgrounds. Adding or
 * removing one means re-checking that no two `section-alt` bands end up
 * adjacent, which would erase the boundary between them.
 */
export default function Home() {
  return (
    <div id='top'>
      <Header
        brand={content.brand}
        logoSrc={logoImg}
        navItems={content.navItems}
        cta={content.headerCta}
      />
      <main>
        <Hero
          backdropSrc={headerImg}
          logoSrc={logoImg}
          headline={content.heroHeadline}
          deck={content.heroDeck}
          chips={content.heroChips}
          primaryCta={content.heroPrimaryCta}
          secondaryCta={content.heroSecondaryCta}
        />

        <section
          id='world'
          className='section'
        >
          <div className='section-inner'>
            <p className='eyebrow'>The World</p>
            <h2>Everything out there is first come, first served</h2>
            <p className='section-lede'>{content.featuresLede}</p>
            <FeatureGrid features={content.features} />
          </div>
        </section>

        <section
          id='wipe'
          className='section section-alt'
        >
          <div className='section-inner'>
            <p className='eyebrow'>The Wipe</p>
            <h2>{content.wipeHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.wipeParagraphs[0]}</p>
              <p>{content.wipeParagraphs[1]}</p>
              <blockquote className='callout'>
                <p>{content.wipeCallout}</p>
              </blockquote>
              <p>{content.wipeParagraphs[2]}</p>
            </div>
          </div>
        </section>

        <section
          id='join'
          className='section'
        >
          <div className='section-inner'>
            <p className='eyebrow'>Join Up</p>
            <h2>{content.joinHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.joinParagraphs[0]}</p>
              <p>{content.joinParagraphs[1]}</p>
            </div>
            <div className='join-actions'>
              <a
                href={content.joinPrimaryCta.path}
                target='_blank'
                rel='noopener noreferrer'
                className='button button-primary'
              >
                {content.joinPrimaryCta.label}
              </a>
              <a
                href={content.joinSecondaryCta.path}
                target='_blank'
                rel='noopener noreferrer'
                className='button button-secondary'
              >
                {content.joinSecondaryCta.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='site-footer'>
        <div className='site-footer-inner'>
          <p>© {new Date().getFullYear()} RustRiders</p>
          <ul className='site-footer-links'>
            {content.footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className='site-footer-note'>{content.footerNote}</p>
        </div>
      </footer>
    </div>
  );
}
