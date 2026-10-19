'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useWishlist } from '@/lib/wishlist-store';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, openDrawer } = useWishlist();

  const totalWishlistCount = items.reduce((acc, i) => acc + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-black/80 py-2.5'
            : 'bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-black flex-shrink-0 border border-gold/30 group-hover:border-gold transition-colors">
              <Image
                src="/logo.png"
                alt="Party Partners Official Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-gold group-hover:text-gold-bright transition-colors">
                Party Partners
              </span>
              <span className="text-[10px] tracking-widest uppercase text-white/60 -mt-1">
                Event Rentals & Decor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#catalog"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide"
            >
              Catalog
            </Link>
            <Link
              href="#catalog"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide"
            >
              Rental Props
            </Link>
            <a
              href="/Party-Partners-Rate-Card.pdf"
              download
              className="text-sm font-medium text-gold hover:text-gold-bright transition-colors tracking-wide flex items-center gap-1"
            >
              <span>Rate Card</span>
              <span className="text-xs">↓</span>
            </a>
            <a
              href="tel:+919916300704"
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide"
            >
              +91 9916300704
            </a>
          </nav>

          {/* Action Buttons: Wishlist & WhatsApp */}
          <div className="flex items-center gap-3">
            {/* Wishlist Button */}
            <button
              onClick={openDrawer}
              className="relative p-2.5 rounded-full bg-white/5 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold transition-all duration-300"
              aria-label="View Wishlist"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {totalWishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-obsidian text-xs font-bold flex items-center justify-center shadow-lg animate-pulse">
                  {totalWishlistCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/919916300704?text=Hi%20Party%20Partners,%20I%20would%20like%20to%20enquire%20about%20event%20decorations."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold to-gold-bright text-obsidian text-xs font-bold tracking-wider uppercase shadow-md shadow-gold/20 hover:scale-105 transition-all duration-300"
            >
              <span>Book Setup</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-gold"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 bg-obsidian-deep/95 backdrop-blur-2xl border-b border-gold/20 p-6 md:hidden shadow-2xl"
          >
            {/* Header with Logo */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
              <div className="relative h-11 w-11 rounded-full overflow-hidden bg-black border border-gold/40">
                <Image src="/logo.png" alt="Party Partners Logo" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-gold">Party Partners</h4>
                <p className="text-xs text-white/60">Banashankari 3rd Stage, Bengaluru</p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-gold py-1"
              >
                Decor & Stage Catalog
              </Link>
              <Link
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-gold py-1"
              >
                Props & Pyro Inventory
              </Link>
              <a
                href="/Party-Partners-Rate-Card.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gold py-1 flex items-center justify-between"
              >
                <span>Download PDF Rate Card</span>
                <span>↓</span>
              </a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-white/50">Direct Contact</span>
                <a href="tel:+919916300704" className="text-lg font-bold text-gold">
                  +91 9916300704
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
