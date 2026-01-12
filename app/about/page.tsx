"use client";

import Image from "next/image";
import { useState,useEffect } from "react";

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
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">About Me</h1>

      {/* EDUCATION */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>

        <div className="space-y-4 text-gray-600">
          <div>
            <p className="font-medium text-black">B.Tech (Bachelor of Technology)</p>
            <p>
              Ballari Institute of Technology and Management (CSE),
              Ballari, Karnataka
            </p>
            <p>2022 – 2026 (Expected)</p>
          </div>

          <div>
            <p className="font-medium text-black">Intermediate</p>
            <p>Narayana Jr College, Kurnool, Andhra Pradesh</p>
            <p>2020 – 2022</p>
          </div>

          <div>
            <p className="font-medium text-black">Schooling (SSC)</p>
            <p>Montessori E M High School, Kurnool, Andhra Pradesh</p>
            <p>2019 – 2020</p>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Web Development</li>
          <li>Learning New Things</li>
          <li>Artificial Intelligence Tools</li>
          <li>Problem Solving & Logical Thinking</li>
        </ul>
      </section>

      {/* HOBBIES */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Exploring new technologies</li>
          <li>Listening to music</li>
          <li>Reading about startups and innovation</li>
          <li>Playing sports</li>
        </ul>
      </section>

      {/* SPORTS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Sports</h2>

        <p className="text-gray-600 mb-8 max-w-3xl">
          Sports help me maintain physical fitness, discipline, teamwork,
          and leadership qualities. I have represented my college in
          Zonal and Inter-Zonal level tournaments.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">

          {/* HOCKEY */}
          <div className="border rounded-lg p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">Hockey (Competitive)</h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                "/Team_1.jpeg",
                "/Hockey_trnmt.jpeg",
                "/Hockey-clg.jpeg",
                "/Self_1.jpeg",
                "/Marathon.jpeg"
              ].map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="Hockey Achievement"
                  width={300}
                  height={200}
                  className="rounded cursor-pointer"
                  onClick={() => setZoomImage(img)}
                />
              ))}
            </div>

            <p className="text-gray-600 text-sm">
              I regularly play hockey and have represented my college in
              competitive tournaments, which strengthened my teamwork,
              leadership, and strategic thinking skills.
            </p>
          </div>

          {/* VOLLEYBALL */}
          <div className="border rounded-lg p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Volleyball 
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I play volleyball recreationally to stay physically active.
              It improves my agility, coordination, and teamwork skills.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE ZOOM */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setZoomImage(null)}
        >
          <Image
            src={zoomImage}
            alt="Zoomed"
            width={900}
            height={600}
            className="rounded max-h-[90vh] w-auto"
          />
        </div>
      )}

    </main>
  );
}
