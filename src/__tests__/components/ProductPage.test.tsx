import { render, screen } from "@testing-library/react";
import ProductPage from "@/app/products/[id]/page";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  notFound: jest.fn(() => null),
}));

// Mock fetch globally
global.fetch = jest.fn();

describe("ProductPage", () => {
  beforeEach(() => {
    // Mock successful API response with actual product data
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        id: 1,
        name: "Premium Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 299.99,
        category: "Electronics",
        image: "/headphones.jpg",
      }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders product details from API", async () => {
    const params = Promise.resolve({ id: "1" });
    render(await ProductPage({ params }));

    expect(screen.getByText("Premium Wireless Headphones")).toBeInTheDocument();
    expect(
      screen.getByText(
        "High-quality wireless headphones with noise cancellation"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("$299.99")).toBeInTheDocument();
  });

  it("calls notFound for invalid product", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const params = Promise.resolve({ id: "999" });
    await ProductPage({ params });

    const { notFound } = require("next/navigation");
    expect(notFound).toHaveBeenCalled();
  });
});
