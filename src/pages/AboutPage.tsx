import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '../components/SiteLayout';
import { handleImageError, CARD_FALLBACKS } from '../lib/images';

const HERITAGE_POINTS = [
  '01. Founding Year (2006)',
  '02. Yangon Roots',
  '03. Global Expansion',
];

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans pt-[var(--global-nav-h)]">
      {/* HERO */}
      <header className="relative w-full min-h-[70vh] flex items-center overflow-hidden border-b border-[#534343]/60">
        <div className="absolute inset-0">
          <img
            alt="Master puppeteer at work"
            onError={handleImageError}
            data-fallback={CARD_FALLBACKS.stage}
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD03UsZHHqIsWlIRqLTbDdurgZ0a4czYZGSBKtMCX2yIAVRfc_Q1TxdTRuceBRhR6TcwT7Ar_ZkFdM8svQfHxMPIO-FMBY8rd2-tFaJXjZQSpbY2ZST-m8RoXh_akCR3qBQ3CUxtQMku4jonS7XcW-vORtUQNRVikTgBP6ocB7F0sDD0o0ITRIJZgXUO17GLWzT6zxXSClPEMbOkMjiew1arO1gGnf-zUJpOtb-vv0fJcEhuZchIG8eHQ5SwsjwuWrw0Pfo5yQ37-K6_A"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181212]/80 via-[#181212]/70 to-[#181212]" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <p className="font-sans text-[12px] uppercase tracking-widest font-semibold text-[#d9b358] mb-4 flex items-center gap-2">
            <span>—</span> Who We Are
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-50 leading-tight max-w-4xl mb-8">
            Traditional art pulls the heartstrings.
            <span className="block font-serif italic font-normal text-[#d9b358]">
              Now, what are we exploring?
            </span>
          </h1>

          <div className="flex flex-wrap gap-3">
            {['Our Heritage', 'International Tours', 'The Gallery'].map((label) => (
              <a
                key={label}
                href="#heritage-origins"
                className="rounded-full px-6 py-2.5 bg-[#2c2525]/80 border border-[#d9b358]/30 backdrop-blur-sm font-sans text-[13px] font-semibold text-[#ece0e0] hover:bg-[#d9b358]/20 hover:border-[#d9b358] hover:text-[#d9b358] hover:-translate-y-0.5 transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => openBooking('Htwe Oo Myanmar Marionette Show')}
              className="rounded-full px-6 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-sans text-[13px] font-bold uppercase tracking-wider hover:from-amber-300 hover:to-amber-500 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Show
            </button>
          </div>
        </div>
      </header>

      {/* HERITAGE & ORIGINS */}
      <main id="heritage-origins" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: narrative */}
          <div className="order-2 lg:order-1 flex flex-col justify-between gap-12 px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
            <div className="space-y-8">
              <div className="font-sans text-[12px] uppercase tracking-widest font-bold text-[#d9b358]">
                Htwe Oo Myanmar
              </div>
              <div>
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-sans text-[12px] font-bold text-[#d9b358]">#01</span>
                  <span className="font-sans text-[12px] uppercase tracking-widest text-[#d9b358] font-semibold">
                    Our Heritage &amp; Origins
                  </span>
                </div>
                <ul className="mt-3 space-y-1 font-sans text-[15px] text-[#c4c4c4] underline decoration-[#d9b358]/40 underline-offset-4 pl-14">
                  {HERITAGE_POINTS.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-amber-50 leading-[0.95]">
              Our Heritage
              <br />
              &amp; Origins.
            </h2>

            <p className="max-w-lg font-sans text-[15px] text-[#c4c4c4] leading-loose">
              Founded in 2006 by Khin Maung Htwe (&lsquo;Mr. Htwe&rsquo;) and Daw Tin Tin Oo
              (&lsquo;Madame Oo&rsquo;). Originally established at No. (12), Yama Street, South Saw
              Yan Paing Quarter, Ahlone Township, Yangon, Myanmar. Transitioned from intimate
              home-theatre performances in Yangon to operating an active international performance
              hub in Phnom Penh, Cambodia, delivering modern 45-minute curated theatrical showcases
              globally.
            </p>

            <a
              href="/history"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-bold tracking-widest text-[#d9b358] border-b border-[#d9b358]/50 pb-2 w-fit hover:text-amber-300 hover:border-amber-300 transition-colors uppercase"
            >
              Explore our full history <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: media panel */}
          <div className="order-1 lg:order-2 relative min-h-[520px] lg:min-h-[820px] overflow-hidden group">
            <img
              alt="Master puppeteer operating traditional Myanmar marionettes"
              onError={handleImageError}
              data-fallback={CARD_FALLBACKS.craft}
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-[30%_50%] scale-105 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2SgeKlO6fB6Y8QnNsn_EiDPp2YNztCSlPE6BROKB9t3ZcWYbS0FSgGnYqsftOxFRc7cbY36ndOod2j3Dpnu4ry6WHn82zpWNmNWm7vER21_PvQ0uE2u3MY5fMjBZRKSDD0t_oLV0nmpQJ4zZhIoWAkfqpNSbbIv1zKehFdEVuMnIPhUdI07UTY7_HyM-LrOB8UejK-n6NlwbRk1yWdKH8GOzoNUS7A2gwZqCfvrrcJA-5qIjwAhOc8zhx4SyzcwVXf_-YYrWe8uEWQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181212] via-[#181212]/20 to-transparent lg:hidden pointer-events-none" />

            {/* Archival thumbnail */}
            <div className="absolute bottom-8 left-8 z-30 flex flex-col items-center gap-3 max-w-[200px] sm:max-w-[240px] p-4 bg-[#181212]/60 backdrop-blur-md border border-[#d9b358]/40 shadow-2xl group/card">
              <div className="relative overflow-hidden w-full">
                <img
                  alt="Yangon home-theatre archive, 2006"
                  onError={handleImageError}
                  data-fallback={CARD_FALLBACKS.archive}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover/card:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilVpdUNXKZON1FQvlfpnDqwKPYoBJxpxKsP5Wbma4kIpSqgHVzyj4B9bIbsGV8KJMV6FH6mjToJaCpXKWF_xSAgEneT0acye0o6Rs2Ey0oaDFvcb-NAwMu4rdhlKgNrgGnWefbevxZfZMdkG3nLkHS40ZbvfHxs8AxX2uWwH0CGvQd9-RCRG4EXURhZC9xnyrPYds9K17TC86Ws7Skn95LyL6bp0XjoRNF-DeiBZImNR8y3BaTirmQkvCNIn9Q79x1nepDc_BEfzy_g"
                />
              </div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9b358]/90 text-center w-full border-t border-[#d9b358]/40 pt-3 group-hover/card:text-[#d9b358] transition-colors">
                Yangon Home-Theatre Archive • 2006
              </div>
            </div>

            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(24,18,18,1)] z-20 pointer-events-none" />
          </div>
        </div>
      </main>
    </div>
  );
}
