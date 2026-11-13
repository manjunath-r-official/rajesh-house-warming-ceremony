import { useState } from 'react';
import RoyalDoor3D from '../components/RoyalDoor3D.jsx';
import WelcomeSequence from '../components/WelcomeSequence.jsx';
import config from '../config/config.js';

/**
 * Controls the full first-experience flow:
 *   1. Dark palace door (Three.js) — tap/click to open
 *   2. Welcome sequence (Sanskrit + rangoli)
 *   3. Reveals the rest of the site (handled by parent via onEnter)
 */
export default function EntryGate({ onEnter, onMusicStart, petalBurst }) {
  const [stage, setStage] = useState('door'); // 'door' | 'welcome' | 'done'
  const [doorOpening, setDoorOpening] = useState(false);

  function handleDoorOpened() {
    petalBurst && petalBurst(40);
    onMusicStart && onMusicStart();
    setStage('welcome');
  }

  function handleWelcomeEnter() {
    setStage('done');
    petalBurst && petalBurst(20);
    onEnter && onEnter();
  }

  return (
    <>
      {stage === 'door' && (
          <div
            className="fixed inset-0 z-[100] w-full max-w-full overflow-hidden overscroll-none touch-none"
            style={{
              background: config.entranceDoor?.background || 'radial-gradient(ellipse at center, #1a0509 0%, #0d0304 70%)',
              height: '100dvh',
              padding: 0,
              margin: 0,
            }}
          >
            <RoyalDoor3D onOpening={() => setDoorOpening(true)} onOpened={handleDoorOpened} />
            {!doorOpening && config.entranceDoor?.prompt?.enabled !== false && (
              <p
                className="fixed animate-pulse pointer-events-none"
                style={{
                  top: config.entranceDoor?.prompt?.top ?? 'auto',
                  right: config.entranceDoor?.prompt?.right ?? '0',
                  bottom: config.entranceDoor?.prompt?.bottom ?? '0.5rem',
                  left: config.entranceDoor?.prompt?.left ?? '0',
                  zIndex: config.entranceDoor?.prompt?.zIndex ?? 30,
                  margin: 0,
                  color: config.entranceDoor?.prompt?.color || '#E8C874',
                  fontFamily: config.entranceDoor?.prompt?.fontFamily || config.theme.fonts.body,
                  fontSize: config.entranceDoor?.prompt?.fontSize || '0.75rem',
                  fontWeight: config.entranceDoor?.prompt?.fontWeight ?? 400,
                  letterSpacing: config.entranceDoor?.prompt?.letterSpacing || '0.14em',
                  textTransform: config.entranceDoor?.prompt?.textTransform || 'uppercase',
                  textAlign: config.entranceDoor?.prompt?.textAlign || 'center',
                  opacity: config.entranceDoor?.prompt?.opacity ?? 0.8,
                  textShadow: config.entranceDoor?.prompt?.textShadow || 'none',
                }}
              >
                {config.entranceDoor?.prompt?.text || 'Tap the door to enter'}
              </p>
            )}
          </div>
      )}

      <WelcomeSequence visible={stage === 'welcome'} onEnter={handleWelcomeEnter} />
    </>
  );
}
