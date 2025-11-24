/**
 * Product Details Page
 * Displays detailed information about a specific product
 */

"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Select, SelectItem } from "@heroui/select";
import { Radio, RadioGroup } from "@heroui/radio";
import { Avatar } from "@heroui/avatar";
import { Progress } from "@heroui/progress";
import { getProductById, getProductReviews } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { CartIcon, CheckIcon, ReturnIcon, ShieldIcon, StarIcon, TruckIcon } from "@/components/icons";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const product = getProductById(productId);
  const reviews = getProductReviews(productId);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Product not found</h1>
            <Button color="primary" onClick={() => router.push("/shop")}>
              Back to Shop
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(
      product,
      quantity,
      product.colors?.length ? selectedColor : undefined,
      product.sizes?.length ? selectedSize : undefined
    );
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const discount = product.originalPrice
    ? Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    )
    : 0;

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((r) => Math.floor(r.rating) === rating).length,
    percentage: (reviews.filter((r) => Math.floor(r.rating) === rating).length / reviews.length) * 100 || 0,
  }));

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          {/* Product Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="flex flex-col gap-4">
              <Card>
                <CardBody className="p-0">
                  <Image
                    alt={product.name}
                    className="w-full  object-cover"
                    src={product.images[selectedImage]}
                  />
                </CardBody>
              </Card>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer ${selectedImage === index ? "ring-2 ring-primary" : ""
                        }`}
                      isPressable
                      onClick={() => setSelectedImage(index)}
                    >
                      <CardBody className="p-0">
                        <Image
                          alt={`${product.name} ${index + 1}`}
                          className="w-24 h-24 object-cover"
                          src={image}
                        />
                      </CardBody>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  {!product.inStock && (
                    <Chip color="warning" variant="flat">
                      Out of Stock
                    </Chip>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={i < Math.floor(product.rating) ? "text-warning" : "text-default-300"}
                        size={20}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-default-500">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-default-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Chip color="danger" variant="flat">
                        Save {discount}%
                      </Chip>
                    </>
                  )}
                </div>
              </div>

              <Divider />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-default-600">{product.description}</p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon className="text-success mt-1 flex-shrink-0" size={18} />
                        <span className="text-default-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Color</h3>
                  <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                    <div className="flex gap-2 flex-wrap">
                      {product.colors.map((color) => (
                        <Radio key={color} value={color}>
                          {color}
                        </Radio>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Size</h3>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map((size) => (
                        <Radio key={size} value={size}>
                          {size}
                        </Radio>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>

                <Select
                  className="max-w-[120px]"
                  selectedKeys={new Set([quantity.toString()])}
                  onSelectionChange={(keys) => {
                    const value = Array.from(keys)[0]; // string
                    setQuantity(Number(value));
                  }}
                >
                  {Array.from({ length: Math.min(10, product.stockCount) }, (_, i) => {
                    const v = (i + 1).toString();
                    return (
                      <SelectItem key={v}>
                        {v}
                      </SelectItem>
                    );
                  })}
                </Select>

                <p className="text-small text-default-500 mt-1">
                  {product.stockCount} items in stock
                </p>
              </div>


              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  className="flex-1"
                  color="primary"
                  isDisabled={!product.inStock || isAdding}
                  isLoading={isAdding}
                  size="lg"
                  startContent={!isAdding && <CartIcon size={20} />}
                  onPress={handleAddToCart}
                >
                  {isAdding ? "Added to Cart!" : "Add to Cart"}
                </Button>
                <Button
                  className="flex-1"
                  color="secondary"
                  isDisabled={!product.inStock}
                  size="lg"
                  variant="flat"
                >
                  Buy Now
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <TruckIcon className="text-primary" size={24} />
                  <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-small text-default-500">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ReturnIcon className="text-warning" size={24} />
                  <div>
                    <p className="font-semibold">30-Day Returns</p>
                    <p className="text-small text-default-500">Easy return policy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldIcon className="text-success" size={24} />
                  <div>
                    <p className="font-semibold">Secure Payment</p>
                    <p className="text-small text-default-500">100% protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Divider className="my-8" />

          {/* Reviews Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Rating Summary */}
              <Card>
                <CardBody className="flex flex-col items-center text-center gap-4 py-8">
                  <div className="text-5xl font-bold">{product.rating}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={i < Math.floor(product.rating) ? "text-warning" : "text-default-300"}
                        size={24}
                      />
                    ))}
                  </div>
                  <p className="text-default-600">Based on {product.reviewCount} reviews</p>

                  <Divider className="my-2" />

                  <div className="w-full space-y-2">
                    {ratingDistribution.map(({ rating, count, percentage }) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-small w-8">{rating}★</span>
                        <Progress
                          className="flex-1"
                          value={percentage}
                          color="warning"
                          size="sm"
                        />
                        <span className="text-small text-default-500 w-8">{count}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              {/* Reviews List */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Card key={review.id}>
                      <CardBody className="gap-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar name={review.userName} size="sm" />
                            <div>
                              <p className="font-semibold">{review.userName}</p>
                              <p className="text-small text-default-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={i < Math.floor(review.rating) ? "text-warning" : "text-default-300"}
                                size={16}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-default-700">{review.comment}</p>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="flat">
                            Helpful ({review.helpful})
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardBody className="text-center py-8">
                      <p className="text-default-500">No reviews yet. Be the first to review!</p>
                    </CardBody>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}