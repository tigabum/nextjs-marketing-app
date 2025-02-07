"use client";

export default function ProductFilter() {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select className="w-full border rounded-md p-2">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded-md p-2"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
