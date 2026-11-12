import { FiMapPin } from 'react-icons/fi';
import config from '../config/config.js';

export default function Venue2() {
  const section = config.venue2 || {};

  if (section.enabled === false) return null;

  const heading = section.heading || {};
  const address = section.address || {};
  const button = section.button || {};
  const map = section.map || {};
  const contentPosition = section.contentPosition || {};
  const venue = config.venue || {};
  const addressText = address.text || venue.address || '';
  const addressDetails = address.details || venue.parkingInfo || '';
  const mapsLink = button.href || venue.mapsLink || '#';
  const mapsEmbed = map.embedUrl || venue.mapsEmbed || '';

  return (
    <section
      id="venue2"
      style={{
        position: 'relative',
        width: '100%',
        height: section.height || 'auto',
        minHeight: section.minHeight || 0,
        aspectRatio: section.aspectRatio || '768 / 1365',
        overflow: 'hidden',
        backgroundColor: section.backgroundColor || '#07320A',
        backgroundImage: section.backgroundImage ? `url(${section.backgroundImage})` : 'none',
        backgroundSize: section.backgroundSize || '100% 100%',
        backgroundPosition: section.backgroundPosition || 'center',
        backgroundRepeat: section.backgroundRepeat || 'no-repeat',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        @keyframes venue2-gold-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: -100% 50%; }
        }

        @keyframes venue2-highlight-sweep {
          0% { transform: translateX(-180%) skewX(-20deg); }
          55%, 100% { transform: translateX(260%) skewX(-20deg); }
        }

        .venue2-map-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          isolation: isolate;
          border-style: solid;
          border-width: 1px;
          color: var(--venue2-button-text);
          background-image: linear-gradient(115deg, var(--venue2-gold-start), var(--venue2-gold-middle), var(--venue2-gold-end), var(--venue2-gold-middle));
          background-size: 260% 100%;
          animation: venue2-gold-shimmer var(--venue2-shine-duration) linear infinite;
          box-shadow: 0 5px 0 var(--venue2-gold-start), 0 9px 18px rgba(0,0,0,.35), inset 0 1px 2px rgba(255,255,255,.85), inset 0 -3px 6px rgba(105,57,0,.28);
          text-decoration: none;
          transform: translateY(0);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .venue2-map-button::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -30%;
          bottom: -30%;
          left: 0;
          width: 30%;
          background: linear-gradient(90deg, transparent, var(--venue2-highlight), transparent);
          filter: blur(2px);
          animation: venue2-highlight-sweep 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        .venue2-map-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 0 var(--venue2-gold-start), 0 13px 22px rgba(0,0,0,.38), inset 0 1px 2px rgba(255,255,255,.9), inset 0 -3px 6px rgba(105,57,0,.25);
        }

        .venue2-map-frame {
          width: 100%;
          overflow: hidden;
          border: 1px solid var(--venue2-map-border);
          border-radius: var(--venue2-map-radius);
          box-shadow: 0 8px 24px rgba(0,0,0,.32), 0 0 14px rgba(255,198,45,.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .venue2-map-button,
          .venue2-map-button::before {
            animation: none;
          }
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          top: contentPosition.top ?? '10%',
          right: contentPosition.right ?? '7%',
          bottom: contentPosition.bottom ?? 'auto',
          left: contentPosition.left ?? '7%',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: section.contentGap || '0.85rem',
          maxWidth: section.contentMaxWidth || '520px',
          marginInline: 'auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: heading.fontFamily || config.theme.fonts.display,
            fontSize: heading.fontSize || 'clamp(3rem, 14vw, 4.5rem)',
            fontWeight: heading.fontWeight || 700,
            lineHeight: heading.lineHeight || 1.05,
            textAlign: heading.textAlign || 'center',
            backgroundImage: `linear-gradient(to bottom, ${heading.gradientTop || '#FFF4B0'}, ${heading.gradientMiddle || '#F6C343'}, ${heading.gradientBottom || '#B87508'})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.45))',
          }}
        >
          {heading.text || 'Venue'}
        </h2>

        <div
          style={{
            color: address.color || '#FFFFFF',
            fontFamily: address.fontFamily || config.theme.fonts.body,
            fontSize: address.fontSize || '1rem',
            fontWeight: address.fontWeight || 500,
            lineHeight: address.lineHeight || 1.5,
            textAlign: address.textAlign || 'center',
            textShadow: '0 1px 5px rgba(0,0,0,.7)',
          }}
        >
          {addressText && <p style={{ margin: 0 }}>{addressText}</p>}
          {addressDetails && <p style={{ margin: '0.2rem 0 0' }}>{addressDetails}</p>}
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="venue2-map-button"
          style={{
            '--venue2-button-text': button.textColor || '#14532D',
            '--venue2-gold-start': button.gradientStart || '#B87508',
            '--venue2-gold-middle': button.gradientMiddle || '#FFE58A',
            '--venue2-gold-end': button.gradientEnd || '#D99A16',
            '--venue2-highlight': button.highlightColor || 'rgba(255,255,255,0.82)',
            '--venue2-shine-duration': button.shineDuration || '2.8s',
            borderColor: button.borderColor || '#FFE58A',
            borderRadius: button.borderRadius || '999px',
            padding: button.padding || '0.9rem 1.4rem',
            gap: button.iconTextGap || '0.65rem',
            fontFamily: button.fontFamily || config.theme.fonts.body,
            fontSize: button.fontSize || '0.95rem',
            fontWeight: button.fontWeight || 700,
          }}
        >
          <FiMapPin size={button.iconSize || 20} aria-hidden="true" />
          <span>{button.text || 'View Location on Map'}</span>
        </a>

        {map.show !== false && mapsEmbed && (
          <div
            className="venue2-map-frame"
            style={{
              '--venue2-map-border': map.borderColor || 'rgba(255, 215, 95, 0.8)',
              '--venue2-map-radius': map.borderRadius || '12px',
              height: map.height || '180px',
            }}
          >
            <iframe
              src={mapsEmbed}
              title={map.title || 'Map to the venue'}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
        )}
      </div>
    </section>
  );
}