import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// 🟢 LOCAL IMAGES
import nss1 from "../assets/images/nssclass1.jpeg";
import nss2 from "../assets/images/nssclass2.jpeg";
import nss3 from "../assets/images/nssclass3.jpeg";
import nss4 from "../assets/images/nssclass4.jpeg";
import nss5 from "../assets/images/nssclass5.jpeg";

import awareness1 from "../assets/images/awareness1.jpeg";
import awareness2 from "../assets/images/awareness2.jpeg";
import awareness3 from "../assets/images/awareness3.jpeg";
import awareness4 from "../assets/images/awareness4.jpeg";
import awareness5 from "../assets/images/awareness5.jpeg";

import college1 from "../assets/images/college1.jpg";
import college2 from "../assets/images/college2.jpeg";
import college3 from "../assets/images/college3.jpg";



import camp1 from "../assets/images/camp1.jpg";
import camp2 from "../assets/images/camp2.jpg";
import camp3 from "../assets/images/camp3.jpg";

import blood1 from "../assets/images/blood1.jpeg";
import blood2 from "../assets/images/blood2.jpeg";
import blood3 from "../assets/images/blood3.jpeg";

export default function Activities() {
  const activities = useMemo(
    () => [
      {
        title: "NSS Classes",
        desc:
          "Regular sessions are held to educate volunteers about leadership, social responsibility, and community engagement. These classes include interactive discussions on health, environment, and development. Students also receive training on organizing events and building team collaboration. NSS classes lay a strong foundation for shaping students into active citizens.",
        details: `NSS classes teach leadership, discipline, teamwork, and social responsibility.`,
        images: [nss1, nss2, nss3, nss4, nss5],
      },
      {
        title: "Awareness Programs",
        desc:
          "Awareness campaigns focus on  drug awareness health, environment, and social issues. Volunteers engage in rallies, and poster-making to educate the community.These programs promote dialogue and understanding within society.",
        details: `Programs to educate communities on health, environment, and social issues.`,
        images: [awareness1, awareness2, awareness3, awareness4, awareness5],
      },
      {
        title: "Initiatives for College Development",
        desc:
          "NSS volunteers contribute to a cleaner, greener, and better college environment. Activities include cleanliness drives, tree planting, wall painting, and assisting in campus events. These initiatives foster responsibility, teamwork, and pride in maintaining the institution’s infrastructure.",
        details: `Activities to improve and maintain the college environment.`,
        images: [college1, college2, college3],
      },
      {
        title: "Annual 7-Day Camp",
        desc:
          "A yearly residential camp is organized in an adopted village. Volunteers participate in road repairs, sanitation awareness, and educational programs. The camp fosters cultural exchange and allows students to experience rural life while contributing to community upliftment.",
        details: `A week-long camp in a village for community work and cultural exchange.`,
        images: [camp1, camp2, camp3],
      },
      {
        title: "Blood Camp",
        desc:
          "Organized in collaboration with hospitals, these camps promote voluntary blood donation. Volunteers manage registrations, raise awareness, and assist medical teams. It encourages students to contribute to a life-saving cause and spread the message of selfless service.",
        details: `Voluntary blood donation camps organized with local hospitals.`,
        images: [blood1, blood2, blood3],
      },
    ],
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedIndex(null);
    setImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const showPrevActivity = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
    setImageIndex(0);
  }, [activities.length]);

  const showNextActivity = useCallback(() => {
    setSelectedIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  }, [activities.length]);

  const showPrevImage = useCallback(() => {
    setImageIndex((prev) =>
      prev === 0 ? activities[selectedIndex].images.length - 1 : prev - 1
    );
  }, [selectedIndex, activities]);

  const showNextImage = useCallback(() => {
    setImageIndex((prev) =>
      prev === activities[selectedIndex].images.length - 1 ? 0 : prev + 1
    );
  }, [selectedIndex, activities]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKey = (e) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key.toLowerCase() === "a") showPrevActivity();
        if (e.key.toLowerCase() === "d") showNextActivity();
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [selectedIndex, showPrevImage, showNextImage, showPrevActivity, showNextActivity]);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-6 text-center">
        NSS Activities Overview
      </h2>

      {/* 👇 Summary Paragraph (as requested) */}
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
        The National Service Scheme (NSS) at our college nurtures students into socially responsible leaders through service-oriented activities. 
        From campus development to rural outreach, NSS empowers youth to contribute meaningfully to society. 
        Key events like <strong>NSS Day (September 24)</strong> and <strong>World Environment Day (June 5)</strong> are celebrated to instill values of sustainability, unity, and service. 
        Through hands-on experiences, NSS cultivates empathy, discipline, and national pride in every volunteer.
      </p>

      {/* First row: 3 cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10">
        {activities.slice(0, 3).map((activity, index) => (
          <ActivityCard
            key={index}
            activity={activity}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* Second row: 2 cards centered */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 justify-center">
        {activities.slice(3).map((activity, index) => (
          <ActivityCard
            key={index + 3}
            activity={activity}
            onClick={() => setSelectedIndex(index + 3)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full h-screen sm:max-w-3xl flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="sticky top-0 bg-white flex justify-between items-center p-4 z-50 border-b">
                <button
                  onClick={showPrevActivity}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-700"
                >
                  Prev Activity
                </button>
                <button
                  onClick={closeModal}
                  className="bg-yellow-600 text-white p-2 rounded-full shadow-md hover:bg-yellow-700"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={showNextActivity}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-700"
                >
                  Next Activity
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                {activities[selectedIndex].images.length > 0 && (
                  <div className="relative">
                    <img
                      src={activities[selectedIndex].images[imageIndex]}
                      alt={activities[selectedIndex].title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <button
                      onClick={showPrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full shadow-md hover:bg-yellow-700"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full shadow-md hover:bg-yellow-700"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center mt-3 mb-2">
                      {activities[selectedIndex].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setImageIndex(idx)}
                          className={`w-3 h-3 mx-1 rounded-full ${
                            idx === imageIndex ? "bg-yellow-600" : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4">
                    {activities[selectedIndex].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {activities[selectedIndex].details}
                  </p>
                  <div className="h-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ✅ Card Component
function ActivityCard({ activity, onClick }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="cursor-pointer" onClick={onClick}>
        <img
          src={activity.images[0]}
          alt={activity.title}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
        <p className="text-white/90 mb-4">{activity.desc}</p>
        <button
          onClick={onClick}
          className="bg-white text-yellow-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-100 transition"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
}
