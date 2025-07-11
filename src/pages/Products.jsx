import React from "react";
import { motion } from "framer-motion"
const products = [
    {
        id: 1,
        name: "Sunny Kids Store",
        location: "Cairo, Egypt",
        description: "A cozy 60m² solar-powered space, perfect for toy or kids clothing shops.",
        price: "$450/month",
    },
    {
        id: 2,
        name: "Green Family Bakery",
        location: "Giza, Egypt",
        description: "Ideal for family-run bakeries. Fully solar powered, 90m² corner location.",
        price: "$600/month",
    },
    {
        id: 3,
        name: "Parent Hub Studio",
        location: "Alexandria, Egypt",
        description: "Open-plan 75m² unit, great for wellness centers or educational services.",
        price: "$500/month",
    },
    {
        id: 4,
        name: "Smart Family Mart",
        location: "Mansoura, Egypt",
        description: "A 100m² refurbished mini-mart space with rooftop solar panels and family-friendly surroundings.",
        price: "$700/month",
    },
    {
        id: 5,
        name: "Eco Learning Center",
        location: "Tanta, Egypt",
        description: "Spacious 120m² unit ideal for tutoring centers or kids' workshops, with full solar coverage.",
        price: "$750/month",
    },
    {
        id: 6,
        name: "Red Rooftop Café",
        location: "Asyut, Egypt",
        description: "A 95m² rooftop unit with solar panels — perfect for a family café or reading lounge.",
        price: "$680/month",
    },

];

export default function () {
    return (
        <section className="bg-white px-4 flex-1 flex flex-col items-center justify-center py-16 max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#D7263D] mb-10 text-center">
                Explore Our Solar-Powered Spaces
            </h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: product.id / 7 } },
                            hover: { opacity: 0.9, y: -10, transition: { duration: 0.2 } } // بدون delay
                        }}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        key={product.id} className="border shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300">
                        <h2 className="text-xl font-semibold text-[#D7263D] mb-1">{product.name}</h2>
                        <p className="text-gray-600 mb-1 italic">{product.location}</p>
                        <p className="text-gray-800 mb-3">{product.description}</p>
                        <p className="font-bold text-[#D7263D]">{product.price}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
