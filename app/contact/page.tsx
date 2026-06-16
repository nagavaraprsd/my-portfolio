export default function Contact() {
  return (
    <main className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-20 text-slate-900">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      {/* INTRO */}
      <p className="text-slate-600 max-w-3xl mb-16 leading-relaxed">
        Feel free to reach out regarding opportunities, collaborations,
        projects, or any professional inquiries. I am always open to
        connecting and discussing new ideas.
      </p>

      {/* CONTACT DETAILS */}
      <div className="space-y-8">

        {/* EMAIL */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">Email</p>
          <a
            href="mailto:bknagavaraprasad@gmail.com"
            className="text-slate-600 hover:text-blue-600 hover:underline transition"
          >
            bknagavaraprasad@gmail.com
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/naga-vara-prasad-5316ab31a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 hover:underline transition"
          >
            linkedin.com/in/naga-vara-prasad
          </a>
        </div>

        {/* GITHUB */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">GitHub</p>
          <a
            href="https://github.com/nagavaraprsd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 hover:underline transition"
          >
            github.com/nagavaraprsd
          </a>
        </div>

        {/* LOCATION */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <p className="font-semibold text-slate-900 mb-1">Location</p>
          <p className="text-slate-600">
            Halaharvi, Kurnool District, Andhra Pradesh, India
          </p>
        </div>

      </div>

    </main>
  );
}