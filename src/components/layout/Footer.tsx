export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Marketing App - Your one-stop shop for premium products.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: info@marketingapp.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Marketing App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
