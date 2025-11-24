import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/**
 * Product category types
 */
export type ProductCategory =
  | "electronics"
  | "clothing"
  | "accessories"
  | "home"
  | "sports"
  | "books";

/**
 * Product interface representing an individual product
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // For showing discounts
  images: string[];
  category: ProductCategory;
  brand?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  features?: string[];
}

/**
 * Cart item interface
 */
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

/**
 * User review interface
 */
export interface Review {
  id: string;
  productId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

/**
 * Shipping address interface
 */
export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * Order interface
 */
export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: ShippingAddress;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

