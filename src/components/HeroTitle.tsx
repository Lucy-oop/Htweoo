import React from 'react';

/**
 * Hero lockup laid over the marionette video.
 *
 * z-[5] sits above the video (z-0) but below the gallery panel (z-10), so the
 * panel sliding up on scroll covers this the same way it covers the video —
 * no extra scroll wiring needed.
 */
export default function HeroTitle() {
  return (
    <div
      id="hero-title"
      className="fixed inset-x-0 bottom-0 z-[5] pointer-events-none flex flex-col items-center justify-end"
    >
      {/* Legibility scrim: the marionette footage is near-white, so light type
          needs a foothold. Bottom-anchored only — the puppet stays uncovered. */}
      <div className="absolute inset-x-0 bottom-0 h-[46vh] bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="relative flex flex-col items-center px-6 pb-[10vh] text-center">
        <h1 className="font-serif text-[34px] sm:text-[56px] lg:text-[80px] leading-[0.95] tracking-[0.1em] text-[#F5F5F7] drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)]">
          HTWE OO MYANMAR
        </h1>

        {/* Flanked on one line from sm up; on narrow screens the rule stacks above
            the label so the two-line wrap stays centred instead of straddling it. */}
        <div className="mt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:gap-3">
          <span className="h-px w-10 sm:w-14 shrink-0 bg-[#d9b358]/60" />
          <span className="min-w-0 font-sans text-[9px] sm:text-[12px] uppercase tracking-[0.14em] sm:tracking-[0.25em] font-semibold text-[#d9b358] drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
            Traditional Puppet Show (Phnom Penh • Bangkok)
          </span>
          <span className="hidden sm:block h-px w-14 shrink-0 bg-[#d9b358]/60" />
        </div>
      </div>
    </div>
  );
}
