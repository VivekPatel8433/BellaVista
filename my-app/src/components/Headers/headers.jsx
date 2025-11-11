import React from "react";

function Header() {
  return (
    <header className="bg-[#FFFDD0] shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="font-playfair text-3xl font-bold text-italian-red">Bella Vista</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">Home</span>
          <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">Menu</span>
          <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">Reservations</span>
          <span className="text-[#fd813a] hover:text-[#9E7462] font-medium cursor-pointer">Contacts</span>
        </div>

        {/* Reserve Table Button */}
        <div className="hidden md:block">
          <button className="bg-[#EE2E31] text-white px-6 py-2 rounded-lg hover:bg-[#5f8c09]">
            Reserve Table
          </button>
        </div>

        {/* Mobile Hamburger (optional) */}
        <div className="md:hidden">
          <button className="text-[#EE2E31] focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
