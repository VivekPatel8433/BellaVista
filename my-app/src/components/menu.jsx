import React from "react";

function Menu() {
    const menu = [
    {
        name: "Bruschetta Classica",
        desc: "Grilled bread topped with fresh tomatoes, garlic, and basil",
        price: "$12",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/275712982a-7e93eadb5c76cc8c88f9.png",
        alt: "Grilled bread topped with fresh tomatoes, garlic, and basil"
    },
    {
        name: "Fettuccine Alfredo",
        desc: "Fresh fettuccine in our signature creamy Parmesan sauce",
        price: "$22",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b3472155d4-a85727616dae77baf54a.png",
        alt: "Fresh fettuccine in our signature creamy Parmesan sauce"
    },
    {
        name: "Quattro Stagioni",
        desc: "Four seasons pizza with artichokes, ham, mushrooms, and olives",
        price: "$26",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9a95a69bfb-1b29db6f8b08010ea9d1.png",
        alt: "Four seasons pizza with artichokes, ham, mushrooms, and olives"
    },
    {
        name: "Panna Cotta",
        desc: "Silky vanilla custard topped with mixed berry compote",
        price: "$10",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/64d5a7f865-206db3da5f5099cbca35.png",
        alt: "Silky vanilla custard topped with mixed berry compote"
    },
    {
        name: "Antipasto Della Casa",
        desc: "Selection of cured meats, artisanal cheeses, and marinated vegetables",
        price: "$18",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57dd897558-8f0a2b47d76592c458da.png",
        alt: "Selection of cured meats, artisanal cheeses, and marinated vegetables"
    },
    {
        name: "Penne Arrabbiata",
        desc: "Penne pasta in spicy tomato sauce with garlic and red chilies",
        price: "$20",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/223cd30487-467490af21c14b624db7.png",
        alt: "Penne pasta in spicy tomato sauce with garlic and red chilies"
    },
    {
        name: "Diavola",
        desc: "Spicy salami, mozzarella, and tomato sauce on wood-fired crust",
        price: "$24",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1e930c40df-b1939709027bf7e8e35e.png",
        alt: "Spicy salami, mozzarella, and tomato sauce on wood-fired crust"
    },
    {
        name: "Cannoli Siciliani",
        desc: "Traditional Sicilian pastry filled with sweet ricotta and chocolate chips",
        price: "$9",
        img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/0fe26866c9-b4adf71f0eccd82299de.png",
        alt: "Traditional Sicilian pastry filled with sweet ricotta and chocolate chips"
    }
    ]

    return ( 
       <section className="w-screen py-16 bg-[#f9f9f9]">
  {/* Header */}
  <div className="mb-12 text-center">
    <h2 className="text-4xl font-lobster mb-4">Our Menu</h2>
    <p className="text-lg text-gray-700">
      Authentic Italian Cuisine prepared with finest ingredients
    </p>
  </div>

  {/* Filter Buttons */}
  <div className="flex flex-wrap justify-center gap-6 mb-12">
    <button className="px-4 py-2 bg-[#FF5738] rounded-lg text-white shadow-lg">All</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Appetizers</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Pizza</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Pasta</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Main Course</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Desserts</button>
    <button className="px-6 py-3 bg-[#FF5733] rounded-lg text-white shadow-lg">Beverages</button>
  </div>

  {/* Menu Grid */}
  <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {menu.map((item, index) => (
      <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full">
        <img
          src={item.img}
          alt={item.alt}
          className="w-full h-auto max-h-48 object-cover"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
          <p className="text-[#FF5733] font-bold mt-3">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    );
}

export default Menu;