import { useState } from "react";
import { Link } from "@remix-run/react";

export default function MyNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              草包鋒兄
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/tab0X" className="text-gray-700 hover:text-blue-600">
                Tab0X
              </Link>
              <Link to="/tab1X" className="text-gray-700 hover:text-blue-600">
                Tab1X
              </Link>
              <Link to="/tab2X" className="text-gray-700 hover:text-blue-600">
                Tab2X
              </Link>
              <Link to="/tab3X" className="text-gray-700 hover:text-blue-600">
                Tab3X
              </Link>
              <Link to="/tab4X" className="text-gray-700 hover:text-blue-600">
                Tab4X
              </Link>
              <Link to="/tab5X" className="text-gray-700 hover:text-blue-600">
                Tab5X
              </Link>
              <Link to="/tab6X" className="text-gray-700 hover:text-blue-600">
                Tab6X
              </Link>
              <Link to="/tab7X" className="text-gray-700 hover:text-blue-600">
                Tab7X
              </Link>
              <Link to="/tab8X" className="text-gray-700 hover:text-blue-600">
                Tab8X
              </Link>
              <Link to="/tab9X" className="text-gray-700 hover:text-blue-600">
                Tab9X
              </Link>

              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
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
            <Link to="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/tab0X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab0X
            </Link>
            <Link
              to="/tab1X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab1X
            </Link>
            <Link
              to="/tab2X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab2X
            </Link>
            <Link
              to="/tab3X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab3X
            </Link>
            <Link
              to="/tab4X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab4X
            </Link>
            <Link
              to="/tab5X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab5X
            </Link>
            <Link
              to="/tab6X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab6X
            </Link>
            <Link
              to="/tab7X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab7X
            </Link>
            <Link
              to="/tab8X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab8X
            </Link>
            <Link
              to="/tab9X"
              className="block text-gray-700 hover:text-blue-600"
            >
              Tab9X
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
