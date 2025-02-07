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
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Marketing App</h1>
    </main>
  );
}
