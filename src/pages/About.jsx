import { motion } from "framer-motion";
import { HeartHandshake, Globe, BadgeInfo, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cleaning1 from "../assets/Assets/nss15.jpeg";
import bgAbout from "../assets/Assets/bg2.jpeg";
import historyImg from "../assets/Assets/nss28.jpeg";
import nssLogo from "../assets/Assets/NSS-logo.png"; // NSS logo
import cleaning from "../assets/Assets/nss14.jpeg";
export default function About() {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const objectives = [
    "Understand the community in which they work.",
    "Understand themselves in relation to their community.",
    "Identify the needs and problems of the community and involve them in problem-solving.",
    "Develop among themselves a sense of social and civic responsibility.",
    "Utilize their knowledge in finding practical solutions to individual and community problems.",
    "Develop competence required for group-living and sharing of responsibilities.",
    "Gain skills in mobilizing community participation.",
    "Acquire leadership qualities and democratic attitudes.",
  ];

  const benefits = [
    "Discipline",
    "Timing Sense",
    "Living Together",
    "Dignity of Labour",
    "Effective Public Speaking",
    "Stage Fear Removal",
    "Talent Show",
    "Personality Development",
    "Self Confidence",
    "National Integration",
  ];

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md">
            About NSS
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            National Service Scheme (NSS) – A journey of youth towards
            selflessness and service.
          </p>
        </div>
      </section>

      {/* What is NSS */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={imageVariants} className="flex justify-center">
            <img
              src={cleaning}
              alt="What is NSS"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md max-h-72"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent text-center">
              What is NSS?
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              The <span className="font-semibold">National Service Scheme (NSS)</span>{" "}
              is a public service program sponsored by the Government of India.
              Established in 1969, it aims to foster social welfare among students.
              NSS volunteers work to ensure that everyone who is needy gets help to
              enhance their standard of living and lead a life of dignity.
            </p>
            <p className="mt-3 text-lg text-gray-800 leading-relaxed">
              NSS promotes the idea of student youth as change agents in society.
              Through various community-based activities like blood donation camps,
              village development, literacy programs, and environmental awareness,
              NSS shapes students into responsible citizens.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* History */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8"
        >
          <motion.div variants={textVariants}>
            <Globe className="w-12 h-12 text-[#b8860b] mb-3 mx-auto" />
            <h2 className="text-3xl font-bold text-[#b8860b] mb-3 text-center">
              History of NSS
            </h2>
            <p className="text-lg leading-relaxed mb-3 text-center">
              The National Service Scheme was launched on{" "}
              <span className="font-semibold">24th September 1969</span>, the
              birth centenary year of Mahatma Gandhi, with 40,000 volunteers across
              37 universities. Today, it has grown into a movement involving millions
              of youth across India.
            </p>
            <p className="italic text-[#8b5a2b] mb-3 text-center">
              “Not Me, But You” has remained the guiding philosophy since its
              inception.
            </p>
            <div className="text-center">
              <button
                onClick={() => navigate("/history")}
                className="mt-2 text-[#b8860b] font-semibold hover:underline"
              >
                View More →
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* NSS Day */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={imageVariants} className="flex justify-center">
            <img
              src={historyImg}
              alt="NSS Day"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md max-h-72"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <h2 className="text-3xl font-bold text-[#b8860b] mb-3 text-center">
              NSS Day
            </h2>
            <p className="text-lg leading-relaxed text-center">
              NSS was formally launched on{" "}
              <span className="font-semibold">24th September, 1969</span>, the
              birth centenary year of the Father of the Nation. Since then,
              <span className="font-semibold"> 24th September </span> has been
              celebrated every year as NSS Day with appropriate programmes and
              activities.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Objectives */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent text-center">
          Objectives of NSS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl p-5 flex items-start gap-3 border-l-4 border-[#b8860b]"
            >
              <Star className="w-6 h-6 text-[#b8860b] mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-800 leading-relaxed">{obj}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Motto */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8"
        >
          <motion.div variants={textVariants}>
            <HeartHandshake className="w-12 h-12 text-[#b8860b] mb-3 mx-auto" />
            <h2 className="text-3xl font-bold text-[#b8860b] mb-3 text-center">
              Our Motto
            </h2>
            <p className="text-lg leading-relaxed text-center">
              The motto of NSS, <span className="font-bold">“Not Me, But You”</span>,
              reflects the spirit of selfless service and empathy. It emphasizes
              living together, working together, and growing together in harmony.
            </p>
            <p className="mt-3 text-[#8b5a2b] font-medium text-center">
              Quote: NSS is an experience that lasts a lifetime.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* NSS Logo */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={imageVariants} className="flex justify-center">
            <img
              src={nssLogo}
              alt="NSS Logo"
              className="rounded-full shadow-lg object-contain w-56 h-56 border-4 border-[#b8860b]"
            />
          </motion.div>
          <motion.div variants={textVariants}>
            <BadgeInfo className="w-12 h-12 text-[#b8860b] mb-3 mx-auto" />
            <h2 className="text-3xl font-bold text-[#b8860b] mb-3 text-center">
              NSS Logo
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed text-left md:text-center">
              <li>
                Logo is based on the giant Rath Wheel of the world famous Konark
                Sun Temple.
              </li>
              <li>
                The <span className="font-semibold text-red-600">Red</span> &{" "}
                <span className="font-semibold text-blue-600">Blue</span> colors
                motivate NSS Volunteers to be active & energetic for nation-building
                social activities.
              </li>
              <li>
                The wheel stands for continuity as well as change i.e continuous
                striving for social change.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* NSS Activities */}
      <motion.section
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-[#b8860b] bg-white/20 backdrop-blur-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <motion.div variants={imageVariants} className="flex justify-center">
            <img
              src={cleaning1} // replace with your activities image
              alt="NSS Activities"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md max-h-72"
            />
          </motion.div>
          <motion.div variants={textVariants} className="text-center">
            <h2 className="text-3xl font-bold text-[#b8860b] mb-3">
              NSS Activities
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              NSS organizes diverse activities such as{" "}
              <span className="font-semibold">cleanliness drives, blood donation camps,
              plantation programmes, rural development initiatives, literacy campaigns,
              and health awareness rallies</span>. These activities instill a sense of
              social responsibility and teamwork among students while making a positive
              impact in the community.
            </p>
            <button
              onClick={() => navigate("/activities")}
              className="mt-2 text-[#b8860b] font-semibold hover:underline"
            >
              Learn More →
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto py-12 px-6"
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#b8860b] to-[#8b5a2b] bg-clip-text text-transparent text-center">
          Benefits of NSS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl p-5 flex items-start gap-3 border-l-4 border-[#b8860b]"
            >
              <Award className="w-6 h-6 text-[#b8860b] mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-800 leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}