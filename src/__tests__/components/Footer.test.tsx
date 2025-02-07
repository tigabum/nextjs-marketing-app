import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders footer sections correctly", () => {
    render(<Footer />);

    // Check section headings
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // Check content
    expect(
      screen.getByText(/Marketing App - Your one-stop shop/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/info@marketingapp.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/)).toBeInTheDocument();
  });

  it("renders current year in copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();
  });

  it("has correct navigation links", () => {
    render(<Footer />);

    const productsLink = screen.getByRole("link", { name: /products/i });
    expect(productsLink).toHaveAttribute("href", "/products");
  });
});
