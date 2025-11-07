import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold mb-6 text-purple-400 border-b border-purple-400 pb-2">
              Frontend
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg font-medium">
              <li className="hover:text-purple-400 cursor-default">React.js</li>
              <li className="hover:text-purple-400 cursor-default">JavaScript (ES6+)</li>
              <li className="hover:text-purple-400 cursor-default">HTML5 & CSS3</li>
              <li className="hover:text-purple-400 cursor-default">Tailwind CSS</li>
              <li className="hover:text-purple-400 cursor-default">Bootstrap</li>
              <li className="hover:text-purple-400 cursor-default">Redux</li>
              <li className="hover:text-purple-400 cursor-default">Responsive Design</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold mb-6 text-purple-400 border-b border-purple-400 pb-2">
              Backend
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg font-medium">
              <li className="hover:text-purple-400 cursor-default">Node.js</li>
              <li className="hover:text-purple-400 cursor-default">Express.js</li>
              <li className="hover:text-purple-400 cursor-default">MongoDB & Mongoose</li>
              <li className="hover:text-purple-400 cursor-default">RESTful APIs</li>
              <li className="hover:text-purple-400 cursor-default">Firebase (Auth & Firestore)</li>
              <li className="hover:text-purple-400 cursor-default">JWT Authentication</li>
            </ul>
          </motion.div>

          {/* Designing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-gray-800 bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-semibold mb-6 text-purple-400 border-b border-purple-400 pb-2">
              Designing
            </h3>
            <ul className="text-gray-300 space-y-3 text-lg font-medium">
              <li className="hover:text-purple-400 cursor-default">UI/UX Design</li>
              <li className="hover:text-purple-400 cursor-default">Wireframing & Prototyping (Figma)</li>
              <li className="hover:text-purple-400 cursor-default">Adobe Photoshop</li>
              <li className="hover:text-purple-400 cursor-default">Adobe Illustrator</li>
              <li className="hover:text-purple-400 cursor-default">Adobe InDesign</li>
              <li className="hover:text-purple-400 cursor-default">Responsive & Accessible Design</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
