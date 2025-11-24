import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Plus_Jakarta_Sans as FontHeading,
  Manrope as FontBody
} from "next/font/google";

// Main body font - Manrope (clean, modern, highly readable)
export const fontBody = FontBody({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Heading font - Plus Jakarta Sans (geometric, professional)
export const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Keep Inter as fallback/alternative
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Monospace font for code
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
