import { render, screen } from "@testing-library/react";
import ProductsPage from "@/app/products/page";

// Mock fetch globally
global.fetch = jest.fn();

describe("ProductsPage", () => {
  beforeEach(() => {
    // Mock successful API response
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        products: [
          {
            id: 1,
            name: "Test Product",
            description: "Test Description",
            price: 99.99,
            category: "Electronics",
            image: "/test-image.jpg",
          },
        ],
      }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders products from API", async () => {
    render(await ProductsPage());

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/products",
      expect.any(Object)
    );
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("handles API error", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    render(await ProductsPage());

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("renders products page correctly", async () => {
    render(await ProductsPage());

    // Check for main elements
    expect(screen.getByText("Our Products")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  it("renders filter sidebar", async () => {
    render(await ProductsPage());

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
  });
});
