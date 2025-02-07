import { render, screen } from "@testing-library/react";
import Loading from "@/app/products/[id]/loading";

describe("LoadingPage", () => {
  it("renders loading spinner", () => {
    render(<Loading />);

    // Check for loading text
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Check for loading spinner element
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    render(<Loading />);

    const loadingContainer = screen.getByTestId("loading-container");
    expect(loadingContainer).toHaveClass(
      "flex",
      "justify-center",
      "items-center"
    );
  });
});
