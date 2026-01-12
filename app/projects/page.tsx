export default function Projects() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      {/* INTRO */}
      <p className="text-gray-600 max-w-3xl mb-16">
        Below are some of the academic and personal projects I have worked on,
        focusing on problem-solving, automation, and web technologies.
      </p>

      <div className="space-y-10">

        {/* PROJECT 1 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            YouTube Comment Analyzer
          </h2>

          <p className="text-gray-600 mb-4">
            A sentiment analysis project that analyzes comments from a given
            YouTube video link and categorizes them as positive or negative.
            The results are visualized using statistical graphs to understand
            audience feedback effectively.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-black">Tech Stack:</span>{" "}
            Python, YouTube Data API, NLP, Matplotlib
          </p>
        </div>

        {/* PROJECT 2 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            BMI Automation Using UiPath
          </h2>

          <p className="text-gray-600 mb-4">
            An automation project developed using UiPath to automate repetitive
            business tasks such as data extraction, Excel handling, and report
            generation, improving efficiency and accuracy.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-black">Tech Stack:</span>{" "}
            UiPath, RPA, Excel Automation
          </p>
        </div>

        {/* PROJECT 3 (OPTIONAL / FUTURE) */}
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            AI BASED HEALTH MONITORING SYSTEM
          </h2>
          <p className="text-gray-600 mb-4">
            A Project based Health Monitoring system which helps people takecare of them
            from small health issues(Fever,Cold). System will suggest a series of information on
            Symptoms,Homecare remedies and Medication details based on age group 
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-black">Tech Stack:</span>{" "}
            HTML, CSS, Node.js, Python, NLP
          </p>
        </div>

         {/* PROJECT 4 (OPTIONAL / FUTURE) */}
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            Voter Database Management System
          </h2>
          <p className="text-gray-600 mb-4">
            Developed SQL queries for efficient data insertion, retrieval, updating, and validation of voter records.
            The system ensures data integrity and supports accurate, organized management of election-related information.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-black">Tech Stack:</span>{" "}
            DBMS
          </p>
        </div>
        {/* PROJECT 5 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">
            Match Result Tracking System
          </h2>

          <p className="text-gray-600 mb-4">
            Created a system to record, update, and display sports match results.
            Implemented statistics tracking to analyze team performance and match history.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-medium text-black">Tech Stack:</span>{" "}
            Python based roject
          </p>
        </div>
      </div>
    </main>
  );
}
