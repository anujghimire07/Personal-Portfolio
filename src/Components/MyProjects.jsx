import React from "react";
import { FiExternalLink } from "react-icons/fi";

const MyProjects = () => {
  

  return (
    <div className="text-white px-6 md:px-16 py-24" id="MyProjects">
      <h1 className="text-4xl md:text-5xl text-center mb-16">
        My Projects
      </h1>

      <div className="flex flex-col items-center space-y-16">
        {/* Nepali Pasal */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="Nepali pasal.jfif"
            alt="ecom website image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">
              Nepali Pasal (E-commerce App)
            </h1>

            <p className="text-gray-300 text-sm">
              A modern E-commerce frontend built with React.js, featuring
              dynamic product listings, responsive design, and smooth user
              experience for browsing and managing cart items
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                Tailwind
              </span>
            </div>

            <a
              href="https://nepali-pasal-ecom.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Personal Portfolio */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="PORTFOLIO.jpeg"
            alt="portfolio image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="text-gray-300 text-sm">
              A personal portfolio website showcasing projects, skills, and
              contact information
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                Tailwind
              </span>
            </div>

            <a
              href=""
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* To-Do List App */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="todolist.jfif"
            alt="note app image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">To-Do List App</h1>
            <p className="text-gray-300 text-sm">
              An application for managing tasks and projects, with features such
              as task creation and tracking
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
            </div>

            <a
              href="https://to-do-list-app-pi-vert.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Timer App */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="timer.jfif"
            alt="timer image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Timer App</h1>
            <p className="text-gray-300 text-sm">
              A simple timer app functioning as a stopwatch with start, pause,
              and reset features in a clean and minimal interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
            </div>

            <a
              href="https://timer-app-sigma-nine.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Sano Nepali Pasal */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="sano nepali pasal.jfif"
            alt="ecom image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">
              Sano Nepali Pasal (E-commerce App)
            </h1>
            <p className="text-gray-300 text-sm">
              A modern E-commerce frontend built with React.js, featuring
              dynamic product listings, and smooth user experience for browsing
              and managing cart items
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                Tailwind
              </span>
            </div>

            <a
              href="https://sano-nepali-pasal.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Tic Tac Toe */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="tic tac toe.jfif"
            alt="tic tak toe image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Tic Tac Toe Game</h1>
            <p className="text-gray-300 text-sm">
              Simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript,
              featuring two-player gameplay with interactive grid, win
              detection, and reset option in a clean and responsive interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                JavaScript
              </span>
            </div>

            <a
              href="https://tic-tac-toe-game-ten-coral.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Rock Paper Scissors */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="rock paper scissors.jfif"
            alt="rock paper scissor"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Rock Paper Scissors Game</h1>
            <p className="text-gray-300 text-sm">
              Simple Rock Paper Scissors game built using HTML, CSS, and
              JavaScript, featuring user vs computer gameplay with random choice
              generation, score tracking, and instant result display in a clean
              interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                JavaScript
              </span>
            </div>

            <a
              href="https://rock-paper-scissors-game-eta-one.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Currency Converter */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="currency converter.jfif"
            alt="currency converter image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Currency Converter</h1>
            <p className="text-gray-300 text-sm">
              Simple currency converter app built using HTML, CSS, and
              JavaScript, enabling real-time conversion between multiple
              currencies with user input, instant results, and a clean,
              responsive interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                JavaScript
              </span>
            </div>

            <a
              href="https://currency-converter-app-nine-ruby.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>

        {/* Shopify */}
        <div className="parent group relative w-full md:w-[80%] h-[420px] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white ">
          <img
            src="shopify.jfif"
            alt="ecom image"
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="child absolute inset-0 bg-black/60 flex flex-col justify-end p-8 space-y-3">
            <h1 className="text-2xl font-bold">Shopify (E-commerce App)</h1>
            <p className="text-gray-300 text-sm">
              Simple e-commerce website built using HTML, CSS, and React,
              developed with strong assistance from Vibe coding AI, featuring
              product listings, basic cart functionality, and a clean,
              responsive user interface.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                HTML
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                CSS
              </span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/10">
                React
              </span>
            </div>

            <a
              href="https://shopify-a-demo-ecom.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              <FiExternalLink />
              Open Live Demo
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-20 border-white/10" />
    </div>
  );
};

export default MyProjects;
