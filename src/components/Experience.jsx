import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer Intern",
    company: "FirstRicoz Private Limited (Remote)",
    duration: "Sep 2023 - July 2024",
    details: [
      "Delivered intuitive, user-friendly designs aligned with brand identity.",
      "Created wireframes, prototypes, and design systems in Figma ensuring brand consistency.",
      "Received a Certificate of Completion for outstanding performance as a UI/UX Designer.",
      "Developed responsive landing pages using React.js, ensuring optimized UI performance and accessibility.",
      "Created and integrated secure RESTful APIs with authentication and data validation.",
      "Collaborated with developers to design, implement, and deploy new features."
    ],
  },
  {
    role: "MERN Trainee",
    company: "Programming Pathshala, Noida Sec-62",
    duration: "Jan 2025 - June 2025",
    details: [
      "Built a full-stack e-commerce platform using React.js, Redux, Node.js, Express.js, and MongoDB.",
      "Designed and implemented secure CRUD APIs for products, users, and cart operations.",
      "Integrated JWT-based authentication and authorization for login, signup, and session handling.",
      "Developed a fully responsive UI with Tailwind CSS for smooth user experience across devices.",
      "Worked on a full-stack real estate web platform using React.js and Tailwind CSS.",
      "Integrated Firebase Authentication for secure user signup, login, and sessions.",
      "Developed backend RESTful APIs and MongoDB database integration for scalable data."
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          Experience
        </motion.h2>

        <div className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.3 }}
              className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-purple-400 mb-1">{exp.role}</h3>
              <p className="text-gray-400 italic mb-3">{exp.company} &mdash; {exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
