/**
 * Brand Circle Component
 * Displays brand logo in a circle with stunning animations
 */

"use client";

import React from "react";
import NextLink from "next/link";

interface BrandCircleProps {
  name: string;
  logo: string;
  bgColor: string;
  link: string;
}

export const BrandCircle: React.FC<BrandCircleProps> = ({
  name,
  logo,
  bgColor,
  link,
}) => {
  return (
    <NextLink href={link} className="flex flex-col items-center gap-4 group">
      <div className="relative">
        {/* Animated Background Glow */}
        <div
          className={`absolute inset-0 ${bgColor} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-75 group-hover:scale-100`}
        />

        {/* Main Circle with 3D Effect */}
        <div
          className={`relative w-28 h-28 rounded-full ${bgColor} flex items-center justify-center shadow-lg
            group-hover:shadow-2xl transition-all duration-500 ease-out
            group-hover:scale-110 group-hover:-translate-y-2
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500
            after:absolute after:inset-[2px] after:rounded-full after:bg-gradient-to-br after:from-transparent after:via-transparent after:to-black/10`}
        >
          {/* Inner Shine Effect */}
          <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50" />

          {/* Logo */}
          <div className="relative text-white font-bold text-3xl transform group-hover:scale-110 transition-transform duration-500 z-10">
            {logo}
          </div>

          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700" />
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
      </div>

      {/* Brand Name with Underline Animation */}
      <div className="relative">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
          {name}
        </p>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-full transition-all duration-500" />
      </div>
    </NextLink>
  );
};
