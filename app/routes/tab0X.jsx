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
              Tab0X
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/tab01" className="text-gray-700 hover:text-blue-600">
                Tab01
              </Link>
              <Link to="/tab02" className="text-gray-700 hover:text-blue-600">
                Tab02
              </Link>
              <Link to="/tab03" className="text-gray-700 hover:text-blue-600">
                Tab03
              </Link>
              <Link to="/tab04" className="text-gray-700 hover:text-blue-600">
                Tab04
              </Link>
              <Link to="/tab05" className="text-gray-700 hover:text-blue-600">
                Tab05
              </Link>
              <Link to="/tab06" className="text-gray-700 hover:text-blue-600">
                Tab06
              </Link>
              <Link to="/tab07" className="text-gray-700 hover:text-blue-600">
                Tab07
              </Link>
              <Link to="/tab08" className="text-gray-700 hover:text-blue-600">
                Tab08
              </Link>
              <Link to="/tab09" className="text-gray-700 hover:text-blue-600">
                Tab09
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
              to="/tab01"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab01
            </Link>
            <Link
              to="/tab02"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab02
            </Link>
            <Link
              to="/tab03"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab03
            </Link>
            <Link
              to="/tab04"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab04
            </Link>
            <Link
              to="/tab05"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab05
            </Link>
            <Link
              to="/tab06"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab06
            </Link>
            <Link
              to="/tab07"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab07
            </Link>
            <Link
              to="/tab08"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab08
            </Link>
            <Link
              to="/tab09"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab09
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
