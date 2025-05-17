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
              Tab6X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab60" className="text-gray-700 hover:text-blue-600">
                Tab60
              </Link>
              <Link to="/Tab61" className="text-gray-700 hover:text-blue-600">
                Tab61
              </Link>
              <Link to="/Tab62" className="text-gray-700 hover:text-blue-600">
                Tab62
              </Link>
              <Link to="/Tab63" className="text-gray-700 hover:text-blue-600">
                Tab63
              </Link>
              <Link to="/Tab64" className="text-gray-700 hover:text-blue-600">
                Tab64
              </Link>
              <Link to="/Tab65" className="text-gray-700 hover:text-blue-600">
                Tab65
              </Link>
              <Link to="/Tab66" className="text-gray-700 hover:text-blue-600">
                Tab66
              </Link>
              <Link to="/Tab67" className="text-gray-700 hover:text-blue-600">
                Tab67
              </Link>
              <Link to="/Tab68" className="text-gray-700 hover:text-blue-600">
                Tab68
              </Link>
              <Link to="/Tab69" className="text-gray-700 hover:text-blue-600">
                Tab69
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
              to="/Tab60"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab60
            </Link>
            <Link
              to="/Tab61"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab61
            </Link>
            <Link
              to="/Tab62"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab62
            </Link>
            <Link
              to="/Tab63"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab63
            </Link>
            <Link
              to="/Tab64"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab64
            </Link>
            <Link
              to="/Tab65"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab65
            </Link>
            <Link
              to="/Tab66"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab66
            </Link>
            <Link
              to="/Tab67"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab67
            </Link>
            <Link
              to="/Tab68"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab68
            </Link>
            <Link
              to="/Tab69"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab69
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
