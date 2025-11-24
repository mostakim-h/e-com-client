/**
 * ProductCard Component
 * Displays a product in a card format with image, name, price, rating, and actions
 */

"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import NextLink from "next/link";
import { Product } from "@/types";
import { StarIcon, CartIcon, HeartIcon } from "./icons";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard displays a single product with add to cart and wishlist functionality
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isAdding, setIsAdding] = React.useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const discount = product.originalPrice
    ? Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    )
    : 0;

  return (
    <Card
      as={NextLink}
      className="group cursor-pointer bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700"
      href={`/product/${product.id}`}
      isPressable
    >
      <CardBody className="overflow-visible p-0">
        <div className="relative">
          <Image
            alt={product.name}
            className="w-full object-cover h-[240px]"
            radius="lg"
            shadow="sm"
            src={product.images[0]}
            width="100%"
          />

          {/* Wishlist Button */}
          <Button
            isIconOnly
            className="absolute top-2 right-2 z-10 bg-white dark:bg-gray-800"
            size="sm"
            variant={inWishlist ? "solid" : "flat"}
            color={inWishlist ? "danger" : "default"}
            onClick={handleToggleWishlist}
          >
            <HeartIcon filled={inWishlist} className={inWishlist ? 'text-red-500' : ''} size={18} />
          </Button>

          {discount > 0 && (
            <Chip
              className="absolute top-2 left-2 z-10"
              color="danger"
              size="sm"
              variant="solid"
            >
              -{discount}%
            </Chip>
          )}
          {!product.inStock && (
            <Chip
              className="absolute bottom-2 left-2"
              color="warning"
              size="sm"
              variant="solid"
            >
              Out of Stock
            </Chip>
          )}
          {product.tags?.includes("new") && !discount && (
            <Chip
              className="absolute top-2 left-2"
              color="success"
              size="sm"
              variant="solid"
            >
              New
            </Chip>
          )}
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start gap-2 pt-2">
        <div className="w-full">
          <h4 className="font-semibold text-large line-clamp-1 text-gray-900 dark:text-white">
            {product.name}
          </h4>
          {product.brand && (
            <p className="text-tiny text-default-400 dark:text-gray-500">{product.brand}</p>
          )}
          <p className="text-small text-default-500 dark:text-gray-400 line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-warning" size={16} />
          <span className="text-small font-semibold dark:text-white">{product.rating}</span>
          <span className="text-small text-default-500 dark:text-gray-400">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <span className="text-large font-bold text-primary dark:text-[#00B207]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-small text-default-500 dark:text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            color="primary"
            isDisabled={!product.inStock || isAdding}
            isLoading={isAdding}
            size="sm"
            startContent={!isAdding && <CartIcon size={16} />}
            variant="flat"
            onClick={handleAddToCart}
          >
            {isAdding ? "Added!" : "Add"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

