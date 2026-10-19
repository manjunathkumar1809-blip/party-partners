'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CatalogItem, decorCatalog, rentalCatalog } from '@/data/catalog';
import { useWishlist } from '@/lib/wishlist-store';
import Lightbox from './Lightbox';

interface CardProps {
  item: CatalogItem;
  onOpenLightbox: (item: CatalogItem) => void;
}

const Card = ({ item, onOpenLightbox }: CardProps) => {
  const [imgSrc, setImgSrc] = useState(
    item.localAsset || (item.driveId ? `https://lh3.googleusercontent.com/d/${item.driveId}` : '')
  );
  const { addItem, items } = useWishlist();

  const isItemInWishlist = items.some((i) => i.id === item.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-3xl bg-obsidian-deep/90 border border-gold/20 backdrop-blur-2xl shadow-xl shadow-black/50 hover:border-gold/60 transition-all flex flex-col justify-between cursor-pointer"
      onClick={() => onOpenLightbox(item)}
    >
      {/* Visual Asset Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-6">
        <Image
          src={imgSrc}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-[0_12px_24px_rgba(212,175,55,0.18)]"
          onError={() => {
            if (item.localAsset && imgSrc !== item.localAsset) {
              setImgSrc(item.localAsset);
            }
          }}
        />

        {/* Category Pill */}
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/70 text-gold border border-gold/30 backdrop-blur-md">
          {item.category}
        </span>

        {/* View Fullscreen Hint */}
        <span className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
          View Details
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-gold tracking-tight group-hover:text-gold-bright transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-2 text-sm text-white/70 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] uppercase tracking-wider text-white/50">Rent</span>
            <span className="font-serif text-lg font-bold text-white">
              {item.price || "Quote on Request"}
            </span>
          </div>

          {item.deposit && (
            <div className="flex items-center justify-between text-xs text-white/60 -mt-1">
              <span className="text-[11px] text-white/45">Refundable Deposit</span>
              <span className="text-gold font-semibold text-xs">{item.deposit}</span>
            </div>
          )}

          {item.specs && (
            <div className="text-[10px] text-gold-bright bg-gold/10 px-2 py-0.5 rounded border border-gold/25 truncate text-center">
              {item.specs}
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addItem(item);
              }}
              className={`py-2 px-3 rounded-xl border text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 ${
                isItemInWishlist
                  ? 'bg-gold/20 border-gold text-gold-bright'
                  : 'bg-white/5 border-white/15 text-white hover:border-gold hover:text-gold'
              }`}
            >
              <span>{isItemInWishlist ? '✓ Added' : '+ Wishlist'}</span>
            </button>

            <a
              href={`https://wa.me/919916300704?text=Hi%20Party%20Partners,%20I%20am%20interested%20in%20renting:%20${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="py-2 px-3 rounded-xl bg-gold/15 text-gold hover:bg-gold hover:text-obsidian border border-gold/40 text-xs font-semibold tracking-wider uppercase text-center transition-all duration-300"
            >
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CatalogGrid() {
  const [activeTab, setActiveTab] = useState<'decor' | 'rental'>('rental');
  const [lightboxItem, setLightboxItem] = useState<CatalogItem | null>(null);
  const { addItem, items } = useWishlist();

  const openLightbox = (item: CatalogItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  const displayedItems = activeTab === 'decor' ? decorCatalog : rentalCatalog;

  // Category filter pills based on tags
  const getCategories = (itemList: CatalogItem[]) => {
    const tags = new Set<string>();
    itemList.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  };

  const categories = getCategories(displayedItems);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const formatCategoryName = (tag: string) => {
    const map: Record<string, string> = {
      'backdrops-and-arches': 'Backdrops & Arches',
      'furniture-and-plinths': 'Plinths & Furniture',
      'cake-stands': 'Cake Stands',
      'cake-pedestal': 'Cake Pedestals',
      'trunks-and-boxes': 'Trunks & Boxes',
      'props-and-carriages': 'Props & Carriages',
      'lighting-and-lanterns': 'Lighting & Lanterns',
      'neon': 'Neon Signage',
      'equipment-and-tools': 'Equipment & Tools',
      'special-fx': 'Special FX',
      'custom-printing': 'Custom Services',
      'arch': 'Arch Stands',
      'birthday': 'Birthday Themes',
      'naming-ceremony': 'Naming Ceremony',
      'baby-shower': 'Baby Shower',
      'wedding': 'Wedding Stages',
      'kids-theme': 'Kids Themes',
      'unicorn': 'Unicorn Themes',
      'cartoon-theme': 'Cartoon Themes',
      'pastel-gold': 'Pastel Gold',
      'botanical': 'Botanical & Garden',
    };
    return map[tag] || tag.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  };

  const filteredItems = activeFilter === 'all'
    ? displayedItems
    : displayedItems.filter(item => item.tags.includes(activeFilter));

  return (
    <>
      <section id="catalog" className="bg-obsidian py-24 relative overflow-hidden">
        {/* Background radial gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-bright text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              Bespoke Event Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight">
              Curated Catalog & Rentals
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Handcrafted backdrops, fluted plinths, and atmospheric special effects for birthdays, naming ceremonies, and luxury receptions across Bengaluru.
            </p>
          </div>

          {/* Dual Catalog Tabs */}
          <div className="flex justify-center gap-4 mb-10">
            {(['decor', 'rental'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveFilter('all');
                }}
                className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-gold to-gold-bright text-obsidian shadow-lg shadow-gold/25'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-gold/30'
                }`}
              >
                {tab === 'decor' ? 'Event Decor Packages' : 'Rental Equipment & Props'}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gold text-obsidian shadow-md shadow-gold/20'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-gold/30'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-gold/20 border border-gold/40 text-gold-bright shadow-md shadow-gold/10'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-gold/30'
                }`}
              >
                {formatCategoryName(cat)}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} item={item} onOpenLightbox={openLightbox} />
            ))}
          </div>

          {/* Download Rate Card Button */}
          <div className="mt-16 text-center">
            <a
              href="/Party-Partners-Rate-Card.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian font-bold text-sm uppercase tracking-wider shadow-xl shadow-gold/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Download Complete Rate Card (PDF)</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!lightboxItem}
        onClose={closeLightbox}
        src={lightboxItem?.localAsset || (lightboxItem?.driveId ? `https://lh3.googleusercontent.com/d/${lightboxItem.driveId}` : '')}
        alt={lightboxItem?.title || ''}
        title={lightboxItem?.title || ''}
        description={lightboxItem?.description}
        price={lightboxItem?.price}
        deposit={lightboxItem?.deposit}
        specs={lightboxItem?.specs}
        isInWishlist={lightboxItem ? items.some(i => i.id === lightboxItem.id) : false}
        onAddToWishlist={lightboxItem ? () => addItem(lightboxItem) : undefined}
      />
    </>
  );
}