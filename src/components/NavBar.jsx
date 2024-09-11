import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">City-360</a>
        </Link>

        {/* Mobile Hamburger Menu */}
        <button className="md:hidden" onClick={toggleNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="#features">
            <a className="block mt-4 md:mt-0 md:inline-block text-white hover:text-yellow-400 mx-2">
              Features
            </a>
          </Link>
          <Link href="#services">
            <a className="block mt-4 md:mt-0 md:inline-block text-white hover:text-yellow-400 mx-2">
              Services
            </a>
          </Link>
          <Link href="#contact">
            <a className="block mt-4 md:mt-0 md:inline-block text-white hover:text-yellow-400 mx-2">
              Contact
            </a>
          </Link>
          <Link href="#about">
            <a className="block mt-4 md:mt-0 md:inline-block text-white hover:text-yellow-400 mx-2">
              About Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
