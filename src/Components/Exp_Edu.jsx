const Exp_Edu = () => {
  return (
    <div className="px-6 md:px-16 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl">Education</h1>
      </div>

      <div className="relative flex justify-center">
        <div className="relative w-full md:w-[65%] space-y-14">
          <div className="relative pl-10">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-md"></div>

            <div className="space-y-2">
              <div className="text-sm theme-text-muted flex flex-wrap gap-4">
                <span>2022 - Present</span>
                <span>Lalitpur, Nepal</span>
              </div>

              <div className="text-xl font-semibold">B.Sc. CSIT</div>

              <div className="theme-text-secondary">
                Patan Multiple Campus
              </div>

              <p className="theme-text-muted leading-relaxed max-w-3xl">
                Bachelor of Science in Computer Science and Information
                Technology. Studying core CS fundamentals including algorithms,
                data-structures, software engineering, and web development.
                Applying academic knowledge through hands-on projects.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Computer Science",
                  "Data Structures",
                  "Software Engineering",
                  "Web Dev",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full border theme-border theme-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-purple-400 shadow-md"></div>

            <div className="space-y-2">
              <div className="text-sm theme-text-muted flex flex-wrap gap-4">
                <span>2020 - 2022</span>
                <span>Nepal</span>
              </div>

              <div className="text-xl font-semibold">
                +2 Science (High School)
              </div>

              <div className="theme-text-secondary">Advance Academy</div>

              <p className="theme-text-muted leading-relaxed max-w-3xl">
                Completed higher secondary education with a focus on Science.
                Built foundation in mathematics and computer science.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Science", "Mathematics", "Computer Basics"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full border theme-border theme-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-10">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-pink-400 shadow-md"></div>

            <div className="space-y-2">
              <div className="text-sm theme-text-muted flex flex-wrap gap-4">
                <span>2007 - 2020</span>
                <span>Nepal</span>
              </div>

              <div className="text-xl font-semibold">
                School Education (SEE)
              </div>

              <div className="theme-text-secondary">
                Anant English Secondary School
              </div>

              <p className="theme-text-muted leading-relaxed max-w-3xl">
                Completed schooling from early education through SEE. Developed
                core academic skills and early interest in technology.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Schooling", "SEE"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full border theme-border theme-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-20 theme-border" />
    </div>
  );
};

export default Exp_Edu;
