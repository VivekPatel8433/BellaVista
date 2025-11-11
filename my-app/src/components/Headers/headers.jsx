import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFFDD0] shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Text */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img src={logo} alt="Bella Vista Logo" className="h-10 sm:h-12 w-auto rounded-lg" />
            <h1 className="font-dancing text-6xl sm:text-3xl font-bold text-italian-red">
              Bella Vista
            </h1>
          </div>

          {/* Desktop Navigation + Reserve Button */}
            {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-lg md:text-xl">
            <Link to="/" className="text-[#fd813a] hover:text-[#9E7462] font-titillium cursor-pointer">Home</Link>
            <Link to="/menu" className="text-[#fd813a] hover:text-[#9E7462] font-titillium cursor-pointer">Menu</Link>
            <Link to="/reserve" className="text-[#fd813a] hover:text-[#9E7462] font-titillium cursor-pointer">Reservations</Link>
            <Link to="/reserve" className="text-[#fd813a] hover:text-[#9E7462] font-titillium cursor-pointer">Contacts</Link>
           <Link to="/reserve">
         <button className="ml-6 bg-[#EE2E31] font-titillium text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#5f8c09] transition-colors duration-300 text-sm sm:text-base">
            Reserve Table
          </button>
          </Link>
        </div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-italian-red focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-3 pb-4 border-t border-[#fd813a]">
            <Link to="/" className="block text-[#FF7E6B] hover:text-[#9E7462] font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/menu" className="block text-[#FF7E6B] hover:text-[#9E7462] font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link to="/reserve" className="block text-[#FF7E6B] hover:text-[#9E7462] font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Reservations</Link>
            <Link to="/reserve" className="block text-[#FF7E6B] hover:text-[#9E7462] font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Contacts</Link>
            <Link to="/reserve" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#EE2E31] text-white px-4 py-3 rounded-lg hover:bg-[#5f8c09] transition-colors duration-300">
              Reserve Table
            </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;