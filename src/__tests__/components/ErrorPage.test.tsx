import { render, screen, fireEvent } from "@testing-library/react";
import Error from "@/app/products/[id]/error";

describe("ErrorPage", () => {
  const mockError = { name: "Error", message: "Test error" } as Error;
  const props = {
    error: mockError,
    reset: () => {},
  };

  it("renders error message correctly", () => {
    render(<Error {...props} />);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /try again/i })
    ).toBeInTheDocument();
  });

  it("calls reset function when try again is clicked", () => {
    const mockReset = jest.fn();
    render(<Error error={mockError} reset={mockReset} />);

    const tryAgainButton = screen.getByRole("button", { name: /try again/i });
    fireEvent.click(tryAgainButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
