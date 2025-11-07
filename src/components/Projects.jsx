import { motion } from "framer-motion";

const projects = [
  {
    title: "SnapBuy E-Commerce Web Application",
    description: "A full-stack e-commerce platform with React frontend and Node.js backend.",
    techStack: "React, Redux, Node.js, Express.js, MongoDB",
    liveDemo: "frontend-v1-shopping-app.vercel.app", // You can replace with the actual deployed link if different
    github: "https://github.com/rijwanofficials/Frontend-v1-Shopping-App"
  },
  {
    title: "PropBot Real Estate Web Application",
    description: "Responsive real estate platform featuring property listing, search, filtering, and secure Firebase authentication.",
    techStack: "React.js, Tailwind CSS, Firebase Authentication, Node.js (backend in progress)",
    liveDemo: "real-state-app-xi.vercel.app",
    github: "https://github.com/rijwanofficials/Real-State-App-Frontend"
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-12 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-3xl mb-3 text-purple-400 font-semibold border-b border-purple-400 pb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-gray-400 mb-4 italic font-medium">Tech: {project.techStack}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://${project.liveDemo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-medium transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200 font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
