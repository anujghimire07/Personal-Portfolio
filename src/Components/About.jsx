import { FiCode, FiLayout, FiBookOpen } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiCode size={20} />,
      title: "Clean Code",
      desc: "Readable, maintainable structure",
      color: "text-[var(--accent)]",
    },
    {
      icon: <FiLayout size={20} />,
      title: "UI Focused",
      desc: "Pixel-perfect, responsive designs",
      color: "text-amber-400",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Fast Learner",
      desc: "Mastering Node.js, Express & MongoDB",
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--text-base)]">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="relative w-full max-w-xs sm:w-72 md:w-80 h-72 sm:h-80 md:h-88 rounded-[20px] overflow-hidden border border-[var(--border-base)] group-hover:border-white transition-colors duration-500">
                <img
                  src="MYPIC2.jpeg"
                  alt="Anuj Ghimire"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I&apos;m a Full-Stack Developer based in Lalitpur, Nepal, with a
              solid foundation in frontend technologies including HTML, CSS,
              JavaScript, React, and Tailwind CSS. I specialize in building
              responsive and intuitive user interfaces.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Currently advancing my backend skills with Node.js and Express.js,
              aiming to build scalable full-stack applications. Highly motivated
              to learn, grow, and contribute to real-world projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`p-5 rounded-2xl border border-[var(--border-base)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-all duration-300 ${item.title === "Fast Learner" ? "sm:col-span-2" : ""}`}
                >
                  <div className={`mb-3 ${item.color}`}>{item.icon}</div>
                  <h3 className="font-semibold text-sm text-[var(--text-base)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
