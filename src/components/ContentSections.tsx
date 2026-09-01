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

interface ContentSectionsProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

export default function ContentSections({ onOpenBooking }: ContentSectionsProps) {

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans selection:bg-[#d9b358] selection:text-[#181212] pt-[var(--global-nav-h)]">
      <LivingLegacy onOpenBooking={onOpenBooking} />

      {/* SECTION 2: AWARDS & GLOBAL RECOGNITION */}
      <div className="relative z-10 bg-[#181212]/95 backdrop-blur-md">
        <main className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-16 relative">
          <section className="relative w-full flex flex-col lg:flex-row bg-[#1f1a1a] overflow-hidden mb-16 border border-[#534343]">
            <div className="w-full lg:w-5/12 min-h-[420px] lg:min-h-[500px] relative shadow-2xl overflow-hidden">
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

        {/* SECTION 3: LATEST NEWS & FESTIVAL TOUR */}
        <section className="w-full px-6 sm:px-8 lg:px-12 bg-[#130d0d] border-y border-[#534343] text-[#ece0e0] pb-24">
          <div className="max-w-[1280px] mx-auto pt-[60px]">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif font-semibold mb-4 drop-shadow-sm capitalize leading-[1.1] text-white text-3xl sm:text-5xl lg:text-6xl">
                Latest News &amp; Festival Tour
              </h2>
              <p className="font-sans text-[12px] font-semibold text-[#d1c4c4] tracking-widest uppercase max-w-2xl mx-auto">
                Songkhla Harmony World Puppet Festival (UNIMA Asia Pacific Forum Thailand)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div
                onClick={() => onOpenBooking?.('Intangible Cultural Heritage Panel')}
                className="h-[480px] relative overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2 cursor-pointer border border-[#534343]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1xRDTIgpgNFQZ1rWWXopXsalvSJ28Ng6aQEl-pYr7SgFpxYX6RZRsgzYh1FvNkXZUc7Tk1nCLZv1JVQNRLxdvQL_TjSlfWnTCAhULpvtDK589YxUbW88fCnzarv2zJ-ZpjuNvcI2ackeZmwcwqp2jQ0GipmuAMM887b6k4X0ue_ScBxToEh7hZmM1eenUmv-OkO2wHqLC7jRoCbM4jBjT1r84GgLTqYHLiEa1OIH0RityMQglR9Um2jdLKMtPE5Vxwe9k6jIho5KxwQ')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181212] via-[#181212]/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1f1a1a]/80 text-[#ffb3ad] border border-[#534343] font-sans text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md">
                    Panel Session #2
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#ece0e0] leading-[1.2] drop-shadow-md mb-4 pr-4 capitalize">
                    The Conservation of Intangible Cultural Heritage
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#d1c4c4] border-t border-[#534343]/50 pt-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> Siam Nakarin
                    </span>
                    <span>•</span>
                    <span>Convention Center</span>
                    <span>•</span>
                    <span>Aug 5, 2026</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => onOpenBooking?.('Yoke Thé Pwe Live Show')}
                className="h-[480px] relative overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2 cursor-pointer border border-[#534343]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8cW2UQzocuDol3B01-NAjg1PHhC0kLU_9EkPZyjl-n4-LkCIyaKwHO95IXQyZa6vR7MW1u6ciFrZ4uNlF_szMTSn4QNDE2hXSlboLvi0U5c1oHbTenzPKPdgc4_J8RZhUw1IDYygfk7YRzjL0UiTIz2olhGxDGK3kiVCdozbrR_VzqKxZGjO8N84IKv944NlfyeEU-kuIWr6buccIwSIZiJnSl_va0EVg6knLw5dfodJqQ5Xuxfr0aIVCtKr5cJh6p4ZiYrp_M7cvbQ')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181212] via-[#181212]/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#cc9c00]/90 text-[#4a3600] font-sans text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-md">
                    Featured Showcase
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#ece0e0] leading-[1.2] drop-shadow-md mb-4 capitalize">
                    Yoke Thé Pwe Live Show
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#d1c4c4] border-t border-[#534343]/50 pt-4">
                    <span className="flex items-center gap-1">
                      <Theater className="w-3.5 h-3.5 text-amber-400" /> TCDC Songkhla
                    </span>
                    <span>•</span>
                    <span>11:00 AM</span>
                    <span>•</span>
                    <span>Aug 7, 2026</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                onClick={() => {
                  const galleryEl = document.getElementById('moments-gallery');
                  galleryEl?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[480px] relative overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2 cursor-pointer border border-[#534343]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDggl6Dx4JUNcPJ1N1xpOGYpZyDXmtExBmHT2MDubR_VLvdYuxoE0KW5blhxVjJGIHT7SdxttJ1NB8ZToutNsYoMYvoA9jkBEiswChOMQZr22aBA5G5qMucXqY8BWmuBvrSAdvRBvKsWdVQtZcn5MdX_CHF7FKyhgaJMiQPQKpPP7e9ZkEAYuMcVi3TewTtluA8EWnKVzEXk9K2LD_4V_pz3CWcyVoAN9GqSzVpW94QPqdYlFg0BBw2ZrzUkgmDH9943eqPf-fj0NKwQQ')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181212] via-[#181212]/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1f1a1a]/80 text-[#ece0e0] border border-[#968383] font-sans text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md">
                    Media Gallery
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#ece0e0] leading-[1.2] drop-shadow-md mb-6 capitalize">
                    Festival Media Gallery
                  </h3>
                  <div className="flex items-center justify-between border-t border-[#534343]/50 pt-4">
                    <span className="font-sans text-[14px] font-normal text-[#d1c4c4]">UNIMA 2026</span>
                    <span className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-wider bg-[#d9b358] hover:bg-amber-400 text-black px-4 py-2 rounded-full transition-all shadow group-hover:translate-x-1 duration-300">
                      View Gallery <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PERFORMANCE HIGHLIGHTS & BENTO GRID */}
        <VideoShowcase />

        <MomentsGallery />

        {/* SECTION 6: FOOTER */}
      </div>

    </div>
  );
}
