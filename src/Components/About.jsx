import React from "react";

const About = () => {
  return (
    <div className="text-white px-6 md:px-16 py-24">

      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl  ">
          About Me
        </h1>
       
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 blur opacity-30 group-hover:opacity-60 transition duration-500 rounded-2xl"></div>

            <img
              src="MYPIC2.jpeg"
              alt="my image 2"
              className="relative w-72 md:w-80 rounded-2xl border border-white/10 shadow-xl object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6">

          <div className="text-gray-400 leading-relaxed">
            <p>
              I am Anuj Ghimire, a Full-Stack Developer based in Lalitpur, Nepal,
              with a solid foundation in frontend technologies including HTML,
              CSS, JavaScript, React, and Tailwind CSS. I specialize in building
              responsive and intuitive user interfaces. Currently, I am advancing
              my backend development skills with Node.js and Express.js, aiming to
              develop scalable and efficient full-stack applications.
            </p>

            <p className="mt-4">
              I am highly motivated to learn, grow, and contribute to real-world
              projects with clean and impactful solutions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5 pt-4">

            <div className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-cyan-300">
                Clean Code
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Readable, maintainable structure
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">
              <h3 className="text-lg font-semibold text-purple-300">
                UI Focused
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Pixel-perfect, responsive designs
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 sm:col-span-2">
              <h3 className="text-lg font-semibold text-pink-300">
                Fast Learner
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Currently mastering Node.js, Express.js and PostgreSQL
              </p>
            </div>

          </div>

        </div>
      </div>

      <hr className="mt-20 border-white/10" />
    </div>
  );
};

export default About;