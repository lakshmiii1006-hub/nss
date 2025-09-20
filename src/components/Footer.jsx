import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import nssLogo from "../assets/Assets/NSS-logo.png";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] text-white mt-10 relative">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-2 text-center md:text-left">

        {/* About */}
        <div className="flex flex-col items-center md:items-start px-2">
          <img
            src={nssLogo}
            alt="NSS Logo"
            className="w-14 h-14 mb-2 rounded-full border-2 border-white object-cover"
          />
          <h3 className="text-xl font-bold mb-2">KPT NSS</h3>
          <p className="text-base text-gray-200">
            The NSS promotes voluntary work and social service
            <span className="font-semibold text-white"> "Not Me But You"</span>.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center px-2">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-center">
            <li><Link to="/" className="hover:underline hover:text-[#ffd700] text-base">Home</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-[#ffd700] text-base">About</Link></li>
            <li><Link to="/activities" className="hover:underline hover:text-[#ffd700] text-base">Activities</Link></li>
            <li><Link to="/achievements" className="hover:underline hover:text-[#ffd700] text-base">Achievements</Link></li>
            <li><Link to="/gallery" className="hover:underline hover:text-[#ffd700] text-base">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline hover:text-[#ffd700] text-base">Contact</Link></li>
           
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start px-2">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-base">Email: <a href="mailto:nssunit@example.com" className="hover:underline hover:text-[#ffd700]">nssunit@example.com</a></p>
          <p className="text-base">Phone: +91 98765 43210</p>
        </div>

        {/* Map */}
        <div className="flex flex-col items-center md:items-start px-2">
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <div className="mt-1 w-full rounded-md overflow-hidden">
            <iframe
              title="NSS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1234567890!2d76.1234567!3d10.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba1234567890ab%3A0xcd1234567890abcd!2sYour+College+NSS+Unit!5e0!3m2!1sen!2sin!4v1694183561234!5m2!1sen!2sin"
              width="100%"
              height="130"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#8b5a2b] text-white py-3 text-center text-base mt-4">
        &copy; {new Date().getFullYear()} NSS Unit. All Rights Reserved.
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-600 hover:bg-orange-700 p-3 rounded-full shadow-lg text-white z-50 transition-transform transform hover:scale-110"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
