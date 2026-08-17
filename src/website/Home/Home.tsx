import headerImg from '../../assets/header.jpg';
import logoImg from '../../assets/logo.jpg';
import { page } from '../../content/page';
import ActionLinks from '../ActionLinks/ActionLinks';
import FeatureGrid from '../FeatureGrid/FeatureGrid';
import Hero from '../Hero/Hero';
import PointList from '../PointList/PointList';

/**
 * The page: a banner, one grid of features, and the rules.
 *
 * It is deliberately short enough to skim in under a minute, so a new section
 * is a decision to make it longer. Rendered inside the `main` landmark supplied
 * by {@link App}, so this renders no landmark of its own, and it holds the
 * page's only `h1`, inside {@link Hero}.
 *
 * Both section `id`s are linked from `navItems`, so renaming one means renaming
 * it there too.
 */
export default function Home() {
  return (
    <>
      <Hero
        backdropSrc={headerImg}
        logoSrc={logoImg}
        headline={page.hero.headline}
        deck={page.hero.deck}
        chips={page.hero.chips}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
      />

      <section
        id='features'
        className='section'
      >
        <div className='section-inner'>
          <p className='eyebrow'>{page.features.eyebrow}</p>
          <h2>{page.features.headline}</h2>
          <p className='section-lede'>{page.features.lede}</p>
          <FeatureGrid features={page.features.cards} />
        </div>
      </section>

      <section
        id='join'
        className='section section-cta'
      >
        <div className='section-inner'>
          <p className='eyebrow'>{page.join.eyebrow}</p>
          <h2>{page.join.headline}</h2>
          <p className='section-lede'>{page.join.lede}</p>
          <PointList points={page.join.rules} />
          <p className='join-note'>{page.join.note}</p>
          <ActionLinks
            primary={page.join.primaryCta}
            secondary={page.join.secondaryCta}
          />
        </div>
      </section>
    </>
  );
}
