import React from 'react';
import {
  MapPin,
  Trophy,
  Theater,
  Star,
  ArrowRight,
} from 'lucide-react';
import { handleImageError } from '../lib/images';
import LivingLegacy from '../sections/LivingLegacy';
import VideoShowcase from '../sections/VideoShowcase';
import MomentsGallery from '../sections/MomentsGallery';
import FestivalTour from '../sections/FestivalTour';

interface ContentSectionsProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

export default function ContentSections({ onOpenBooking }: ContentSectionsProps) {

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans selection:bg-[#d9b358] selection:text-[#181212] pt-[var(--global-nav-h)]">
      <LivingLegacy onOpenBooking={onOpenBooking} />

      {/* SECTION 2: AWARDS & GLOBAL RECOGNITION */}
      <div className="relative z-10 bg-[#181212]/95 backdrop-blur-md">
        <main className="w-full max-w-320 mx-auto px-6 sm:px-8 lg:px-12 py-16 relative">
          <section className="relative w-full flex flex-col lg:flex-row bg-[#1f1a1a] overflow-hidden mb-16 border border-[#534343]">
            <div className="w-full lg:w-5/12 min-h-105 lg:min-h-125 relative shadow-2xl overflow-hidden">
              <img
                onError={handleImageError}
                alt="Burmese Marionette"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85UKB9Xq6kMaKO9kmQoebo6C2AeGXjG1Y1t5bO8dW98yB1kWGy0mxqFpYNtI92cEwfCNT2XorghhLmHKaCTPS7P3KQWt4SZag4u_RpdKPVg7XM8G4mfGCOpRgblc4elJLckQ0zbx0OH9Kf9gV8A881Hp5cBF_xz2HO8aJxGMZvkmNAYTB6WT3edHtM7W4gk8zsyBJJ0qUN6alVHXSBrb8GA2IE0-_Ygb5SHe_p20_yyBrc3i4d08KIou5g6qkDK6NjsN8OIbBSEN3cw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 sm:p-12">
                <span className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-400 mb-2">
                  WORLD-CLASS RECOGNITION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-50 leading-[1.1] mb-3 tracking-wide drop-shadow-md capitalize">
                  Preserving Intangible Cultural Heritage
                </h2>
                <p className="font-sans text-[14px] md:text-[16px] text-[#FFFFFF] leading-relaxed font-normal max-w-sm">
                  Honored internationally for preserving ancient Burmese marionette craftsmanship, storytelling, and theatrical performance art.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-7/12 relative overflow-hidden p-8 sm:p-12 flex flex-col justify-center bg-[#1C120C]">
              <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.3)_0%,rgba(42,23,14,0.8)_60%,rgba(15,8,5,1)_100%)] shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />

              <div className="relative z-10">
                <div className="mb-10 sm:mb-12">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wide pb-4 border-b border-amber-500/30 mb-8 drop-shadow-md capitalize">
                    Awards &amp; Global Recognition
                  </h2>
                </div>

                <div className="flex flex-col gap-10">
                  <div className="flex flex-row gap-5 sm:gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-950/80 text-amber-300 flex items-center justify-center shrink-0 shadow-md border border-amber-500/40 backdrop-blur-md">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-400 mb-1 block">
                        01. INTERNATIONAL AWARD
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] tracking-wide drop-shadow-sm capitalize">
                        Michael Meschke International Award
                      </h3>
                      <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal mt-1">
                        UNIMA Prize for Preservation and Revival of Puppetry Arts, recognizing excellence in traditional craftsmanship.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-5 sm:gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-950/80 text-amber-300 flex items-center justify-center shrink-0 shadow-md border border-amber-500/40 backdrop-blur-md">
                      <Theater className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-400 mb-1 block">
                        02. GLOBAL STAGE
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] tracking-wide drop-shadow-sm capitalize">
                        XVII International Prize "Il Teatro Nudo"
                      </h3>
                      <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal mt-1">
                        Opening Act Selection in Milan, Italy, showcasing the depth of Burmese theatrical heritage to a global audience.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-5 sm:gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-950/80 text-amber-300 flex items-center justify-center shrink-0 shadow-md border border-amber-500/40 backdrop-blur-md">
                      <Star className="w-6 h-6 fill-amber-300" />
                    </div>
                    <div>
                      <span className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-400 mb-1 block">
                        03. AUDIENCE REVIEWS
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] tracking-wide drop-shadow-sm capitalize">
                        ⭐ 5-Star TripAdvisor Review Score
                      </h3>
                      <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal mt-1">
                        Consistently rated 5.0 by international travelers for providing an authentic and immersive cultural experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <FestivalTour onOpenBooking={onOpenBooking} />

        {/* SECTION 4: PERFORMANCE HIGHLIGHTS & BENTO GRID */}
        <VideoShowcase />

        <MomentsGallery />

        {/* SECTION 6: FOOTER */}
      </div>

    </div>
  );
}
