import { render, screen } from "@testing-library/react";
import ProductGrid from "@/components/ProductGrid";

describe("ProductGrid", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 299.99,
      category: "Electronics",
      image: "/headphones.jpg",
    },
  ];

  it("renders products correctly", () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getByText("Premium Wireless Headphones")).toBeInTheDocument();
    expect(
      screen.getByText(
        "High-quality wireless headphones with noise cancellation"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("$299.99")).toBeInTheDocument();
  });

  it("shows no products message when empty", () => {
    render(<ProductGrid products={[]} />);
    expect(screen.getByText("No products found")).toBeInTheDocument();
  });
});
