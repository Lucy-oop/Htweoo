import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useBooking } from '../components/SiteLayout';
import { handleImageError, CARD_FALLBACKS, asset } from '../lib/images';
import LivingLegacy from '../sections/LivingLegacy';
import VideoShowcase from '../sections/VideoShowcase';
import MomentsGallery from '../sections/MomentsGallery';

interface Era {
  era: string;
  title: string;
  facts: { label: string; value: string }[];
  note?: string;
  quote?: string;
  link?: { label: string; href: string };
  bullets?: string[];
}

const ERAS: Era[] = [
  {
    era: 'Era 01 — 2006',
    title: 'Foundation in Yangon',
    facts: [
      { label: 'Founders', value: 'Khin Maung Htwe & Daw Tin Tin Oo' },
      { label: 'Address', value: 'No. (12), Yama Street, Yangon, Myanmar' },
    ],
    note: 'Established to preserve traditional Myanmar marionette craftsmanship (Yoke Thé) through intimate live performances.',
  },
  {
    era: 'Era 02 — 2020',
    title: 'UNIMA International Recognition',
    facts: [
      {
        label: 'Honour',
        value:
          'Michael Meschke International Award for the Preservation and Revival of Puppetry Arts.',
      },
    ],
    link: { label: 'UNIMA Meschke Prize 2021', href: '#' },
  },
  {
    era: 'Era 03 — 2025',
    title: 'European Landmark Showcase',
    facts: [
      { label: 'Venue', value: "Spazio Teatro No'hma, Milan" },
      { label: 'Date', value: 'Nov 26 & 27, 2025' },
    ],
    note: 'Opening Act XVII International Prize under High Patronage of the President of Italy.',
    quote: '"Uno sguardo oltre, una realtà solidale"',
  },
  {
    era: 'Era 04 — 2026',
    title: 'Regional Expansion & Forum',
    facts: [
      { label: 'Current Hub', value: 'Phnom Penh, Cambodia' },
      { label: 'UNIMA Forum', value: 'Songkhla Harmony Festival 2026' },
    ],
    bullets: ['Panel: Cultural Heritage Conservation', 'Live Yoke Thé Pwe @ TCDC Songkhla'],
  },
];

const ERA_IMAGES = [
  {
    caption: 'Heritage Craft • Yangon',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA16uOFaKwgdmvQy4SJjwO9pdn1jPmb7TcZfurt1G0ZFNRf-bHH1hPV3wWH96JursfMlv3I2S7eGO4uj1wHiEahrTKpaYcMODp1Ag-hfwwiI6Xzfn96YWsJfi55vjHPqJtSE04BT9spzWfhjfPHqfs-Qqgqh5OUeEi1hhVP7Eh-YJYeHxmIpNI7JGMZD3YGWN2vxGhNeMwwlN8qcFk8iKshSeICxFdrIp3gjN4x9e3cZ-RqeC9VwU4q7bCvSbnT1pTDpz-SZrM--7f-GA',
    fallback: CARD_FALLBACKS.craft,
  },
  {
    caption: "Spazio Teatro No'hma • Milan",
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpTwOHxCIwcKbOLOEr2741sXDTDelHfCsh2SwIlGIJ0QuJSvKDCKYVVbdBexIMSIceu9K9Z9otu0roBGNuoedcUvQMobcmwWOyn52FlVyD45jYLbjw9taWUg7M0bFEbeN_jVfhDQuxg-l1o88h0en7UTxQ2bxwagKwWLJtM-wumOzA8cIg-6WzvD90kkcLDpmTsEIdE-t_-FUBoo2lZSddXn7KdtmIMDdSPWAFcao9Qfs436An9olPpM_jKaYIP1YYqOvTOLClzoD3Tw',
    fallback: CARD_FALLBACKS.stage,
  },
];

function EraCard({ era }: { era: Era }) {
  return (
    <div className="bg-[#1f1a1a]/85 backdrop-blur-md border border-[#d9b358]/20 p-7 shadow-2xl hover:border-[#d9b358]/50 hover:-translate-y-1 transition-all duration-300 min-h-85 flex flex-col justify-between group w-full">
      <div>
        <span className="font-sans text-[10px] text-[#d9b358]/70 uppercase tracking-[0.3em] block mb-4">
          {era.era}
        </span>
        <h3 className="font-serif text-xl text-amber-200 font-semibold leading-tight mb-5 group-hover:text-[#d9b358] transition-colors">
          {era.title}
        </h3>
        <div className="space-y-3 font-sans text-[13px] text-[#c4c4c4] leading-relaxed">
          {era.facts.map((f) => (
            <p key={f.label}>
              <strong className="text-[#d9b358]/80 font-medium">{f.label}:</strong> {f.value}
            </p>
          ))}
        </div>
        {era.quote && (
          <p className="font-serif italic text-xs text-amber-300/90 border-l-2 border-[#d9b358]/40 pl-3 mt-4">
            {era.quote}
          </p>
        )}
        {era.bullets && (
          <ul className="space-y-3 font-sans text-[11px] text-[#c4c4c4]/80 border-t border-[#d9b358]/10 pt-4 mt-5">
            {era.bullets.map((b) => (
              <li key={b} className="flex gap-2.5">
                <span className="text-[#d9b358]/60">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {era.note && (
        <p className="font-sans text-[11px] text-[#c4c4c4]/70 italic border-t border-[#d9b358]/10 pt-5 mt-5">
          {era.note}
        </p>
      )}
      {era.link && (
        <a
          href={era.link.href}
          className="text-[#d9b358] underline text-xs hover:text-amber-300 flex items-center gap-1.5 mt-4 transition-colors"
        >
          {era.link.label}
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
}

export default function HistoryPage() {
  const { openBooking } = useBooking();

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans">
      {/* HERO */}
      {/* The copy is centred in the box below the nav, which drops it onto the
          marionettes' faces in the backdrop. pb lifts it: min-height is
          border-box, so bottom padding shortens the centring area and raises
          the block by half the value. vh rather than px so it tracks the
          viewport instead of drifting on short screens. */}
      <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-b border-[#534343]/60 pt-[var(--global-nav-h)] pb-[8vh] md:pb-[16vh]">
        {/* Full-bleed imagery */}
        <div className="absolute inset-0">
          <img
            alt="Htwe Oo Myanmar heritage performance"
            onError={handleImageError}
            className="w-full h-full object-cover object-center"
            src={asset("images/historybg.png")}
          />
          {/* Refined dark-to-transparent scrim: readable centre, clean hand-off
              into the page background at the bottom edge. */}
        </div>

        {/* Centred copy: feathered neutral ellipse behind the text only, so the
            frame edges keep the untinted photograph. */}
        <div className="absolute inset-0 bg-black/45 lg:bg-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_50%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.62)_45%,rgba(0,0,0,0.2)_78%,rgba(0,0,0,0)_100%)]" />

        <div className="hero-legible relative z-10 w-full max-w-320 mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          {/* Gold rule + eyebrow, matching the lockup used site-wide */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 sm:w-14 shrink-0 bg-[#d9b358]/60" />
            <span className="font-sans text-[12px] uppercase tracking-widest font-semibold text-[#d9b358]">
              Global Recognition &amp; Patronage
            </span>
            <span className="h-px w-10 sm:w-14 shrink-0 bg-[#d9b358]/60" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-50 leading-[1.15] tracking-wide max-w-4xl mx-auto drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            Preservation Honors &amp; Official Certificates
          </h1>

          <div className="w-24 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-[#d9b358] to-transparent" />

          <p className="font-sans text-[16px] text-[#c4c4c4] max-w-180 mx-auto mb-12 leading-relaxed">
            Documenting twenty years of global recognition, international puppet arts revival
            prizes, and official state patronage.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['View International Awards', 'State Certificates & Patronage', 'UNIMA Preservation Honors'].map(
              (label) => (
                <a
                  key={label}
                  href="#evolution"
                  className="rounded-full px-6 py-2.5 bg-[#2c2525]/70 backdrop-blur-sm border border-[#d9b358]/40 font-sans text-[13px] font-semibold text-[#ece0e0] hover:bg-[#d9b358]/20 hover:border-[#d9b358] hover:text-[#d9b358] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* OUR LIVING LEGACY */}
      <div className="w-full max-w-320 mx-auto px-6 sm:px-8 lg:px-12">
        <LivingLegacy onOpenBooking={openBooking} />
      </div>

      {/* EVOLUTION OF A LEGACY */}
      <section id="evolution" className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[#4a3c1c]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-[#4a3c1c]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-320 mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="font-sans text-[12px] text-[#d9b358]/70 uppercase tracking-widest font-semibold block mb-4">
              World-Class Recognition
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-amber-50 font-medium leading-[1.2] tracking-wide">
              Evolution of a Legacy
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d9b358]/60 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <div className="flex items-center">
              <EraCard era={ERAS[0]} />
            </div>

            <div className="flex flex-col gap-6">
              <figure className="relative overflow-hidden aspect-[3/4] min-h-85 border border-[#d9b358]/20 shadow-2xl group">
                <img
                  alt={ERA_IMAGES[0].caption}
                  onError={handleImageError}
                  data-fallback={ERA_IMAGES[0].fallback}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
                  src={ERA_IMAGES[0].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 bg-[#130d0d]/80 backdrop-blur-md text-amber-300 text-[10px] uppercase tracking-widest font-sans px-3 py-1.5 rounded-full border border-[#d9b358]/30">
                  {ERA_IMAGES[0].caption}
                </figcaption>
              </figure>
              <EraCard era={ERAS[1]} />
            </div>

            <div className="flex flex-col gap-6">
              <EraCard era={ERAS[2]} />
              <figure className="relative overflow-hidden aspect-[3/4] min-h-85 border border-[#d9b358]/20 shadow-2xl group">
                <img
                  alt={ERA_IMAGES[1].caption}
                  onError={handleImageError}
                  data-fallback={ERA_IMAGES[1].fallback}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
                  src={ERA_IMAGES[1].src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 bg-[#130d0d]/80 backdrop-blur-md text-amber-300 text-[10px] uppercase tracking-widest font-sans px-3 py-1.5 rounded-full border border-[#d9b358]/30">
                  {ERA_IMAGES[1].caption}
                </figcaption>
              </figure>
            </div>

            <div className="flex items-center">
              <EraCard era={ERAS[3]} />
            </div>
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => openBooking('Htwe Oo Myanmar Marionette Show')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.25)] hover:scale-[1.02] rounded-full"
            >
              Reserve Your Seats
            </button>
          </div>
        </div>
      </section>

      {/* PERFORMANCE HIGHLIGHTS */}
      <VideoShowcase />

      {/* OUR MOMENTS */}
      <MomentsGallery />
    </div>
  );
}
