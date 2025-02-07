import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
  it("renders not found message", () => {
    render(<NotFound />);

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it("renders return home link", () => {
    render(<NotFound />);

    const homeLink = screen.getByRole("link", { name: /return home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("has correct styling classes", () => {
    render(<NotFound />);

    const container = screen.getByTestId("not-found-container");
    expect(container).toHaveClass("flex", "justify-center", "items-center");
  });
});
