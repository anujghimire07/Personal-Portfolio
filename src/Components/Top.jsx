import React, {useRef} from "react";
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
    <div className="min-h-screen  text-white px-6 md:px-16 py-10">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-12">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          AG
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 text-xl">
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
      </div>

      {/* Main section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl  leading-tight">Anuj Ghimire</h1>

          <h2 className="text-2xl  tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            JavaScript | 
            PERN Stack
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            I’m a Full-Stack Developer from Nepal who loves the intersection of
            great design and solid engineering. I craft responsive, modern
            frontends using React and Tailwind CSS, and build reliable, scalable
            backends with Node.js, Express.js, PostgreSQL, and RESTful Web APIs. I
            enjoy turning ideas into clean, functional, and user-friendly
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/portfolio cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium shadow-lg hover:scale-105 transition duration-300">
                <FiDownload />
                Download CV
              </button>
            </a>

            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-600 text-gray-200 hover:bg-white/10 transition duration-300 hover:scale-105"
            >
              <FaLayerGroup />
              <a href="#MyProjects">See My Work</a>
            </button>
          </div>
        </div>

        {/* Right image (UPWARD CROP: more top, less bottom) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group w-80 h-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            {/* glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <img
              src="/MY PIC.jpeg"
              alt="My image"
              className="relative w-full h-full object-cover object-[50%_20%] scale-105 hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>

      <hr className="mt-16 border-white/10" />
    </div>
  );
};

export default Top;
