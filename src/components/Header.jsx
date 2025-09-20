import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nssLogo from "../assets/Assets/NSS-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="shadow-md">
      {/* Golden Gradient Bar */}
      <div className="bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-4">
            <img
              src={nssLogo}
              alt="NSS Logo"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            <h1 className="text-3xl font-bold text-white">KPT NSS</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-white text-lg">
            <Link
              to="/"
              className={`font-medium hover:text-gray-200 ${
                isActive("/") ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium hover:text-gray-200 ${
                isActive("/about") ? "border-b-2 border-white" : ""
              }`}
            >
              About 
            </Link>
            <Link
              to="/history"
              className={`font-medium hover:text-gray-200 ${
                isActive("/history") ? "border-b-2 border-white" : ""
              }`}
            >
              History
            </Link>
            <Link
              to="/activities"
              className={`font-medium hover:text-gray-200 ${
                isActive("/activities") ? "border-b-2 border-white" : ""
              }`}
            >
              Activities
            </Link>
            <Link
              to="/achievements"
              className={`font-medium hover:text-gray-200 ${
                isActive("/achievements") ? "border-b-2 border-white" : ""
              }`}
            >
              Achievements
            </Link>
            <Link
              to="/gallery"
              className={`font-medium hover:text-gray-200 ${
                isActive("/gallery") ? "border-b-2 border-white" : ""
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-medium hover:text-gray-200 ${
                isActive("/contact") ? "border-b-2 border-white" : ""
              }`}
            >
              Contact 
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 text-center text-white pb-6 text-lg">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/history", label: "History" },
              { path: "/activities", label: "Activities" },
              { path: "/achievements", label: "Achievements" },
              { path: "/gallery", label: "Gallery" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-medium hover:text-gray-200 ${
                  isActive(link.path) ? "border-b-2 border-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
