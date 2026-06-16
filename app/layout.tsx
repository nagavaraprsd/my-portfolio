import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B K Naga Vara Prasad | Portfolio",
  description:
    "Computer Science Engineering Graduate skilled in Python, JavaScript, SQL, HTML, CSS, and modern web technologies.",
  keywords: [
    "B K Naga Vara Prasad",
    "Portfolio",
    "Software Engineer",
    "Python Developer",
    "Web Developer",
    "Computer Science Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} B K Naga Vara Prasad. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}