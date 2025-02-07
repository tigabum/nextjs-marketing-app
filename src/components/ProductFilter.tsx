"use client";

import { useState } from "react";

interface Filters {
  category: string;
  minPrice: number | "";
  maxPrice: number | "";
}

export default function ProductFilter({
  onFilterChange,
}: {
  onFilterChange: (filters: Filters) => void;
}) {
  const [filters, setFilters] = useState<Filters>({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (field: string, value: string) => {
    const newFilters: Filters = {
      ...filters,
      [field]: field.includes("Price")
        ? value === ""
          ? ""
          : Number(value)
        : value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full border rounded-md p-2"
            value={filters.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium mb-2">
            Min Price
          </label>
          <input
            id="minPrice"
            type="number"
            className="w-full border rounded-md p-2"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => handleChange("minPrice", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium mb-2">
            Max Price
          </label>
          <input
            id="maxPrice"
            type="number"
            className="w-full border rounded-md p-2"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
