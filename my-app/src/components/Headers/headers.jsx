import React from "react";

function Header() {
  return (
    <header className="bg-[#FFFDD0] shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-italian-red">
              Bella Vista
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-lg md:text-xl">
            <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">
              Home
            </span>
            <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">
              Menu
            </span>
            <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">
              Reservations
            </span>
            <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">
              Contacts
            </span>
          </div>

          {/* Reserve Button */}
          <div>
            <button className="bg-[#EE2E31] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#5f8c09] transition-colors duration-300 text-sm sm:text-base">
              Reserve Table
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
