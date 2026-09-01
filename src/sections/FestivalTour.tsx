import React from 'react';
import { MapPin, Theater, ArrowRight } from 'lucide-react';

interface FestivalTourProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

/**
 * "Latest News & Festival Tour" — Songkhla / UNIMA cards.
 * Shared by the home and events routes.
 */
export default function FestivalTour({ onOpenBooking }: FestivalTourProps) {
  return (
    <>
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
    </>
  );
}
