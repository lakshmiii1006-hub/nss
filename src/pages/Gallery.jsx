import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images from src/assets/Assets
import nssImg from "../assets/Assets/nss.jpeg";
import nss1Img from "../assets/Assets/nss1.jpeg";
import nss2Img from "../assets/Assets/nss2.jpeg";
import nss3Img from "../assets/Assets/nss3.jpeg";
import nss4Img from "../assets/Assets/nss4.jpeg";
import nss5Img from "../assets/Assets/nss5.jpeg";
import nss6Img from "../assets/Assets/nss6.jpeg";
import nss7Img from "../assets/Assets/nss7.jpeg";
import nss8Img from "../assets/Assets/nss8.jpeg";
import nss9Img from "../assets/Assets/nss9.jpeg";
import nss10Img from "../assets/Assets/nss10.jpeg";
import nss11Img from "../assets/Assets/nss11.jpeg";
import nss12Img from "../assets/Assets/nss12.jpeg";
import nss13Img from "../assets/Assets/nss13.jpeg";
import nss18Img from "../assets/Assets/nss18.jpeg";

// Titles + descriptions for images
const nssPhotoData = {
  1: { title: "Yuva nidhi Drive", desc: "Special Drive for Yuva Nidhi." },
  2: { title: "College Cleaning Activity", desc: "Helping the community with service activities." },
  3: { title: "Library day", desc: "Attending World library day at Ambedkar Bhavan." },
  4: { title: "National unity Day", desc: "Oraganized and conducted a National Unity Day rally to promote the spirit of unity and intergration amoungbstudents" },
  5: { title: "Blood Donation", desc: "Conducted Blood donation camp at our college in collaboration with an authorized blood bank." },
  6: { title: "cleanliness Drive ", desc: "Cleaning Highway road for awareness ." },
  7: { title: "Cultural Program", desc: "Students performing to spread cultural awareness." },
  8: { title: "Awareness Rally", desc: "Marching to spread awareness on social issues." },
  9: { title: " 1 day Laedership camp", desc: "Attending 1-daay Leadership camp at Alvas College" },
  10: { title: "Seniors Farewell", desc: "Celebrtion of NSS volunteers farewell." },
  11: { title: "Story of Ambekar ", desc: "Informative talk conducted by students in NSS class." },
  12: { title: "Workshop", desc: "Interactive workshop for personality development." },
  13: { title: " NSS class", desc: "Conducting classes for students to help them overcome stage fear." },
  14: { title: " Weekly cleaning session", desc: "Following the information sessions and activities, weekly cleaning drives will be conducted." },
  16: { title: "Annual Camp", desc: "Informative Program conducted in annual camp." },
  17: { title: "Special Camp", desc: "Student selected for Leadership camp sullia." },
  20: { title: "Annual camp", desc: "Inaugration of Annual camp of 1 week." },
  21: { title: "Cultural Dance", desc: "Traditional performances by volunteers." },
  18: { title: "Annual Camp", desc: "Annual camp food Students having lunch in annual camp." },
};

const galleryItems = [
  { type: "image", src: nssImg, ...nssPhotoData[1] },
  { type: "image", src: nss1Img, ...nssPhotoData[2] },
  { type: "image", src: nss2Img, ...nssPhotoData[3] },
  { type: "image", src: nss3Img, ...nssPhotoData[4] },
  { type: "image", src: nss4Img, ...nssPhotoData[5] },
  { type: "image", src: nss5Img, ...nssPhotoData[6] },
  { type: "image", src: nss6Img, ...nssPhotoData[7] },
  { type: "image", src: nss7Img, ...nssPhotoData[8] },
  { type: "image", src: nss8Img, ...nssPhotoData[9] },
  { type: "image", src: nss9Img, ...nssPhotoData[10] },
  { type: "image", src: nss10Img, ...nssPhotoData[11] },
  { type: "image", src: nss11Img, ...nssPhotoData[12] },
  { type: "image", src: nss12Img, ...nssPhotoData[13] },
  { type: "image", src: nss13Img, ...nssPhotoData[14] },
  { type: "image", src: nss18Img, ...nssPhotoData[18] },
];

// ...existing code for NSSGallery component.

export default function NSSGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextMedia = () => setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  const prevMedia = () => setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  const selectedMedia = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        NSS Gallery
      </h1>
      {/* Grid Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 25px rgba(255, 215, 0, 0.9)",
              backgroundColor: "rgba(255, 215, 0, 0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer bg-white group transition-all duration-300"
            onClick={() => openModal(idx)}
          >
            {/* Border Reveal Animation */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 rounded-xl border-4 border-yellow-400 pointer-events-none"
            />
            {/* Dashed Animated Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-dashed border-yellow-500 animate-[dash_3s_linear_infinite] pointer-events-none" />
            {/* Media */}
            {item.type === "image" ? (
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-60 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-60 object-cover"
              />
            )}
            {/* Bottom Description Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-3 py-2 text-center transition-all duration-300 group-hover:bg-yellow-50">
              <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
              <p className="text-xs font-bold text-gray-700 mt-1 glow-text">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            {/* Starry Background Animation */}
            <div className="absolute inset-0 bg-black bg-opacity-80 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                ></span>
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full px-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev/Next buttons with gradient */}
              <button
                onClick={prevMedia}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-3 py-2 rounded-full bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] hover:opacity-90 transition"
              >
                ‹
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-3 py-2 rounded-full bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] hover:opacity-90 transition"
              >
                ›
              </button>
              {/* Media content */}
              {selectedMedia.type === "image" ? (
                <motion.img
                  key={selectedMedia.src}
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[80vh] object-contain rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <motion.video
                  key={selectedMedia.src}
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              {/* Title & description in modal */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-white mt-4"
              >
                <h2 className="text-xl font-bold">{selectedMedia.title}</h2>
                <p className="text-sm font-bold glow-text mt-1">{selectedMedia.desc}</p>
              </motion.div>
              {/* Close button with gradient */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] text-white font-semibold rounded-full hover:opacity-90 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Custom Keyframes */}
      <style>{`
        @keyframes dash {
          to {
            background-position: 40px 0;
          }
        }
        .animate-[dash_3s_linear_infinite] {
          background-image: linear-gradient(90deg, gold 50%, transparent 0);
          background-size: 40px 2px;
          border: none;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle infinite;
        }
        @keyframes glow {
          0% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffa500, 0 0 15px #ff8c00; }
          50% { text-shadow: 0 0 10px #ffb700, 0 0 20px #ffa500, 0 0 30px #ff8c00; }
          100% { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffa500, 0 0 15px #ff8c00; }
        }
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}