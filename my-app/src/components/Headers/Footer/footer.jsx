import React, { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="w-full bg-gray-100 mt-10 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* LEFT SIDE — RESERVATION FORM */}
        <section className="bg-white p-6 shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-600 font-lobster font-poppins">
            Reserve a Table
          </h2>

          {submitted && (
            <div className="p-4 mb-6 bg-green-100 border border-green-300 rounded-lg text-green-800 text-center">
              ✅ <span className="font-semibold font-poppins">Reservation Successful!</span>
              <p className="text-sm mt-2 font-poppins" >
                Thank you {formData.name}! We’ve received your booking for{" "}
                <span className="font-semibold">{formData.guests}</span> guests on{" "}
                <span className="font-semibold">{formData.date}</span> at{" "}
                <span className="font-semibold">{formData.time}</span>.
              </p>
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
              />

              <div className="flex gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
                />

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
                />
              </div>

              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min={1}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
              />

              <textarea
                name="requests"
                placeholder="Special Requests"
                value={formData.requests}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-poppins"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition font-poppins"
              >
                Reserve Table
              </button>
            </form>
          )}
        </section>

        {/* RIGHT SIDE — CONTACT + LOCATION */}
        <section className="bg-white p-6 shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-orange-600 font-poppins text-center">
            Contact & Location
          </h2>

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="text-xl font-semibold text-orange-500 font-poppins">
                📍 Our Location
              </h3>
              <p className="mt-2 font-poppins">
                123 Italian Street  
                <br /> Calgary, AB T2X 1Y4
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                ☎️ Contact Us
              </h3>
              <p className="mt-2 font-poppins">Phone: (403) 555-9876</p>
              <p className="font-poppins">Email: support@italianbistro.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                🕒 Opening Hours
              </h3>
              <p className="mt-2 font-poppins">
                Mon–Fri: 11 AM – 10 PM <br />
                Sat–Sun: 9 AM – 11 PM
              </p>
            </div>

            <div className="mt-6">
              <iframe
                 className="w-full h-52 rounded-lg border"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25183.31860126023!2d-114.089316!3d51.044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170008f28d4cd%3A0x52e6ccb316f52c44!2sDowntown%20Commercial%20Core%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1730782142237!5m2!1sen!2sca"
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
             ></iframe>

            </div>

          </div>

          {/* Bottom footer bar */}
            <div className="w-full bg-black text-center text-white py-4 mt-10">
                 <p className="text-sm font-poppins">
                 © {new Date().getFullYear()} All Rights Reserved | Designed And Managed by 
                 <span className="font-semibold text-orange-400"> V Group</span>
                 </p>
            </div>

        </section>
      </div>
    </footer>
  );
}
