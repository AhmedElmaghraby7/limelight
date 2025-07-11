import React from "react";

export default function(){
  return (
    <section className="bg-white text-[#111] flex-1 flex flex-col items-center justify-center px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#D7263D] mb-6 text-center">
        Why Choose Limelight?
      </h1>

      <div className="space-y-8 text-lg leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-[#D7263D] mb-2">Family-Friendly Spaces</h2>
          <p>
            All our locations are carefully chosen with families in mind. Whether you're opening a bakery or a toy store,
            we help you find a safe, welcoming, and accessible space.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#D7263D] mb-2">Powered by the Sun</h2>
          <p>
            Our retail spaces are equipped with solar panels, saving you money while supporting a sustainable future for your kids.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#D7263D] mb-2">Affordable & Flexible</h2>
          <p>
            We work hard to keep our prices fair for growing families and small business owners. No surprises, just honest deals.
          </p>
        </div>
      </div>
    </section>
  );
};

