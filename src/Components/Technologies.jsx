import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiVercel,
  SiExpress,
  SiMongoosedotws,
} from "react-icons/si";

const Technologies = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "MongoDB Compass" },
    { icon: <SiMongoosedotws />, name: "Mongoose" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiVercel />, name: "Vercel" },
  ];
  return (
    <div>
      {/* title */}
      <div>
        <h1>Technologies</h1>
      </div>

      {/* frontend, backend, tools*/}
      <div>
        <div>Frontend</div>
        <div>Backend</div>
        <div>Tools</div>
      </div>

      {/* skills */}
      <div>
        <ul>
          {skills.map((s) => {
            return (
              <>
                <li key={name}>
                  {s.icon} {s.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Technologies;
