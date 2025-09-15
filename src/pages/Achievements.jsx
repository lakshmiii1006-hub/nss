import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import logo from "../assets/NSS-logo.png";
import StudentProfileCarousel from "../components/StudentProfileCarousel";


// Dummy images
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
  const [dark, setDark] = useState(false);
  const [autoSlide, setAutoSlide] = useState(false);

  const achievements = [
    {
      title: "Students Selected for Republic Day Parade",
      desc: "Six of our dedicated NSS volunteers were selected to represent our unit at the prestigious Republic Day Parade. Their relentless efforts, discipline, and dedication towards social service truly set them apart. Being chosen for this honor reflects months of training, perseverance, and leadership qualities. Each student showcased the values of selfless service, unity, and commitment. Their participation has inspired juniors to strive for excellence. This selection highlights the recognition our NSS unit has gained nationally.",
      members: [
        { name: "Samruddha", img: img1, desc: "Represented the unit with pride at the national RD camp. A true symbol of discipline, perseverance, and NSS values, contributing throughout the selection and training." },
        { name: "Rakshith", img: img2, desc: "Showed exemplary discipline and leadership during the parade, setting an example for future volunteers through unwavering commitment and performance." },
        { name: "Santhosh", img: img3, desc: "Demonstrated excellent teamwork and precision. Played a vital role in motivating fellow volunteers and representing cultural diversity." },
        { name: "Deeksha", img: img4, desc: "Represented NSS with honor. Known for dedication, punctuality, and active participation during the selection camps and training sessions." },
        { name: "Nithin G", img: img5, desc: "A role model with tireless service and inspiring energy. Helped guide peers and maintained NSS values throughout the journey." },
        { name: "Vaishnavi", img: img6, desc: "Focused, determined, and respectful, stood out during interviews and parade practices. Brought pride to our institution." },
      ],
    },
    {
      title: "Best NSS Volunteer Award",
      desc: " Received the prestigious Best NSS Volunteer Award, recognizing their outstanding service, leadership, and dedication. They went beyond academics to engage in social causes, leading health camps, awareness drives, and environmental campaigns. Their journey reflects the true spirit of NSS – not me but you. This honor is a testimony to their constant involvement in social betterment, their role in guiding peers, and their ability to inspire change in society. The recognition motivates other volunteers to aim higher.",
      members: [
        { name: "Likhith", img: volunteer1, desc: "Led multiple successful health camps and awareness initiatives, demonstrating strong leadership and organizational skills that inspired many." },
        { name: "Deeksha", img: volunteer2, desc: "Excelled in organizing environmental campaigns and motivating team members to maintain momentum throughout various drives and events." },
        { name: "Rajendra S", img: volunteer3, desc: "Leadership is not about titles or positions—it's about impact, influence, and inspiration. Rajendra's journey in NSS proves that true service begins with selfless commitment."}
      ],
    },
    {
      title: "Best NSS Coordinator Award",
      desc: "Our coordinator was honored with the Best NSS Coordinator Award for exceptional leadership and contribution to community service. Their vision, planning, and ability to bring together students, teachers, and community members played a vital role in the success of numerous NSS activities. The award acknowledges their consistent commitment, ability to manage large teams, and relentless dedication. Under their guidance, the unit has achieved milestones that have received recognition at the university and national level. A proud moment for our entire NSS family.",
      members: [{ name: "Santhosh Kumar P", img: coordinator, desc: "Strategically led the unit with dedication, handled multiple NSS events smoothly, and maintained team harmony across various departments." }],
    },
    {
      title: "Students Selected for National Integration Camp",
      desc: "A team of five enthusiastic volunteers represented our NSS unit at the National Integration Camp. The camp brought together students from diverse regions, promoting unity, cultural exchange, and national spirit. Our team actively participated in discussions, cultural activities, and community projects, leaving a lasting impression on peers across India. Their journey emphasized teamwork, respect for diversity, and the spirit of one nation, one family. It showcased how NSS volunteers embody values that transcend boundaries and inspire harmony.",
      members: [
        { name: "NIC Team 2023", img: nic1, desc: "Contributed to cultural exchange, shared insights, and built lasting connections. Played a key role in promoting harmony and mutual respect." },
      ],
    },
    {
      title: "Students Selected for RD Parade Interview",
      desc: "Several students from our NSS unit cleared the initial stages and were selected for the Republic Day Parade interview rounds. This itself is a proud achievement as it reflects their discipline, confidence, and communication skills. The interview process was rigorous, testing knowledge of social issues, awareness of NSS activities, and leadership potential. Their performance highlighted the strength of our NSS training programs. Even though not all proceeded to the final parade, the experience boosted their confidence and showcased our unit's talent.",
      members: [
        { name: "Bhavith Kulal", img: interview1, desc: "Impressed judges with deep understanding of NSS objectives, social responsibility, and community outreach programs." },
        { name: "Santhosh", img: interview2, desc: "Showed strong communication and leadership potential, confidently presenting solutions for local and national issues." },
        { name: "Ananya Lakshmi C.H", img: interview3, desc: "Demonstrated maturity, awareness, and public speaking skills during interview rounds. Set a positive example for peers." },
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

  // Keyboard + auto slide
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
    <main className={`${dark ? "bg-[#1a1a1a] text-white" : "bg-white text-black"} min-h-screen transition duration-300`}>
      {/* Theme Toggle */}
      <div className="absolute top-5 right-5 flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full transition"
          title="Toggle theme"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Header */}
      <section className="py-12 border-b border-[#e6c173] bg-gradient-to-r from-[#fff8e1] to-white dark:from-[#2a2a2a] dark:to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src={logo} alt="NSS Logo" className="mx-auto w-28 h-28 rounded-full border-4 border-[#b8860b] shadow mb-4" />
          <h1 className="text-5xl font-extrabold text-[#8b5a2b] dark:text-yellow-300 mb-4">NSS Achievements</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our NSS unit consistently shines in leadership and community service.
            From Republic Day Parades to social innovations, our volunteers are making a difference.
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
              className="bg-[#fffaf0] dark:bg-[#2a2a2a] p-8 rounded-xl border border-[#e6c173]/60 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#8b5a2b] dark:text-yellow-300 mb-4">{ach.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{ach.desc}</p>
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
              className={`${
                dark ? "bg-[#1a1a1a] text-white" : "bg-white text-black"
              } rounded-xl p-6 max-w-4xl w-full relative shadow-lg border`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selected.members[index].name}</h3>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-red-500">
                  <X size={28} />
                </button>
              </div>

              {/* Image + Navigation */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button onClick={prevModal} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                  <ChevronLeft size={24} />
                </button>

                <motion.div
                  className="w-[320px] h-[320px] bg-white dark:bg-[#2a2a2a] border border-gray-300 rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                >
                  <img src={selected.members[index].img} alt="Member" className="object-cover w-full h-full" />
                </motion.div>

                <button onClick={nextModal} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Description Box */}
              <div className="max-h-40 overflow-y-auto px-2">
                <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
                  {selected.members[index].desc}
                </p>
              </div>

              {/* Auto-slide toggle */}
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

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-12">
        © {new Date().getFullYear()} NSS Unit. All rights reserved.
      </footer>
    </main>
  );
}


