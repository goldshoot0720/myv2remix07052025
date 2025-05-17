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
              Tab7X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab70" className="text-gray-700 hover:text-blue-600">
                Tab70
              </Link>
              <Link to="/Tab71" className="text-gray-700 hover:text-blue-600">
                Tab71
              </Link>
              <Link to="/Tab72" className="text-gray-700 hover:text-blue-600">
                Tab72
              </Link>
              <Link to="/Tab73" className="text-gray-700 hover:text-blue-600">
                Tab73
              </Link>
              <Link to="/Tab74" className="text-gray-700 hover:text-blue-600">
                Tab74
              </Link>
              <Link to="/Tab75" className="text-gray-700 hover:text-blue-600">
                Tab75
              </Link>
              <Link to="/Tab76" className="text-gray-700 hover:text-blue-600">
                Tab76
              </Link>
              <Link to="/Tab77" className="text-gray-700 hover:text-blue-600">
                Tab77
              </Link>
              <Link to="/Tab78" className="text-gray-700 hover:text-blue-600">
                Tab78
              </Link>
              <Link to="/Tab79" className="text-gray-700 hover:text-blue-600">
                Tab79
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
              to="/Tab70"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab70
            </Link>
            <Link
              to="/Tab71"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab71
            </Link>
            <Link
              to="/Tab72"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab72
            </Link>
            <Link
              to="/Tab73"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab73
            </Link>
            <Link
              to="/Tab74"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab74
            </Link>
            <Link
              to="/Tab75"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab75
            </Link>
            <Link
              to="/Tab76"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab76
            </Link>
            <Link
              to="/Tab77"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab77
            </Link>
            <Link
              to="/Tab78"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab78
            </Link>
            <Link
              to="/Tab79"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab79
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
