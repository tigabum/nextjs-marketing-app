import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders hero section correctly", () => {
    render(<HomePage />);

    // Check for main heading with exact text
    expect(
      screen.getByRole("heading", {
        name: "Welcome to Our Marketing App",
      })
    ).toBeInTheDocument();

    // Check for description text if it exists
    expect(screen.getByText(/discover our collection/i)).toBeInTheDocument();
  });

  it("renders call-to-action button", () => {
    render(<HomePage />);

    const ctaButton = screen.getByRole("link", {
      name: /view products/i,
    });

    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "/products");
  });
});
