import { useState, useEffect } from "react";
import { Eye, Target, HeartHandshake } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Assets/NSS-logo.png";
import bg1 from "../assets/Assets/bg1.jpeg";
import bg2 from "../assets/Assets/bg2.jpeg";
import bg3 from "../assets/Assets/bg3.jpeg";
import bg4 from "../assets/Assets/bg4.jpeg";
import bg5 from "../assets/Assets/nss.jpeg";
import bg6 from "../assets/Assets/nss1.jpeg";
import bg7 from "../assets/Assets/nss2.jpeg";

export default function Home() {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-200">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden h-screen w-full transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[currentIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <img
            src={logo}
            alt="NSS Logo"
            className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
          />
          <TypeAnimation
            sequence={["National Service Scheme", 2000, "Not Me But You", 2000]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl sm:text-4xl font-extrabold text-center drop-shadow-md"
          />
        </div>

        {/* Mouse Scroll Button */}
        <button
          onClick={() => {
            const nextSection = document.getElementById("welcome-section");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 sm:w-8 sm:h-14 border-2 border-white rounded-full flex items-start justify-center relative">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="mt-2 text-xs sm:text-sm text-white opacity-80">Scroll</span>
        </button>
      </div>

      {/* Welcome Section */}
      <motion.section
        id="welcome-section"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-3xl mx-auto py-8 px-4 sm:py-12 sm:px-6 mt-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/30 p-5 sm:p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-md bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent">
            Welcome to NSS
          </h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            The <span className="font-semibold">National Service Scheme (NSS)</span>{" "}
            aims to instill the spirit of voluntary work among students and youth.
            Through community service, awareness programs, and leadership
            activities, NSS volunteers dedicate themselves to the motto of{" "}
            <span className="font-bold bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent">
              "Not Me But You"
            </span>.
          </p>
          <div className="mt-5">
            <button
              onClick={() => navigate("/about")}
              className="bg-[#b8860b] text-white px-5 py-2 rounded-full text-sm sm:text-base shadow-md hover:bg-[#8b5a2b] transition"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission, Vision, Core Values */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent">
          Our Foundation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Eye className="mx-auto text-[#b8860b] w-10 h-10 sm:w-12 sm:h-12 mb-3" />,
              title: "Vision",
              desc: "To build a generation of socially responsible youth committed to service and nation-building.",
            },
            {
              icon: <Target className="mx-auto text-[#b8860b] w-10 h-10 sm:w-12 sm:h-12 mb-3" />,
              title: "Mission",
              desc: "To engage students in impactful community service, fostering leadership, empathy, and civic responsibility.",
            },
            {
              icon: <HeartHandshake className="mx-auto text-[#b8860b] w-10 h-10 sm:w-12 sm:h-12 mb-3" />,
              title: "Core Values",
              desc: "Unity, compassion, discipline, and teamwork form the heart of our NSS community.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/30 backdrop-blur-sm"
            >
              {card.icon}
              <h4 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-sm sm:text-base text-gray-800">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="py-12 px-4 sm:py-16 sm:px-6"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent text-center">
          Our Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            { number: "200+", label: "Active Volunteers" },
            { number: "20+", label: "Events Organized" },
            { number: "5+", label: "Villages Adopted" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/30 backdrop-blur-sm"
            >
              <h4 className="text-3xl sm:text-5xl font-extrabold text-[#b8860b]">
                {item.number}
              </h4>
              <p className="text-sm sm:text-base text-gray-800 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent">
          Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              img: bg5,
              title: "Yuva Nidhi Drive",
              desc: "Special Drive for Yuva Nidhi.",
            },
            {
              img: bg6,
              title: "College Cleaning Activity",
              desc: "Helping the community with service activities.",
            },
            {
              img: bg7,
              title: "Library Day",
              desc: "Attending World Library Day at Ambedkar Bhavan.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/30 backdrop-blur-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-3 h-40 sm:h-48 w-full object-cover"
              />
              <h4 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-sm sm:text-base text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="bg-[#b8860b] text-white px-5 py-2 rounded-full text-sm sm:text-base shadow-md hover:bg-[#8b5a2b] transition"
          >
            View Full Gallery
          </button>
        </div>
      </motion.section>
    </div>
  );
}
