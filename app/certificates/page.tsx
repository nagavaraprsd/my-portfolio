"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Certificates() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const certificates = [
    {
      src: "/Python_internship_1.jpeg",
      title: "Python Programming Certification",
      issuer: "Issued by EZTS Company",
      year: "2024",
    },
    {
      src: "/uipath.jpeg",
      title: "RPA Automation using UiPath",
      issuer: "Issued by UiPath (College)",
      year: "2025",
    },
    {
      src: "/certificate_1.jpeg",
      title: "Inter-Collegiate Division Level Tournament",
      issuer: "VTU with BITM",
      year: "2025",
    },
    {
      src: "/certificate_2.jpeg",
      title: "Inter-Collegiate State Level Tournament",
      issuer: "VTU with BITM",
      year: "2025",
    },
    {
      src: "/AWS.png",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      year: "2025",
    },
    {
      src: "/SimpleLearn_SQL.png",
      title: "Introduction to SQL",
      issuer: "Simplilearn",
      year: "2025",
    },
  ];

  return (
    <main className="px-6 sm:px-10 py-20 max-w-5xl mx-auto text-slate-900">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">Certifications</h1>

      {/* INTRO */}
      <p className="text-slate-600 max-w-3xl mb-16 leading-relaxed">
        Below are some of the certifications and achievements I have earned
        through academic learning, internships, professional training,
        and sports activities.
      </p>

      {/* CERTIFICATES GRID */}
      <div className="grid sm:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.src}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition"
          >
            <Image
              src={cert.src}
              alt={cert.title}
              width={400}
              height={260}
              className="rounded-lg mb-4 cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setZoomImage(cert.src)}
            />

            <h3 className="text-lg font-semibold mb-1 text-slate-900">
              {cert.title}
            </h3>

            <p className="text-sm text-slate-600">
              {cert.issuer}
            </p>

            <p className="text-sm text-slate-500">
              Year: {cert.year}
            </p>
          </div>
        ))}
      </div>

      {/* ZOOM OVERLAY */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setZoomImage(null)}
        >
          <Image
            src={zoomImage}
            alt="Zoomed Certificate"
            width={900}
            height={600}
            className="rounded-xl max-h-[90vh] w-auto"
            unoptimized
          />
        </div>
      )}
    </main>
  );
}