"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";
import { Product } from "@/types";

export default function ProductFilterWrapper() {
  const handleFilterChange = (filters: {
    category: string;
    minPrice: number | "";
    maxPrice: number | "";
  }) => {
    console.log("Filters:", filters);
  };

  return <ProductFilter onFilterChange={handleFilterChange} />;
}
