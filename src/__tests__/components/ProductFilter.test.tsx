import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilter from "@/components/ProductFilter";

describe("ProductFilter", () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it("renders filter inputs correctly", () => {
    render(<ProductFilter onFilterChange={mockOnFilterChange} />);

    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
  });

  it("calls onFilterChange when inputs change", () => {
    render(<ProductFilter onFilterChange={mockOnFilterChange} />);

    const categoryInput = screen.getByLabelText(/category/i);
    const minPriceInput = screen.getByLabelText(/min price/i);
    const maxPriceInput = screen.getByLabelText(/max price/i);

    fireEvent.change(categoryInput, { target: { value: "Electronics" } });
    fireEvent.change(minPriceInput, { target: { value: "100" } });
    fireEvent.change(maxPriceInput, { target: { value: "500" } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      category: "Electronics",
      minPrice: 100,
      maxPrice: 500,
    });
  });
});
