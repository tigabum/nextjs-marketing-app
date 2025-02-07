import Link from "next/link";

export default function NotFound() {
  return (
    <div
      data-testid="not-found-container"
      className="flex justify-center items-center min-h-[400px]"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
