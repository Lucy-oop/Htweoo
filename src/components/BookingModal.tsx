import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Ticket } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  eventTitle = 'Traditional Marionette Theatre Performance',
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: '2',
    date: '2026-08-07',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#1f1a1a] border border-[#d9b358] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#ece0e0]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#2c2525] text-[#ece0e0] hover:text-[#d9b358] flex items-center justify-center border border-[#534343] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d9b358]/20 border border-[#d9b358] text-[#d9b358] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-50">
              Reservation Confirmed
            </h3>
            <p className="font-sans text-sm text-[#c4c4c4] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. A confirmation for {formData.tickets} tickets to <em className="text-[#d9b358]">{eventTitle}</em> has been recorded. Our team will contact you at {formData.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#d9b358] text-black font-sans text-xs uppercase font-bold tracking-widest rounded-full hover:bg-amber-400 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-sans text-xs font-semibold tracking-widest uppercase mb-2">
              <Ticket className="w-4 h-4" />
              <span>Seat Reservation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-50 mb-2">
              {eventTitle}
            </h3>
            <p className="font-sans text-xs text-[#c4c4c4] mb-6">
              Experience the royal puppetry of Htwe Oo Myanmar. Fill out the reservation details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Daw Khin Lay"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181212] border border-[#534343] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d9b358]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181212] border border-[#534343] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d9b358]"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+95 9..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181212] border border-[#534343] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d9b358]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.tickets}
                    onChange={(e) => setFormData({ ...formData, tickets: e.target.value })}
                    className="w-full bg-[#181212] border border-[#534343] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d9b358]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Standard)</option>
                    <option value="4">4 Persons (Family)</option>
                    <option value="8">8+ Persons (Group Tour)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1">
                    Show Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#181212] border border-[#534343] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d9b358]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-sans text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:from-amber-300 hover:to-amber-500 transition-all cursor-pointer"
              >
                Confirm Seat Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
