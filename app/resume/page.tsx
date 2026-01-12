export default function Resume() {
  return (
    <main className="px-6 sm:px-10 py-28 max-w-4xl mx-auto text-center">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        You can view my resume in full-screen or download a copy for reference.
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">

        {/* VIEW RESUME */}
        <a
          href="/Prasad_resume[Main].pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border rounded-full text-lg
          hover:bg-black hover:text-white transition"
        >
          View Resume
        </a>

        {/* DOWNLOAD RESUME */}
        <a
          href="/Prasad_resume[Main].pdf"
          download
          className="px-8 py-4 border rounded-full text-lg
          hover:bg-black hover:text-white transition"
        >
          Download Resume
        </a>

      </div>

    </main>
  );
}
