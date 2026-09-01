import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface GlobalNavProps {
  onOpenBooking?: (eventTitle?: string) => void;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link hover:text-[#D49E24] transition-colors duration-300${isActive ? ' active' : ''}`;

export default function GlobalNav({ onOpenBooking }: GlobalNavProps) {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Publish the nav's real height so page content can offset itself beneath it.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const publish = () => {
      document.documentElement.style.setProperty(
        '--global-nav-h',
        `${nav.getBoundingClientRect().height}px`
      );
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleTickets = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    onOpenBooking?.('Htwe Oo Myanmar Marionette Show');
  };

  return (
    <>
    <nav
      ref={navRef}
      id="global-nav"
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-t-[3px] border-[#D49E24] ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="px-6 py-4 max-w-[1440px] mx-auto relative flex justify-between lg:justify-center items-center min-h-[80px]">
        {/* Left Menu (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-10 pr-12 font-sans text-[13px] tracking-[0.15em] font-medium text-[#F5F5F7]">
          <NavLink to="/" end className={navLinkClass}>HOME</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT US</NavLink>
        </div>

        {/* Center Section (Logo & Titles) */}
        <Link to="/" className="flex flex-col items-center justify-center relative z-10 min-w-0 lg:flex-shrink-0 px-2 lg:px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <img
              alt="Marionette Icon"
              className="h-8 w-8 shrink-0 rounded-full object-cover border border-[#D49E24]/50 opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvUfrttDZ4xYeKawyoPnf3XYYP7WS0hpJZm6oBhmlWfUxS1V6NKyq4TS3gn401-BjNh7F5t-VA8X8CbWC25WWlO72xQtant9nJVf2xVmxOPGdOfzMEW7XUXioySYqE4v8s57O7QXIcv4Mlh-UXa1Av0m18H7aRQDbahhK5UQnqpFXoVyrck4z5qrUV7MShj5DOM4WTOeITNw4XmqGN7jcz-hzkv03lQj_nqhe8bdTGNZWoA30MrACZRAv-OL9ht1CHjkMid3E9tsjsTQ"
            />
            <span className="font-serif text-[19px] sm:text-[24px] md:text-[28px] text-[#F5F5F7] tracking-wider leading-tight">
              HTWE OO MYANMAR
            </span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 max-w-full">
            <span className="h-[1px] w-4 shrink-0 bg-[#D49E24]/60" />
            <span className="min-w-0 text-[#D49E24] font-sans text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-widest font-semibold">
              Traditional Puppet Show (Phnom Penh • Bangkok)
            </span>
            <span className="h-[1px] w-4 shrink-0 bg-[#D49E24]/60" />
          </div>
        </Link>

        {/* Right Menu (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-start items-center gap-10 pl-12 font-sans text-[13px] tracking-[0.15em] font-medium text-[#F5F5F7]">
          <NavLink to="/history" className={navLinkClass}>HISTORY</NavLink>
          <a
            href="#"
            onClick={handleTickets}
            className="bg-[#107C41] hover:bg-[#14954F] text-white px-6 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all duration-300 shadow-[0_4px_14px_rgba(16,124,65,0.4)] hover:shadow-[0_6px_20px_rgba(16,124,65,0.6)] hover:-translate-y-0.5"
          >
            EVENTS &amp; TICKETS
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden shrink-0 text-[#F5F5F7] hover:text-[#D49E24] p-2 focus:outline-none z-50 relative"
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

    </nav>

      {/* Mobile Slide-over Drawer */}
    <div
      id="mobile-menu"
      className={`fixed inset-y-0 right-0 w-64 bg-[#1C1D1F] border-l border-[#D49E24]/30 shadow-2xl z-[45] lg:hidden flex flex-col pt-24 px-8 gap-8 ${
        menuOpen ? 'open' : ''
      }`}
    >
      <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-sans text-sm tracking-widest border-b border-[#D49E24]/20 pb-3 transition-colors ${isActive ? 'text-[#D49E24]' : 'text-[#F5F5F7] hover:text-[#D49E24]'}`}>HOME</NavLink>
      <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-sans text-sm tracking-widest border-b border-[#D49E24]/20 pb-3 transition-colors ${isActive ? 'text-[#D49E24]' : 'text-[#F5F5F7] hover:text-[#D49E24]'}`}>ABOUT US</NavLink>
      <NavLink to="/history" onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-sans text-sm tracking-widest border-b border-[#D49E24]/20 pb-3 transition-colors ${isActive ? 'text-[#D49E24]' : 'text-[#F5F5F7] hover:text-[#D49E24]'}`}>HISTORY</NavLink>
      <a
        href="#"
        onClick={handleTickets}
        className="bg-[#107C41] text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest text-center mt-4"
      >
        EVENTS &amp; TICKETS
      </a>
    </div>

    {/* Mobile Backdrop */}
    <div
      id="mobile-backdrop"
      onClick={() => setMenuOpen(false)}
      className={`fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm ${
        menuOpen ? '' : 'hidden'
      }`}
    />
    </>
  );
}
