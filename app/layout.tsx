import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontHeading, fontBody } from "@/config/fonts";
import { EnhancedNavbar } from "@/components/EnhancedNavbar";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Shopery - eCommerce Store</title>
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background dark:bg-gray-950 font-body antialiased transition-colors",
          fontBody.variable,
          fontHeading.variable,
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <NextTopLoader
            color="#00f320ff"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #00f320ff,0 0 5px #00f320ff"
          />
          <div className="relative flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <EnhancedNavbar />
            <main className="flex-grow bg-white dark:bg-gray-950">
              {children}
            </main>
            <EnhancedFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
