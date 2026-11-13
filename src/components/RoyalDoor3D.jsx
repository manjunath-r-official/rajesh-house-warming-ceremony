import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import config from '../config/config.js';

/**
 * Full-bleed royal palace door built from the couple's own reference
 * photography (real carved temple doors) rather than procedural 3D
 * geometry — this gives genuine ornate detail a primitive-based Three.js
 * scene can't match. The "3D" swing-open is done with CSS 3D transforms
 * (perspective + rotateY on each leaf, pivoted at its outer edge) and
 * orchestrated with GSAP for the same easing language as the rest of the
 * site. Lightweight: no WebGL, no Three.js runtime cost for this screen.
 */
export default function RoyalDoor3D({ onOpening, onOpened }) {
  const entrance = config.entranceDoor || {};
  const animation = config.animation || {};
  const decoration = entrance.decoration || {};
  const leaves = entrance.leaves || {};
  const doorImages = entrance.doorImages || {};
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const sceneRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const glowRef = useRef(null);
  const decorationRef = useRef(null);
  const openingRef = useRef(false);

  function handleOpen() {
    if (openingRef.current || isOpen) return;
    openingRef.current = true;
    onOpening && onOpening();
    setIsOpen(true);
    if (navigator.vibrate) navigator.vibrate(30);

    const tl = gsap.timeline();
    const openDelay = animation.doorOpenDelayS ?? 0.15;
    const openDuration = animation.doorOpenDurationS ?? 1.8;
    const doorOpenComplete = openDelay + openDuration;
    const decorationFadeDuration = animation.doorDecorationFadeDurationS ?? 0.45;

    // Light bloom from the seam right before the doors move
    const bloomDuration = animation.doorBloomDurationS ?? 0.35;
    tl.to(glowRef.current, { opacity: 1, duration: bloomDuration, ease: 'power2.out' }, 0);
    tl.to(
      glowRef.current,
      {
        opacity: 0,
        duration: animation.doorBloomFadeDurationS ?? 0.45,
        ease: animation.doorBloomFadeEase || 'power2.out',
      },
      bloomDuration
    );

    // Swing both leaves open, pivoting at their outer edges (real hinge behavior)
    tl.to(leftRef.current, { rotateY: animation.doorLeftOpenAngle ?? -108, duration: openDuration, ease: animation.doorEase || 'power3.inOut' }, openDelay);
    tl.to(rightRef.current, { rotateY: animation.doorRightOpenAngle ?? 108, duration: openDuration, ease: animation.doorEase || 'power3.inOut' }, openDelay);

    if (decoration.enabled !== false && decoration.image && decorationRef.current) {
      tl.to(
        decorationRef.current,
        { opacity: 0, duration: decorationFadeDuration, ease: animation.doorDecorationFadeEase || 'power2.out' },
        doorOpenComplete
      );
    }

    // Whole scene pushes back and fades as we "walk through"
    const sceneExitStart = doorOpenComplete
      + (decoration.enabled !== false && decoration.image ? decorationFadeDuration : 0)
      + (animation.doorSceneExitDelayS ?? 0);
    tl.to(
      sceneRef.current,
      {
        scale: animation.doorSceneExitScale ?? 1.25,
        opacity: 0,
        duration: animation.doorSceneExitDurationS ?? 1.1,
        ease: animation.doorSceneExitEase || 'power2.in',
      },
      sceneExitStart
    );

    tl.eventCallback('onComplete', () => onOpened && onOpened());
  }

  const leftLeaf = leaves.left || {};
  const rightLeaf = leaves.right || {};
  const scenePosition = entrance.scenePosition || {};
  const seam = entrance.seam || {};
  const glow = entrance.glow || {};

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 select-none"
      role="button"
      tabIndex={0}
      aria-label="Open the palace door to enter the invitation"
      onPointerDown={handleOpen}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      style={{ perspective: entrance.perspective || '2200px', margin: 0, padding: 0 }}
    >
      <div
        ref={sceneRef}
        className="absolute overflow-hidden"
        style={{
          top: scenePosition.top ?? '0',
          right: scenePosition.right ?? '0',
          bottom: scenePosition.bottom ?? '0',
          left: scenePosition.left ?? '0',
          width: scenePosition.width ?? 'auto',
          height: scenePosition.height ?? 'auto',
          transform: scenePosition.transform || 'none',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{ background: glow.background || 'none', zIndex: glow.zIndex ?? 1 }}
        />

        {/* Left leaf — hinge on the far left edge */}
        <div
          className="absolute overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            ...leftLeaf,
            margin: 0,
            padding: 0,
          }}
        >
          <div
            ref={leftRef}
            className="w-full h-full"
            style={{ transformStyle: 'preserve-3d', transformOrigin: leftLeaf.transformOrigin || 'left center' }}
          >
            <img
              src={doorImages.left}
              alt="Carved palace door — left panel"
              className="w-full h-full object-cover"
              style={{
                objectFit: entrance.doorImageFit || 'cover',
                objectPosition: entrance.doorImagePosition || 'center',
                boxShadow: entrance.doorShadows?.left || 'none',
              }}
              draggable={false}
            />
          </div>
        </div>

        {/* Right leaf — hinge on the far right edge */}
        <div
          className="absolute overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            ...rightLeaf,
            margin: 0,
            padding: 0,
          }}
        >
          <div
            ref={rightRef}
            className="w-full h-full"
            style={{ transformStyle: 'preserve-3d', transformOrigin: rightLeaf.transformOrigin || 'right center' }}
          >
            <img
              src={doorImages.right}
              alt="Carved palace door — right panel"
              className="w-full h-full object-cover"
              style={{
                objectFit: entrance.doorImageFit || 'cover',
                objectPosition: entrance.doorImagePosition || 'center',
                boxShadow: entrance.doorShadows?.right || 'none',
              }}
              draggable={false}
            />
          </div>
        </div>
      {/* Center seam line for a convincing closed-door look before opening */}
      {seam.enabled !== false && !isOpen && (
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: seam.width || '3px',
            background: seam.background || 'none',
            zIndex: seam.zIndex ?? 2,
          }}
        />
      )}
      </div>

      {decoration.enabled !== false && decoration.image && (
        <img
          ref={decorationRef}
          src={decoration.image}
          alt={decoration.alt || ''}
          aria-hidden={decoration.alt ? undefined : 'true'}
          draggable={false}
          className="absolute pointer-events-none"
          style={{
            top: decoration.top ?? '0',
            right: decoration.right ?? '0',
            bottom: decoration.bottom ?? '0',
            left: decoration.left ?? '0',
            width: decoration.width || '100%',
            height: decoration.height || '100%',
            maxWidth: 'none',
            objectFit: decoration.objectFit || 'fill',
            objectPosition: decoration.objectPosition || 'center',
            opacity: decoration.opacity ?? 1,
            zIndex: decoration.zIndex ?? 20,
          }}
        />
      )}
    </div>
  );
}
