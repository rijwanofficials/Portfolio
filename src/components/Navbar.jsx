import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/Skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full flex flex-col items-center pt-10">
      <div className="bg-[#181C2A] bg-opacity-80 rounded-2xl px-8 py-3 flex gap-4 shadow-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              [
                "px-6 py-2 rounded-lg font-medium transition-all",
                isActive || pathname === link.to
                  ? "bg-linear-to-r from-purple-700 to-purple-400 text-white shadow"
                  : "text-gray-200 hover:text-purple-400 hover:bg-gray-800",
              ].join(" ")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
