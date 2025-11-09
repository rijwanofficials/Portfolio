import Navbar from "./Navbar";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"; // 🔹 Replace with your actual image

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-[100vh] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950"
      aria-label="Hero section introducing Rijwan Husain"
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 mt-20 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left w-full max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-purple-400">Rijwan Husain</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl mb-6 min-h-[2.5rem] font-semibold">
            <ReactTyped
              strings={[
                " <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400'>React</span>",
                " <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400'>React & Node.js Developer</span>",
                " <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400'>UI/UX Designer</span>",
              ]}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1000}
              smartBackspace
              loop
            />
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Turning ideas into functional, beautiful, and user-friendly digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/rijwanofficials"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-purple-700 hover:bg-purple-500 text-white rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rijwanln/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="/src/assets/Rizwan-Resume.pdf"
              download
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Download Resume
            </a>
          </div>

          {/* Scroll Down Link */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-10 inline-block text-purple-400 hover:text-purple-300 transition text-lg"
          >
            ↓ View My Projects
          </a>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-shrink-0"
        >
          <img
            src={profile}
            alt="Profile picture of Rijwan Husain"
            loading="lazy"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500 shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
