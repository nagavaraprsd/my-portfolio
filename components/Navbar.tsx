"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
  { name: "Certificates", path: "/certificates" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-5xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">

        {/* LOGO / NAME */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          B K Naga Vara Prasad
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden sm:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition hover:text-black ${
                    isActive
                      ? "text-black border-b-2 border-black pb-1"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

      </nav>
    </header>
  );
}
