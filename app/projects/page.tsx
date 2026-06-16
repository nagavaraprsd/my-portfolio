export default function Projects() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto text-slate-900">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      {/* INTRO */}
      <p className="text-slate-600 max-w-3xl mb-16 leading-relaxed">
        Below are some of the academic and personal projects I have worked on,
        focusing on problem-solving, automation, database management, and
        modern technologies.
      </p>

      <div className="space-y-10">

        {/* PROJECT 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">
            YouTube Comment Analyzer
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            A sentiment analysis project that analyzes comments from a given
            YouTube video and classifies them as positive or negative.
            The results are visualized using statistical charts to better
            understand audience feedback and engagement.
          </p>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">
              Tech Stack:
            </span>{" "}
            Python, YouTube Data API, NLP, Matplotlib
          </p>
        </div>

        {/* PROJECT 2 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">
            BMI Automation Using UiPath
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Developed an automation workflow using UiPath to calculate Body
            Mass Index (BMI) and automate data processing tasks, improving
            efficiency and reducing manual effort.
          </p>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">
              Tech Stack:
            </span>{" "}
            UiPath, RPA, Automation
          </p>
        </div>

        {/* PROJECT 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">
            AI-Based Health Monitoring System
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            A health monitoring application designed to assist users with
            basic symptom analysis and healthcare guidance. The system
            provides recommendations based on user inputs and predefined
            health parameters.
          </p>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">
              Tech Stack:
            </span>{" "}
            HTML, CSS, Node.js, Python
          </p>
        </div>

        {/* PROJECT 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">
            Voter Database Management System
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Designed and implemented SQL queries for managing voter records,
            including insertion, retrieval, updating, and validation of data.
            The system focuses on maintaining data accuracy and integrity.
          </p>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">
              Tech Stack:
            </span>{" "}
            SQL, DBMS
          </p>
        </div>

        {/* PROJECT 5 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2 text-slate-900">
            Match Result Tracking System
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Developed a system to record, update, and display sports match
            results. The application helps maintain historical records and
            track team performance statistics efficiently.
          </p>

          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">
              Tech Stack:
            </span>{" "}
            Python, DBMS
          </p>
        </div>

      </div>
    </main>
  );
}