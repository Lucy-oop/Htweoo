import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Copy, Check, ThumbsUp } from 'lucide-react';

interface SiteFooterProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

/**
 * Single footer for every route. Previously duplicated inside ContentSections
 * and again in the About/History markup.
 */
export default function SiteFooter({ onOpenBooking }: SiteFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('director@htweoomyanmar.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <footer
      className="relative z-20 w-full flex flex-col items-center pt-20 pb-10 overflow-hidden border-t border-[#d9b358]/30 bg-[#141213]"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxr7IPZglATfZ2ciaeyTP0J4TIeMR3JXAzAwsgxT6wPJoG3zNtrlHkDF2pBZIoJHe1GgtyAObeti3z818OuCrZm6Ic208Y2w_bhb7rKweOhCSHWrJVTGdv7tRXYw8wzdZTvSdAE3rm6gT5A_cF3jkme0uOElFkg0MS55hiddKHutJEZ_UEGEQPg6pvjZ9tRETglEyznHDwIkgXOsDs0Vjq4IH59Uw2ne2anYimZ0DmSa7z030Atja_vbcWR7ov1U9sE-N2OP7wnIpP2g')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-[#181212] bg-opacity-90 mix-blend-multiply pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1 */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-2xl font-bold text-[#d9b358] tracking-wide">
            HTWE OO THEATRE
          </h3>
          <p className="font-sans text-[14px] text-[#E5DDCB] leading-relaxed max-w-xs font-normal">
            A cultural sanctuary dedicated to the preservation and performance of traditional Myanmar royal puppetry. Experience the magic of wooden souls.
          </p>
          <button
            type="button"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d9b358] bg-[#2c2525]/80 text-[#E5DDCB] hover:bg-[#d9b358] hover:text-black transition-colors duration-300 font-sans text-[12px] uppercase font-bold tracking-widest"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            TripAdvisor 5.0
          </button>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-xl font-bold text-[#d9b358] tracking-wide uppercase">
            Explore Theatre
          </h3>
          <ul className="flex flex-col gap-3 font-sans text-[14px] text-[#E5DDCB]">
            <li>
              <Link className="hover:text-[#d9b358] transition-colors relative group" to="/#moments-gallery">
                Our Heritage
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d9b358] transition-all group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d9b358] transition-colors relative group" to="/#moments-gallery">
                Marionette Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d9b358] transition-all group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d9b358] transition-colors relative group" to="/#moments-gallery">
                Meet The Masters
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d9b358] transition-all group-hover:w-full" />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d9b358] transition-colors relative group" to="/#moments-gallery">
                International Tours
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d9b358] transition-all group-hover:w-full" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-xl font-bold text-[#d9b358] tracking-wide uppercase">
            Weekly Shows &amp; Reservations
          </h3>
          <div className="font-sans text-[14px] text-[#E5DDCB] leading-relaxed">
            <p>Current Residency:<br />Siam Nakarin Center, Songkhla</p>
            <p className="mt-2">Hotline: +95 9 123 456 789</p>
          </div>
          <button
            onClick={() => onOpenBooking?.('Siam Nakarin Weekly Show')}
            className="mt-4 px-6 py-2.5 bg-[#d9b358] text-black font-sans text-[12px] uppercase font-bold tracking-widest rounded-sm hover:bg-[#d9b358] transition-colors shadow-lg cursor-pointer"
          >
            Book Tickets
          </button>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-xl font-bold text-[#d9b358] tracking-wide uppercase">
            Contact Us
          </h3>
          <button
            onClick={handleCopyEmail}
            className="font-sans text-[13px] text-[#E5DDCB] hover:text-[#d9b358] transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#d9b358]" />
            <span>director@htweoomyanmar.com</span>
            {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
          </button>
          <a
            aria-label="Follow us on Facebook"
            title="Follow us on Facebook"
            className="mt-4 w-12 h-12 rounded-full border border-[#d9b358] flex items-center justify-center text-[#d9b358] hover:bg-[#d9b358] hover:text-black transition-all"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ThumbsUp className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 border-t border-[#d9b358]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[12px] text-[#E5DDCB]/70 tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} Htwe Oo Myanmar Puppet Theatre. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-[12px] text-[#E5DDCB]/80 uppercase tracking-widest">
          <Link className="hover:text-[#d9b358] transition-colors" to="/#moments-gallery">Heritage Preservation</Link>
          <Link className="hover:text-[#d9b358] transition-colors" to="/#moments-gallery">Artist Bios</Link>
          <Link className="hover:text-[#d9b358] transition-colors" to="/#moments-gallery">Tour Schedule</Link>
          <button onClick={handleCopyEmail} className="hover:text-[#d9b358] transition-colors">Contact Us</button>
        </div>
      </div>
    </footer>
  );
}
