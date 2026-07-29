const education = [
  {
    period: "2022 - Present",
    location: "Lalitpur, Nepal",
    title: "B.Sc. CSIT",
    school: "Patan Multiple Campus",
    description:
      "Bachelor of Science in Computer Science and Information Technology. Studying core CS fundamentals including algorithms, data structures, software engineering, and web development.",
    tags: ["Computer Science", "Data Structures", "Software Engineering", "Web Dev"],
    color: "from-amber-500 to-orange-500",
  },
  {
    period: "2020 - 2022",
    location: "Nepal",
    title: "+2 Science (High School)",
    school: "Advance Academy",
    description:
      "Completed higher secondary education with a focus on Science. Built foundation in mathematics and computer science.",
    tags: ["Science", "Mathematics", "Computer Basics"],
    color: "from-amber-400 to-rose-500",
  },
  {
    period: "2007 - 2020",
    location: "Nepal",
    title: "School Education (SEE)",
    school: "Anant English Secondary School",
    description:
      "Completed schooling from early education through SEE. Developed core academic skills and early interest in technology.",
    tags: ["Schooling", "SEE"],
    color: "from-emerald-400 to-teal-500",
  },
];

const Exp_Edu = () => {
  return (
    <div className="px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[var(--text-base)]">
            Education
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-base)] md:-translate-x-1/2" />

          {education.map((item, i) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-8 pb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg-base)] md:-translate-x-1/2 shadow-lg shadow-[var(--accent-glow)]" />

              <div className="flex-1 pl-8 md:pl-0 md:pr-8 md:text-right">
                <div
                  className={`p-6 rounded-2xl border border-[var(--border-base)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-all duration-300 ${
                    i % 2 === 1 ? "md:text-left md:pl-8" : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-3 items-center mb-3 text-xs text-[var(--text-muted)]">
                    <span>{item.period}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-base)]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--text-base)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--accent)] mt-1">
                    {item.school}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-[var(--border-base)] bg-[var(--bg-tag)] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp_Edu;
