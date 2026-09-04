import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CURTAIN_ASSETS, CURTAIN_VIDEOS } from '../constants';
import { useCursorHeadTrack } from '../lib/useCursorHeadTrack';

interface CurtainStageProps {
  /**
   * Root of the stage. HomePage's rAF loop writes the open amount onto it as
   * the `--p` custom property (0 = shut, 1 = fully drawn back); every layer
   * below animates off that one number in CSS.
   */
  rootRef: React.RefObject<HTMLDivElement | null>;
}

/** Open amount past which the puppets start following the cursor. */
const TRACK_FROM = 0.5;

/** Drop a layer whose artwork 404s so the CSS stand-in underneath shows through. */
const hideOnError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.style.display = 'none';
};

/**
 * One viewport of closed curtain at the top of the gallery panel. Scrolling
 * draws the two halves apart to reveal the stage, then the puppets track the
 * cursor until the gallery scrolls up over them.
 */
export default function CurtainStage({ rootRef }: CurtainStageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  /**
   * Whether the stage is actually on screen. `--p` stays pinned at 1 for the
   * whole gallery scroll and everything past it, so open-ness alone is not
   * enough to gate the tracking — without this the loop would keep seeking two
   * videos every frame long after the curtain has scrolled out of sight.
   * An observer keeps that check off the per-frame path entirely.
   */
  const onScreenRef = useRef(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const stage = rootRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreenRef.current = entry.isIntersecting;
      },
      { threshold: 0.15 }
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [rootRef]);

  /**
   * Read straight off the inline style rather than getComputedStyle: the loop
   * sets it inline, and this runs every frame, so it must not force a style
   * recalculation.
   */
  const shouldTrack = useCallback(() => {
    if (isTouch || !onScreenRef.current) return false;
    const raw = rootRef.current?.style.getPropertyValue('--p');
    return raw !== undefined && parseFloat(raw) >= TRACK_FROM;
  }, [rootRef, isTouch]);

  useCursorHeadTrack({
    containerRef: frameRef,
    leftRef: leftVideoRef,
    rightRef: rightVideoRef,
    shouldTrack,
  });

  /**
   * Safari and Chrome will not seek a video the decoder has never seen. A muted
   * play/pause on load primes it; without this the first cursor moves after the
   * curtain opens land on a blank frame.
   */
  const prime = (ref: React.RefObject<HTMLVideoElement | null>) => () => {
    const video = ref.current;
    if (!video) return;
    video
      .play()
      .then(() => {
        video.pause();
        video.currentTime = 0;
      })
      .catch(() => {
        /* Autoplay refused; seeking still works once the user interacts. */
      });
  };

  // Touch devices have no cursor, so alternate the clips instead.
  useEffect(() => {
    if (!isTouch) return;
    const leftVideo = leftVideoRef.current;
    const rightVideo = rightVideoRef.current;
    if (!leftVideo || !rightVideo) return;

    let showingLeft = true;
    const swap = () => {
      const shown = showingLeft ? leftVideo : rightVideo;
      const hidden = showingLeft ? rightVideo : leftVideo;
      shown.style.opacity = '1';
      hidden.style.opacity = '0';
      shown.currentTime = 0;
      shown.play().catch(() => {});
      showingLeft = !showingLeft;
    };

    swap();
    const timer = window.setInterval(swap, 4000);
    return () => window.clearInterval(timer);
  }, [isTouch]);

  return (
    <div ref={rootRef} id="curtain-stage" className="relative w-full h-screen overflow-hidden">
      {/* LAYER 1 & 2 — the stage, full-bleed.

          object-cover, so the wooden stage spans edge to edge with no side
          gaps. The puppets occupy source rows 76-719 of 720 — 89% of the frame
          — so at full width they fill essentially the whole viewport and the
          valance would land on their heads. `--stage-drop` nudges the footage
          down by just enough to clear it; the strip that opens up at the top is
          behind the valance, and the cost is a sliver of floor at the bottom. */}
      <div id="curtain-backdrop" className="absolute inset-0 curtain-stage-fallback">
        {/* Crisp still, so the parting curtains reveal a sharp stage before the
            clips have faded up. It is frame 0 of the left clip, so the handover
            to video is invisible. */}
        <img
          src={CURTAIN_ASSETS.stage}
          alt=""
          onError={hideOnError}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div ref={frameRef} id="curtain-puppets" className="absolute inset-0" aria-hidden="true">
          <video
            ref={leftVideoRef}
            src={CURTAIN_VIDEOS.lookLeft}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={prime(leftVideoRef)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
            style={{ opacity: 0 }}
          />
          <video
            ref={rightVideoRef}
            src={CURTAIN_VIDEOS.lookRight}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={prime(rightVideoRef)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
            style={{ opacity: 1 }}
          />
        </div>

        {/* Footlight wash: keeps the frame edges dark so the puppets read. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 62%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 78%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>

      {/* LAYER 3 — curtain halves. Each is a 50% window onto a double-width copy
          of the one closed-curtain asset, anchored to opposite edges, so the two
          reassemble into a single seamless image while shut. */}
      <div id="curtain-left" className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[200%] curtain-velvet">
          <img
            src={CURTAIN_ASSETS.curtain}
            alt=""
            onError={hideOnError}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      <div id="curtain-right" className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[200%] curtain-velvet">
          <img
            src={CURTAIN_ASSETS.curtain}
            alt=""
            onError={hideOnError}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* LAYER 4 — the valance, pinned to the stage's visible top edge.

          Offset by the nav height: the nav is opaque, so a valance at top:0 has
          its carved gold header bar hidden behind it and only the swags show.

          Drawn as a background tiled TWICE across the width rather than one
          stretched copy. At full width a single copy stands 216px tall on a
          813px viewport, which cannot clear the puppets no matter where the
          footage sits. Two tiles halve that to ~108px with no distortion at all
          — the artwork wraps cleanly (its edges match) — which is what makes
          the full-bleed stage and the uncovered heads fit together. Height is
          derived from the artwork's own 6.677:1 aspect so the tiles stay
          perfectly proportioned at every width. */}
      <div
        id="curtain-valance"
        className="pointer-events-none absolute inset-x-0 z-30"
        // `top` is set in the stylesheet: it clamps against --stage-top so the
        // valance tracks the curtain while the panel is still rising.
        style={{ backgroundImage: `url("${CURTAIN_ASSETS.valance}")` }}
      />

      {/* Scroll cue, faded out by the first sliver of curtain movement. */}
      <div
        id="curtain-cue"
        className="pointer-events-none absolute inset-x-0 bottom-10 z-40 flex flex-col items-center gap-3"
      >
        <span className="font-serif text-[13px] uppercase tracking-[0.4em] text-[#d9b358]">
          Scroll to raise the curtain
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-[#d9b358] to-transparent" />
      </div>
    </div>
  );
}
