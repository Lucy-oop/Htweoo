import React, { useEffect, useRef } from 'react';

/**
 * Luxury pointer for the hero: a solid gold dot that tracks the cursor exactly,
 * trailed by a thin gold ring that eases toward it. Desktop, non-touch only.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Ring eases toward the pointer; the dot is exact. The lag is what reads
      // as "weight" rather than a plain follower.
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      const inHero = window.scrollY < 5 * window.innerHeight;
      const opacity = inHero ? '1' : '0';

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = opacity;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.opacity = opacity;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer ring (trails) */}
      <div
        ref={ringRef}
        id="custom-cursor"
        aria-hidden="true"
        className="hidden lg:block fixed left-0 top-0 z-[60] pointer-events-none w-9 h-9 rounded-full border border-[#d9b358]/70 opacity-0 transition-opacity duration-300"
        style={{ boxShadow: '0 0 12px rgba(217,179,88,0.25), inset 0 0 8px rgba(217,179,88,0.12)' }}
      />
      {/* Inner dot (exact) */}
      <div
        ref={dotRef}
        id="custom-cursor-dot"
        aria-hidden="true"
        className="hidden lg:block fixed left-0 top-0 z-[60] pointer-events-none w-[6px] h-[6px] rounded-full bg-[#d9b358] opacity-0 transition-opacity duration-300"
        style={{ boxShadow: '0 0 10px rgba(217,179,88,0.9)' }}
      />
    </>
  );
}
