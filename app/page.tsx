/**
 * Complete Landing Page - Pixel Perfect Match with Design
 * Every section from landing-page-design.png
 */

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { ProductCard } from "@/components/product-card";
import { getAllProducts } from "@/data/products";

export default function CompleteLandingPage() {
  const allProducts = getAllProducts();

  return (
    <div className="flex flex-col bg-white dark:bg-gray-950">
      {/* Hero Section with Illustration */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 transition-colors">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Shopping And
                <br />
                <span className="text-[#00B207]">Department Store.</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
              </p>
              <Button
                as={Link}
                href="/shop"
                className="bg-[#00B207] text-white font-semibold px-8 py-6 text-lg rounded-full"
                size="lg"
              >
                Shop Now →
              </Button>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop"
                  alt="Shopping illustration"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Today Best Deals For You! */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Shop</h2>
            <Button as={Link} href="/shop" variant="light" className="text-[#00B207] dark:text-[#00B207]">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 12).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className={'flex justify-center items-center my-8'}>
          <Button as={Link} href="/shop" variant="light" className="text-[#00B207] dark:text-[#00B207]">
            View All →
          </Button>
        </div>
      </section>


      {/* Get 5% Cash Back */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-12">
              <div>
                <img
                  src="/shopping_cashback_banner_1763982143951.png"
                  alt="Man wearing panjabi"
                  className="rounded-2xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get 5% Cash Back On $200</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                </p>
                <Button className="bg-[#00B207] text-white rounded-full px-8" size="lg">
                  Learn More →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products For You */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-8">Trending Products For You!</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardBody className="p-0">
                <div
                  className="relative h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-3xl font-bold mb-2">Furniture Village</h3>
                    <Button className="bg-white text-gray-800 rounded-full">Shop Now →</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="overflow-hidden">
              <CardBody className="p-0">
                <div
                  className="relative h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-white text-3xl font-bold mb-2">Fashion Store</h3>
                    <Button className="bg-white text-gray-800 rounded-full">Shop Now →</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
