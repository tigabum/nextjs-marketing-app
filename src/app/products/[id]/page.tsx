import { generateSEO } from "@/utils/seo";
import { Product } from "@/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | null> {
  const products = await import("@/data/products.json");
  return products.products.find((p) => p.id === parseInt(id)) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return generateSEO({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      path: `/products/${resolvedParams.id}`,
    });
  }

  return generateSEO({
    title: `${product.name} | Marketing App`,
    description: product.description,
    path: `/products/${resolvedParams.id}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <div className="text-sm text-gray-500">
            Category: {product.category}
          </div>
        </div>
      </div>
    </main>
  );
}
