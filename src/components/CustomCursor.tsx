import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only active on desktop (non-touch, >= 1024px)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight;
      const heroHeight = 5 * vh;

      if (cursorRef.current) {
        if (scrollY < heroHeight) {
          cursorRef.current.style.opacity = '1';
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        } else {
          cursorRef.current.style.opacity = '0';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="hidden lg:block fixed pointer-events-none z-50 mix-blend-exclusion"
      style={{
        left: '-100px',
        top: '-100px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="22.75"
          stroke="white"
          strokeWidth="2.5"
        />
        {/* Japanese/decorative glyph inside */}
        <path
          d="M16 16.5H32M24 16.5V31.5M19 22.5H29M18 31.5H30M20 27L16 32M28 27L32 32"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
