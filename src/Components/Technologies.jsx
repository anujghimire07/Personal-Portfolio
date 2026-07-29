import {
  FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiPostgresql, SiVercel, SiExpress,
  SiMongoose, SiMongodb, SiJsonwebtokens, SiPostman,
} from "react-icons/si";

const Technologies = () => {
  const categories = [
    {
      name: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952B3" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
        { icon: <SiExpress />, name: "Express.js", color: "#94a3b8" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiMongoose />, name: "Mongoose", color: "#880000" },
        { icon: <SiJsonwebtokens />, name: "JWT", color: "#FF3D00" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
        { icon: <SiVercel />, name: "Vercel", color: "#94a3b8" },
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--text-base)]">
            Technologies
          </h2>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider mb-6 text-center">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-[var(--border-base)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent)] transition-all duration-300"
                  >
                    <span className="text-xl" style={{ color: s.color }}>
                      {s.icon}
                    </span>
                    <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-base)] transition-colors">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
