'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useWishlist } from '@/lib/wishlist-store';

const BENGALURU_AREAS = [
  'Banashankari 3rd Stage',
  'Banashankari 2nd Stage',
  'Banashankari 1st Stage',
  'Koramangala',
  'HSR Layout',
  'BTM Layout',
  'Indiranagar',
  'Whitefield',
  'Marathahalli',
  'Jayanagar',
  'JP Nagar',
  'Electronic City',
  'Bellandur',
  'Sarjapur Road',
  'Yelahanka',
  'Hebbal',
  'Malleshwaram',
  'Rajajinagar',
  'Vijayanagar',
  'Basavanagudi',
  'Jayanagar 4th Block',
  'Wilson Garden',
  'Koramangala 4th Block',
  'Koramangala 5th Block',
  'Other (specify in WhatsApp)',
];

export default function WishlistDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, clearWishlist } = useWishlist();
  const [eventDate, setEventDate] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Banashankari 3rd Stage');
  const [customArea, setCustomArea] = useState('');

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);

  const generateWhatsAppMessage = () => {
    let msg = "Hello Party Partners! ✨\nI would like to request an event quote for the following items:\n\n";
    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.title}* (Qty: ${item.quantity}) - ${item.price || 'Quote Req'}`;
      if (item.deposit) {
        msg += ` [Deposit: ${item.deposit}]`;
      }
      msg += `\n`;
    });

    if (eventDate) {
      msg += `\n📅 Event Date: ${eventDate}`;
    }

    let area = deliveryArea;
    if (deliveryArea === 'Other (specify in WhatsApp)' && customArea) {
      area = customArea;
    }
    msg += `\n📍 Delivery Area: ${area}, Bengaluru`;

    msg += `\n\nPlease share package availability and final quotation. Thank you!`;
    return encodeURIComponent(msg);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-obsidian-deep border-l border-gold/25 shadow-2xl flex flex-col"
          >
            {/* Drawer Header with Logo */}
            <div className="p-5 border-b border-gold/20 bg-obsidian flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden bg-black border border-gold/40 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Party Partners Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gold">Quote Wishlist</h3>
                  <p className="text-xs text-white/60">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>

              <button
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close Wishlist"
              >
                ✕
              </button>
            </div>

            {/* Wishlist Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-2xl">
                    ✨
                  </div>
                  <h4 className="font-serif text-lg text-white font-semibold">Your wishlist is empty</h4>
                  <p className="text-sm text-white/50 mt-1 max-w-xs mx-auto">
                    Browse our event decor setups and rental props to build your custom party package.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    {/* Item Thumbnail */}
                    <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-black/40 border border-gold/20 flex-shrink-0">
                      <Image
                        src={item.localAsset || `https://lh3.googleusercontent.com/d/${item.driveId}`}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">{item.title}</h4>
                      <p className="text-xs font-bold text-gold mt-0.5">{item.price || "Price on Request"}</p>

                      {/* Quantity Controls */}
                      <div className="mt-2 flex items-center gap-3">
                        <div className="inline-flex items-center rounded-lg bg-black/60 border border-white/10 px-2 py-0.5 text-xs">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-white/70 hover:text-gold px-1 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 text-white font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-white/70 hover:text-gold px-1 font-bold"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-red-400/80 hover:text-red-400 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer with Event Details & WhatsApp Quote Button */}
            {items.length > 0 && (
              <div className="p-5 border-t border-gold/20 bg-obsidian-deep space-y-4">
                {/* Event Date Picker */}
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-2">Event Date</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/40 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  />
                </div>

                {/* Bengaluru Area Selector */}
                <div>
                  <label className="block text-xs font-medium text-white/60 mb-2">Delivery Area (Bengaluru)</label>
                  <div className="relative">
                    <select
                      value={deliveryArea}
                      onChange={(e) => {
                        setDeliveryArea(e.target.value);
                        if (e.target.value !== 'Other (specify in WhatsApp)') {
                          setCustomArea('');
                        }
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white appearance-none focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all pr-10"
                    >
                      {BENGALURU_AREAS.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gold pointer-events-none">
                      ▼
                    </div>
                  </div>

                  {deliveryArea === 'Other (specify in WhatsApp)' && (
                    <input
                      type="text"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      placeholder="Enter your area/locality"
                      className="mt-2 w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/40 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                    />
                  )}
                </div>

                {/* Submit to WhatsApp Button */}
                <a
                  href={`https://wa.me/919916300704?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-gold/25 hover:scale-[1.02] active:scale-[0.98] transition-all block"
                >
                  <span>Submit Wishlist to WhatsApp</span>
                  <span>→</span>
                </a>

                <div className="flex items-center justify-between text-xs text-white/50 px-1">
                  <span>Fast response within 30 mins</span>
                  <button onClick={clearWishlist} className="hover:text-white underline">
                    Clear Wishlist
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}