export default function Contact() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Contact</h1>

      {/* INTRO */}
      <p className="text-gray-600 max-w-3xl mb-16">
        Feel free to reach out to me for opportunities, collaborations, or any
        queries. I am always open to discussing new ideas and projects.
      </p>

      {/* CONTACT DETAILS */}
      <div className="space-y-6 text-lg">

        {/* EMAIL */}
        <div>
          <p className="font-medium">Email</p>
          <a
            href="mailto:bknagavaraprasad@gmail.com"
            className="text-blue-600 hover:underline"
          >
            bknagavaraprasad@gmail.com
          </a>
        </div>

        {/* LINKEDIN */}
        <div>
          <p className="font-medium">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/naga-vara-prasad-5316ab31a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/naga-vara-prasad
          </a>
        </div>

        {/* GITHUB */}
        <div>
          <p className="font-medium">GitHub</p>
          <a
            href="https://github.com/nagavaraprsd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/nagavaraprsd
          </a>
        </div>

        {/* LOCATION (OPTIONAL) */}
        <div>
          <p className="font-medium">Location</p>
          <p className="text-gray-600">Halaharvi,Kurnool(dist),Andhra Pradesh, India</p>
        </div>

      </div>

    </main>
  );
}
