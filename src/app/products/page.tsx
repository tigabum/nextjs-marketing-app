import { Metadata } from "next";
import { Product } from "@/types";
import ProductGrid from "@/components/ProductGrid";
import ProductFilter from "@/components/ProductFilter";

export const metadata: Metadata = {
  title: "Products | Marketing App",
  description: "Browse our collection of premium products",
  openGraph: {
    title: "Products | Marketing App",
    description: "Browse our collection of premium products",
    type: "website",
  },
};

async function getProducts(): Promise<Product[]> {
  // In a real app, this would be an API call
  const products = await import("@/data/products.json");
  return products.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  const handleFilterChange = (filters: {
    category: string;
    minPrice: number | "";
    maxPrice: number | "";
  }) => {
    // Filter implementation will come in next feature
    console.log("Filters:", filters);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <ProductFilter onFilterChange={handleFilterChange} />
        </aside>
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
