import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Tab0X() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Tab3X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab30" className="text-gray-700 hover:text-blue-600">
                Tab30
              </Link>
              <Link to="/Tab31" className="text-gray-700 hover:text-blue-600">
                Tab31
              </Link>
              <Link to="/Tab32" className="text-gray-700 hover:text-blue-600">
                Tab32
              </Link>
              <Link to="/Tab33" className="text-gray-700 hover:text-blue-600">
                Tab33
              </Link>
              <Link to="/Tab34" className="text-gray-700 hover:text-blue-600">
                Tab34
              </Link>
              <Link to="/Tab35" className="text-gray-700 hover:text-blue-600">
                Tab35
              </Link>
              <Link to="/Tab36" className="text-gray-700 hover:text-blue-600">
                Tab36
              </Link>
              <Link to="/Tab37" className="text-gray-700 hover:text-blue-600">
                Tab37
              </Link>
              <Link to="/Tab38" className="text-gray-700 hover:text-blue-600">
                Tab38
              </Link>
              <Link to="/Tab39" className="text-gray-700 hover:text-blue-600">
                Tab39
              </Link>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/Tab30"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab30
            </Link>
            <Link
              to="/Tab31"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab31
            </Link>
            <Link
              to="/Tab32"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab32
            </Link>
            <Link
              to="/Tab33"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab33
            </Link>
            <Link
              to="/Tab34"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab34
            </Link>
            <Link
              to="/Tab35"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab35
            </Link>
            <Link
              to="/Tab36"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab36
            </Link>
            <Link
              to="/Tab37"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab37
            </Link>
            <Link
              to="/Tab38"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab38
            </Link>
            <Link
              to="/Tab39"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab39
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
