/**
 * Complete Footer Component - Matches Design
 * Includes all sections from the design mockup
 */

"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import NextLink from "next/link";

export const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00B207] rounded-md flex items-center justify-center">
                <span className="text-white text-xl">🛒</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-xl">Shopery</span>
            </div>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-gray-900 dark:text-white">(219) 555-0114</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              or Proxy@gmail.com
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link as={NextLink} href="/account" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/order-history" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/cart" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/wishlist" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Helps */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Helps</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link as={NextLink} href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/faqs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Faqs
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Proxy */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Proxy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link as={NextLink} href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/product" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Product
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/track-order" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link as={NextLink} href="/shop?category=vegetables" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Fruit & Vegetables
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/shop?category=meat" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Meat & Fish
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/shop?category=bread" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Bread & Bakery
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/shop?category=beauty" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Beauty & Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-800">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Shopery eCommerce © 2021. All Rights Reserved
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6 opacity-70" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-70" />
              <div className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-900">Discover</div>
              <div className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold">AMEX</div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-white text-xs">🔒</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
