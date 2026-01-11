export default function Home() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">


      {/* HERO SECTION */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m B K Naga Vara Prasad 👋
        </h1>
        <p className="text-xl text-gray-600">
          B.Tech Final Year Student | Aspiring Software Engineer
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a B.Tech final year student passionate about software development,
          automation, and modern web technologies. I enjoy building projects
          using React, Next.js, and Python, and I am actively preparing for
          software engineering roles.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <span className="border border-gray-300 bg-gray-50 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition">JavaScript</span>
          <span className="border px-4 py-2 rounded">React</span>
          <span className="border px-4 py-2 rounded">Next.js</span>
          <span className="border px-4 py-2 rounded">Python</span>
          <span className="border px-4 py-2 rounded">UiPath (RPA)</span>
          <span className="border px-4 py-2 rounded">Git & GitHub</span>
        </div>
      </section>
            {/* PROJECTS SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="border rounded-lg p-6 hover:shadow-md transition">

          {/* Project 1 */}
          <div className="border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">
              Air Pollution AQI Website
            </h3>
            <p className="text-gray-600 mb-3">
              A real-time web application that displays Air Quality Index (AQI)
              data using public APIs with user-friendly visualization.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: HTML, CSS, JavaScript, API
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">
              RPA Automation using UiPath
            </h3>
            <p className="text-gray-600 mb-3">
              Automated repetitive business processes such as data extraction
              and report generation using UiPath workflows.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Tech Stack: UiPath, RPA, OCR
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>
            {/* RESUME SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Resume</h2>

        <a
          href="/Prasad_Resume.pdf"
          target="_blank"
          className="inline-block border px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
        >
          Download Resume
        </a>
      </section>

      {/* CONTACT SECTION */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="space-y-3 text-gray-600">
          <p>Email: <span className="text-black">bknagavaraprasad@gmail.com</span></p>
          <p>LinkedIn: <span className="text-black">https://www.linkedin.com/in/naga-vara-prasad-5316ab31a/</span></p>
          <p>GitHub: <span className="text-black">https://github.com/nagavaraprsd</span></p>
        </div>
      </section>



    </main>
  );
}
