import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 sm:px-10 py-24 max-w-5xl mx-auto">

      {/* HERO SECTION */}
      <section className="flex flex-col sm:flex-row items-center gap-10 mb-20">
        
        {/* TEXT */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hi, I’m B K Naga Vara Prasad 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            B.Tech Final Year Student | Aspiring Software Engineer
          </p>
        </div>

        {/* PROFILE IMAGE */}
        <Image
          src="/Prasad.png"
          alt="Prasad Profile Photo"
          width={200}
          height={200}
          className="rounded-full border"
          priority
        />
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          About Me
        </h2>

        <p className="text-gray-600 leading-relaxed">
          I am a B.Tech final year student passionate about software development,
          automation, and modern web technologies. I enjoy building projects
          using React, Next.js, and Python, and I am actively preparing for
          software engineering roles. I focus on writing clean, scalable code
          and building real-world applications that solve meaningful problems.
        </p>
      </section>

    </main>
  );
}
