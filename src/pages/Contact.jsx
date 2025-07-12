import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        if (!name || !email || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsSending(true);

        // Simulate sending message
        setTimeout(() => {
            setIsSending(false);
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto px-4 py-8 text-white flex-1 flex flex-col justify-center"
        >
            <Toaster />
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-center mb-6 text-lg text-[#D7263D]">Have a question or need help? We'd love to hear from you!</p>

            <form onSubmit={handleSubmit} className="bg-white border-2 border-[#D7263D] p-6 rounded-2xl shadow-lg space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black border border-[#D7263D]"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black border border-[#D7263D]"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-md text-black border border-[#D7263D]"
                ></textarea>

                <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#D7263D] cursor-pointer text-white font-semibold py-2 px-4 rounded-md border-2 hover:border-[#D7263D] hover:text-[#D7263D] hover:bg-white duration-300 w-full"
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </form>
        </motion.div>
    );
};


