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
              Tab5X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/Tab50" className="text-gray-700 hover:text-blue-600">
                Tab50
              </Link>
              <Link to="/Tab51" className="text-gray-700 hover:text-blue-600">
                Tab51
              </Link>
              <Link to="/Tab52" className="text-gray-700 hover:text-blue-600">
                Tab52
              </Link>
              <Link to="/Tab53" className="text-gray-700 hover:text-blue-600">
                Tab53
              </Link>
              <Link to="/Tab54" className="text-gray-700 hover:text-blue-600">
                Tab54
              </Link>
              <Link to="/Tab55" className="text-gray-700 hover:text-blue-600">
                Tab55
              </Link>
              <Link to="/Tab56" className="text-gray-700 hover:text-blue-600">
                Tab56
              </Link>
              <Link to="/Tab57" className="text-gray-700 hover:text-blue-600">
                Tab57
              </Link>
              <Link to="/Tab58" className="text-gray-700 hover:text-blue-600">
                Tab58
              </Link>
              <Link to="/Tab59" className="text-gray-700 hover:text-blue-600">
                Tab59
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
              to="/Tab50"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab50
            </Link>
            <Link
              to="/Tab51"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab51
            </Link>
            <Link
              to="/Tab52"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab52
            </Link>
            <Link
              to="/Tab53"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab53
            </Link>
            <Link
              to="/Tab54"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab54
            </Link>
            <Link
              to="/Tab55"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab55
            </Link>
            <Link
              to="/Tab56"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab56
            </Link>
            <Link
              to="/Tab57"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab57
            </Link>
            <Link
              to="/Tab58"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab58
            </Link>
            <Link
              to="/Tab59"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab59
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
