import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header", () => {
  it("renders navigation links correctly", () => {
    render(<Header />);

    expect(screen.getByText("Marketing App")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("has correct navigation links", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Marketing App" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Products" })).toHaveAttribute(
      "href",
      "/products"
    );
  });
});
