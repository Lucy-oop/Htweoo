import React, { useEffect, useRef, useState } from 'react';
import { VIDEO_ASSETS } from '../constants';

export default function VideoBackground() {
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const activeSideRef = useRef<'left' | 'right'>('right');
  const targetTimeRef = useRef<number>(0);
  const cursorXRef = useRef<number>(window.innerWidth / 2);
  const rafIdRef = useRef<number | null>(null);

  const handleVideoLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const leftVideo = leftVideoRef.current;
    const rightVideo = rightVideoRef.current;

    if (!leftVideo || !rightVideo) return;

    if (isTouch) {
      // Touch devices: alternate autoplay
      leftVideo.style.display = 'block';
      rightVideo.style.display = 'none';
      leftVideo.play().catch(() => {});

      const onLeftEnded = () => {
        leftVideo.style.display = 'none';
        rightVideo.style.display = 'block';
        rightVideo.currentTime = 0;
        rightVideo.play().catch(() => {});
      };

      const onRightEnded = () => {
        rightVideo.style.display = 'none';
        leftVideo.style.display = 'block';
        leftVideo.currentTime = 0;
        leftVideo.play().catch(() => {});
      };

      leftVideo.addEventListener('ended', onLeftEnded);
      rightVideo.addEventListener('ended', onRightEnded);

      return () => {
        leftVideo.removeEventListener('ended', onLeftEnded);
        rightVideo.removeEventListener('ended', onRightEnded);
      };
    } else {
      // Desktop: scrub based on cursor position
      const handleMouseMove = (e: MouseEvent) => {
        cursorXRef.current = e.clientX;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const scrubLoop = () => {
        const width = window.innerWidth;
        const center = width / 2;
        const deadZone = Math.max(30, width * 0.05);
        const x = cursorXRef.current;

        const leftEdge = center - deadZone;
        const rightEdge = center + deadZone;

        if (x < leftEdge) {
          // Cursor is to the left: show RIGHT video
          activeSideRef.current = 'right';
          const range = leftEdge;
          const dist = leftEdge - x;
          const progress = Math.min(1, Math.max(0, dist / range));

          if (rightVideo.duration) {
            targetTimeRef.current = progress * rightVideo.duration;
          }
        } else if (x > rightEdge) {
          // Cursor is to the right: show LEFT video
          activeSideRef.current = 'left';
          const range = width - rightEdge;
          const dist = x - rightEdge;
          const progress = Math.min(1, Math.max(0, dist / range));

          if (leftVideo.duration) {
            targetTimeRef.current = progress * leftVideo.duration;
          }
        } else {
          // Inside dead zone: keep currentTime at 0, don't change active side abruptly
          targetTimeRef.current = 0;
        }

        // Apply display & seeking safely
        if (activeSideRef.current === 'right') {
          if (rightVideo.style.display !== 'block') {
            rightVideo.style.display = 'block';
            leftVideo.style.display = 'none';
          }
          if (!rightVideo.seeking && rightVideo.duration) {
            const diff = Math.abs(rightVideo.currentTime - targetTimeRef.current);
            if (diff > 0.02) {
              rightVideo.currentTime = targetTimeRef.current;
            }
          }
        } else {
          if (leftVideo.style.display !== 'block') {
            leftVideo.style.display = 'block';
            rightVideo.style.display = 'none';
          }
          if (!leftVideo.seeking && leftVideo.duration) {
            const diff = Math.abs(leftVideo.currentTime - targetTimeRef.current);
            if (diff > 0.02) {
              leftVideo.currentTime = targetTimeRef.current;
            }
          }
        }

        rafIdRef.current = requestAnimationFrame(scrubLoop);
      };

      rafIdRef.current = requestAnimationFrame(scrubLoop);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }
  }, [loadedCount]);

  const isLoaded = loadedCount >= 2;

  return (
    <div
      id="main-canvas"
      className={`fixed pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } inset-0 w-full h-full max-lg:top-[220px] max-lg:h-[calc(100vh-220px)]`}
    >
      {/* Left Video */}
      <video
        ref={leftVideoRef}
        src={VIDEO_ASSETS.left}
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: 'none' }}
      />

      {/* Right Video */}
      <video
        ref={rightVideoRef}
        src={VIDEO_ASSETS.right}
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: 'block' }}
      />
    </div>
  );
}
