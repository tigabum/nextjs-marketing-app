import { Metadata } from "next";
import { Product } from "@/types";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const products = await import("@/data/products.json");
    const product = products.products.find((p) => p.id === parseInt(id));
    return product || null;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Marketing App`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96">
          {/* Image component will be added later */}
          <div className="bg-gray-200 w-full h-full rounded-lg"></div>
        </div>
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
