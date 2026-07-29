import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-[var(--accent)]"
        : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-[var(--accent)] bg-[var(--bg-surface)]"
        : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-surface)]"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[var(--bg-base)]/70 backdrop-blur-xl border-b border-[var(--border-base)]" />
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-[var(--text-base)]"
          onClick={() => setMobileOpen(false)}
        >
          Anuj<span className="text-[var(--accent)]">.</span>
        </NavLink>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-8">
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
          </div>

          <button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full border border-[var(--border-base)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden relative w-9 h-9 rounded-full border border-[var(--border-base)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-[var(--bg-base)]/95 backdrop-blur-xl border-b border-[var(--border-base)] px-6 py-4 space-y-2">
          <NavLink to="/" end className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/experience" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
            Education
          </NavLink>
          <NavLink to="/projects" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMobileOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
