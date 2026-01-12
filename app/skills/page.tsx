export default function Skills() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-12">Skills</h1>

      {/* INTRO */}
      <p className="text-gray-600 max-w-3xl mb-16">
        Below are the technical and professional skills I have developed through
        academics, projects, and hands-on experience.
      </p>

      {/* FRONTEND */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Frontend Development</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Next.js",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border rounded-full text-sm
              hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROGRAMMING / BACKEND */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Programming & Scripting
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Python",
            "Problem Solving",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border rounded-full text-sm
              hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* RPA */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          Robotic Process Automation (RPA)
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "UiPath",
            "Workflow Design",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border rounded-full text-sm
              hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Tools & Platforms</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border rounded-full text-sm
              hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Teamwork",
            "Leadership",
            "Problem Solving",
            "Communication",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 border rounded-full text-sm
              hover:bg-black hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
}
