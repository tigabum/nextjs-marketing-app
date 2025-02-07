import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Marketing App",
  description: "Welcome to our marketing app",
  openGraph: {
    title: "Home | Marketing App",
    description: "Welcome to our marketing app",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Marketing App</h1>
    </main>
  );
}
