/**
 * Complete Footer Component - Matches Design
 * Includes all sections from the design mockup
 */

"use client";

import React from "react";
import {Link} from "@heroui/link";
import NextLink from "next/link";

export const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00B207] rounded-md flex items-center justify-center">
                <span className="text-white text-xl">🛒</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-xl">Shopery</span>
            </div>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
              Style you love, value you deserve.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-gray-900 dark:text-white">+8801317839105 | +8801717940415</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              or me.mostakimh309@gmail.com
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link as={NextLink} href="/account"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/order-history"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/cart"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/wishlist"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
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
                <Link as={NextLink} href="/contact"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/faqs"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Faqs
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/terms"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/privacy"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
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
                <Link as={NextLink} href="/about"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/shop"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/product"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Product
                </Link>
              </li>
              <li>
                <Link as={NextLink} href="/track-order"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-800">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Shopery eCommerce © ${new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
