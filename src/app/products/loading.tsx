export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64">
            <div className="border rounded-lg p-4">
              <div className="h-6 w-24 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                <div className="h-10 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </aside>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
