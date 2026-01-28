import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = ['home', 'about', 'skills', 'projects', 'contact'];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => {
      setScrolled(y > 50);
    });
    return () => unsub();
  }, [scrollY]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <span
          onClick={() => goTo('home')}
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((id) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-slate-300 hover:text-blue-400"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-blue-400"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          {links.map((id) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="block py-2 text-slate-300 hover:text-blue-400"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
} 
