import { motion } from "framer-motion";

const education = [
  { degree: "Bachelor of Technology, Electronics & Communication Engineering", institution: "Ajay Kumar Garg Engineering College", duration: "2021 - 2025" },
  { degree: "Intermediate", institution: "Modern Science School", duration: "2019" },
  { degree: "High School", institution: "Modern Science School", duration: "2017" }
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
              className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-purple-400 mb-1">{edu.degree}</h3>
              <p className="text-gray-400 italic">{edu.institution}</p>
              <p className="text-gray-400">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
