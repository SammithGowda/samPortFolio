import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) { // Adjust the threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? "bg-gradient-to-r from-purple-600 to-blue-700 shadow-md"
      //     : "bg-gradient-to-br from-purple-600 to-blue-700 bg-opacity-90"
      // }`}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-purple-600 to-blue-700 bg-opacity-90` }
      >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-2xl font-bold text-white ">SG</div>

        {/* Hamburger Button for Small Screens */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:relative top-full left-0 w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-700 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out`}
        >
          {links.map((link) => (
            <li key={link} className="py-2 md:py-0">
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="block px-4 md:px-2 text-sm md:text-base  text-white cursor-pointer hover:text-indigo-300 transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
