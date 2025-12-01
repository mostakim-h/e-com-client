/**
 * About Page - Beautiful & Modern Design
 * Information about the company
 */

"use client";

import { TruckIcon, ShieldIcon, HeartFilledIcon, CheckIcon } from "@/components/icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 py-12 bg-white dark:bg-gray-950">
      {/* Hero Section with Gradient */}
      <section className="relative flex flex-col items-center gap-6 text-center py-16 px-4 container mx-auto max-w-7xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B207]/5 via-transparent to-[#00B207]/5 dark:from-[#00B207]/10 dark:to-[#00B207]/10 rounded-3xl" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#00B207]/10 dark:bg-[#00B207]/20 text-[#00B207] rounded-full text-sm font-semibold">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to Shopery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Your trusted online destination for quality products at unbeatable prices.
            We're committed to delivering excellence in every purchase.
          </p>
        </div>
      </section>

      {/* Mission Cards - 3D Hover Effect */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto max-w-7xl px-6">
        <div className="group perspective">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00B207]/10 to-transparent dark:from-[#00B207]/20 rounded-bl-full" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00B207] to-[#00B207]/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <TruckIcon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lightning-fast shipping ensures your orders arrive quickly and safely, right to your doorstep.
              </p>
            </div>
          </div>
        </div>

        <div className="group perspective">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 dark:from-blue-500/10 to-transparent rounded-bl-full" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <ShieldIcon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every product is carefully selected and rigorously quality-checked before reaching you.
              </p>
            </div>
          </div>
        </div>

        <div className="group perspective">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 dark:from-red-500/10 to-transparent rounded-bl-full" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <HeartFilledIcon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your satisfaction is our mission. We're here to support you 24/7 with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Modern Layout */}
      <section className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2020, <span className="font-semibold text-[#00B207]">Shopery</span> began with a simple mission: to make
                quality products accessible to everyone. What started as a small
                online store has grown into a trusted marketplace serving
                thousands of satisfied customers worldwide.
              </p>
              <p>
                We believe that shopping should be easy, enjoyable, and
                rewarding. That's why we've curated a diverse selection of
                products across multiple categories, all backed by our
                commitment to quality and exceptional customer service.
              </p>
              <p>
                Today, we continue to expand our product offerings while
                maintaining the same values that guided us from day one:
                integrity, quality, and customer satisfaction.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#00B207]/10 dark:bg-[#00B207]/20 rounded-full">
                <CheckIcon className="text-[#00B207]" size={20} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Trusted Brand</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                <CheckIcon className="text-blue-600 dark:text-blue-400" size={20} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Quality Products</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/30 rounded-full">
                <CheckIcon className="text-purple-600 dark:text-purple-400" size={20} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counters Look */}
      <section className="relative py-16 container mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B207] to-[#00B207]/90 rounded-3xl" />
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="flex flex-col items-center text-center gap-2">
            <h3 className="text-5xl md:text-6xl font-bold text-white">10K+</h3>
            <p className="text-white/90 font-medium">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <h3 className="text-5xl md:text-6xl font-bold text-white">500+</h3>
            <p className="text-white/90 font-medium">Products</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <h3 className="text-5xl md:text-6xl font-bold text-white">50+</h3>
            <p className="text-white/90 font-medium">Countries</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <h3 className="text-5xl md:text-6xl font-bold text-white">4.8★</h3>
            <p className="text-white/90 font-medium">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Values Section - Modern Cards */}
      <section className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-6 right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">💎</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Transparency</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe in honest pricing and clear communication with our
              customers. No hidden fees, no surprises.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-6 right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We're committed to eco-friendly practices and sustainable
              sourcing to protect our planet.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-6 right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We continuously improve our platform to enhance your shopping
              experience with cutting-edge technology.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="absolute top-6 right-6 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Community</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We support local businesses and give back to our community
              through various initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
