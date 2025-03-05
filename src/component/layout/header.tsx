import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md top-0 w-full text-white py-4 px-8 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="text-blue-500">Drone</span>Vision
        </Link>
      </div>
      
      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/features/features" className="hover:text-blue-400 transition">
              Features
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-blue-400 transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Action Button */}
      <div>
        <Link href="/demo">
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition shadow-md">
            Get a Demo
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
