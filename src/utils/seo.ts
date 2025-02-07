import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function generateSEO({ title, description, path }: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "Marketing App",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  };
}
