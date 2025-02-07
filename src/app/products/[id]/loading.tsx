export default function Loading() {
  return (
    <div
      data-testid="loading-container"
      className="flex justify-center items-center min-h-[400px]"
    >
      <div className="text-center">
        <div
          data-testid="loading-spinner"
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"
        ></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
