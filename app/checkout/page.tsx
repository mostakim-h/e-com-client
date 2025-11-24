/**
 * Checkout Page
 * Handles order checkout with shipping and payment information
 */

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { RadioGroup, Radio } from "@heroui/radio";
import { Checkbox } from "@heroui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { CheckIcon, TruckIcon, ShieldIcon } from "@/components/icons";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [saveInfo, setSaveInfo] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push("/cart");
    }
  }, [cart.length, router]);

  // Show loading state while redirecting
  if (cart.length === 0) {
    return null;
  }


  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 2000);
  };

  const isShippingValid = () => {
    return (
      shippingInfo.fullName &&
      shippingInfo.email &&
      shippingInfo.phone &&
      shippingInfo.address &&
      shippingInfo.city &&
      shippingInfo.state &&
      shippingInfo.zipCode
    );
  };

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col gap-8 py-8">
      <h1 className="text-4xl font-bold">Checkout</h1>

      {/* Progress Steps */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1
              ? "bg-primary text-white"
              : "bg-default-200 text-default-500"
              }`}
          >
            {step > 1 ? <CheckIcon size={20} /> : "1"}
          </div>
          <span className={step >= 1 ? "font-semibold" : "text-default-500"}>
            Shipping
          </span>
        </div>

        <Divider className="flex-1" />

        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2
              ? "bg-primary text-white"
              : "bg-default-200 text-default-500"
              }`}
          >
            2
          </div>
          <span className={step >= 2 ? "font-semibold" : "text-default-500"}>
            Payment
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Forms */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Shipping Information */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TruckIcon size={24} />
                Shipping Information
              </h2>
            </CardHeader>
            <CardBody>
              <form className="flex flex-col gap-4" onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    isRequired
                    label="Full Name"
                    placeholder="John Doe"
                    value={shippingInfo.fullName}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, fullName: e.target.value })
                    }
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="john@example.com"
                    type="email"
                    value={shippingInfo.email}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, email: e.target.value })
                    }
                  />
                </div>

                <Input
                  isRequired
                  label="Phone"
                  placeholder="+1 (555) 123-4567"
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, phone: e.target.value })
                  }
                />

                <Input
                  isRequired
                  label="Address"
                  placeholder="123 Main St"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    isRequired
                    label="City"
                    placeholder="New York"
                    value={shippingInfo.city}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                  <Input
                    isRequired
                    label="State"
                    placeholder="NY"
                    value={shippingInfo.state}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, state: e.target.value })
                    }
                  />
                  <Input
                    isRequired
                    label="ZIP Code"
                    placeholder="10001"
                    value={shippingInfo.zipCode}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, zipCode: e.target.value })
                    }
                  />
                </div>

                <Checkbox isSelected={saveInfo} onValueChange={setSaveInfo}>
                  Save this information for next time
                </Checkbox>

                {step === 1 && (
                  <Button
                    color="primary"
                    isDisabled={!isShippingValid()}
                    size="lg"
                    type="submit"
                  >
                    Continue to Payment
                  </Button>
                )}
              </form>
            </CardBody>
          </Card>

          {/* Payment Information */}
          {step >= 2 && (
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <ShieldIcon size={24} />
                  Payment Information
                </h2>
              </CardHeader>
              <CardBody>
                <form className="flex flex-col gap-4" onSubmit={handlePaymentSubmit}>
                  <RadioGroup
                    label="Payment Method"
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <Radio value="card">Credit/Debit Card</Radio>
                    <Radio value="paypal">PayPal</Radio>
                    <Radio value="apple">Apple Pay</Radio>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <>
                      <Input
                        isRequired
                        label="Card Number"
                        placeholder="1234 5678 9012 3456"
                        type="text"
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          isRequired
                          label="Expiry Date"
                          placeholder="MM/YY"
                          type="text"
                        />
                        <Input
                          isRequired
                          label="CVV"
                          placeholder="123"
                          type="text"
                        />
                      </div>

                      <Input
                        isRequired
                        label="Cardholder Name"
                        placeholder="John Doe"
                        type="text"
                      />
                    </>
                  )}

                  <Divider />

                  <div className="flex gap-3">
                    <Button
                      className="flex-1"
                      variant="bordered"
                      onPress={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      className="flex-1"
                      color="primary"
                      isLoading={isProcessing}
                      size="lg"
                      type="submit"
                      variant="shadow"
                    >
                      {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <h2 className="text-2xl font-bold">Order Summary</h2>
            </CardHeader>
            <CardBody className="gap-4">
              <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative">
                      <img
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                        src={item.product.images[0]}
                      />
                      <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-r-full flex items-center justify-center text-white text-xs font-bold">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-small line-clamp-2">
                        {item.product.name}
                      </p>
                      <p className="text-small text-default-600">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Divider />

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-small">
                  <span className="text-default-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-small">
                  <span className="text-default-600">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-small">
                  <span className="text-default-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Divider />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

