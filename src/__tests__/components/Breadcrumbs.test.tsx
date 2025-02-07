import { render, screen } from "@testing-library/react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { usePathname } from "next/navigation";

// Mock the next/navigation hook
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Breadcrumbs", () => {
  it("renders home link", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<Breadcrumbs />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders product path correctly", () => {
    (usePathname as jest.Mock).mockReturnValue("/products");
    render(<Breadcrumbs />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("renders product detail path correctly", () => {
    (usePathname as jest.Mock).mockReturnValue("/products/1");
    render(<Breadcrumbs />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Product Details")).toBeInTheDocument();
  });
});
