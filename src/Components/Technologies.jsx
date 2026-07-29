import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiVercel,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

const Technologies = () => {
  const skills = [
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3 className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <FaNodeJs className="text-[#3C873A]" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
    { icon: <SiPrisma className="text-[#2D3748]" />, name: "Prisma ORM" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
    { icon: <SiVercel className="theme-text" />, name: "Vercel" },
  ];

  return (
    <div className="px-6 md:px-16 py-24">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl">Technologies</h1>
      </div>

      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {["Frontend", "Backend", "Tools"].map((item) => (
          <div
            key={item}
            className="px-5 py-2 text-sm rounded-full border theme-border theme-surface theme-text-secondary hover:border-yellow-400 transition"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border theme-border theme-surface hover:theme-surface-hover hover:scale-105 transition duration-300 shadow-md hover:border-yellow-400"
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="text-sm theme-text-secondary whitespace-nowrap">
              {s.name}
            </span>
          </div>
        ))}
      </div>

      <hr className="mt-20 theme-border" />
    </div>
  );
};

export default Technologies;
