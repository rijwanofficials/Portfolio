import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-12 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 mb-8"
        >
          Feel free to reach out to me via email or LinkedIn!
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:husainrijwan2001@gmail.com"
            className="px-8 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-medium transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/rijwanln/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200 font-medium transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rijwanofficials"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-200 font-medium transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
