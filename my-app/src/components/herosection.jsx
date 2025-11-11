import React from "react";
function HeroSection() {
  return (
    <div className="mt-[72px]">
      <div className="relative w-screen h-[35rem] sm:h-[350px] md:h-[400px] lg:h-[600px] overflow-hidden">
        <img
          src= "https://storage.googleapis.com/uxpilot-auth.appspot.com/c3a1f32831-8937a1a51bc66fa2e67a.png"
          alt="Logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute inset-0 flex items-start justify-start text-white px-20 py-40">
          <div className="max-w-xl">
            <h1 className="text-playfair text-6xl sm:text-5xl md:text-6xl mb-2 font-bold text-[#a8fae3]">
              Experience The Taste Of Italy
            </h1>

            <p className="text-xl sm:text-xl md:text-2xl max-w-2xl mb-8 opacity-90">
              Authentic Italian cuisine crafted with passion, served with love in the
              heart of Calgary City
            </p>

            <div className="flex gap-2 mt-2">
              <button className="rounded-lg py-3 px-6 border border-gray-200 hover:bg-red-500 bg-green-400">
                View Menu
              </button>

              <button className="rounded-lg py-3 px-6 sm:px-3 border border-blue-200 hover:bg-blue-500">
                Reserve Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
