import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useBooking } from '../components/SiteLayout';
import { handleImageError, CARD_FALLBACKS } from '../lib/images';

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
    <div className="bg-[#1f1a1a]/85 backdrop-blur-md border border-[#d9b358]/20 p-7 shadow-2xl hover:border-[#d9b358]/50 hover:-translate-y-1 transition-all duration-300 min-h-[340px] flex flex-col justify-between group w-full">
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
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans pt-[var(--global-nav-h)]">
      {/* HERO */}
      <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-[#534343]/60">
        <div className="absolute inset-0">
          <img
            alt="Ceremonial marionette stage"
            onError={handleImageError}
            data-fallback={CARD_FALLBACKS.stage}
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnK-RqaW0e5JCXTKxKy_d1VOAZQ3_M16wPykTXxsfoj6Ly_VqrpJaDqhv4pdrscTwz8gLV8TIAjMvvVke8mY80auGpO0yNmYNWLepXjQlfYoWctO41f6F4AmNMdqLmNzER7mKmR5QxYpZvzZ2ck1VN5KwKUVDzIfgHXz3t_RLMX2hqFtDOs6ENXKbPvBa0KIwr8-ywHLCe2fIFIGt8VxMANF3uOedqTI-mIctk6NVi1kAUhyeBP4gLVIqF1SLNjASWeEqC1diSJmLjGw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181212]/70 via-[#181212]/55 to-[#181212]" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          <p className="font-sans text-[12px] uppercase tracking-widest font-bold text-[#d9b358] mb-6">
            Global Recognition &amp; Patronage
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-50 leading-[1.15] mb-8">
            Preservation Honors &amp; Official Certificates
          </h1>
          <p className="font-sans text-[16px] text-[#c4c4c4] max-w-[720px] mx-auto mb-12 leading-relaxed">
            Documenting twenty years of global recognition, international puppet arts revival
            prizes, and official state patronage.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['View International Awards', 'State Certificates & Patronage', 'UNIMA Preservation Honors'].map(
              (label) => (
                <a
                  key={label}
                  href="#evolution"
                  className="rounded-full px-6 py-2.5 bg-[#2c2525]/60 border border-[#d9b358]/40 font-sans text-[14px] font-medium text-[#ece0e0] hover:bg-[#d9b358]/15 hover:border-[#d9b358] hover:text-[#d9b358] transition-all duration-300"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* EVOLUTION OF A LEGACY */}
      <section id="evolution" className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[#4a3c1c]/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-[#4a3c1c]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
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
              <figure className="relative overflow-hidden aspect-[3/4] min-h-[340px] border border-[#d9b358]/20 shadow-2xl group">
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
              <figure className="relative overflow-hidden aspect-[3/4] min-h-[340px] border border-[#d9b358]/20 shadow-2xl group">
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
    </div>
  );
}
