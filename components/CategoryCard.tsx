/**
 * Category Card Component
 * Displays a category with image and name
 */

"use client";

import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import NextLink from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  bgColor?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  bgColor = "bg-gradient-to-br from-orange-100 to-yellow-100",
}) => {
  return (
    <Card
      as={NextLink}
      href={link}
      isPressable
      className={`${bgColor} overflow-hidden hover:scale-105 transition-transform border border-transparent dark:border-gray-700`}
    >
      <CardBody className="p-4 flex flex-col items-center justify-center min-h-[180px]">
        <div className="relative w-full h-32 mb-3">
          <Image
            alt={title}
            className="object-contain"
            src={image}
            width="100%"
            height="100%"
          />
        </div>
        <h3 className="text-base font-semibold text-center text-gray-800 dark:text-white">
          {title}
        </h3>
      </CardBody>
    </Card>
  );
};
