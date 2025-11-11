import React from "react";
import { motion } from "framer-motion";

function Dishes() {
  const dishes = [
    {
      name: "Spaghetti Carbonara",
      desc: "Traditional Roman pasta with pancetta, eggs, and Pecorino Romano",
      price: "$24",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5010790772-9c4830cf2725f2b2b175.png",
      alt: "authentic Italian spaghetti carbonara with pancetta, creamy sauce, elegant plating",
    },
    {
      name: "Margherita Pizza",
      desc: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, and basil",
      price: "$22",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c73ec6629a-6572ebc3f211e95d1e5d.png",
      alt: "margherita pizza with fresh mozzarella, basil, wood-fired oven, authentic Italian style",
    },
    {
      name: "Osso Buco",
      desc: "Braised veal shanks served with saffron risotto Milanese",
      price: "$38",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8f98285f73-7f0f5a4ddbdb50206ca8.png",
      alt: "osso buco braised veal shanks with risotto milanese, Italian fine dining presentation",
    },
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert with mascarpone, espresso, and cocoa",
      price: "$12",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5685a51efc-ee63a65b0c71c6e89032.png",
      alt: "classic tiramisu dessert with mascarpone and cocoa",
    },
  ];

  // First 2 from left, last 2 from right
  const directions = ["left", "left", "right", "right"];

  return (
    <section className="w-screen py-16 bg-[#dfe0d4]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-lobster text-[#fd813a] mb-4">
          Signature Dishes
        </h2>
        <p className="text-lg text-gray-700 font-poppins">Taste the finest Italian flavors</p>
      </div>

      {/* Dishes Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dishes.map((dish, index) => {
          const fromLeft = directions[index] === "left";
          return (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{
                x: fromLeft ? -200 : 200,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{
                once: true, // animate once
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                // delay: index * 0.15,
              }}
            >
              <img
                src={dish.img}
                alt={dish.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-[#fd513a] mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-700 text-sm font-poppins mb-4">{dish.desc}</p>
                <p className="text-[#fd513a] font-bold text-lg ">{dish.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Dishes;
