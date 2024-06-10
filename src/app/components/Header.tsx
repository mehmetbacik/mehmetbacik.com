"use client";

import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white w-full px-2">
      <div className="flex justify-between items-center py-5 px-4 md:px-0">
        <h1 className="text-lg font-medium">Mehmet Bacik</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-8`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 md:py-0 hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="block py-2 md:py-0 hover:text-gray-400"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 md:py-0 hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
