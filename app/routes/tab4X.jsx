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
              Tab4X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab40" className="text-gray-700 hover:text-blue-600">
                Tab40
              </Link>
              <Link to="/Tab41" className="text-gray-700 hover:text-blue-600">
                Tab41
              </Link>
              <Link to="/Tab42" className="text-gray-700 hover:text-blue-600">
                Tab42
              </Link>
              <Link to="/Tab43" className="text-gray-700 hover:text-blue-600">
                Tab43
              </Link>
              <Link to="/Tab44" className="text-gray-700 hover:text-blue-600">
                Tab44
              </Link>
              <Link to="/Tab45" className="text-gray-700 hover:text-blue-600">
                Tab45
              </Link>
              <Link to="/Tab46" className="text-gray-700 hover:text-blue-600">
                Tab46
              </Link>
              <Link to="/Tab47" className="text-gray-700 hover:text-blue-600">
                Tab47
              </Link>
              <Link to="/Tab48" className="text-gray-700 hover:text-blue-600">
                Tab48
              </Link>
              <Link to="/Tab49" className="text-gray-700 hover:text-blue-600">
                Tab49
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
              to="/Tab40"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab40
            </Link>
            <Link
              to="/Tab41"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab41
            </Link>
            <Link
              to="/Tab42"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab42
            </Link>
            <Link
              to="/Tab43"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab43
            </Link>
            <Link
              to="/Tab44"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab44
            </Link>
            <Link
              to="/Tab45"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab45
            </Link>
            <Link
              to="/Tab46"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab46
            </Link>
            <Link
              to="/Tab47"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab47
            </Link>
            <Link
              to="/Tab48"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab48
            </Link>
            <Link
              to="/Tab49"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab49
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
