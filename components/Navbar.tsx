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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="w-full px-8 md:px-16 lg:px-24 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-slate-900 font-bold text-lg tracking-wide"
        >
          B K Naga Vara Prasad
        </Link>

        {/* NAVIGATION */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-slate-900 border-b-2 border-slate-900 pb-1"
                      : "text-slate-600 hover:text-slate-900"
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