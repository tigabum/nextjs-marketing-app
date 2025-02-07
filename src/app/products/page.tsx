import { generateSEO } from "@/utils/seo";
import { Product } from "@/types";
import ProductGrid from "@/components/ProductGrid";
import ProductFilterWrapper from "@/components/ProductFilterWrapper";

export const metadata = generateSEO({
  title: "Our Products | Marketing App",
  description: "Browse our extensive collection of premium products.",
  path: "/products",
});

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  try {
    const products = await getProducts();

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64">
            <ProductFilterWrapper />
          </aside>
          <ProductGrid products={products} />
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p>Sorry, there was a problem loading the products.</p>
        </div>
      </main>
    );
  }
}
