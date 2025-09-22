import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../assets/Assets/NSS-logo.png";
import StudentProfileCarousel from "../components/StudentProfileCarousel";

// Images
import img1 from "../assets/achievements/rd1.jpg";
import img2 from "../assets/achievements/rd2.jpg";
import img3 from "../assets/achievements/rd3.jpg";
import img4 from "../assets/achievements/rd4.jpg";
import img5 from "../assets/achievements/rd5.jpg";
import img6 from "../assets/achievements/rd6 (2).jpeg";
import volunteer1 from "../assets/achievements/vol1.jpg";
import volunteer2 from "../assets/achievements/vol2.jpg";
import volunteer3 from "../assets/achievements/vol3.jpeg";
import coordinator from "../assets/achievements/coord.jpg";
import nic1 from "../assets/achievements/nic1.jpg";
import interview1 from "../assets/achievements/inter1.jpg";
import interview2 from "../assets/achievements/inter2.jpg";
import interview3 from "../assets/achievements/inter3.jpg";

export default function Achievements() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  const achievements = [
    {
      title: "Students Selected for Republic Day Parade",
      desc: "Six of our dedicated NSS volunteers were selected to represent our unit at the prestigious Republic Day Parade. Their relentless efforts, discipline, and dedication towards social service truly set them apart.",
      members: [
        { name: "Samruddha", img: img1, desc: "Represented the unit with pride at the national RD camp." },
        { name: "Rakshith", img: img2, desc: "Showed exemplary discipline and leadership during the parade." },
        { name: "Santhosh", img: img3, desc: "Demonstrated excellent teamwork and precision." },
        { name: "Deeksha", img: img4, desc: "Represented NSS with honor." },
        { name: "Nithin G", img: img5, desc: "A role model with tireless service and inspiring energy." },
        { name: "Vaishnavi", img: img6, desc: "Focused, determined, and respectful." },
      ],
    },
    {
      title: "Best NSS Volunteer Award",
      desc: "Received the prestigious Best NSS Volunteer Award, recognizing outstanding service, leadership, and dedication.",
      members: [
        { name: "Likhith", img: volunteer1, desc: "Led multiple health camps and awareness initiatives." },
        { name: "Deeksha", img: volunteer2, desc: "Excelled in organizing environmental campaigns." },
        { name: "Rajendra S", img: volunteer3, desc: "Proved true service begins with selfless commitment." },
      ],
    },
    {
      title: "Best NSS Coordinator Award",
      desc: "Our coordinator was honored with the Best NSS Coordinator Award for exceptional leadership and community service.",
      members: [
        { name: "Santhosh Kumar P", img: coordinator, desc: "Strategically led the unit with dedication." },
      ],
    },
    {
      title: "Students Selected for National Integration Camp",
      desc: "Five enthusiastic volunteers represented our NSS unit at the National Integration Camp promoting unity and cultural exchange.",
      members: [
        { name: "NIC Team 2023", img: nic1, desc: "Promoted harmony and mutual respect." },
      ],
    },
    {
      title: "Students Selected for RD Parade Interview",
      desc: "Several students cleared the initial stages for the RD Parade interview rounds, showcasing discipline, confidence, and leadership.",
      members: [
        { name: "Bhavith Kulal", img: interview1, desc: "Impressed judges with deep understanding of NSS." },
        { name: "Santhosh", img: interview2, desc: "Showed strong communication and leadership potential." },
        { name: "Ananya Lakshmi C.H", img: interview3, desc: "Demonstrated maturity and awareness." },
      ],
    },
  ];

  const openModal = (ach, idx) => {
    setSelected(ach);
    setIndex(idx);
  };

  const nextModal = useCallback(() => {
    setIndex((i) => (i + 1) % selected.members.length);
  }, [selected]);

  const prevModal = useCallback(() => {
    setIndex((i) => (i - 1 + selected.members.length) % selected.members.length);
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextModal();
      else if (e.key === "ArrowLeft") prevModal();
      else if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    let autoSlideTimer;
    if (autoSlide) {
      autoSlideTimer = setInterval(() => {
        nextModal();
      }, 4000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(autoSlideTimer);
    };
  }, [selected, nextModal, prevModal, autoSlide]);

  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section className="py-12 border-b border-yellow-400 bg-gradient-to-r from-yellow-100 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img
            src={logo}
            alt="NSS Logo"
            className="mx-auto w-28 h-28 rounded-full border-4 border-yellow-500 shadow mb-4"
          />
          <h1 className="text-5xl font-extrabold text-yellow-700 mb-4">NSS Achievements</h1>
          <p className="text-lg leading-relaxed text-yellow-800/80">
            Our NSS unit consistently shines in leadership and community service. From Republic Day Parades to social innovations, our volunteers are making a difference.
          </p>
        </div>
      </section>

      <StudentProfileCarousel />

      {/* Achievement Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="bg-[#fffaf0] p-8 rounded-xl border border-[#e6c173]/60 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#8b5a2b] mb-4">{ach.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{ach.desc}</p>
              <button
                onClick={() => openModal(ach, 0)}
                className="bg-[#b8860b] text-white px-5 py-2 rounded-full hover:bg-[#8b5a2b] transition"
              >
                View Members
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white text-black rounded-xl p-6 max-w-4xl w-full relative shadow-lg border"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selected.members[index].name}</h3>
                <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-red-500">
                  <X size={28} />
                </button>
              </div>

              {/* Image + Nav */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button onClick={prevModal} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <ChevronLeft size={24} />
                </button>

                <motion.div
                  className="w-[320px] h-[320px] bg-white border border-gray-300 rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                >
                  <img src={selected.members[index].img} alt="Member" className="object-cover w-full h-full" />
                </motion.div>

                <button onClick={nextModal} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="max-h-40 overflow-y-auto px-2">
                <p className="text-md leading-relaxed text-gray-800">{selected.members[index].desc}</p>
              </div>

              <div className="mt-4 text-right text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={autoSlide} onChange={() => setAutoSlide(!autoSlide)} />
                  Auto Slide
                </label>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
