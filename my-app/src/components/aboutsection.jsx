import React from "react";

function AboutSection() {
    return(
        <div className="relative w-screen py-12">
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="px-6 sm:px-8 md:px-12">
            <h2 className="text-4xl font-bold mb-6 text-[#fd813a]">Our Story</h2>
            <p className="text-lg mb-4">
                For over three generations, the Rossi family has been crafting authentic Italian cuisine with recipes passed down through our lineage. Our chef, Marco Rossi, brings the traditional flavors of Tuscany to your table.
            </p>
            <p className="text-lg mb-4">
                We source only the finest ingredients: San Marzano tomatoes, Parmigiano-Reggiano aged 24 months, and fresh pasta made daily in our kitchen.
            </p>
        </div>

        <div className="relative mt-8 px-8 md:px-12">
            <img
                className="w-full h-auto max-h-[28rem] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/26dfe147d1-6de79092576885d51281.png"
                alt="Italian chef preparing fresh pasta in traditional kitchen, warm lighting, rustic atmosphere"
                loading="lazy"
            />
        </div>
    </div>
</div>
    );
}
export default AboutSection;