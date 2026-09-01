import React from 'react';
import { handleImageError, CARD_FALLBACKS } from '../lib/images';

const AWARDS = [
  {
    badge: 'Major Global Prize',
    title: 'Michael Meschke International Award',
    body: "Granted by UNIMA in 2020 for the Preservation and Revival of Puppetry Arts. Includes the 'Best Animation USD 1,000' honor.",
    alt: 'Michael Meschke Award ceremony',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH_PGpDaC72jMCzwA2aa_jxHgGTRW_2mxbOTsSEJeonWuk4YU4kSFxMidbgqdwQSbA-_RWmI6_2jyQnnlGZtQV4cUIIgSGfn4cutkew08fxErxtr3qBoPAaBLHnozdkQqJqBh_VNcAfAFY68mDfb3c3rTuOXGmkcsz4OtYUCW5Q_Cw4q6Qpgv6f7FtflkvDYGDJkvd7zABzR2lgoLeP1-v8I7UA3FFIuER46ym8Ob2ak_0q20vwyxEuUI3lPUgW5I7nq0MhjMCzix7dg',
    fallback: CARD_FALLBACKS.archive,
  },
  {
    badge: 'European Cultural Honor',
    title: "Opening Act — XVII 'Il Teatro Nudo'",
    body: "By Teresa Pomodoro (Milan, Italy | Nov 26 & 27, 2025 at Spazio Teatro No'hma). Held under the High Patronage of the President of the Italian Republic.",
    alt: 'Il Teatro Nudo poster',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgBs0xElniGloWEOLuKqiB9lztVsDSLXPamxQ_UySu1e_hdDK_8WuGOKeYhsFK9SR-9mZJ5qqFKlk2vdzqJSopAkQM-3zxalo0nYX1_1MMtV9NJ_VZqcIQZ6ilafUzNopc5_PDFnv3Nupza7SRcSZk7ZjEFOOTSegbgxzRj5u10ab4wwQKQ4Lq0PAaV2QBcV8dW1PtwROLVOvLvFvMElfJUzmfGzqt3_UkaUTuaZZ2JyW5AlPiSZVEWg_RqUU9oQgZEljk8hlZ1oWYMQ',
    fallback: CARD_FALLBACKS.stage,
  },
] as const;

function AwardCard({ award }: { award: (typeof AWARDS)[number] }) {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border border-amber-500/20">
        <img
          alt={award.alt}
          onError={handleImageError}
          data-fallback={award.fallback}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={award.src}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white text-[10px] font-sans font-bold tracking-widest px-3 py-1 rounded-full uppercase">
            {award.badge}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-serif text-[18px] md:text-[20px] text-amber-100 mb-2">{award.title}</h3>
        <p className="font-sans text-[13px] md:text-[14px] text-stone-300 leading-relaxed">
          {award.body}
        </p>
      </div>
    </div>
  );
}

/** "International Honors & Milestones" — the three-column prestige block. */
export default function AwardsHighlight() {
  return (
    <section className="w-full px-6 bg-[#130d0d] overflow-hidden py-20 border-t border-[#534343]/60">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <AwardCard award={AWARDS[0]} />

          <div className="text-center flex flex-col items-center px-4 order-first md:order-none">
            <span className="font-sans text-[12px] font-bold tracking-[0.3em] text-[#d9b358] uppercase mb-6">
              — Prestige &amp; Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-amber-50 leading-tight mb-8">
              International Honors &amp; Milestones
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8" />
            <div className="mb-12">
              <p className="font-serif italic text-xl text-[#d9b358] mb-2">
                &ldquo;Uno sguardo oltre, una realtà solidale&rdquo;
              </p>
              <p className="font-sans text-[13px] md:text-[14px] text-stone-400 uppercase tracking-widest">
                (A Look Beyond, a Solidarity Reality)
              </p>
            </div>
            <a
              className="inline-block font-sans text-[12px] font-bold tracking-widest text-[#d9b358] border-b border-[#d9b358]/50 pb-2 hover:text-amber-300 hover:border-amber-300 transition-colors uppercase"
              href="#"
            >
              View UNIMA Meschke Prize Archive →
            </a>
          </div>

          <AwardCard award={AWARDS[1]} />
        </div>
      </div>
    </section>
  );
}
