import { useEffect, type RefObject } from 'react';

interface Options {
  /** Element the cursor position is measured against. */
  containerRef: RefObject<HTMLElement | null>;
  /** Clip of the puppets turning their heads to the viewer's left. */
  leftRef: RefObject<HTMLVideoElement | null>;
  /** Clip of the puppets turning their heads to the viewer's right. */
  rightRef: RefObject<HTMLVideoElement | null>;
  /**
   * Polled every frame rather than passed as a boolean: the curtain's open
   * amount lives in a CSS variable written by HomePage's rAF loop, which never
   * triggers a React render, so a prop would go stale.
   */
  shouldTrack: () => boolean;
  /**
   * Half-width of the centre band, as a fraction of the container, where the
   * puppets stay head-on. Without it the heads twitch whenever the cursor
   * crosses the exact midpoint.
   */
  deadZone?: number;
  /** Per-frame easing toward the target frame. Lower = heavier, slower head. */
  smoothing?: number;
}

/**
 * Drives two head-turn clips from the horizontal cursor position: the further
 * the cursor sits from centre, the deeper into the corresponding clip we seek.
 *
 * The clips are never played — they are scrubbed. `currentTime` is the whole
 * animation, which is why both must be `preload="auto"` and same-origin (or
 * CORS-enabled), otherwise seeking stalls.
 */
export function useCursorHeadTrack({
  containerRef,
  leftRef,
  rightRef,
  shouldTrack,
  deadZone = 0.06,
  smoothing = 0.12,
}: Options) {
  useEffect(() => {
    const container = containerRef.current;
    const leftVideo = leftRef.current;
    const rightVideo = rightRef.current;
    if (!container || !leftVideo || !rightVideo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Signed cursor offset from centre, -1 (far left) .. 1 (far right).
    let targetOffset = 0;
    // Smoothed follower — this is what actually drives the seek.
    let currentOffset = 0;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0) return;
      const ratio = (event.clientX - rect.left) / rect.width;
      targetOffset = Math.max(-1, Math.min(1, ratio * 2 - 1));
    };

    /**
     * Seeking is only safe when the browser is not already mid-seek and the
     * metadata has landed; queueing `currentTime` past a pending seek is what
     * produces the classic scrub stutter.
     */
    const seek = (video: HTMLVideoElement, progress: number) => {
      const { duration } = video;
      if (!duration || Number.isNaN(duration) || video.seeking) return;
      // Stop a hair short of the end: seeking to exactly `duration` can flip
      // some browsers into the ended state and blank the frame.
      const time = Math.min(duration * progress, duration - 0.05);
      if (Math.abs(video.currentTime - time) > 0.016) {
        video.currentTime = Math.max(0, time);
      }
    };

    const render = () => {
      raf = requestAnimationFrame(render);
      // Curtain still closed (or scrolled away): skip the seeks entirely. A
      // seek on a hidden video still costs a full decode.
      if (!shouldTrack()) return;

      currentOffset += (targetOffset - currentOffset) * smoothing;

      const magnitude = Math.abs(currentOffset);
      // Re-map past the dead zone so the clip still uses its full range.
      const progress =
        magnitude <= deadZone ? 0 : Math.min(1, (magnitude - deadZone) / (1 - deadZone));

      const facingRight = currentOffset > 0;
      const shown = facingRight ? rightVideo : leftVideo;
      const hidden = facingRight ? leftVideo : rightVideo;

      if (shown.style.opacity !== '1') {
        shown.style.opacity = '1';
        hidden.style.opacity = '0';
        // Park the clip we just left at frame zero so it is head-on when the
        // cursor swings back across centre.
        seek(hidden, 0);
      }
      seek(shown, progress);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [containerRef, leftRef, rightRef, shouldTrack, deadZone, smoothing]);
}
