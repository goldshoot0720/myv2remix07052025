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
              Tab1X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/tab10" className="text-gray-700 hover:text-blue-600">
                Tab10
              </Link>
              <Link to="/tab11" className="text-gray-700 hover:text-blue-600">
                Tab11
              </Link>
              <Link to="/tab12" className="text-gray-700 hover:text-blue-600">
                Tab12
              </Link>
              <Link to="/tab13" className="text-gray-700 hover:text-blue-600">
                Tab13
              </Link>
              <Link to="/tab14" className="text-gray-700 hover:text-blue-600">
                Tab14
              </Link>
              <Link to="/tab15" className="text-gray-700 hover:text-blue-600">
                Tab15
              </Link>
              <Link to="/tab16" className="text-gray-700 hover:text-blue-600">
                Tab16
              </Link>
              <Link to="/tab17" className="text-gray-700 hover:text-blue-600">
                Tab17
              </Link>
              <Link to="/tab18" className="text-gray-700 hover:text-blue-600">
                Tab18
              </Link>
              <Link to="/tab19" className="text-gray-700 hover:text-blue-600">
                Tab19
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
              to="/tab10"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab10
            </Link>
            <Link
              to="/tab11"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab11
            </Link>
            <Link
              to="/tab12"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab12
            </Link>
            <Link
              to="/tab13"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab13
            </Link>
            <Link
              to="/tab14"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab14
            </Link>
            <Link
              to="/tab15"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab15
            </Link>
            <Link
              to="/tab16"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab16
            </Link>
            <Link
              to="/tab17"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab17
            </Link>
            <Link
              to="/tab18"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab18
            </Link>
            <Link
              to="/tab19"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab19
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
