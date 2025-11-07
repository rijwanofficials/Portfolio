import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Hello! I’m Rijwan Husain, a passionate Software Engineer with a strong foundation in full-stack development, specializing in the{" "}
          <span className="text-purple-400 font-medium">MongoDB, Express.js, React.js, and Node.js</span>. I completed my B.Tech degree in Electronics & Communication Engineering and have experience building scalable, secure, and user-friendly web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          Throughout my development journey, I have crafted robust backend APIs, implemented efficient database solutions, and designed intuitive frontends using React.js and Tailwind CSS. I am deeply passionate about problem solving and competitive programming, continuously enhancing my coding skills and algorithmic thinking.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6"
        >
          I also have experience with <span className="text-purple-400 font-medium">UI/UX design</span> principles, ensuring that my projects provide not only functionality but also a smooth and engaging user experience. I welcome all like-minded professionals and enthusiasts to connect with me for collaborations, discussions, or career opportunities.
        </motion.p>
      </div>
    </section>
  );
}
