import { motion } from "framer-motion";
import { Flag, Users, Leaf, Target } from "lucide-react";

export default function History() {
  return (
    <div className="bg-gradient-to-b from-[#fff7e6] via-[#fff2cc] to-[#ffe599] min-h-screen text-gray-800">
      {/* History Section - Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6"
      >
        <h2 className="text-4xl font-extrabold text-[#b8860b] mb-12 text-center">
          History of NSS
        </h2>

        <div className="relative border-l-4 border-[#b8860b] pl-10">
          {[
            {
              year: "1969",
              title: "Birth of NSS",
              desc: [
                "Launched on 24th September 1969 during Gandhiji’s centenary year.",
                "Started with 37 universities involving 40,000 volunteers.",
                "Aimed to engage youth in nation-building and voluntary service.",
                "Logo inspired by the Konark Sun Temple wheel symbolizing progress.",
              ],
              icon: <Flag className="w-8 h-8 text-[#b8860b]" />,
            },
            {
              year: "1970s–1980s",
              title: "Nationwide Expansion",
              desc: [
                "Expanded across all states, universities, and colleges of India.",
                "Focused on literacy campaigns, blood donation, and sanitation drives.",
                "Volunteers actively worked in rural development and disaster relief.",
              ],
              icon: <Users className="w-8 h-8 text-[#b8860b]" />,
            },
            {
              year: "1990s",
              title: "Development & Awareness",
              desc: [
                "Prioritized environment protection, women empowerment, and health.",
                "Conducted Pulse Polio and HIV/AIDS awareness campaigns.",
                "Tree plantation drives and youth leadership programs were initiated.",
              ],
              icon: <Leaf className="w-8 h-8 text-[#b8860b]" />,
            },
            {
              year: "2000s–Present",
              title: "Global Recognition",
              desc: [
                "NSS strength grew to over 3.2 million volunteers nationwide.",
                "Introduced National Integration Camps & Youth Exchange Programs.",
                "NSS volunteers represent India in disaster relief and climate action.",
                "Continues to build unity, service, and responsible citizenship.",
              ],
              icon: <Target className="w-8 h-8 text-[#b8860b]" />,
            },
            {
  year: "2014",
  title: "Digital India Contributions",
  desc: [
    "NSS began promoting digital literacy in villages.",
    "Volunteers organized workshops for online banking & e-governance.",
    "Bridged the digital divide by supporting rural communities.",
  ],
  icon: <Target className="w-8 h-8 text-[#b8860b]" />, // you can change icon
},

          ].map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Icon bubble */}
              <div className="absolute -left-14 top-4 bg-[#fff7e6] border-2 border-[#b8860b] rounded-full p-3 shadow-md">
                {event.icon}
              </div>

              {/* Card */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#8b5a2b] mb-2">
                  {event.year}
                </h3>
                <h4 className="text-lg font-semibold mb-3">{event.title}</h4>
                <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-2">
                  {event.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}