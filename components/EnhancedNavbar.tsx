/**
 * Enhanced Header/Navbar Component - Beautiful & Clean
 * Modern design without ugly borders
 * With functional search and autocomplete
 */

"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CartIcon, HeartIcon, SearchIcon, UserIcon } from "@/components/icons";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { getAllProducts } from "@/data/products";
import type { Product } from "@/types";
import { ThemeToggle } from "@/components/ThemeToggle";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/dropdown";

export const EnhancedNavbar = () => {
  const router = useRouter();
  const { getCartItemsCount } = useCart();
  const { wishlist } = useWishlist();
  const cartItemsCount = getCartItemsCount();
  const wishlistCount = wishlist.length;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const allProducts = getAllProducts();
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 results

      setSearchResults(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowDropdown(false);
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProductClick = (productId: string) => {
    setShowDropdown(false);
    setSearchQuery("");
    router.push(`/product/${productId}`);
  };

  return (
    <>
      {/* Main Navbar - Clean & Modern with Dark Mode Support */}
      <div className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <NextLink className="flex items-center gap-2.5" href="/">
              <div className="w-10 h-10 bg-[#00B207] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-2xl">🛒</span>
              </div>
              <span className="font-bold text-[#00B207] text-2xl tracking-tight">Shopery</span>
            </NextLink>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-12" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none z-10"
                  size={20} />
                <input
                  type="search"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowDropdown(true)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00B207] focus:bg-white dark:focus:bg-gray-700 transition-all"
                />

                {/* Search Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
                    <div className="p-2">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 uppercase">
                        Products ({searchResults.length})
                      </div>
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-left"
                        >
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex-shrink-0 overflow-hidden">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                                {product.category}
                              </span>
                              {product.brand && (
                                <>
                                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{product.brand}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-[#00B207]">
                              ${product.price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-0.5 text-xs text-yellow-400">
                              ★ <span className="text-gray-600 dark:text-gray-400">{product.rating}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {searchQuery.trim() && (
                      <div className="border-t border-gray-100 dark:border-gray-700 p-2">
                        <button
                          onClick={handleSearchSubmit}
                          className="w-full text-center py-2 text-sm text-[#00B207] font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          See all results for "{searchQuery}"
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6">
              {/* Theme Toggle - Modern Animated Switch */}
              <div className="hidden sm:flex items-center">
                <ThemeToggle />
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700" />

              {/* User Avatar/Login */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  {isLoggedIn ? (
                    <div className="w-9 h-9 rounded-full bg-[#00B207] flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <UserIcon size={20} className="text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                    {isLoggedIn ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
                        </div>
                        <NextLink
                          href="/account"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          My Account
                        </NextLink>
                        <NextLink
                          href="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Orders
                        </NextLink>
                        <NextLink
                          href="/wishlist"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Wishlist
                        </NextLink>
                        <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                          <button
                            onClick={() => {
                              setIsLoggedIn(false);
                              setShowUserMenu(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            Sign Out
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">Welcome!</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                        </div>
                        <NextLink
                          href="/login"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Sign In
                        </NextLink>
                        <NextLink
                          href="/signup"
                          className="block px-4 py-2 text-sm text-[#00B207] font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Create Account
                        </NextLink>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700" />

              {/* Wishlist */}
              <NextLink href="/wishlist" className="relative hover:opacity-70 transition-opacity">
                <HeartIcon size={26} className="text-gray-700 dark:text-gray-200" />
                {wishlistCount > 0 && (
                  <span
                    className="absolute -top-2 -right-2 bg-[#00B207] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </NextLink>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-700" />

              {/* Cart */}
              <NextLink href="/cart" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <div className="relative">
                  <CartIcon size={26} className="text-gray-700 dark:text-gray-200" />
                  {cartItemsCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 bg-[#00B207] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Shopping cart</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-200">$57.00</span>
                </div>
              </NextLink>

              {/* Mobile Menu Toggle */}
              <button className="lg:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Clean */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 hidden lg:block transition-colors">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            <nav className="flex items-center gap-8">

              <Button
                as={NextLink}
                href="/shop"
                variant="light"
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#00B207] dark:hover:text-[#00B207] transition-colors"
              >
                All Categories
              </Button>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">Winter-25 new collections</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Winter Combo</DropdownItem>
                  <DropdownItem key="new">Waistcoat</DropdownItem>
                  <DropdownItem key="copy">Sweat Shirt</DropdownItem>
                  <DropdownItem key="edit">Sneakers</DropdownItem>
                  <DropdownItem key="edit">Jacket</DropdownItem>
                  <DropdownItem key="edit">Coat</DropdownItem>
                  <DropdownItem key="edit">Boots</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">Panjabi</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Platinum</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">T-shirt</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Regular Pattern</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">Pant & Trouser</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Trouser</DropdownItem>
                  <DropdownItem key="edit">Denim Pant</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light">Attar</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="edit">Attar Combo</DropdownItem>
                  <DropdownItem key="edit">Series 240</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </nav>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 dark:text-gray-400">📞</span>
              <span className="font-bold text-gray-800 dark:text-gray-200">+8801317839105</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
