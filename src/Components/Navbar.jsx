import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `transition duration-300 text-sm ${
      isActive
        ? "text-cyan-400"
        : "theme-text-secondary hover:text-cyan-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 theme-bg/80 backdrop-blur-md border-b theme-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          AG
        </NavLink>

        <div className="flex items-center gap-6 font-medium">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            Education
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <button
            onClick={toggleTheme}
            className="relative w-10 h-5 rounded-full bg-gray-500 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:bg-gray-400"
            aria-label="Toggle theme"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                isDark ? "translate-x-0" : "translate-x-5"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
