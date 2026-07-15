import './Home.css';

import { Fragment } from 'react';

import headerImg from '../../assets/header.jpg';
import logoImg from '../../assets/logo.jpg';
import FeatureGrid from '../FeatureGrid/FeatureGrid';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import * as content from './HomeContent';

/**
 * The complete landing page for RustRiders: a banner hero, the server's
 * gameplay changes, the "always content" pitch, the definitive settings, and
 * how to join. All copy and section data come from {@link module:HomeContent}
 * and are passed down to purely presentational components; this module only
 * composes.
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
          id='features'
          className='section'
        >
          <div className='section-inner'>
            <p className='eyebrow'>What Makes It Different</p>
            <h2>Vanilla, with the busywork trimmed</h2>
            <p className='section-lede'>{content.featuresLede}</p>
            <FeatureGrid features={content.features} />
          </div>
        </section>

        <section
          id='community'
          className='section section-alt'
        >
          <div className='section-inner'>
            <p className='eyebrow'>Our Community</p>
            <h2>{content.communityHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.communityParagraphs[0]}</p>
              <p>{content.communityParagraphs[1]}</p>
              <blockquote className='callout'>
                <p>{content.communityCallout}</p>
              </blockquote>
              <p>{content.communityParagraphs[2]}</p>
            </div>
          </div>
        </section>

        <section
          id='fair-play'
          className='section'
        >
          <div className='section-inner'>
            <p className='eyebrow'>Premium &amp; Protected</p>
            <h2>{content.fairPlayHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.fairPlayParagraphs[0]}</p>
              <p>{content.fairPlayParagraphs[1]}</p>
              <blockquote className='callout'>
                <p>{content.fairPlayCallout}</p>
              </blockquote>
              <p>{content.fairPlayParagraphs[2]}</p>
            </div>
          </div>
        </section>

        <section
          id='server'
          className='section section-alt'
        >
          <div className='section-inner'>
            <p className='eyebrow'>The Server</p>
            <h2>How this wipe is set up</h2>
            <p className='section-lede'>{content.glanceLede}</p>
            <dl className='glance'>
              {content.glance.map((fact) => (
                <Fragment key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </Fragment>
              ))}
            </dl>
            <a
              href={content.battlemetricsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='button button-secondary server-status-cta'
            >
              View Live Status on BattleMetrics
            </a>
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
