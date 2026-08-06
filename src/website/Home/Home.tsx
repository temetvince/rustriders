import './Home.css';

import headerImg from '../../assets/header.jpg';
import logoImg from '../../assets/logo.jpg';
import FactList from '../FactList/FactList';
import FeatureGrid from '../FeatureGrid/FeatureGrid';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import * as content from './HomeContent';

/**
 * The complete landing page for RustRiders. The page makes one argument, and
 * the sections are its beats in order: a banner hero, the six-month campaign
 * that resets everybody to nothing, the no-tech-tree rule that is how
 * progression is earned rather than bought, what the world holds for a player
 * to find, and the invitation to join. All copy and section data come from
 * {@link module:HomeContent} and are passed down to purely presentational
 * components; this module only composes.
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
          id='campaign'
          className='section'
        >
          <div className='section-inner'>
            <p className='eyebrow'>The Campaign</p>
            <h2>{content.campaignHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.campaignParagraphs[0]}</p>
              <p>{content.campaignParagraphs[1]}</p>
              <blockquote className='callout'>
                <p>{content.campaignCallout}</p>
              </blockquote>
              <p>{content.campaignParagraphs[2]}</p>
            </div>
            <div className='section-block'>
              <FactList facts={content.campaignCadence} />
            </div>
          </div>
        </section>

        <section
          id='no-tech-tree'
          className='section section-alt'
        >
          <div className='section-inner'>
            <p className='eyebrow'>No Tech Tree</p>
            <h2>{content.noTechTreeHeadline}</h2>
            <div className='pitch'>
              <p className='pitch-lead'>{content.noTechTreeParagraphs[0]}</p>
              <p>{content.noTechTreeParagraphs[1]}</p>
              <blockquote className='callout'>
                <p>{content.noTechTreeCallout}</p>
              </blockquote>
              <p>{content.noTechTreeParagraphs[2]}</p>
            </div>
          </div>
        </section>

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
          id='join'
          className='section section-alt'
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
