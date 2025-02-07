"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const isNumber = !isNaN(Number(path));

          // Skip numeric paths in the breadcrumb text
          const label = isNumber
            ? "Product Details"
            : path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-900">{label}</span>
              ) : (
                <Link href={href} className="text-gray-500 hover:text-gray-700">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
