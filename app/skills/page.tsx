export default function Skills() {
  return (
    <main className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-20 text-slate-900">  

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-12">Skills</h1>

      {/* INTRO */}
      <p className="text-slate-600 max-w-3xl mb-16 leading-relaxed">
        Below are the technical and professional skills I have developed through
        academics, projects, internships, and practical experience.
      </p>

      {/* FRONTEND */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Frontend Development
        </h2>

        <div className="flex flex-wrap gap-4">
          {["HTML", "CSS", "JavaScript"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full
              text-sm text-slate-700 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROGRAMMING */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Programming & Database
        </h2>

        <div className="flex flex-wrap gap-4">
          {["Python", "SQL"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full
              text-sm text-slate-700 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Tools & Platforms
        </h2>

        <div className="flex flex-wrap gap-4">
          {["Git", "GitHub", "VS Code"].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full
              text-sm text-slate-700 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Soft Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Teamwork",
            "Leadership",
            "Communication",
            "Problem Solving",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full
              text-sm text-slate-700 shadow-sm hover:shadow-md transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}