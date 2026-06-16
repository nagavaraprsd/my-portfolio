export default function Resume() {
  return (
    <main className="px-6 sm:px-10 py-28 max-w-4xl mx-auto text-center text-slate-900">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Resume
      </h1>

      {/* DESCRIPTION */}
      <p className="text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
        You can view my resume online or download a copy for future reference.
      </p>

      {/* RESUME CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* VIEW RESUME */}
          <a
            href="/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-slate-900 text-white text-lg
            hover:bg-slate-700 transition"
          >
            View Resume
          </a>

          {/* DOWNLOAD RESUME */}
          <a
            href="/My_Resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-slate-300 text-lg
            hover:bg-slate-100 transition"
          >
            Download Resume
          </a>

        </div>

      </div>

    </main>
  );
}