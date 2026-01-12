import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 sm:px-10 py-20 max-w-6xl mx-auto">

      {/* HERO SECTION */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between gap-16 mb-28">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Hi <span className="inline-block">👋</span>, <br />
            I’m <span className="text-gray-800">B K Naga Vara Prasad</span>
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            B.Tech Final Year Student | Aspiring Software Engineer
          </p>

          <p className="text-gray-500 max-w-xl mb-10">
            I build modern web applications using React, Next.js, and Python,
            focusing on clean code and real-world problem solving.
          </p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="px-6 py-3 rounded-full border hover:bg-black hover:text-white transition"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
  <div className="absolute inset-0 rounded-full bg-gray-200 blur-xl"></div>

  <Image
    src="/Prasad_2.jpeg"
    alt="B K Naga Vara Prasad"
    width={260}
    height={260}
    className="relative rounded-full object-cover"
  />
</div>


      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="grid sm:grid-cols-3 gap-8 text-center mb-28">

        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">5</h3>
          <p className="text-gray-600">Projects Built</p>
        </div>

        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">4+</h3>
          <p className="text-gray-600">Skills & Tools</p>
        </div>

        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <h3 className="text-3xl font-bold mb-2">Zonal</h3>
          <p className="text-gray-600">Hockey Player</p>
        </div>

      </section>

      {/* ABOUT PREVIEW */}
      <section className="max-w-3xl mb-28">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I am a B.Tech final year student passionate about software development,
          automation, and modern web technologies. I enjoy building real-world
          applications and continuously learning new tools.
        </p>

        <Link
          href="/about"
          className="font-medium border-b border-black hover:opacity-70"
        >
          Read more →
        </Link>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center border-t pt-16">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s work together
        </h2>
        <p className="text-gray-600 mb-6">
          Feel free to explore my work or get in touch.
        </p>

        <Link
          href="/contact"
          className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          Contact Me
        </Link>
      </section>

    </main>
  );
}
