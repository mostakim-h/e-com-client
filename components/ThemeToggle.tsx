/**
 * Custom Theme Toggle Component - Modern & Animated
 * Beautiful dark/light mode switcher for navbar
 */

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:shadow-md group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-r from-indigo-500 to-purple-600"
            : "bg-gradient-to-r from-yellow-400 to-orange-400"
        }`}
      />

      {/* Sliding Circle */}
      <div
        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isDark ? "left-[calc(100%-1.625rem)]" : "left-0.5"
        }`}
      >
        {/* Icon inside circle */}
        <div className="transform transition-all duration-300">
          {isDark ? (
            <MoonFilledIcon size={14} className="text-indigo-600" />
          ) : (
            <SunFilledIcon size={14} className="text-orange-500" />
          )}
        </div>
      </div>

      {/* Decorative stars/sparkles (optional) */}
      {!isDark && (
        <>
          <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-1.5 right-3 w-0.5 h-0.5 bg-white rounded-full opacity-40" />
        </>
      )}
      {isDark && (
        <>
          <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-100" />
        </>
      )}
    </button>
  );
};
