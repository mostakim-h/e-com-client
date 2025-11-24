/**
 * Wishlist/Favorites Page
 * Displays all products added to the user's wishlist
 */

"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import NextLink from "next/link";
import { HeartIcon, ShoppingCart, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { StarIcon, CartIcon } from "@/components/icons";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addingToCart, setAddingToCart] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    const product = wishlist.find((p) => p.id === productId);
    if (product) {
      setAddingToCart([...addingToCart, productId]);
      addToCart(product, 1);
      setTimeout(() => {
        setAddingToCart(addingToCart.filter((id) => id !== productId));
      }, 1000);
    }
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach((product) => {
      addToCart(product, 1);
    });
    clearWishlist();
  };

  if (wishlist.length === 0) {
    return (
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
              <HeartIcon size={64} className="text-red-300" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Looks like you haven't added any products to your wishlist yet. Start exploring and add items you love!
            </p>
            <Button
              as={NextLink}
              href="/shop"
              size="lg"
              color="primary"
              className="font-semibold px-8"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
              <p className="text-gray-600">
                {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved for later
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="md"
                variant="bordered"
                color="danger"
                startContent={<Trash2Icon size={18} />}
                onPress={clearWishlist}
              >
                Clear All
              </Button>
              <Button
                size="md"
                color="primary"
                startContent={<ShoppingCart size={18} />}
                onPress={handleMoveAllToCart}
              >
                Move All to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Wishlist Grid - Matching ProductCard Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => {
            const isAdding = addingToCart.includes(product.id);
            const discount = product.originalPrice
              ? Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )
              : 0;

            return (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
                isPressable
              >
                <CardBody className="overflow-visible p-0">
                  <div className="relative">
                    <NextLink href={`/product/${product.id}`}>
                      <Image
                        alt={product.name}
                        className="w-full object-cover h-[240px]"
                        radius="lg"
                        shadow="sm"
                        src={product.images[0]}
                        width="100%"
                      />
                    </NextLink>

                    {/* Remove from Wishlist Button */}
                    <Button
                      isIconOnly
                      className="absolute top-2 right-2 z-10 bg-white/90 dark:bg-gray-700/90 hover:bg-red-50 dark:hover:bg-red-900/50"
                      size="sm"
                      variant="flat"
                      color="danger"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromWishlist(product.id);
                      }}
                    >
                      <Trash2Icon size={16} />
                    </Button>

                    {/* Badges */}
                    {discount > 0 && (
                      <Chip
                        className="absolute top-2 left-2"
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
                    <NextLink href={`/product/${product.id}`}>
                      <h4 className="font-semibold text-large line-clamp-1 hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                    </NextLink>
                    {product.brand && (
                      <p className="text-tiny text-default-400">{product.brand}</p>
                    )}
                    <p className="text-small text-default-500 line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <StarIcon className="text-warning" size={16} />
                    <span className="text-small font-semibold">{product.rating}</span>
                    <span className="text-small text-default-500">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-large font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-small text-default-500 line-through">
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                    >
                      {isAdding ? "Added!" : "Add"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex justify-center">
          <Button
            as={NextLink}
            href="/shop"
            size="lg"
            variant="bordered"
            className="font-semibold"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </section>
  );
}