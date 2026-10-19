'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CatalogItem } from '@/data/catalog';

export interface WishlistItem extends CatalogItem {
  quantity: number;
}

interface WishlistState {
  items: WishlistItem[];
  isOpen: boolean;
  addItem: (item: CatalogItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearWishlist: () => void;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (item) => {
        const current = get().items;
        const exists = current.find((i) => i.id === item.id);
        if (exists) {
          set({
            items: current.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...current, { ...item, quantity: 1 }],
            isOpen: true,
          });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      updateQuantity: (id, delta) => {
        const items = get().items.map((i) => {
          if (i.id === id) {
            const newQ = i.quantity + delta;
            return newQ > 0 ? { ...i, quantity: newQ } : null;
          }
          return i;
        }).filter(Boolean) as WishlistItem[];
        set({ items });
      },
      clearWishlist: () => set({ items: [] }),
      toggleDrawer: () => set({ isOpen: !get().isOpen }),
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),
    }),
    {
      name: 'party-partners-wishlist',
    }
  )
);
