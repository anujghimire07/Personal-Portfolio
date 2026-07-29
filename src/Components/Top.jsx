import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const Top = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-glow)] to-transparent opacity-50" />

      <div className="relative px-6 md:px-16 pt-32 pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-base)] bg-[var(--bg-surface)] text-xs text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[var(--text-base)]">
                Anuj Ghimire
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--accent)]">
                Full-Stack Developer
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                I craft responsive, modern frontends with React & Tailwind, and
                build reliable backends with Node.js, Express & MongoDB.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/portfolio cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)]">
                  <FiDownload size={16} />
                  Download CV
                </button>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/anujghimire07"
                  target="_blank"
                  className="w-10 h-10 rounded-xl border border-[var(--border-base)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-ghimire-788279348/"
                  target="_blank"
                  className="w-10 h-10 rounded-xl border border-[var(--border-base)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="relative w-full max-w-xs sm:w-72 md:w-80 h-72 sm:h-80 md:h-88 rounded-[20px] overflow-hidden border border-[var(--border-base)] group-hover:border-white transition-colors duration-500">
  <img
    src="/MY PIC.jpeg"
    alt="Anuj Ghimire"
    className="w-full h-full object-cover object-[50%_-30%] md:object-[50%_20%] hover:scale-105 transition-transform duration-700"
  />
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
