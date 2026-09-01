import React, { createContext, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import SiteFooter from './SiteFooter';
import BookingModal from './BookingModal';

interface BookingApi {
  openBooking: (eventTitle?: string) => void;
}

const BookingContext = createContext<BookingApi>({ openBooking: () => {} });

/** Lets any page open the reservation modal without prop-drilling. */
export function useBooking() {
  return useContext(BookingContext);
}

/**
 * Chrome shared by every route: one GlobalNav, one SiteFooter, one BookingModal.
 */
export default function SiteLayout() {
  const { pathname, hash } = useLocation();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | undefined>(undefined);

  const openBooking = (eventTitle?: string) => {
    setSelectedEventTitle(eventTitle || 'Royal Marionette Showcase');
    setBookingOpen(true);
  };

  // Restore top-of-page on navigation; honour an #anchor when one is present.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      <div className="relative w-full bg-[#181212] text-[#ece0e0]">
        <GlobalNav onOpenBooking={openBooking} />

        <Outlet />

        <SiteFooter onOpenBooking={openBooking} />

        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          eventTitle={selectedEventTitle}
        />
      </div>
    </BookingContext.Provider>
  );
}
