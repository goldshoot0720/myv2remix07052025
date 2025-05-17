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
              Tab9X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab90" className="text-gray-700 hover:text-blue-600">
                Tab90
              </Link>
              <Link to="/Tab91" className="text-gray-700 hover:text-blue-600">
                Tab91
              </Link>
              <Link to="/Tab92" className="text-gray-700 hover:text-blue-600">
                Tab92
              </Link>
              <Link to="/Tab93" className="text-gray-700 hover:text-blue-600">
                Tab93
              </Link>
              <Link to="/Tab94" className="text-gray-700 hover:text-blue-600">
                Tab94
              </Link>
              <Link to="/Tab95" className="text-gray-700 hover:text-blue-600">
                Tab95
              </Link>
              <Link to="/Tab96" className="text-gray-700 hover:text-blue-600">
                Tab96
              </Link>
              <Link to="/Tab97" className="text-gray-700 hover:text-blue-600">
                Tab97
              </Link>
              <Link to="/Tab98" className="text-gray-700 hover:text-blue-600">
                Tab98
              </Link>
              <Link to="/Tab99" className="text-gray-700 hover:text-blue-600">
                Tab99
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
              to="/Tab90"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab90
            </Link>
            <Link
              to="/Tab91"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab91
            </Link>
            <Link
              to="/Tab92"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab92
            </Link>
            <Link
              to="/Tab93"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab93
            </Link>
            <Link
              to="/Tab94"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab94
            </Link>
            <Link
              to="/Tab95"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab95
            </Link>
            <Link
              to="/Tab96"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab96
            </Link>
            <Link
              to="/Tab97"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab97
            </Link>
            <Link
              to="/Tab98"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab98
            </Link>
            <Link
              to="/Tab99"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab99
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
