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
              Tab8X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab80" className="text-gray-700 hover:text-blue-600">
                Tab80
              </Link>
              <Link to="/Tab81" className="text-gray-700 hover:text-blue-600">
                Tab81
              </Link>
              <Link to="/Tab82" className="text-gray-700 hover:text-blue-600">
                Tab82
              </Link>
              <Link to="/Tab83" className="text-gray-700 hover:text-blue-600">
                Tab83
              </Link>
              <Link to="/Tab84" className="text-gray-700 hover:text-blue-600">
                Tab84
              </Link>
              <Link to="/Tab85" className="text-gray-700 hover:text-blue-600">
                Tab85
              </Link>
              <Link to="/Tab86" className="text-gray-700 hover:text-blue-600">
                Tab86
              </Link>
              <Link to="/Tab87" className="text-gray-700 hover:text-blue-600">
                Tab87
              </Link>
              <Link to="/Tab88" className="text-gray-700 hover:text-blue-600">
                Tab88
              </Link>
              <Link to="/Tab89" className="text-gray-700 hover:text-blue-600">
                Tab89
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
              to="/Tab80"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab80
            </Link>
            <Link
              to="/Tab81"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab81
            </Link>
            <Link
              to="/Tab82"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab82
            </Link>
            <Link
              to="/Tab83"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab83
            </Link>
            <Link
              to="/Tab84"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab84
            </Link>
            <Link
              to="/Tab85"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab85
            </Link>
            <Link
              to="/Tab86"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab86
            </Link>
            <Link
              to="/Tab87"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab87
            </Link>
            <Link
              to="/Tab88"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab88
            </Link>
            <Link
              to="/Tab89"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab89
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
