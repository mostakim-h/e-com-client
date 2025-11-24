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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Today Best Deals For You!</h2>
            <Button as={Link} href="/shop" variant="light" className="text-[#00B207] dark:text-[#00B207]">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Up To 70% Off */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "100% ORGANIC",
                subtitle: "Fruit & Vegetables",
                discount: "UP TO 70% OFF",
                bg: "from-yellow-400 to-orange-400",
                image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop"
              },
              {
                title: "Sale of the Month",
                subtitle: "New Crop",
                discount: "UP TO 64% OFF",
                bg: "from-red-500 to-pink-500",
                image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&h=400&fit=crop"
              },
              {
                title: "100% Fresh",
                subtitle: "Fruit & Vegetables",
                discount: "UP TO 67% OFF",
                bg: "from-orange-400 to-yellow-300",
                image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=400&fit=crop"
              },
              {
                title: "Low-Fat Meat",
                subtitle: "85% FAT FREE",
                discount: "100% ORGANIC",
                bg: "from-teal-400 to-green-400",
                image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop"
              },
            ].map((promo, idx) => (
              <Card key={idx} className={`bg-gradient-to-br ${promo.bg} overflow-hidden`}>
                <CardBody className="p-6">
                  <div
                    className="h-48 bg-cover bg-center rounded-lg mb-4"
                    style={{ backgroundImage: `url(${promo.image})` }}
                  />
                  <h3 className="font-bold text-white text-sm mb-1">{promo.title}</h3>
                  <p className="text-2xl font-bold text-white mb-2">{promo.subtitle}</p>
                  <Button size="sm" className="bg-white text-gray-800 font-semibold rounded-full">
                    {promo.discount} →
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Popular Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Weekly Popular Products</h2>
            <Button as={Link} href="/shop" variant="light" className="text-[#00B207] dark:text-[#00B207]">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Get 5% Cash Back */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-12">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop"
                  alt="Living room"
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

      {/* Today Best Deals For You (Second) */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-between gap-4 flex-col lg:flex-row lg:items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Today Best Deals For You!</h2>
            <div className="flex gap-2">
              {["All", "Vegetable", "Fish", "Meat", "Water", "Snacks"].map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={cat === "All" ? "solid" : "light"}
                  className={cat === "All" ? "bg-[#00B207] text-white" : "dark:text-gray-300"}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Get 5% Cash Back (Second) */}
      <section className="py-16 bg-amber-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get 5% Cash Back</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">On $200</p>
              <div className="flex justify-center gap-4">
                <img
                  src="/shopping_cashback_banner_1763982143951.png"
                  alt="Shopping with cashback rewards"
                  className="w-full max-w-md rounded-xl"
                />
              </div>
              <Button className="bg-[#00B207] text-white rounded-full px-8 mt-6" size="lg">
                Learn More →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Selling Products</h2>
            <Button as={Link} href="/shop" variant="light" className="text-[#00B207]">
              View All →
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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

      {/* Best Selling Items */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-8">Best Selling Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Chanise Cabbage", price: 4, image: "https://images.unsplash.com/photo-1598030510365-bdaf2c8bd8fd?w=400&h=400&fit=crop", rating: 4 },
              { name: "Red Capsicum", price: 4, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop", rating: 4 },
              { name: "Corn", price: 4, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop", rating: 4 },
              { name: "Red Chili", price: 3, image: "https://images.unsplash.com/photo-1583406432959-4ca9c933b263?w=400&h=400&fit=crop", rating: 4 },
            ].map((item, idx) => (
              <Card key={idx} className="p-4">
                <CardBody className="p-0">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <p className="text-lg font-bold text-[#00B207]">${item.price}</p>
                  <div className="flex text-yellow-400 text-sm">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Services To Help You Shop</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❓",
                title: "Frequently Asked Questions",
                desc: "Updates on safe Shopping in our Stores",
                color: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-800/30",
              },
              {
                icon: "📦",
                title: "Online Payment Process",
                desc: "Updates on safe Shopping in our Stores",
                color: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-800/30",
              },
              {
                icon: "🚚",
                title: "Home Delivery Options",
                desc: "Updates on safe Shopping in our Stores",
                color: "bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/30 dark:to-orange-800/30",
              },
            ].map((service, idx) => (
              <Card key={idx} className={service.color}>
                <CardBody className="text-center p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.desc}</p>
                  <Button variant="light" className="text-[#00B207]">
                    Learn More →
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
