import React from "react";

function GuestExperience() {
  const guests = [
    {
      name: "Sophia R.",
      review: "Absolutely loved the authentic Italian flavors! The pasta was cooked to perfection.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Luca M.",
      review: "The ambiance and service were amazing. Highly recommend the Margherita Pizza!",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      rating: 5,
    },
    {
      name: "Emma K.",
      review: "A true taste of Italy in the city! The Osso Buco was incredible.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
    {
      name: "Marco T.",
      review: "Friendly staff and delicious desserts. Tiramisu was my favorite!",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="w-screen py-16 bg-[#fff8f0]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-lobster text-[#fd813a] mb-4">Guest Experiences</h2>
        <p className="text-lg text-gray-700">Hear what our happy guests have to say</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {guests.map((guest, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <img
              src={guest.img}
              alt={guest.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
              loading="lazy"
            />
            <h3 className="font-playfair text-xl font-semibold text-[#fd513a] mb-2">{guest.name}</h3>
            <p className="text-gray-700 text-sm mb-4">{guest.review}</p>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < guest.rating ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GuestExperience;
