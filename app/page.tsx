import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-20 text-slate-900">

      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 min-h-[75vh]">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Hi <span className="inline-block">👋</span>,
            <br />
            I’m B K Naga Vara Prasad
          </h1>

          <p className="text-2xl text-slate-600 mb-6">
            B.Tech Final Year Student | Aspiring Software Engineer
          </p>

          <p className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed">
            I build modern web applications using Python, JavaScript,
            HTML, CSS, and modern development tools, focusing on clean code
            and solving real-world problems.
          </p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="px-8 py-4 rounded-full border border-slate-300 hover:bg-slate-100 transition"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-slate-300/30 blur-2xl"></div>

            <Image
              src="/Prasad_2.jpeg"
              alt="B K Naga Vara Prasad"
              width={320}
              height={320}
              className="relative rounded-full object-cover shadow-xl"
              priority
            />
          </div>
        </div>

      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
          I am a Computer Science Engineering student passionate about
          programming, web technologies, and building practical solutions.
          I enjoy learning new technologies, working on projects, and
          continuously improving my technical skills.
        </p>

        <Link
          href="/about"
          className="font-semibold text-slate-900 border-b border-slate-400 hover:text-blue-600 transition"
        >
          Read more →
        </Link>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center border-t border-slate-200 py-24">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Work Together
        </h2>

        <p className="text-lg text-slate-600 mb-8">
          Feel free to explore my projects or get in touch.
        </p>

        <Link
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition"
        >
          Contact Me
        </Link>
      </section>

    </main>
  );
}