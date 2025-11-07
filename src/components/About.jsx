import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-center"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I’m an enthusiastic{" "}
          <span className="text-purple-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          with hands-on experience in building scalable, secure, and responsive
          web applications. I have a strong foundation in authentication
          systems, RESTful APIs, and modern{" "}
          <span className="text-purple-400 font-semibold">UI/UX design</span>.
          I’m passionate about solving problems, delivering user-focused
          solutions, and collaborating effectively with teams in dynamic
          projects.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#skills"
            className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-medium transition"
          >
            View My Skills
          </a>
        </motion.div>
      </div>
    </section>
  );
}
