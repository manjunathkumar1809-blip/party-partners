'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title: string;
  description?: string;
  price?: string;
  deposit?: string;
  specs?: string;
  onAddToWishlist?: () => void;
  isInWishlist?: boolean;
}

export default function Lightbox({
  isOpen,
  onClose,
  src,
  alt,
  title,
  description,
  price,
  deposit,
  specs,
  onAddToWishlist,
  isInWishlist,
}: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-obsidian-deep">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="mt-4 p-5 sm:p-6 bg-obsidian-deep/95 backdrop-blur-2xl border border-gold/30 rounded-2xl shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gold">{title}</h3>
                  {specs && (
                    <span className="inline-block mt-2 text-xs text-gold-bright bg-gold/15 px-3 py-1 rounded-full border border-gold/30 font-medium">
                      ★ {specs}
                    </span>
                  )}
                </div>

                <div className="text-left sm:text-right">
                  {price && (
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-white/50 block">Rent</span>
                      <p className="text-xl sm:text-2xl font-bold text-white font-serif">{price}</p>
                    </div>
                  )}
                  {deposit && (
                    <p className="text-xs text-gold mt-1">
                      Refundable Deposit: <span className="font-bold">{deposit}</span>
                    </p>
                  )}
                </div>
              </div>

              {description && (
                <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-3">
                  {description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {onAddToWishlist && (
                  <button
                    onClick={onAddToWishlist}
                    className={`px-5 py-2.5 rounded-xl border text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      isInWishlist
                        ? 'bg-gold/20 border-gold text-gold-bright'
                        : 'bg-white/5 border-white/20 text-white hover:border-gold hover:text-gold'
                    }`}
                  >
                    {isInWishlist ? '✓ Added to Wishlist' : '+ Add to Wishlist'}
                  </button>
                )}

                <a
                  href={`https://wa.me/919916300704?text=Hi%20Party%20Partners,%20I%20would%20like%20to%20rent:%20${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold/20 hover:scale-105 transition-all duration-300"
                >
                  Book on WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}