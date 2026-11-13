import config from '../config/config.js';
import { FiCalendar, FiClock } from 'react-icons/fi';

export default function Section2() {
  const section = config.section2;

  if (!section?.enabled) return null;

  const heading = section.heading || {};
  const introParagraph = section.introParagraph || {};
  const subheading = section.subheading || {};
  const subheading2 = section.subheading2 || {};
  const paragraph = section.paragraph || {};
  const dateTime = section.dateTime || {};
  const contentPosition = section.contentPosition || {};

  return (
    <section
      id="section2"
      style={{
        position: 'relative',
        width: '100%',
        height: section.height || '100svh',
        minHeight: section.minHeight || '600px',
        overflow: 'hidden',
        backgroundColor: section.backgroundColor || '#F6ECD9',
        backgroundImage: section.backgroundImage ? `url(${section.backgroundImage})` : 'none',
        backgroundSize: section.backgroundSize || '100% 100%',
        backgroundPosition: section.backgroundPosition || 'center',
        backgroundRepeat: section.backgroundRepeat || 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: contentPosition.top ?? '38%',
          right: contentPosition.right ?? '8%',
          bottom: contentPosition.bottom ?? 'auto',
          left: contentPosition.left ?? '8%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: section.contentGap || '1rem',
        }}
      >
        <h2
          style={{
            margin: 0,
            color: heading.color || config.theme.colors.maroonDeep,
            fontFamily: heading.fontFamily || config.theme.fonts.display,
            fontSize: heading.fontSize || '2rem',
            fontWeight: heading.fontWeight || 700,
            lineHeight: heading.lineHeight || 1.2,
            textAlign: heading.textAlign || 'center',
          }}
        >
          {heading.text || 'A New Beginning'}
        </h2>
        {introParagraph.text && (
          <p
            style={{
              margin: 0,
              color: introParagraph.color || config.theme.colors.maroon,
              fontFamily: introParagraph.fontFamily || config.theme.fonts.body,
              fontSize: introParagraph.fontSize || '1rem',
              fontWeight: introParagraph.fontWeight || 400,
              lineHeight: introParagraph.lineHeight || 1.6,
              textAlign: introParagraph.textAlign || 'center',
            }}
          >
            {introParagraph.text}
          </p>
        )}
        {subheading.text && (
          <h3
            style={{
              margin: 0,
              color: subheading.color || config.theme.colors.maroonDeep,
              fontFamily: subheading.fontFamily || config.theme.fonts.display,
              fontSize: subheading.fontSize || '1.5rem',
              fontWeight: subheading.fontWeight || 700,
              lineHeight: subheading.lineHeight || 1.2,
              textAlign: subheading.textAlign || 'center',
            }}
          >
            {subheading.text}<br></br>
            {subheading2.text}
          </h3>
        )}
        <p
          style={{
            margin: 0,
            color: paragraph.color || config.theme.colors.maroon,
            fontFamily: paragraph.fontFamily || config.theme.fonts.body,
            fontSize: paragraph.fontSize || '1rem',
            fontWeight: paragraph.fontWeight || 400,
            lineHeight: paragraph.lineHeight || 1.6,
            textAlign: paragraph.textAlign || 'center',
          }}
        >
          {paragraph.text || 'With the blessings of our families, we invite you to celebrate the beginning of a new chapter in our home.'}
        </p>
        {dateTime.enabled !== false && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: dateTime.alignItems || 'center',
              gap: dateTime.rowGap || '0.5rem',
              color: dateTime.color || config.theme.colors.maroon,
              fontFamily: dateTime.fontFamily || config.theme.fonts.body,
              fontSize: dateTime.fontSize || '1rem',
              fontWeight: dateTime.fontWeight || 500,
              textAlign: dateTime.textAlign || 'center',
            }}
          >
          <h3
            style={{
              margin: 0,
              color: dateTime.headingColor || config.theme.colors.maroonDeep,
              fontFamily: dateTime.headingFontFamily || config.theme.fonts.display,
              fontSize: dateTime.headingFontSize || '1.25rem',
              fontWeight: dateTime.headingFontWeight || 700,
              lineHeight: 1.2,
            }}
          >
            {dateTime.heading || 'Date & Time'}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: dateTime.iconTextGap || '0.5rem' }}>
            {/* <FiCalendar size={dateTime.iconSize || 18} color={dateTime.iconColor || config.theme.colors.maroonDeep} aria-hidden="true" /> */}
            <span>{dateTime.date || '22 November 2026'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: dateTime.iconTextGap || '0.5rem' }}>
            {/* <FiClock size={dateTime.iconSize || 18} color={dateTime.iconColor || config.theme.colors.maroonDeep} aria-hidden="true" /> */}
            <span>{dateTime.time || '10:00 AM'}</span>
          </div>
          </div>
        )}
      </div>
    </section>
  );
}