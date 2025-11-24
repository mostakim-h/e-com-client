/**
* Order Confirmation Page
* Displays successful order confirmation
*/

"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { CheckIcon } from "@/components/icons";

export default function OrderConfirmationPage() {
  const orderNumber = `ORD-${Date.now()}`;
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="flex flex-col items-center justify-center py-16 gap-8">
      <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center">
        <CheckIcon className="text-success" size={48} />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-xl text-default-600">
          Thank you for your purchase
        </p>
      </div>

      <Card className="max-w-2xl w-full">
        <CardBody className="gap-6 py-8">
          <div className="flex flex-col gap-2">
            <p className="text-small text-default-600">Order Number</p>
            <p className="text-2xl font-bold">{orderNumber}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-small text-default-600">Estimated Delivery</p>
            <p className="text-lg font-semibold">{estimatedDelivery}</p>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="font-bold mb-2">What happens next?</h3>
            <ul className="space-y-2 text-default-700">
              <li className="flex items-start gap-2">
                <CheckIcon className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>You'll receive an email confirmation shortly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>We'll send you tracking information once your order ships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>Your order will be delivered within 5-7 business days</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              as={NextLink}
              className="flex-1"
              color="primary"
              href="/shop"
              size="lg"
              variant="shadow"
            >
              Continue Shopping
            </Button>
            <Button
              as={NextLink}
              className="flex-1"
              href="/"
              size="lg"
              variant="bordered"
            >
              Back to Home
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="text-center">
        <p className="text-default-600">
          Need help?{" "}
          <Link as={NextLink} href="/contact">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}

