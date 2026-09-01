import React, { useEffect, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Logo from './components/Logo';
import Caption from './components/Caption';
import HeaderNav from './components/HeaderNav';
import ProductInfo from './components/ProductInfo';
import ViewButton from './components/ViewButton';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import GalleryGrid from './components/GalleryGrid';
import ContentSections from './components/ContentSections';
import BookingModal from './components/BookingModal';
import { SYMBOLS } from './constants';

export default function App() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lastSymbolUpdateRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | undefined>(undefined);

  const handleOpenBooking = (eventTitle?: string) => {
    setSelectedEventTitle(eventTitle || 'Royal Marionette Showcase');
    setBookingOpen(true);
  };

  const handleScrollToContent = () => {
    const contentEl = document.getElementById('main-content-section');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const outroOverlay = document.getElementById('outro-overlay');
    const outroInfo = document.getElementById('outro-info');
    const outroBuy = document.getElementById('outro-buy');
    const outroFooter = document.getElementById('outro-footer');
    const mainCanvas = document.getElementById('main-canvas');
    const circleSymbol = document.getElementById('circle-symbol');

    const updateLoop = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;
      const outroOffset = isDesktop ? 166 : 132;

      // Update dynamic spacer height
      if (innerRef.current && spacerRef.current) {
        const wrapScrollHeight = innerRef.current.scrollHeight;
        const maxScroll = Math.max(0, wrapScrollHeight - vh);
        const heroScrollTotal = vh + maxScroll + 2 * vh;
        spacerRef.current.style.height = `${heroScrollTotal}px`;

        // SCROLL PHASES
        if (scrollY <= vh) {
          // PHASE 1: Hero Phase (0 to 100vh)
          // Black panel slides up from 100vh to 0
          const panelY = Math.max(0, vh - scrollY);
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, ${panelY}px, 0)`;
          }
          if (innerRef.current) {
            innerRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }

          if (mainCanvas) mainCanvas.style.visibility = 'visible';
          if (outroOverlay) outroOverlay.style.opacity = '0';
          if (outroInfo) outroInfo.style.transform = 'translate3d(0, 0px, 0)';
          if (outroBuy) outroBuy.style.transform = 'scale(0)';
          if (outroFooter) outroFooter.style.opacity = '0';
        } else if (scrollY <= vh + maxScroll) {
          // PHASE 2: Gallery Phase
          // Panel is fixed at top, inner wrapper translates upwards
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          const innerY = -(scrollY - vh);
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, ${innerY}px, 0)`;
          }

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';
          if (outroOverlay) outroOverlay.style.opacity = '0';
          if (outroInfo) outroInfo.style.transform = 'translate3d(0, 0px, 0)';
          if (outroBuy) outroBuy.style.transform = 'scale(0)';
          if (outroFooter) outroFooter.style.opacity = '0';
        } else if (scrollY <= heroScrollTotal) {
          // OUTRO PHASE
          // Inner wrapper stays pinned at maximum scroll, white overlay & CTA fade in
          if (panelRef.current) {
            panelRef.current.style.transform = 'translate3d(0, 0px, 0)';
          }
          if (innerRef.current) {
            innerRef.current.style.transform = `translate3d(0, -${maxScroll}px, 0)`;
          }

          if (mainCanvas) mainCanvas.style.visibility = 'hidden';

          // Progress over (vh - 100) range
          const outroProgress = Math.min(
            1,
            Math.max(0, (scrollY - vh - maxScroll) / Math.max(1, vh - 100))
          );

          if (outroOverlay) {
            outroOverlay.style.opacity = `${outroProgress}`;
          }
          if (outroInfo) {
            outroInfo.style.transform = `translate3d(0, -${outroProgress * outroOffset}px, 0)`;
          }
          if (outroBuy) {
            outroBuy.style.transform = `scale(${outroProgress})`;
          }
          if (outroFooter) {
            outroFooter.style.opacity = `${outroProgress}`;
          }
        } else {
          // Past hero section into main content
          if (panelRef.current) {
            panelRef.current.style.transform = `translate3d(0, -${scrollY - heroScrollTotal}px, 0)`;
          }
          if (outroOverlay) {
            outroOverlay.style.opacity = '0';
          }
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

        // CIRCLE SYMBOL RANDOMIZATION ON SCROLL (Throttled 80ms)
        const now = Date.now();
        if (
          circleSymbol &&
          Math.abs(scrollY - lastScrollYRef.current) > 2 &&
          now - lastSymbolUpdateRef.current > 80
        ) {
          const randomSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          circleSymbol.textContent = randomSymbol;
          lastSymbolUpdateRef.current = now;
          lastScrollYRef.current = scrollY;
        }
      }

      animationFrameId = requestAnimationFrame(updateLoop);
    };

    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#181212] text-[#ece0e0]">
      {/* 1A. Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* SECTION 1 & 2: HERO & BLACK PANEL GALLERY CONTAINER */}
      <div
        ref={spacerRef}
        id="scroll-spacer"
        className="relative select-none bg-white"
        style={{ height: '500vh' }}
      >
        {/* 1B. Logo (Top Left) */}
        <Logo />

        {/* 1C. Caption (Below Logo) */}
        <Caption />

        {/* 1D. Header Navigation (Top Right) */}
        <HeaderNav />

        {/* 1E. Product Info (Bottom Right) */}
        <ProductInfo />

        {/* 1F. View Button (Bottom Right, Outro CTA) */}
        <ViewButton onClick={handleScrollToContent} />

        {/* 1G & 1H. Video Background Container */}
        <VideoBackground />

        {/* SECTION 2: Black Panel Gallery Grid */}
        <GalleryGrid panelRef={panelRef} innerRef={innerRef} />

        {/* 1I. White Outro Overlay */}
        <div
          id="outro-overlay"
          className="fixed inset-0 bg-white z-12 pointer-events-none opacity-0 will-change-[opacity]"
        />

        {/* 1J. Footer */}
        <Footer />
      </div>

      {/* SECTION 3: FULL LANDING PAGE MAIN CONTENT */}
      <div id="main-content-section" className="relative z-30 w-full">
        <ContentSections onOpenBooking={handleOpenBooking} />
      </div>

      {/* INTERACTIVE BOOKING / RESERVATION MODAL */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        eventTitle={selectedEventTitle}
      />
    </div>
  );
}

