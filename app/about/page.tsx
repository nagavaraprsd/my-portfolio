"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="w-full min-h-screen px-8 md:px-16 lg:px-24 py-20 text-slate-900">

      {/* PAGE TITLE */}
      <h1 className="text-5xl md:text-6xl font-bold mb-12">
        About Me
      </h1>

      {/* EDUCATION */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Education
        </h2>

        <div className="space-y-6 text-lg text-slate-600">
          <div>
            <p className="text-xl font-semibold text-slate-900">
              B.Tech (Computer Science and Engineering)
            </p>
            <p>
              Ballari Institute of Technology and Management,
              Ballari, Karnataka
            </p>
            <p>2022 – Present</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">
              Intermediate
            </p>
            <p>Narayana Jr College, Kurnool, Andhra Pradesh</p>
            <p>2020 – 2022</p>
          </div>

          <div>
            <p className="text-xl font-semibold text-slate-900">
              School (SSC)
            </p>
            <p>Montessori E M High School, Kurnool, Andhra Pradesh</p>
            <p>2019 – 2020</p>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Interests
        </h2>

        <ul className="list-disc list-inside text-lg text-slate-600 space-y-3">
          <li>Web Development</li>
          <li>Learning New Technologies</li>
          <li>Artificial Intelligence Tools</li>
          <li>Problem Solving & Logical Thinking</li>
        </ul>
      </section>

      {/* HOBBIES */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">
          Hobbies
        </h2>

        <ul className="list-disc list-inside text-lg text-slate-600 space-y-3">
          <li>Exploring New Technologies</li>
          <li>Listening to Music</li>
          <li>Reading About Startups and Innovation</li>
          <li>Playing Sports</li>
        </ul>
      </section>

      {/* SPORTS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Sports
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-4xl leading-relaxed">
          Sports help me maintain physical fitness, discipline, teamwork,
          and leadership qualities. I have represented my college in
          Zonal and Inter-Zonal level tournaments, which helped me develop
          strong collaboration, communication, and leadership skills.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* HOCKEY */}
          <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              Hockey (Competitive)
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                "/Team_1.jpeg",
                "/Hockey_trnmt.jpeg",
                "/Hockey_clg.jpeg",
                "/Self_1.jpeg",
                "/Marathon.jpeg",
              ].map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="Hockey Achievement"
                  width={400}
                  height={280}
                  className="rounded-lg object-cover transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => setZoomImage(img)}
                />
              ))}
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              I regularly play hockey and have represented my college in
              competitive tournaments. Through sports, I have strengthened
              my teamwork, leadership, communication, discipline, and
              strategic thinking abilities.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE ZOOM */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setZoomImage(null)}
        >
          <Image
            src={zoomImage}
            alt="Zoomed"
            width={1200}
            height={800}
            className="rounded-xl max-h-[90vh] w-auto"
          />
        </div>
      )}
    </main>
  );
}