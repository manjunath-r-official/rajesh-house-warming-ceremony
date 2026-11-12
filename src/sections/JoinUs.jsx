import config from '../config/config.js';

export default function JoinUs() {
  const section = config.joinUs || {};

  if (!section.enabled) return null;

  const heading = section.heading || {};
  const paragraph = section.paragraph || {};
  const headingPosition = heading.position || {};
  const paragraphPosition = paragraph.position || {};

  return (
    <section
      id="join-us"
      style={{
        position: 'relative',
        width: '100%',
        height: section.height || '100svh',
        minHeight: section.minHeight || '600px',
        overflow: 'hidden',
        backgroundColor: section.backgroundColor || config.theme.colors.ivory,
        backgroundImage: section.backgroundImage ? `url(${section.backgroundImage})` : 'none',
        backgroundSize: section.backgroundSize || '100% 100%',
        backgroundPosition: section.backgroundPosition || 'center',
        backgroundRepeat: section.backgroundRepeat || 'no-repeat',
      }}
    >
      <h2
        style={{
          position: 'absolute',
          top: headingPosition.top ?? '25%',
          right: headingPosition.right ?? '8%',
          bottom: headingPosition.bottom ?? 'auto',
          left: headingPosition.left ?? '8%',
          margin: 0,
          color: heading.color || config.theme.colors.emerald,
          fontFamily: heading.fontFamily || config.theme.fonts.display,
          fontSize: heading.fontSize || 'clamp(2rem, 8vw, 3rem)',
          fontWeight: heading.fontWeight || 700,
          lineHeight: heading.lineHeight || 1.1,
          textAlign: heading.textAlign || 'center',
        }}
      >
        {heading.text || 'Join Us'}
      </h2>
      <p
        style={{
          position: 'absolute',
          top: paragraphPosition.top ?? '36%',
          right: paragraphPosition.right ?? '10%',
          bottom: paragraphPosition.bottom ?? 'auto',
          left: paragraphPosition.left ?? '10%',
          margin: 0,
          color: paragraph.color || config.theme.colors.maroon,
          fontFamily: paragraph.fontFamily || config.theme.fonts.body,
          fontSize: paragraph.fontSize || '1.1rem',
          fontWeight: paragraph.fontWeight || 400,
          lineHeight: paragraph.lineHeight || 1.6,
          textAlign: paragraph.textAlign || 'center',
        }}
      >
        {paragraph.text || 'We look forward to celebrating this special occasion with you.'}
      </p>
    </section>
  );
}