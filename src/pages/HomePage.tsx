import React, { useEffect, useRef } from 'react';
import CustomCursor from '../components/CustomCursor';
import VideoBackground from '../components/VideoBackground';
import HeroTitle from '../components/HeroTitle';
import GalleryGrid from '../components/GalleryGrid';
import ContentSections from '../components/ContentSections';
import { useBooking } from '../components/SiteLayout';

/** Scroll the curtain act owns, in viewports, before the gallery starts moving. */
const CURTAIN_SCROLL_VH = 2.2;
/**
 * Fraction of that spent drawing the curtains apart. The remainder is dwell on
 * the open stage — the whole window in which the puppets track the cursor — so
 * lowering this buys a snappier open AND a longer interaction at once.
 */
const CURTAIN_OPEN_PORTION = 0.5;

export default function HomePage() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  const { openBooking } = useBooking();

  useEffect(() => {
    let animationFrameId: number;

    const mainCanvas = document.getElementById('main-canvas');
    const heroTitle = document.getElementById('hero-title');

    // Only write --p when it actually moves. The loop runs every frame but the
    // curtain is stationary for most of the page, and a redundant custom
    // property write still invalidates style for the whole subtree.
    let lastCurtainP = -1;
    const setCurtainOpen = (p: number) => {
      if (Math.abs(p - lastCurtainP) < 0.001) return;
      lastCurtainP = p;
      curtainRef.current?.style.setProperty('--p', p.toFixed(4));
    };

    /**
     * Publish where the stage's top edge currently sits in the viewport, so the
     * valance can decide whether to hug it or tuck under the nav. While the
     * black panel is still rising the stage top is well below the nav, and a
     * valance offset by a fixed nav height would float in mid-curtain with bare
     * fabric above it.
     */
    let lastStageTop = NaN;
    const setStageTop = (y: number) => {
      const rounded = Math.round(y);
      if (rounded === lastStageTop) return;
      lastStageTop = rounded;
      curtainRef.current?.style.setProperty('--stage-top', `${rounded}px`);
    };

    const updateLoop = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight;

      // Update dynamic spacer height
      if (innerRef.current && spacerRef.current) {
        const wrapScrollHeight = innerRef.current.scrollHeight;
        // maxScroll now includes the curtain block, which is one viewport tall,
        // so the gallery phase already carries the scroll needed to lift the
        // curtain away — no extra reserve for it here.
        const maxScroll = Math.max(0, wrapScrollHeight - vh);
        // The curtain act sits between the panel rising and the gallery moving.
        const curtainScroll = CURTAIN_SCROLL_VH * vh;
        const curtainEnd = vh + curtainScroll;
        const galleryEnd = curtainEnd + maxScroll;
        const heroScrollTotal = galleryEnd + 2 * vh;
        spacerRef.current.style.height = `${heroScrollTotal}px`;

        // SCROLL PHASES
        if (scrollY <= vh) {
          // PHASE 1: Hero Phase (0 to 100vh)
          // Black panel slides up from 100vh to 0, carrying the shut curtain
          // up with it — the curtain is the top viewport of the panel.
          const panelY = Math.max(0, vh - scrollY);
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, ${panelY}px, 0)`;
          }
          if (innerRef.current) {
            innerRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          setCurtainOpen(0);
          setStageTop(panelY);

          if (mainCanvas) mainCanvas.style.visibility = 'visible';
          if (heroTitle) heroTitle.style.visibility = 'visible';
        } else if (scrollY <= curtainEnd) {
          // PHASE 2: Curtain Phase
          // Panel and inner both hold still so the curtain fills the frame;
          // the only thing moving is the curtains parting, then dwelling open
          // while the puppets follow the cursor.
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          if (innerRef.current) {
            innerRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          const opened = (scrollY - vh) / (curtainScroll * CURTAIN_OPEN_PORTION);
          setCurtainOpen(Math.min(1, Math.max(0, opened)));
          setStageTop(0);

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        } else if (scrollY <= galleryEnd) {
          // PHASE 3: Gallery Phase
          // Panel is fixed at top, inner wrapper translates upwards, lifting the
          // open curtain stage away and bringing the grid into frame.
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          const innerY = -(scrollY - curtainEnd);
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, ${innerY}px, 0)`;
          }
          setCurtainOpen(1);
          setStageTop(innerY);

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        } else if (scrollY <= heroScrollTotal) {
          // OUTRO PHASE: inner wrapper stays pinned at maximum scroll
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, -${maxScroll}px, 0)`;
          }
          setCurtainOpen(1);
          setStageTop(-maxScroll);

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        } else {
          // Past hero section into main content
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, -${scrollY - heroScrollTotal}px, 0)`;
          }

          // Must be set here too: a jump-scroll (anchor link, restored scroll
          // position) can land in this branch without passing through the ones
          // above, which would leave the fixed hero painted over the footer,
          // and the curtain sitting at its CSS default of shut.
          setCurtainOpen(1);
          setStageTop(-(scrollY - heroScrollTotal) - maxScroll);
          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (heroTitle) heroTitle.style.visibility = 'hidden';
        }

        // CARDS SCALE IN/OUT PER-FRAME
        const cards = document.querySelectorAll<HTMLElement>('.bp-card');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.bottom <= 0 || rect.top >= vh) {
            card.style.transform = 'scale(0)';
          } else {
            const enter = Math.min(1, (vh - rect.top) / (vh * 0.6));
            const exit = Math.min(1, rect.bottom / (vh * 0.4));
            const scale = Math.max(0, Math.min(1, Math.min(enter, exit)));
            card.style.transform = `scale(${scale})`;
          }
        });
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Hero-only cursor; it self-hides past the hero scroll range. */}
      <CustomCursor />

      {/* SECTION 1 & 2: HERO & BLACK PANEL GALLERY CONTAINER */}
      <div
        ref={spacerRef}
        id="scroll-spacer"
        className="relative select-none"
        style={{ height: '500vh' }}
      >
        <VideoBackground />
        <HeroTitle />
        <GalleryGrid panelRef={panelRef} innerRef={innerRef} curtainRef={curtainRef} />
      </div>

      {/* SECTION 3: FULL LANDING PAGE MAIN CONTENT */}
      <div id="main-content-section" className="relative z-30 w-full">
        <ContentSections onOpenBooking={openBooking} />
      </div>
    </>
  );
}
