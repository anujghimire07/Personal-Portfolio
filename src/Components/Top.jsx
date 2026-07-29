import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaLayerGroup,
} from "react-icons/fa";

import { FiDownload } from "react-icons/fi";

const Top = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 py-10">
      <div className="flex items-center justify-end mb-12 gap-5 text-xl">
        <a
          href="https://www.instagram.com/anuz_ghimire_/"
          target="_blank"
          className="hover:text-pink-400 transition duration-300 hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/anuj.ghimire.12"
          target="_blank"
          className="hover:text-blue-400 transition duration-300 hover:scale-110"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/anujghimire07"
          target="_blank"
          className="hover:text-gray-300 transition duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/anuj-ghimire-788279348/"
          target="_blank"
          className="hover:text-sky-400 transition duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl leading-tight">Anuj Ghimire</h1>

          <h2 className="text-2xl tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            JavaScript | PERN Stack
          </h2>

          <p className="theme-text-muted leading-relaxed max-w-xl">
            I&rsquo;m a Full-Stack Developer from Nepal who loves the
            intersection of great design and solid engineering. I craft
            responsive, modern frontends using React and Tailwind CSS, and build
            reliable, scalable backends with Node.js, Express.js, PostgreSQL,
            and RESTful Web APIs. I enjoy turning ideas into clean, functional,
            and user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/portfolio cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl theme-inverse theme-text-inverse font-medium shadow-lg hover:scale-105 transition duration-300">
                <FiDownload />
                Download CV
              </button>
            </a>

            <Link
              to="/projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-600 theme-text-secondary hover:theme-surface-hover transition duration-300 hover:scale-105"
            >
              <FaLayerGroup />
              See My Work
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group w-80 h-[420px] overflow-hidden rounded-2xl border theme-border shadow-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <img
              src="/MY PIC.jpeg"
              alt="My image"
              className="relative w-full h-full object-cover object-[50%_20%] scale-105 hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>

      <hr className="mt-16 theme-border" />
    </div>
  );
};

export default Top;
