import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Marketing App
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
