import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Kivo",
    desc: "A calm, minimal task manager landing page where users can organize their day, set priorities, and track progress.",
    tags: ["React", "Tailwind", "CSS"],
    img: "KIVO.png",
    link: "https://kivo-gules.vercel.app/",
  },
  {
    title: "BuildPro",
    desc: "A construction company landing page showcasing projects, services, and team with a modern, professional layout.",
    tags: ["React", "Tailwind", "CSS"],
    img: "Buildpro.png",
    link: "https://buildpro-a-landing-page.vercel.app/",
  },
  {
    title: "QuizMaster",
    desc: "A full-stack quiz application built with the MERN stack, where users can sign up, log in, and take quizzes with JWT-secured authentication. Built as a final year project with a team of three members.",
    tags: ["React", "MongoDB", "Express", "Node.js", "JWT"],
    isFinalYear: true,
    img: "quiz master.png",
    link: "https://quiz-app-mern-gamma.vercel.app/",
  },
  {
    title: "Nepali Pasal",
    desc: "A modern E-commerce frontend built with React.js, featuring dynamic product listings and responsive design.",
    tags: ["React", "Tailwind", "CSS"],
    img: "Nepali pasal.jfif",
    link: "https://nepali-pasal-ecom.vercel.app/",
  },
  {
    title: "Portfolio",
    desc: "A personal portfolio website showcasing projects, skills, and contact information.",
    tags: ["React", "Tailwind", "CSS"],
    img: "PORTFOLIO.jpeg",
    link: "",
  },
  {
    title: "To-Do List App",
    desc: "An application for managing tasks and projects, with features such as task creation and tracking.",
    tags: ["React", "CSS"],
    img: "todolist.jfif",
    link: "https://to-do-list-app-pi-vert.vercel.app/",
  },
  {
    title: "Timer App",
    desc: "A simple timer app with start, pause, and reset features in a clean and minimal interface.",
    tags: ["React", "CSS"],
    img: "timer.jfif",
    link: "https://timer-app-sigma-nine.vercel.app/",
  },

  {
    title: "Tic Tac Toe",
    desc: "Two-player gameplay with interactive grid, win detection, and reset option.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "tic tac toe.jfif",
    link: "https://tic-tac-toe-game-ten-coral.vercel.app/",
  },
  {
    title: "Rock Paper Scissors",
    desc: "User vs computer with random choice generation and score tracking.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "rock paper scissors.jfif",
    link: "https://rock-paper-scissors-game-eta-one.vercel.app/",
  },
  {
    title: "Currency Converter",
    desc: "Real-time conversion between multiple currencies with instant results.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "currency converter.jfif",
    link: "https://currency-converter-app-nine-ruby.vercel.app/",
  },

];

const MyProjects = () => {
  return (
    <div className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--text-base)]">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link || "#"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-[var(--border-base)] hover:border-white transition-all duration-500"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    {p.title}
                  </h3>
                  {p.link && (
                    <FiArrowUpRight
                      size={16}
                      className="text-white/70 group-hover:text-[var(--accent)] transition-colors"
                    />
                  )}
                </div>
                <p className="text-sm text-white/80 leading-relaxed line-clamp-2">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.isFinalYear && (
                    <span className="px-2.5 py-1 text-xs rounded-full border border-white/20 bg-white/10 text-white/70">
                      Final Year Project
                    </span>
                  )}
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full border border-white/20 bg-white/10 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
