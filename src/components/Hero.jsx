import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code,
  Palette,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-sm text-blue-300">
                  Available for freelance work
                </span>
              </div>

              <p className="text-2xl text-slate-400 mb-2">Hello, this is</p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                Rijwan
              </h1>

              <p className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="text-white">And I'm a </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  React{" "}
                </span>
                <span className="text-white">& </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Node.js{" "}
                </span>
                <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </p>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I craft seamless digital experiences by merging{" "}
              <span className="text-blue-400 font-semibold">robust code</span>{" "}
              with{" "}
              <span className="text-purple-400 font-semibold">
                beautiful design
              </span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 hover:opacity-90"
              >
                View My Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-lg border border-slate-600 text-white hover:bg-slate-800/50"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute inset-8 rounded-full border-2 border-purple-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    className="absolute -left-20 top-0 p-4 rounded-2xl bg-blue-500/20 border border-blue-400/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Code size={32} className="text-blue-400" />
                  </motion.div>

                  <motion.div
                    className="absolute -right-20 bottom-0 p-4 rounded-2xl bg-purple-500/20 border border-purple-400/30"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <Palette size={32} className="text-purple-400" />
                  </motion.div>

                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 blur-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-400 hover:text-white"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
