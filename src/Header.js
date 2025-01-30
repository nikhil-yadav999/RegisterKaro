import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Blue Header */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <FaEnvelope /> info@registerkaro.in
            </span>
            <span className="flex items-center gap-1">
              <FaGlobe /> www.registerkaro.in
            </span>
            <span className="flex items-center gap-1">
              <FaPhoneAlt /> +91 8447746183
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="py-3 shadow w-full bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <h2 className="font-bold text-3xl text-primary">
            Register<span className="text-secondary">Karo</span>
          </h2>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6">
            <a className="hover:text-violet-900 transition" href="/">
              Home
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Our Services
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Blog
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Contact Us
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              About us
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              <CiSearch />
            </a>
            <a className="bg-secondary text-white px-4 py-2 rounded transition" href="/">
              Talk An Expert
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center bg-white shadow-md absolute top-16 left-0 w-full py-4 space-y-4">
            <a className="hover:text-violet-900 transition" href="/">
              Home
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Our Services
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Blog
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              Contact Us
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              About us
            </a>
            <a className="hover:text-violet-900 transition" href="/">
              <CiSearch />
            </a>
            <a className="bg-secondary text-white px-4 py-2 rounded transition" href="/">
              Talk An Expert
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
