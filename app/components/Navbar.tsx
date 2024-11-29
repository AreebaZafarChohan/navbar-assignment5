"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            My Logo
          </Link>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Products", "Services", "Testimonials", "Contact"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link} className="hover:text-gray-400 text-lg">
              {link}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center">
          {["Home", "About", "Products", "Services", "Testimonials", "Contact"].map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link}  className="block px-4 py-2 border-b border-gray-600 hover:bg-gray-600 text-lg"
            onClick={() => setIsOpen(false)}>
                {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
