"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
