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
              Tab2X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab20" className="text-gray-700 hover:text-blue-600">
                Tab20
              </Link>
              <Link to="/Tab21" className="text-gray-700 hover:text-blue-600">
                Tab21
              </Link>
              <Link to="/Tab22" className="text-gray-700 hover:text-blue-600">
                Tab22
              </Link>
              <Link to="/Tab23" className="text-gray-700 hover:text-blue-600">
                Tab23
              </Link>
              <Link to="/Tab24" className="text-gray-700 hover:text-blue-600">
                Tab24
              </Link>
              <Link to="/Tab25" className="text-gray-700 hover:text-blue-600">
                Tab25
              </Link>
              <Link to="/Tab26" className="text-gray-700 hover:text-blue-600">
                Tab26
              </Link>
              <Link to="/Tab27" className="text-gray-700 hover:text-blue-600">
                Tab27
              </Link>
              <Link to="/Tab28" className="text-gray-700 hover:text-blue-600">
                Tab28
              </Link>
              <Link to="/Tab29" className="text-gray-700 hover:text-blue-600">
                Tab29
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
              to="/Tab20"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab20
            </Link>
            <Link
              to="/Tab21"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab21
            </Link>
            <Link
              to="/Tab22"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab22
            </Link>
            <Link
              to="/Tab23"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab23
            </Link>
            <Link
              to="/Tab24"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab24
            </Link>
            <Link
              to="/Tab25"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab25
            </Link>
            <Link
              to="/Tab26"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab26
            </Link>
            <Link
              to="/Tab27"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab27
            </Link>
            <Link
              to="/Tab28"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab28
            </Link>
            <Link
              to="/Tab29"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab29
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
