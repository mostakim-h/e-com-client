/**
 * Hero Carousel Component
 * Full-width hero section with Swiper.js carousel
 */

"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  bgGradient: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "Summer Collection 2024",
    subtitle: "New Arrivals",
    description: "Discover the latest trends in fashion and electronics",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    bgGradient: "from-purple-600/90 to-blue-600/90",
  },
  {
    id: "2",
    title: "Tech Week Special",
    subtitle: "Up to 40% Off",
    description: "Premium electronics at unbeatable prices",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&h=600&fit=crop",
    buttonText: "View Deals",
    buttonLink: "/shop?category=electronics",
    bgGradient: "from-blue-600/90 to-cyan-600/90",
  },
  {
    id: "3",
    title: "Fitness & Wellness",
    subtitle: "Get Fit This Season",
    description: "Premium sports equipment and accessories",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=600&fit=crop",
    buttonText: "Explore",
    buttonLink: "/shop?category=sports",
    bgGradient: "from-green-600/90 to-teal-600/90",
  },
  {
    id: "4",
    title: "Home Essentials",
    subtitle: "Transform Your Space",
    description: "Stylish and functional home products",
    image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920&h=600&fit=crop",
    buttonText: "Shop Home",
    buttonLink: "/shop?category=home",
    bgGradient: "from-orange-600/90 to-red-600/90",
  },
];

export const HeroCarousel: React.FC = () => {
  return (
    <div className="w-full -mx-6 mb-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="h-[500px] md:h-[600px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
              <div className="relative h-full flex items-center justify-center px-6">
                <div className="max-w-4xl text-center text-white">
                  <p className="text-lg md:text-xl font-semibold mb-2 opacity-90">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-8 opacity-90">
                    {slide.description}
                  </p>
                  <Button
                    as={Link}
                    href={slide.buttonLink}
                    size="lg"
                    color="primary"
                    variant="shadow"
                    className="font-semibold text-lg px-8 py-6"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
