import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Import student images
import sushmitha from "../assets/students/student.jpeg";
import deeksha from "../assets/students/student2.jpg";
import rajendra from "../assets/students/student3.jpeg";
import vamsha from "../assets/students/student4.jpeg";

function StudentProfileCarousel() {
  const students = [
    {
      name: "Sushmitha K",
      years: "2016–2019",
      course: "Diploma in Chemical Engineering",
      achievements: [
        "3 local level camps, 1 state, 1 national",
        "2016 - National Level Camp, Udupi",
        "2019 - KPT NSS Unit Leader",
        "2019 - State Level Camp - Best Volunteer & Leader",
        "2019 - Mysuru Division Camp - Guest Leader",
        "Nominated for Best Volunteer Female 2018–19",
        "Hosted and participated in many cultural programs",
      ],
      image: sushmitha,
    },
    {
      name: "Deeksha",
      years: "2020–2023",
      course: "Diploma in Chemical Engineering",
      achievements: [
        "Participated in National Integration Camp - 2022",
        "Participated in Pre RD Parade Camp",
        "State RD Parade Camp - 2023",
        "Honoured with Best State NSS Volunteer Award - 2022–23",
      ],
      image: deeksha,
    },
    {
      name: "Rajendra S",
      years: "2014–2017",
      course: "Diploma in Chemical Engineering",
      achievements: [
        "Annual Camp 1 at Tenka Ermal",
        "Annual Camp 2 at Ulayibettu, Vamanjooru",
        "Cleaning Awareness Camp at Shakthinagara",
        "Leadership Camp at KVG Sullia",
        "Division Level Camp at Bhagepalli",
        "State Level Camp at BVVS Bagalkot",
        "NIC at MGM Udupi",
        "Team Coordinator – Team KPT (Ramakrishna Mission Swachh Mangaluru Abhiyan)",
        "Best Male Volunteer 2016–17 – State NSS Award",
      ],
      image: rajendra,
    },
    {
      name: "Vamshavahini",
      years: "2019–2022",
      course: "Diploma in Civil Engineering",
      achievements: [
        "Participated in Division Level Camp",
        "2-Day Navigator Camp",
        "Selected & Participated in Pre RD Camp",
      ],
      image: vamsha,
    },
  ];

  const [current, setCurrent] = useState(0);
  const student = students[current];

  const nextStudent = () => {
    setCurrent((prev) => (prev + 1) % students.length);
  };

  const prevStudent = () => {
    setCurrent((prev) => (prev - 1 + students.length) % students.length);
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          key={student.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#fffaf0] p-8 rounded-xl border border-[#e6c173]/60 shadow-lg text-center"
        >
          <div className="mb-6">
            <img
              src={student.image}
              alt={student.name}
              className="w-64 h-64 mx-auto object-cover rounded-xl border-4 border-[#b8860b] shadow"
            />
          </div>

          <h2 className="text-2xl font-bold text-[#8b5a2b] mb-1">{student.name}</h2>
          <p className="italic text-gray-600">{student.years}</p>
          <p className="font-semibold mb-4 text-gray-800">{student.course}</p>

          <ul className="text-left list-disc list-inside text-gray-700 space-y-1 max-h-40 overflow-y-auto px-4">
            {student.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prevStudent}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Previous
            </button>
            <button
              onClick={nextStudent}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StudentProfileCarousel;
