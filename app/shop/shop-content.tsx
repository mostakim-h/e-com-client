"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Slider } from "@heroui/slider";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { ProductCard } from "@/components/product-card";
import { FilterIcon } from "@/components/icons";
import { getAllProducts, getAllBrands } from "@/data/products";
import { ProductCategory } from "@/types";
import { SlidersHorizontal, X } from "lucide-react";

const categories: { value: ProductCategory; label: string }[] = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "accessories", label: "Accessories" },
    { value: "home", label: "Home" },
    { value: "sports", label: "Sports" },
    { value: "books", label: "Books" },
];

const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest" },
];

export function ShopContent() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const allProducts = getAllProducts();
    const allBrands = getAllBrands();

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
    const [sortBy, setSortBy] = useState("featured");

    const filteredProducts = useMemo(() => {
        let filtered = [...allProducts];

        // Apply search query filter
        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter((product) =>
                selectedCategories.includes(product.category)
            );
        }

        if (selectedBrands.length > 0) {
            filtered = filtered.filter(
                (product) => product.brand && selectedBrands.includes(product.brand)
            );
        }

        filtered = filtered.filter(
            (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        switch (sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case "newest":
                filtered.sort((a, b) =>
                    a.tags?.includes("new") ? -1 : b.tags?.includes("new") ? 1 : 0
                );
                break;
            default:
                filtered.sort((a, b) => {
                    const aScore =
                        (a.tags?.includes("featured") ? 2 : 0) +
                        (a.tags?.includes("bestseller") ? 1 : 0);
                    const bScore =
                        (b.tags?.includes("featured") ? 2 : 0) +
                        (b.tags?.includes("bestseller") ? 1 : 0);
                    return bScore - aScore;
                });
        }

        return filtered;
    }, [allProducts, searchQuery, selectedCategories, selectedBrands, priceRange, sortBy]);

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setPriceRange([0, 500]);
        setSortBy("featured");
    };

    const handleAllCategories = () => {
        setSelectedCategories([]);
    };

    const activeFiltersCount =
        selectedCategories.length +
        selectedBrands.length +
        (priceRange[0] !== 0 || priceRange[1] !== 500 ? 1 : 0);

    // Reusable filter content component
    const FilterContent = () => (
        <>
            <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <Button
                    size="sm"
                    variant={selectedCategories.length === 0 ? "solid" : "flat"}
                    color={selectedCategories.length === 0 ? "primary" : "default"}
                    className="w-full mb-2"
                    onPress={handleAllCategories}
                >
                    All Categories
                </Button>
                <CheckboxGroup
                    value={selectedCategories}
                    onValueChange={setSelectedCategories}
                >
                    {categories.map((category) => (
                        <Checkbox key={category.value} value={category.value}>
                            {category.label}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            </div>

            <Divider />

            <div>
                <h3 className="font-semibold mb-3">Price Range</h3>
                <Slider
                    label="Price"
                    step={10}
                    minValue={0}
                    maxValue={500}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value as number[])}
                    formatOptions={{ style: "currency", currency: "USD" }}
                    className="max-w-md"
                />
                <div className="flex justify-between text-sm text-default-500 mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

            <Divider />

            {allBrands.length > 0 && (
                <>
                    <div>
                        <h3 className="font-semibold mb-3">Brands</h3>
                        <CheckboxGroup
                            value={selectedBrands}
                            onValueChange={setSelectedBrands}
                        >
                            {allBrands.map((brand) => (
                                <Checkbox key={brand} value={brand}>
                                    {brand}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>
                </>
            )}
        </>
    );

    return (
        <div className="container mx-auto max-w-7xl px-6 py-8">
            {/* Mobile Filter Modal */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="full"
                scrollBehavior="inside"
                classNames={{
                    base: "lg:hidden",
                    wrapper: "lg:hidden",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-between items-center border-b">
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal size={20} />
                                    <h2 className="text-xl font-bold">Filters</h2>
                                    {activeFiltersCount > 0 && (
                                        <Chip size="sm" color="primary">
                                            {activeFiltersCount}
                                        </Chip>
                                    )}
                                </div>
                            </ModalHeader>
                            <ModalBody className="gap-6 py-6">
                                <FilterContent />
                            </ModalBody>
                            <ModalFooter className="border-t">
                                <Button
                                    variant="light"
                                    onPress={handleClearFilters}
                                    startContent={<X size={16} />}
                                >
                                    Clear All
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={onClose}
                                    className="flex-1"
                                >
                                    Show {filteredProducts.length} Products
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Desktop Sidebar - Hidden on Mobile */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-4">
                        <Card>
                            <CardHeader className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <FilterIcon size={20} />
                                    <h2 className="text-xl font-bold">Filters</h2>
                                    {activeFiltersCount > 0 && (
                                        <Chip size="sm" color="primary">
                                            {activeFiltersCount}
                                        </Chip>
                                    )}
                                </div>
                                {activeFiltersCount > 0 && (
                                    <Button size="sm" variant="light" onPress={handleClearFilters}>
                                        Clear
                                    </Button>
                                )}
                            </CardHeader>
                            <Divider />
                            <CardBody className="gap-6">
                                <FilterContent />
                            </CardBody>
                        </Card>
                    </div>
                </aside>

                <div className="flex-1">
                    {/* Mobile Filter Button - Fixed at top */}
                    <div className="lg:hidden mb-4 sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-3 -mx-6 px-6 border-b">
                        <Button
                            color="primary"
                            variant="flat"
                            onPress={onOpen}
                            startContent={<SlidersHorizontal size={18} />}
                            className="w-full"
                        >
                            Filters
                            {activeFiltersCount > 0 && (
                                <Chip size="sm" color="primary" variant="solid" className="ml-2">
                                    {activeFiltersCount}
                                </Chip>
                            )}
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-4xl font-bold">Shop</h1>
                                {searchQuery ? (
                                    <p className="text-lg text-default-600 mt-2">
                                        Showing {filteredProducts.length} result
                                        {filteredProducts.length !== 1 ? "s" : ""} for "{searchQuery}"
                                    </p>
                                ) : (
                                    <p className="text-lg text-default-600 mt-2">
                                        Showing {filteredProducts.length} product
                                        {filteredProducts.length !== 1 ? "s" : ""}
                                    </p>
                                )}
                            </div>

                            <Select
                                label="Sort by"
                                className="w-48"
                                selectedKeys={[sortBy]}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                {sortOptions.map((option) => (
                                    <SelectItem key={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>

                        {activeFiltersCount > 0 && (
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-small text-default-600">
                                    Active filters:
                                </span>
                                {selectedCategories.map((cat) => (
                                    <Chip
                                        key={cat}
                                        onClose={() =>
                                            setSelectedCategories((prev) =>
                                                prev.filter((c) => c !== cat)
                                            )
                                        }
                                        variant="flat"
                                    >
                                        {categories.find((c) => c.value === cat)?.label}
                                    </Chip>
                                ))}
                                {selectedBrands.map((brand) => (
                                    <Chip
                                        key={brand}
                                        onClose={() =>
                                            setSelectedBrands((prev) => prev.filter((b) => b !== brand))
                                        }
                                        variant="flat"
                                    >
                                        {brand}
                                    </Chip>
                                ))}
                                {(priceRange[0] !== 0 || priceRange[1] !== 500) && (
                                    <Chip
                                        onClose={() => setPriceRange([0, 500])}
                                        variant="flat"
                                    >
                                        ${priceRange[0]} - ${priceRange[1]}
                                    </Chip>
                                )}
                            </div>
                        )}
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 gap-4">
                            <FilterIcon className="text-default-300" size={64} />
                            <h3 className="text-2xl font-semibold text-default-600">
                                No products found
                            </h3>
                            <p className="text-default-500">
                                Try adjusting your filters to see more products
                            </p>
                            <Button color="primary" variant="flat" onPress={handleClearFilters}>
                                Clear All Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
