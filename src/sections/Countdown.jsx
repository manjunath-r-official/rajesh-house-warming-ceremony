import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import CountdownDigits from '../components/CountdownDigits.jsx';
import config from '../config/config.js';

export default function Countdown() {
  const section = config.countdownSection || {};
  const transparentBackground = section.transparentBackground === true;
  const colors = section.colors || {};
  const fireflies = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <section
      id="countdown"
      className="w-full"
      style={{
        backgroundColor: transparentBackground ? 'transparent' : section.backgroundColor || config.theme.colors.maroonDeep,
        backgroundImage: !transparentBackground && section.showBackgroundImage !== false && section.backgroundImage
          ? `url(${section.backgroundImage})`
          : 'none',
        backgroundSize: section.backgroundSize || 'cover',
        backgroundPosition: section.backgroundPosition || 'center',
        backgroundRepeat: section.backgroundRepeat || 'no-repeat',
      }}
    >
      <div className="section max-w-[1120px] mx-auto px-5 py-5">
      <Reveal>
        <div
          className="rounded-3xl px-5 py-5 relative overflow-hidden"
          style={{ background: transparentBackground ? 'transparent' : section.panelBackground || 'radial-gradient(ellipse at top, rgba(201,162,75,.14), transparent 70%)' }}
        >
          {fireflies.map((f) => (
            <motion.div
              key={f.id}
              className="absolute w-[5px] h-[5px] rounded-full"
              style={{
                left: f.left + '%',
                bottom: 0,
                backgroundColor: colors.firefly || config.theme.colors.goldBright,
                boxShadow: `0 0 10px 3px ${colors.fireflyGlow || 'rgba(232,200,116,.7)'}`,
              }}
              animate={{ opacity: [0, 0.9, 0.7, 0], y: [0, -40, -70, -110], x: [0, 30, -20, 0] }}
              transition={{ duration: f.duration, repeat: Infinity, delay: f.delay, ease: 'easeInOut' }}
            />
          ))}

          <div className="text-center relative z-10">
            <span className="inline-block tracking-[0.28em] uppercase text-xs mb-3" style={{ color: colors.eyebrow || config.theme.colors.goldBright }}>Almost There</span>
            <h2 className="font-display font-medium mb-10" style={{ fontSize: 'clamp(34px,6vw,58px)', color: colors.heading || config.theme.colors.ivory }}>
              Counting Down for New Beginnings
            </h2>
          </div>

          <div className="relative z-10">
            <CountdownDigits size="md" colors={colors} />
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
