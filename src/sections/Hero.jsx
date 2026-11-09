import config from '../config/config.js';
import heroSmall from '../assets/images/hero_bg.png';
import heroBig from '../assets/images/hero_big.png';

export default function Hero() {
  const heroSection = config.heroSection || {};
  const subtitlePosition = heroSection.subtitlePosition || {};
  const bottomText = heroSection.bottomText;
  const bottomTextPosition = bottomText?.position || {};

  return (
    <section id="hero" className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 z-30 god-badge" aria-hidden="true" style={{ top: config.coupleSection?.godTop || '2%' }}>
        {config.coupleSection?.godImage && (
          <img src={config.coupleSection.godImage} alt="" style={{ width: 44, height: 'auto', display: 'block', margin: '0 auto' }} />
        )}
        {config.coupleSection?.godSubtitle && (
          <div style={{ textAlign: 'center', marginTop: 6, fontSize: '8px', color: config.theme.colors.maroon, opacity: 0.9 }}>
            {config.coupleSection.godSubtitle}
          </div>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        .hero-bg {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 12vh; /* place title ~20% from top */
          background-image: url('${heroSmall}');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .god-badge { }

        @media (min-width: 768px) {
          .hero-bg { background-image: url('${heroBig}'); }
        }

        .hero-overlay {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          padding: 0rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
          z-index: 40;
        }

        @media (max-width: 640px) {
          .hero-overlay { width: 100%; margin-bottom: 2rem; }
        }

        .hero-intro {
          margin-bottom: 1.3rem;
          font-size: clamp(15px, 1.8vw, 16px);
          color: ${config.theme.colors.brown};
          text-transform: none;
          opacity: 0.92;
          max-width: 56ch;
          line-height: 1.4;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          font-family: 'Great Vibes', ${config.theme.fonts.display}, cursive;
        }

        .hero-title {
          font-family: 'Great Vibes', ${config.theme.fonts.cinzel}, ${config.theme.fonts.display}, cursive;
          background-image: linear-gradient(to bottom, ${heroSection.titleGradientTop || config.theme.colors.gold}, ${heroSection.titleGradientBottom || config.theme.colors.maroon});
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: ${heroSection.titleFontSize || 'clamp(40px, 12vw, 96px)'};
          line-height: 1.5;
          text-align: center;
          letter-spacing: 0;
          white-space: nowrap;
          padding-inline: 0.2em;
          margin-inline: -0.2em;
          text-shadow: 0 8px 28px rgba(0,0,0,0.45);
        }

        .hero-subtitle {
          position: relative;
          color: ${config.theme.colors.brown};
          font-family: ${config.theme.fonts.display}, serif;
          text-align: center;
        }
      `}</style>

      <div className="hero-bg">
        <div className="hero-overlay">
          <div>
            <p className="hero-intro">{heroSection.intro || 'You are Cordially Invited to our'}</p>
            <h1 className="hero-title">{heroSection.title || 'Gruha Pravesha'}</h1>
            {heroSection.subtitle && (
              <p
                className="hero-subtitle"
                style={{
                  top: subtitlePosition.top ?? '0px',
                  right: subtitlePosition.right ?? 'auto',
                  bottom: subtitlePosition.bottom ?? 'auto',
                  left: subtitlePosition.left ?? '0px',
                }}
              >
                {heroSection.subtitle}
              </p>
            )}
          </div>
        </div>
        {bottomText?.text && (
          <p
            className="hero-bottom-text"
            style={{
              position: 'absolute',
              top: bottomTextPosition.top ?? 'auto',
              right: bottomTextPosition.right ?? '0',
              bottom: bottomTextPosition.bottom ?? '20%',
              left: bottomTextPosition.left ?? '0',
              margin: 0,
              padding: '0 1rem',
              boxSizing: 'border-box',
              color: bottomText.color || config.theme.colors.maroonDeep,
              backgroundImage: `linear-gradient(to bottom, ${heroSection.titleGradientTop || config.theme.colors.gold}, ${heroSection.titleGradientBottom || config.theme.colors.maroon})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: bottomText.fontSize || '1rem',
              fontFamily: bottomText.fontFamily || config.theme.fonts.devanagari,
              fontWeight: bottomText.fontWeight || 700,
              textAlign: bottomText.textAlign || 'center',
              zIndex: 30,
            }}
          >
            {bottomText.text}
          </p>
        )}
      </div>
    </section>
  );
}
