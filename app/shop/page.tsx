/**
 * Shop Page - New Version with Filters Sidebar
 * Displays all products with comprehensive filtering and sorting options
 * Supports search query parameter
 */

import { Suspense } from "react";
import { ShopContent } from "./shop-content";

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopPageSkeleton />}>
      <ShopContent />
    </Suspense>
  );
}

function ShopPageSkeleton() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="h-96 bg-default-100 rounded-lg animate-pulse" />
        </aside>
        <div className="flex-1">
          <div className="h-12 bg-default-100 rounded-lg mb-6 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-default-100 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
