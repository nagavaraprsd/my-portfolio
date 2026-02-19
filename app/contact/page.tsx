export default function Contact() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      {/* INTRO */}
      <p className="text-white/80 max-w-3xl mb-16">
        Feel free to reach out to me for opportunities, collaborations, or any
        queries. I am always open to discussing new ideas and projects.
      </p>

      {/* CONTACT DETAILS */}
      <div className="space-y-6 text-lg">

        {/* EMAIL */}
        <div>
          <p className="font-medium text-white">Email</p>
          <a
            href="mailto:bknagavaraprasad@gmail.com"
            className="text-white/80 hover:text-white hover:underline transition"
          >
            bknagavaraprasad@gmail.com
          </a>
        </div>

        {/* LINKEDIN */}
        <div>
          <p className="font-medium text-white">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/naga-vara-prasad-5316ab31a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:underline transition"
          >
            linkedin.com/in/naga-vara-prasad
          </a>
        </div>

        {/* GITHUB */}
        <div>
          <p className="font-medium text-white">GitHub</p>
          <a
            href="https://github.com/nagavaraprsd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white hover:underline transition"
          >
            github.com/nagavaraprsd
          </a>
        </div>

        {/* LOCATION */}
        <div>
          <p className="font-medium text-white">Location</p>
          <p className="text-white/70">
            Halaharvi, Kurnool (Dist), Andhra Pradesh, India
          </p>
        </div>

      </div>

    </main>
  );
}
