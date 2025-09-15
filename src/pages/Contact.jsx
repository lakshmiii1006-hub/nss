import React, { useState } from "react";
import { motion } from "framer-motion";

// Motion components
const MotionInput = motion.input;
const MotionTextarea = motion.textarea;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative w-[90%] h-[100vh] mx-auto my-10 flex overflow-hidden rounded-xl shadow-lg">
      {/* Left side: Google Maps with animated golden border */}
      <motion.div
        whileHover={{ scale: 1.01, boxShadow: "0 0 25px rgba(255,215,0,0.9)" }}
        whileTap={{ scale: 0.99 }}
        className="w-1/2 h-full relative p-[3px] rounded-xl bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b5a2b]"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-xl overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086421221888!2d-122.41941538468124!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809caaaaaaab%3A0xa6b0b7b6db0db8e7!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1633563771534!5m2!1sen!2sus"
            className="absolute top-0 left-0 w-full h-full filter brightness-75"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Right side: Contact Form (unchanged) */}
      <div className="w-1/2 h-full flex items-center justify-center z-10 border-l-4 border-gold shadow-[inset_4px_0_15px_rgba(255,215,0,0.5)]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white rounded-xl w-4/5 p-8 shadow-gold-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b8860b] to-[#8b5a2b]">
            Drop a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name
              </label>
              <motion.div
                whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(255,215,0,0.7)" }}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,215,0,1)" }}
                className="p-[2px] rounded-lg bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b5a2b]"
              >
                <MotionInput
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none"
                />
              </motion.div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <motion.div
                whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(255,215,0,0.7)" }}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,215,0,1)" }}
                className="p-[2px] rounded-lg bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b5a2b]"
              >
                <MotionInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none"
                />
              </motion.div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message
              </label>
              <motion.div
                whileHover={{ scale: 1.005, boxShadow: "0 0 15px rgba(255,215,0,0.7)" }}
                whileFocus={{ scale: 1.01, boxShadow: "0 0 25px rgba(255,215,0,1)" }}
                className="p-[2px] rounded-lg bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#8b5a2b]"
              >
                <MotionTextarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full rounded-lg px-3 py-2 bg-white text-gray-800 focus:outline-none"
                />
              </motion.div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-2 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] text-white font-bold py-2 px-4 rounded-lg shadow-gold-md hover:shadow-gold-lg transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
