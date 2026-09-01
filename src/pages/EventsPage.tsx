import React, { useState } from 'react';
import { Theater, ArrowRight } from 'lucide-react';
import { useBooking } from '../components/SiteLayout';
import { handleImageError, CARD_FALLBACKS, asset } from '../lib/images';
import FestivalTour from '../sections/FestivalTour';

const RESIDENCY = [
  { label: 'Schedule', value: 'Every Sunday at 3:00 PM' },
  { label: 'Venue', value: 'The Box Office — Phnom Penh, Cambodia (8 Long Nget St / St 258)' },
  { label: 'Experience', value: '45-Minute Curated Traditional Marionette Showcase' },
];

const EVENT_TYPES = [
  'Diplomatic Reception',
  'Private Event',
  'School Demo',
  'International Festival',
];

const FIELDS = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'email@example.com' },
  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+000 000 000' },
] as const;

const inputClass =
  'bg-[#211a1a] border border-[#534343] p-3 text-[#ece0e0] font-sans text-[14px] outline-none transition-colors focus:border-[#d9b358] focus:ring-1 focus:ring-[#d9b358]';
const labelClass =
  'uppercase font-sans font-semibold text-[11px] tracking-[0.08em] text-[#d9b358]';

export default function EventsPage() {
  const { openBooking } = useBooking();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans">
      {/* HERO */}
      <header className="relative w-full min-h-screen flex items-center overflow-hidden border-b border-[#534343]/60 pt-[var(--global-nav-h)]">
        <div className="absolute inset-0">
          <img
            alt="Htwe Oo Myanmar marionette performance"
            onError={handleImageError}
            className="w-full h-full object-cover"
            src={asset("images/ticketbg.png")}
          />
        </div>

        {/* Neutral, feathered scrim anchored to the copy column. Black, not
            the warm #181212 that tinted these brown; clears entirely across
            the right third so the subject stays crisp and colour-accurate. */}
        <div className="absolute inset-0 bg-black/45 lg:bg-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.55))] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.86)_32%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.34)_70%,rgba(0,0,0,0.06)_84%,rgba(0,0,0,0)_94%)]" />

        <div className="hero-legible relative z-10 w-full max-w-320 mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-160">
            <p className="font-sans text-[12px] uppercase tracking-widest font-semibold text-[#d9b358] mb-4">
              Performance Schedule &amp; Reservations
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.15] mb-6">
              Performance Schedule &amp; Ticket Reservations
            </h1>
            <p className="font-sans text-[16px] text-[#c4c4c4] leading-relaxed mb-8 max-w-lg">
              Join us for weekly live marionette shows in Phnom Penh, or catch our global festival
              tour performances.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#residency"
                className="bg-[#107C41] hover:bg-[#14954F] text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all duration-300 shadow-[0_4px_14px_rgba(16,124,65,0.4)] hover:shadow-[0_6px_20px_rgba(16,124,65,0.6)] hover:-translate-y-0.5"
              >
                WEEKLY PHNOM PENH SHOWS
              </a>
              <a
                href="#festival-tour"
                className="bg-black/65 backdrop-blur-md border border-white/30 text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all duration-300 hover:bg-white/10"
              >
                INTERNATIONAL FESTIVALS
              </a>
              <a
                href="#private-bookings"
                className="bg-black/65 backdrop-blur-md border border-white/30 text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all duration-300 hover:bg-white/10"
              >
                PRIVATE BOOKINGS
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* PRIMARY RESIDENCY */}
      <section id="residency" className="max-w-320 mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#130d0d]/60 border border-[#d9b358]/20 shadow-2xl">
          <div className="w-full md:w-7/12 relative min-h-80">
            <img
              alt="The Box Office residency stage"
              onError={handleImageError}
              data-fallback={CARD_FALLBACKS.stage}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcrw32h30VnA6RXiTl_Rt8UFI3AnKpCYdbLYvkJzkrWkAAb8QAFtOneDuWkBy26iqb_l4HArs3vDJ7_2bAPr083lDgUs7niNfAtHzOUXAciSBYwzZbqBmUW7b08R2bIn9VN7yiD1r6Zl30L9J-Fo5WZNo_I8vDjm0bM19jNfTKzEbSRoWeIbHlTAoSFlGqjZ7neD7rpE0iJAhOldM2wxIeJBqG20qw5mCCo7mwRQfDAv2fb0hMZso-ITiLGigLpxWUrTuZiaoQXnlSrA"
            />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#130d0d]/80 hidden md:block" />
          </div>

          <div className="w-full md:w-5/12 bg-[#1f1a1a]/85 backdrop-blur-xl border-l border-[#d9b358]/20 p-8 md:p-12 flex flex-col justify-center">
            <Theater className="w-9 h-9 text-[#d9b358] mb-6" />
            <div className="uppercase font-sans font-semibold text-[12px] tracking-[0.12em] text-[#d9b358] mb-2">
              Primary Residency
            </div>
            <h2 className="font-serif text-[2.5rem] font-semibold text-white leading-[1.15] mb-4">
              Regular Weekly Showtimes
            </h2>
            <div className="h-px w-16 bg-[#d9b358]/40 mb-8" />

            <ul className="flex flex-col gap-4">
              {RESIDENCY.map((row) => (
                <li key={row.label} className="flex flex-col">
                  <span className="font-sans font-medium text-[#d9b358] mb-1 text-[14px]">
                    {row.label}
                  </span>
                  <span className="font-sans font-normal text-amber-50 text-[15px]">{row.value}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openBooking('Regular Weekly Showtime — The Box Office')}
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.25)] hover:shadow-[0_6px_24px_rgba(217,119,6,0.4)] hover:scale-[1.02] mt-8"
            >
              Book Tickets at The Box Office
            </button>
          </div>
        </div>
      </section>

      {/* LATEST NEWS & FESTIVAL TOUR */}
      <div id="festival-tour">
        <FestivalTour onOpenBooking={openBooking} />
      </div>

      {/* PRIVATE BOOKINGS & WORKSHOPS */}
      <section id="private-bookings" className="w-full bg-[#130d0d]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 p-6 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="uppercase font-sans font-semibold text-[14px] tracking-[0.2em] text-[#d9b358] mb-8">
              Htwe Oo Myanmar
            </div>

            <div className="mb-4 flex items-center gap-4">
              <span className="font-sans font-bold text-[#d9b358] bg-[#d9b358]/10 px-2 py-1 rounded text-[12px]">
                #01
              </span>
              <span className="uppercase font-sans font-semibold text-[13px] tracking-[0.15em] text-[#d9b358]">
                Private Bookings &amp; Workshops
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-[1.1] mb-4">
              Book a Private Show.
            </h2>
            <p className="max-w-md font-sans font-light text-[14px] text-[#c4c4c4] leading-relaxed">
              Available for diplomatic receptions, private cultural events, school demonstrations,
              and international festival invitations.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {FIELDS.map((f) => (
                <div key={f.id} className="flex flex-col gap-1">
                  <label className={labelClass} htmlFor={f.id}>
                    {f.label}
                  </label>
                  <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} className={inputClass} />
                </div>
              ))}

              <div className="flex flex-col gap-1">
                <label className={labelClass} htmlFor="eventType">
                  Event Type
                </label>
                <select id="eventType" name="eventType" className={inputClass}>
                  {EVENT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className={labelClass} htmlFor="date">
                  Proposed Date
                </label>
                <input id="date" name="date" type="date" className={inputClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label className={labelClass} htmlFor="location">
                  Location
                </label>
                <input id="location" name="location" type="text" placeholder="City, Country" className={inputClass} />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 py-4 px-8 uppercase font-sans text-[12px] font-bold tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.25)] hover:shadow-[0_6px_24px_rgba(217,119,6,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 rounded-full"
                >
                  {sent ? 'Inquiry Received — We’ll Be In Touch' : 'Send Booking Inquiry'}
                  {!sent && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-[#d9b358]/20 font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9b358]/90">
              Yangon &amp; Phnom Penh Bookings • Direct Line: +855 12 831 950
            </div>
          </div>

          <div className="order-1 lg:order-2 relative min-h-105 lg:min-h-full overflow-hidden group">
            <img
              alt="Yangon home-theatre archive, 2006"
              onError={handleImageError}
              data-fallback={CARD_FALLBACKS.archive}
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-[30%_50%] scale-105 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOsxB-nwQTEScoZiteXRmWzvtkhl1sj9VWsboMM2Nsxr9XqVHevKfM_ZrdsA0dTn4fHxLjrFDDwjUpgvMJcV7LOOm60LuczVTNOmuANUawv4QzJmvHioC1vMsiMtH0dkCXp23Z7swPNkyMNuI7Nmd0PTqcR4aAnPmsFnq5xxu71UtD8xDBdDIiJYdM53TEzNtNxKONjWA718lsd0xmh9GBmWn7VDjt5vGbP42HrUuNRh-FR3CXJWuRw7kwncEek8DfE1qaxJ3LIZAiDA"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#130d0d] to-transparent z-20 hidden lg:block pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(19,13,13,1)] z-20 pointer-events-none" />
            <div className="absolute bottom-6 left-0 right-0 z-30 text-center font-sans text-[10px] uppercase tracking-[0.2em] text-[#d9b358]/90">
              Yangon Home-Theatre Archive • 2006
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
