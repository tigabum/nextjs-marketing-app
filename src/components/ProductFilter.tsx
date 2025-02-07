"use client";

import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    category: string;
    minPrice: number | "";
    maxPrice: number | "";
  }) => void;
}

export default function ProductFilter({ onFilterChange }: FilterProps) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleChange = (
    field: "category" | "minPrice" | "maxPrice",
    value: string
  ) => {
    let newValue: string | number = value;
    if (field === "minPrice" || field === "maxPrice") {
      newValue = value === "" ? "" : Number(value);
    }

    if (field === "category") setCategory(value);
    if (field === "minPrice") setMinPrice(newValue as number | "");
    if (field === "maxPrice") setMaxPrice(newValue as number | "");

    onFilterChange({
      category,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            className="w-full border rounded-md p-2"
            value={category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded-md p-2"
              value={minPrice}
              onChange={(e) => handleChange("minPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded-md p-2"
              value={maxPrice}
              onChange={(e) => handleChange("maxPrice", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
