import { generateSEO } from "@/utils/seo";

export const metadata = generateSEO({
  title: "Marketing App - Premium Products",
  description:
    "Discover our collection of premium products with the best prices and quality.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Our Marketing App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our collection of premium products
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View Products
        </a>
      </div>
    </main>
  );
}
