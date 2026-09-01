import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Clock,
  Trophy,
  Theater,
  Star,
  ArrowUpRight,
  Play,
  ArrowRight,
  X,
  Sparkles,
  Mail,
  Copy,
  Check,
  ThumbsUp,
} from 'lucide-react';
import { FALLBACK_IMAGE, CARD_FALLBACKS, handleImageError } from '../lib/images';

interface ContentSectionsProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

export default function ContentSections({ onOpenBooking }: ContentSectionsProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    tag: string;
    videoUrl: string;
    description: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('director@htweoomyanmar.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const videoList = [
    {
      id: 'title-song',
      fallback: CARD_FALLBACKS.stage,
      title: 'TITLE SONG OF HTWE OO MYANMAR',
      tag: 'Title Song',
      sub: 'Featured Performance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtmD5eptDVH1JzvD4fRI_MKeohlaFeay0kmE6LHzWOQFf6NxwEDkVFHiar125afSW_OTVkrsB0Io-K2-lmMG9Zymjrx5nwWAUR6pgHvfrM5cGyQ4gHgdplJlC1IsWYt9MzrDFhGgO3deMaIOLTviV0IIyuJYpcufdD2oAA6LfNqrGXn9WP-ILw0OcFWTZ5wxNbgMmQ1dXAlmxVXRIMgQ5Vk0CtbOiWOjTKPMR8UF3fLA_kXWVlSzyFmXW82u54YoxcfqajMY7nmsAaFQ',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'The signature theme melody of Htwe Oo Myanmar Traditional Puppet Theatre, accompanied by the vibrant Saing Waing orchestra.',
    },
    {
      id: 'orchestra',
      fallback: CARD_FALLBACKS.orchestra,
      title: 'MYANMAR TRADITIONAL ORCHESTRA MUSIC',
      tag: 'Smote Khan',
      sub: 'King Puppet Act',
      image:
        CARD_FALLBACKS.orchestra,
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
      description:
        'Traditional royal entrance melody and majestic rhythmic cadence that heralds the arrival of the Mintha (Royal Prince) puppet.',
    },
    {
      id: 'documentary',
      fallback: CARD_FALLBACKS.archive,
      title: 'TRADITIONAL THEATRE BY MARK FISHMAN',
      tag: 'Documentary',
      sub: 'Htwe Oo Myanmar',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5VFk4qs8wcoUQ-jRtHOXcRR72LlCdySsqu7rtlblNjDtLnYtSGcYu007mMiR90tfsC8W_Itu1FfipyrkYCZiWBUi4xhUzSxwzyNPstIMNS3ljQyt1XKmyc9exnXpkoKAmSRf6SNoTgzunumpxuDnjv_4MDKtOusT2TDQEPdAJXZdR0-b406I3NY6biJLdbUSCKw0mYJZ8KiL46NsgqBgq09VxkgihqLS9KXJz3hftWAXdDqr2GMmm3_vwHAnuRAB2Jm8TXwehn0T-LA',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'An intimate documentary profiling Master Khin Maung Htwe and the cultural journey of preserving Yoke Thé marionette arts.',
    },
    {
      id: 'behind-scenes',
      fallback: CARD_FALLBACKS.craft,
      title: 'PULLING STRINGS BY EMOTION',
      tag: 'Behind The Scenes',
      sub: 'Master Puppeteers',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJIgfo0mu7pGuYZn6EECGiEgRUbKwk35poHkBI8ZfUz6jTvo0nxcPFSkPdG22oj3goHPK2nIetDnDqDwwA-HYf0Wj2CiTbIUXhpY2g_GQTKyjkc7fp5JgCDv8H10edg7cPUSVZX9Ro_53yR5iZ6v3w-v1RlJc0vK6HQ-xA0okHNhXFtZ8b1q97QJfikAewZxo3xO6BcoOx6xHJRJ1G0VRGdJF5koTqHf-Vt2FGbM2BfKDZP-j5QpslhDZP2aQPBJk89TQZ3_Gm38sw',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
      description:
        'A masterclass showcasing subtle wrist gestures and finger dexterity that breathe life into inanimate carved teak.',
    },
    {
      id: 'royal-dance',
      fallback: CARD_FALLBACKS.stage,
      title: 'ROYAL DANCE OF THE MARIONETTES',
      tag: 'Full Performance',
      sub: 'Cultural Heritage',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD5CoFrTbl6ZgL5OGZRojrmzNJ7oW4SrzL42jqyKLWsPNKzt4okvHdaH3NKaYheG49hXvqh9Tv_V3OQiLyDaR-9A6yY2AmsVylrmbrSFHtlP8sy2ddh6gP3f8C1GYiytVhAuVZcrstum2sxesZqA3O-Re3KrQLydLFFqeQkRxOCXzwFQEfWiKT5oCv8t5aYLs4DQNOQzElBIJNN9D0xIJiEeKGdg2CaY4R_skvG2tzZUpR6DYK2t9bAUHcZRFG74Gu2SB5RZyHFjNlylQ',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'The classical courtship duet performed with 28 to 60 intricate control strings under ceremonial lighting.',
    },
  ];

  return (
    <div className="relative z-30 w-full bg-[#181212] text-[#ece0e0] font-sans selection:bg-[#d9b358] selection:text-[#181212] pt-[var(--global-nav-h)]">
      {/* SECTION 1: LIVING LEGACY & SANCTUARY */}
      <main id="living-legacy" className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-20 relative">
        {/* Top Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="font-sans text-[12px] uppercase tracking-widest font-semibold text-amber-500/90 mb-3 flex items-center gap-2">
              <span>—</span> OUR LIVING LEGACY
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-50 tracking-tight leading-[1.1] mb-4 capitalize">
              We preserved slow living and{' '}
              <span className="font-serif italic text-[#E5A93C] font-normal">royal puppetry</span> long before it became history.
            </h1>
            <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal">
              Our master artisans dedicate decades to perfecting the intricate craft of traditional Myanmar marionettes, ensuring every carve and stitch honors the royal legacy.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 grid-rows-2 gap-2 h-[480px] sm:h-[600px]">
            <div className="col-span-1 row-span-2 relative overflow-hidden border border-[#534343]">
              <img
                onError={handleImageError}
                className="w-full h-full object-cover"
                alt="Close-up of an elderly master woodcarver's hands shaping a traditional Myanmar marionette head from dark wood."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaNnhCuc2xurw1LzcHbGexSEyAdJxU0bgq1TAN6LKFLG2_7HEAGvx1gnNkSvSmzQucmYtbLYXoOVQ8UZjzT1jz3s8twYmTpVj1Sx5PdXwIXcttdKrC1xMrlMu2CK6XKbyFHdJIvKIR0JqvP4yNH1KFwZt9KD-bkBV6CVNSoNhnm8I9S2bOVsN9Cfi1Dcju4wj3icwK_Wk40xeoqwzIU0XhZF31F3W8J1CpAY_9nh9FjueGcQoJoEBXMGTOdlPKQ4DpuNBHWmwwUtQkcQ"
              />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden border border-[#534343]">
              <img
                onError={handleImageError}
                className="w-full h-full object-cover"
                alt="Extreme close-up of intricate traditional Myanmar embroidery."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1CmvaSF6b24wwlITA-vpvdUMdRMeaZG0JWS7nc6Z579i9TSRVdfllPJJwSR8uBe-dkA6Z6rFmM7HkJ_BZVE9_Mh2yALWZaxB8qjqQYk_PTeCr9IUgCz7wsigqdopv00sT7d8wFyr6lGXFdgbhaMX7-fbUzJp-pg4fz5pBJTyXTIxqgf3yRJqgnEvTvOhxMyuVmTgiaCSHi8NJD7fLemyLwIPrbSlDUmnllqxcuaBjW6gNBJABAY7XUkPgMEzDNE57oTNud3XXL7Xo7Q"
              />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden border border-[#534343]">
              <img
                onError={handleImageError}
                className="w-full h-full object-cover"
                alt="A full ensemble of exquisite traditional Myanmar marionettes standing on a wooden stage."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5CoFrTbl6ZgL5OGZRojrmzNJ7oW4SrzL42jqyKLWsPNKzt4okvHdaH3NKaYheG49hXvqh9Tv_V3OQiLyDaR-9A6yY2AmsVylrmbrSFHtlP8sy2ddh6gP3f8C1GYiytVhAuVZcrstum2sxesZqA3O-Re3KrQLydLFFqeQkRxOCXzwFQEfWiKT5oCv8t5aYLs4DQNOQzElBIJNN9D0xIJiEeKGdg2CaY4R_skvG2tzZUpR6DYK2t9bAUHcZRFG74Gu2SB5RZyHFjNlylQ"
              />
              <svg
                className="absolute bottom-2 left-2 w-16 h-16 opacity-40 text-amber-400"
                fill="none"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="1" />
                <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </section>

        {/* Center Quote Section */}
        <section className="mb-20 text-center px-4 md:px-24">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E5A93C] font-normal text-center my-12 sm:my-16 px-6 max-w-3xl mx-auto leading-relaxed tracking-wide">
            "One day, we set out to create a sanctuary where the ancient magic of Myanmar marionettes could be felt on your own skin."
          </p>
        </section>

        {/* Bottom Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 grid grid-cols-2 gap-2 h-[320px] sm:h-[400px]">
            <div className="col-span-1 relative overflow-hidden border border-[#534343]">
              <img
                onError={handleImageError}
                className="w-full h-full object-cover"
                alt="A young, apprentice puppeteer delicately holding the wooden control bar of a marionette."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VFk4qs8wcoUQ-jRtHOXcRR72LlCdySsqu7rtlblNjDtLnYtSGcYu007mMiR90tfsC8W_Itu1FfipyrkYCZiWBUi4xhUzSxwzyNPstIMNS3ljQyt1XKmyc9exnXpkoKAmSRf6SNoTgzunumpxuDnjv_4MDKtOusT2TDQEPdAJXZdR0-b406I3NY6biJLdbUSCKw0mYJZ8KiL46NsgqBgq09VxkgihqLS9KXJz3hftWAXdDqr2GMmm3_vwHAnuRAB2Jm8TXwehn0T-LA"
              />
            </div>
            <div className="col-span-1 relative overflow-hidden border border-[#534343]">
              <img
                onError={handleImageError}
                className="w-full h-full object-cover"
                alt="Detail shot of the worn, polished wooden floor of a traditional puppet stage."
                src={FALLBACK_IMAGE}
              />
              <svg
                className="absolute bottom-2 right-2 w-12 h-12 opacity-30 text-amber-400"
                fill="none"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="8" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center items-start pl-0 md:pl-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-400 tracking-wide mb-3 capitalize">
              A Legacy Continued
            </h2>
            <p className="font-sans text-[14px] md:text-[16px] text-[#C4C4C4] leading-relaxed font-normal mb-8">
              Experience the majesty of a performance that transcends generations. Step into our world and witness stories woven in thread, wood, and shadow.
            </p>
            <button
              onClick={() => onOpenBooking?.('Royal Marionette Showcase')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.25)] hover:shadow-[0_6px_24px_rgba(217,119,6,0.4)] hover:scale-[1.02] cursor-pointer"
            >
              Explore Our Shows
            </button>
          </div>
        </section>
      </main>

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
        <main className="flex-grow pt-24 pb-20 px-6 sm:px-8 lg:px-12 max-w-[1280px] mx-auto w-full z-10 relative">
          <div className="text-center mb-14 space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold capitalize tracking-[0.1em] text-[#FFFFFF] text-center leading-[1.1]">
              HTWE OO MYANMAR
            </h1>
            <p className="font-sans text-[12px] tracking-widest uppercase font-semibold text-amber-500/80 text-center mt-2">
              Traditional Puppet Theatre Performance Highlights &amp; Music
            </p>
            <div className="w-32 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-[#d9b358] to-transparent" />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Card 1 */}
            <div
              onClick={() => setSelectedVideo(videoList[0])}
              className="md:col-span-3 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[380px] border border-[#d9b358]/50 bg-[#1f1a1a]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${videoList[0].image || videoList[0].fallback}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                    {videoList[0].tag}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-[#181212]/80 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] group-hover:bg-[#181212] transition-colors duration-300 border border-[#534343]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                    {videoList[0].sub}
                  </p>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-amber-50 leading-[1.2] capitalize">
                    {videoList[0].title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => setSelectedVideo(videoList[1])}
              className="md:col-span-3 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[380px] border border-[#d9b358]/50 bg-[#1f1a1a]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${videoList[1].image || videoList[1].fallback}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                    {videoList[1].tag}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-[#181212]/80 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] group-hover:bg-[#181212] transition-colors duration-300 border border-[#534343]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                    {videoList[1].sub}
                  </p>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-amber-50 leading-[1.2] capitalize">
                    {videoList[1].title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => setSelectedVideo(videoList[2])}
              className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
                style={{ backgroundImage: `url('${videoList[2].image || videoList[2].fallback}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                    {videoList[2].tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                <div>
                  <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                    {videoList[2].sub}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                    {videoList[2].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onClick={() => setSelectedVideo(videoList[3])}
              className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
                style={{ backgroundImage: `url('${videoList[3].image || videoList[3].fallback}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                    {videoList[3].tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                <div>
                  <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                    {videoList[3].sub}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                    {videoList[3].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              onClick={() => setSelectedVideo(videoList[4])}
              className="md:col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 min-h-[290px] border border-[#d9b358]/40 bg-[#1f1a1a] flex flex-col"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 z-0"
                style={{ backgroundImage: `url('${videoList[4].image || videoList[4].fallback}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181212]/95 via-[#181212]/70 to-[#181212]/30 z-0" />
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-stone-900/80 backdrop-blur-md text-amber-400/90 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                    {videoList[4].tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#181212]/50 border border-[#534343]/50 flex items-center justify-center text-[#ece0e0] group-hover:text-[#d9b358] transition-colors duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
                <div>
                  <p className="text-amber-500/90 font-sans text-[11px] uppercase tracking-widest font-semibold mb-1">
                    {videoList[4].sub}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-50 leading-[1.2] capitalize">
                    {videoList[4].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: PHOTO GALLERY */}
          <section
            id="moments-gallery"
            className="max-w-[1280px] mx-auto pt-20 pb-16 border-t border-amber-500/20 mt-20"
          >
            <div className="text-center mb-12">
              <p className="font-sans text-[12px] uppercase tracking-widest text-amber-500 font-semibold mb-2 flex justify-center items-center gap-2">
                — OUR MOMENTS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-amber-50 tracking-tight text-center capitalize leading-[1.1]">
                Capturing the Soul of Puppetry
              </h2>
              <div className="w-16 h-px mx-auto mt-6 bg-amber-500/30" />
            </div>

            {/* Asymmetric 12-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Column 1 (4 cols) */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <div className="group overflow-hidden h-[340px] relative border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Marionette face detail"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-UbeI5srglrVDlkMMkSu7Ywx_pvTJfv-US95L8mJ-Sh0DESS5Z9beYYbbNjuuj3EYpICEUHQ3oxjA9hcLG3jGDd0XGmKGGOnr4J14fUfFoEMnmaK_UjxPcIM0jpD-Av16a2zxJuDwAkWu0lKsgoGlnHrCWE_Uxy_9emzC3KCnO8v7JjOAok85Mb1iCrM9jGBC9wDVj05cyhr0Qp1_QY8VfeLJcLbs48RpBl2t-23rjX7upemyQlZagFLsU_mBcLRf6iJjP32jlydRUQ"
                  />
                </div>
                <div className="group overflow-hidden h-[280px] relative border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Stage action"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgrtUEyiVD3soKrnR3PVKqKhkTgfNVhUr8EgtsTiXBs8LH0Yu8nTui3BzoDyosKjfuuy8uIUFmWBmv_3swcFeuCyK61QZiTgCcbSri1PDhgXDyYyV_pG9mtJ40HGArnnsFK55DYA0LORvaENo7zDJvK6RtNeDLCdC14L57RRUyiEAbx1OrUB_dbh5HilzETLGumpXAEE69cFSRc7EB9tdK4IIoNgWDbScwrOJSRvM3yo5IZ6x5kifcsQ9xS8Ck2SnEy94-WOxvHdnA5g"
                  />
                </div>
                <div className="group overflow-hidden h-[220px] relative border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Full troupe"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Kcsp9QDSJqnUvlNSIVtYyd6EXk8NBcmUUhrVSw4idQZjH9spqPN0qEAiYjCM7wLEN0oaEc02zvUNsuxtkNsEmsL8ImHSOXws6tLHCMbu7MU8-ZnA2QBSuhJeSJToxMYc-vWJ7R00cvgFAsRyJoQBejjfk7khT-0h-_TXtOJvjqYcscLyhsia1j-0ox7GYYM3ThxFfST8OXEujX-ryTJepZRjaOBKCUO00b5_9-wYRaLTRAMTH5tzA2qLwMM8J9X29YIHfV8AKtgL5g"
                  />
                </div>
              </div>

              {/* Column 2 (2 cols) */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="group overflow-hidden h-[165px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="String mechanism"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJIgfo0mu7pGuYZn6EECGiEgRUbKwk35poHkBI8ZfUz6jTvo0nxcPFSkPdG22oj3goHPK2nIetDnDqDwwA-HYf0Wj2CiTbIUXhpY2g_GQTKyjkc7fp5JgCDv8H10edg7cPUSVZX9Ro_53yR5iZ6v3w-v1RlJc0vK6HQ-xA0okHNhXFtZ8b1q97QJfikAewZxo3xO6BcoOx6xHJRJ1G0VRGdJF5koTqHf-Vt2FGbM2BfKDZP-j5QpslhDZP2aQPBJk89TQZ3_Gm38sw"
                  />
                </div>
                <div className="group overflow-hidden h-[165px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Tools"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGV0eQC3J0EhL4F2cYQdYJsIeqacp3YlHwwy5gj0xHxTNZsuGD3sJbukEVUCnRO4DUPNxNzgCM9xSUXjz4SKkFJMdkzq0HVk4kUBPXwnkmJkxkkNE8R6fkFE6yv7aDzYTxlWXf0-ZEU9ewRY9GiTYaHbBo-g8xb534lHNJjbT7pB8atD_SJwZ7lFHIeqmzxKf-OWCy8r0Ky6rJ4VrCjSPa_Fcd-vQRUvpp_GnKY2d-cQ-cC4AjhYRUM1L_hJFpuV1lE68Fn4ntuj_VUw"
                  />
                </div>
                <div className="group overflow-hidden h-[180px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Embroidery"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_crnRXG7lYkGnfbugu4YsDFiTOdnrayGnDJOWS5FFBGR-bravxMKOdw_y3eLgzA8hB5STYqaON7_7FpP5akxcEjU3U6ht80wVKpKjI3vUv2Yd9MB9ENDrBtbEEQmwohw-wmruNnYZizpnhsOK_WKVHAK8bxaNf75JBaQSbECaz48w8XXCsQMm5ImzHEpgOZku4PrDwT8mOofdPWrRnvA_-3zQh-ZBzx6T-Rp-Su93ADFWh4Y_N5qduUcLlFXme5fz0Jc72Y5Z1yAgTQ"
                  />
                </div>
                <div className="group overflow-hidden h-[140px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Hand position"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmD5eptDVH1JzvD4fRI_MKeohlaFeay0kmE6LHzWOQFf6NxwEDkVFHiar125afSW_OTVkrsB0Io-K2-lmMG9Zymjrx5nwWAUR6pgHvfrM5cGyQ4gHgdplJlC1IsWYt9MzrDFhGgO3deMaIOLTviV0IIyuJYpcufdD2oAA6LfNqrGXn9WP-ILw0OcFWTZ5wxNbgMmQ1dXAlmxVXRIMgQ5Vk0CtbOiWOjTKPMR8UF3fLA_kXWVlSzyFmXW82u54YoxcfqajMY7nmsAaFQ"
                  />
                </div>
              </div>

              {/* Column 3 (3 cols) */}
              <div className="md:col-span-3 flex flex-col gap-4">
                <div className="group overflow-hidden h-[240px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Rehearsal"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDeot4wCGdi8yNx0ou4kmotOn5NceB-CyoZu07ee1JNfHklNGhcg55A-DusH3MECokKbrCc3qbWYRoDSI4kpM_yZZps-gN6Eor94kUdmgGnrqy-zO1YJzdsJJduhzSds802lgQFGEsoUpd2lHoL62G_YpF36zBedle-13ydEwbQ98OJkLwOyaK6tPs-8XShsACC1KSOpYEDUQmDSNI1UcgGSVczF8jWlUPIIONqe_rDHfAHqcNb8iKTSEQSCFR6KtaCW7MzxYHX4Yp6Q"
                  />
                </div>
                <div className="group overflow-hidden h-[180px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Orchestra"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqITHT_nn-njXHceuRL052nYDhDQqGJlerePJolGABkAzw9wmjylaBQbpLf-B4359BmJ-JgY6VX5QT7YBd_SvVbe8MHt2IDb4N87XNAc-204YZqWqiEc3jbE2WKWU2qQntqBT846HkAeoabaz_xgmQSvvyuBz4DtEPfnmWdU5WjFs88L5U8p5MLJ0iWePEtpi8DJHcdpqywJcxDdyB7SHOKzMA3nPKvVEGemyNEYP_RZRPIzEY3dYIYyGV2KmgwsBD2FtTwArzOoPlA"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 h-[130px]">
                  <div className="group overflow-hidden border border-[#534343]">
                    <img
                onError={handleImageError}
                      alt="Festival stage"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqUGE94NmMDVC1e1UNWplucxEOPyztWK1sLNP9K5LGqcaxf_4FIUdXNLCXtjYK9Ww6DGWZAAya8pK8wIPjhL4m50jxXV9F_cyDjUYtIJ1EvsRtYLzv3X58WkeQFWjl63J_9YD_vFaej9DM6mEU_0hsro6DUKCkohzzyvcxebkaA2RjovzXRy0o-bhrec9nPSBGWaPyBY0zjNHYr-3EjN6JLhWFd4RqROkxFIUPDB-CuwJzDpupFajMqfNVb74MzlQ-f1lU34CRq6qHA"
                    />
                  </div>
                  <div className="group overflow-hidden border border-[#534343]">
                    <img
                onError={handleImageError}
                      alt="UNIMA award"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN9gJ2zbVaACUdGvFSIdUzQW3AvGl9Lxt1SqlkxQICYlpydPx0NliijpVZXicFlTH4ngba4uJI-fxQQBA1RwUBG-Gnq0W_xPqmxGijpYDdZW6aVGco-6qm78k9ySrS3EGjt9CAS8Q88ivK_kHha4x7DehJQrJb40UAYI7UV-fsOUOWHHOX_6_9MnhAF0LQs2pu_x6aVZ-c_Aiu32yX94qgrOwCwxu8z0oX0aREA8wNB508w7-wE-6uFGHQpzlm479KRoQ2e44OZ87zjg"
                    />
                  </div>
                </div>
              </div>

              {/* Column 4 (3 cols) */}
              <div className="md:col-span-3 flex flex-col gap-4">
                <div className="group overflow-hidden h-[360px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Master Khin Maung Htwe"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoNcw3VcUUw-2HJiiuX-_GQ_JAIoAWibMEGA6DlpcALRtMPQJw7WwByr9JN2otaKr_zngu1eAfNJj-HoSxqOli65nNvpDnD-xMtUNCzwq5n5SplRVSOStKvz_Y4cO89OwOyi4IH4AwTH5kn3_z5thnSgDuKyX6j5a3wwPh1s8kROF3m04vgzvRTMl1h7GdAIvIt9RK-kcIHPpHL7NjawAPMgbFS5JgdVapWRna5fGSLTQ5iZ54hfO5SxZNFKpezhDvku21jvchYY6T-w"
                  />
                </div>
                <div className="group overflow-hidden h-[460px] border border-[#534343]">
                  <img
                onError={handleImageError}
                    alt="Group award photo"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjICRZjtGYvMTdkh7YX7aty6-gTQ9e86GtNXn1rCXnF6R7-SZ3xsJQd6K5ciKq6j5AXMReiBM7fdg74Dft2NFrB6EWGcVqGpBsjnHZJ5L3vX4wOzlza8pvD159r9wyDjJxryrAaT_aOKHDRLMS9bkOD0HWxvh2JDXxHW9gL8zHg9MJs7nBkt4CyjA0KHO7EJHyeU7HoZWuS7qPVsYCp7LMTYNtFpsdyS0WRCSayPF8ePbQtYuxKv0LGQRULkLTe0UMMfiSKnbuu1b47g"
                  />
                </div>
              </div>
            </div>

            {/* Social CTA */}
            <div className="mt-16 text-center">
              <a
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-sans text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(217,119,6,0.35)] hover:scale-[1.02]"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ThumbsUp className="w-4 h-4 fill-stone-950" />
                <span className="text-stone-950 font-bold">VIEW MORE LIVE PHOTOS ON OUR FACEBOOK FAN PAGE</span>
              </a>
            </div>
          </section>
        </main>

        {/* SECTION 6: FOOTER */}
      </div>

      {/* VIDEO PLAYER MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedVideo(null)}
          />
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#d9b358] bg-[#1f1a1a] shadow-2xl z-10">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#534343] bg-[#181212]">
              <div className="flex items-center gap-2">
                <span className="bg-amber-950 text-amber-300 border border-amber-500/30 text-[11px] uppercase font-sans tracking-widest font-semibold px-2 py-0.5 rounded-sm">
                  {selectedVideo.tag}
                </span>
                <h3 className="font-serif text-lg font-semibold text-amber-50 truncate max-w-md">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-[#2c2525] text-[#ece0e0] hover:text-[#d9b358] flex items-center justify-center border border-[#534343]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                src={selectedVideo.videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 bg-[#181212] border-t border-[#534343]">
              <p className="font-sans text-sm text-[#ece0e0]/90 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
