/**
 * Wishlist Context and Provider
 * Manages the wishlist state using React Context API with Zustand
 */

"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;

}

const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],

      addToWishlist: (product) =>
        set((state) => {
          if (state.wishlist.find((item) => item.id === product.id)) {
            return state;
          }
          return { wishlist: [...state.wishlist, product] };
        }),

      removeFromWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        })),

      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId);
      },

      toggleWishlist: (product) => {
        const { isInWishlist, addToWishlist, removeFromWishlist } = get();
        if (isInWishlist(product.id)) {
          removeFromWishlist(product.id);
        } else {
          addToWishlist(product);
        }
      },

      clearWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export const useWishlist = useWishlistStore;
