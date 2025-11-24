/**
 * Shopping Cart Page
 * Displays items in the cart with ability to update quantities and proceed to checkout
 */

"use client";

import {Card, CardBody} from "@heroui/card";
import {Button} from "@heroui/button";
import {Image} from "@heroui/image";
import {Divider} from "@heroui/divider";
import {Input} from "@heroui/input";
import {Link} from "@heroui/link";
import NextLink from "next/link";
import {useCart} from "@/contexts/CartContext";
import {CartIcon} from "@/components/icons";

export default function CartPage() {
  const {cart, removeFromCart, updateQuantity, getCartTotal, clearCart} =
    useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="p-6 rounded-full bg-default-100">
              <CartIcon className="text-default-400" size={64}/>
            </div>
            <h1 className="text-3xl font-bold">Your cart is empty</h1>
            <p className="text-lg text-default-600">
              Add some products to get started!
            </p>
            <Button
              as={NextLink}
              color="primary"
              href="/shop"
              size="lg"
              variant="shadow"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
            <Button color="danger" variant="light" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {cart.map((item, index) => (
                <Card key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${index}`}>
                  <CardBody>
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link as={NextLink} href={`/product/${item.product.id}`}>
                        <Image
                          alt={item.product.name}
                          className="w-32 h-32 object-cover rounded-lg"
                          src={item.product.images[0]}
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col gap-2">
                        <Link
                          as={NextLink}
                          className="font-semibold text-lg hover:text-primary"
                          href={`/product/${item.product.id}`}
                        >
                          {item.product.name}
                        </Link>

                        {item.selectedColor && (
                          <p className="text-small text-default-600">
                            Color: {item.selectedColor}
                          </p>
                        )}

                        {item.selectedSize && (
                          <p className="text-small text-default-600">
                            Size: {item.selectedSize}
                          </p>
                        )}

                        <p className="text-lg font-bold text-primary">
                          ${item.product.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-auto">
                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            -
                          </Button>
                          <Input
                            className="w-16"
                            min={1}
                            size="sm"
                            type="number"
                            value={item.quantity.toString()}
                            onChange={(e) =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, parseInt(e.target.value) || 1)
                              )
                            }
                          />
                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                          <Button
                            color="danger"
                            size="sm"
                            variant="light"
                            onPress={() => removeFromCart(item.product.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="flex flex-col items-end gap-2">
                        <p className="text-xl font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardBody className="gap-4">
                  <h2 className="text-2xl font-bold">Order Summary</h2>

                  <Divider/>

                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-default-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-default-600">Shipping</span>
                      <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-default-600">Tax (8%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    {subtotal < 50 && subtotal > 0 && (
                      <div className="bg-warning/10 p-3 rounded-lg">
                        <p className="text-small text-warning-600">
                          Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                        </p>
                      </div>
                    )}
                  </div>

                  <Divider/>

                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
                  </div>

                  <Button
                    as={NextLink}
                    className="w-full"
                    color="primary"
                    href="/checkout"
                    size="lg"
                    variant="shadow"
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    as={NextLink}
                    className="w-full"
                    href="/shop"
                    variant="light"
                  >
                    Continue Shopping
                  </Button>

                  <Divider/>

                  <div className="flex flex-col gap-2">
                    <p className="text-small font-semibold">We Accept</p>
                    <div className="flex gap-2 flex-wrap">
                      <div className="px-3 py-2 bg-default-100 rounded text-small font-semibold">
                        VISA
                      </div>
                      <div className="px-3 py-2 bg-default-100 rounded text-small font-semibold">
                        Mastercard
                      </div>
                      <div className="px-3 py-2 bg-default-100 rounded text-small font-semibold">
                        PayPal
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}