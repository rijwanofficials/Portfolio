const navLinks = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#experience", label: "Experience" },
  { to: "#education", label: "Education" },
  { to: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-8 w-full flex justify-center z-30">
      <div className="bg-[#181C2A] bg-opacity-80 rounded-2xl px-8 py-3 flex gap-4 shadow-lg">
        {navLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="px-6 py-2 rounded-lg font-medium text-gray-200 transition-all hover:text-purple-400 hover:bg-gray-800"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
