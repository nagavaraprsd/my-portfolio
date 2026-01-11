export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      <h1 className="font-bold text-xl">B K Naga Vara Prasad</h1>

      <ul className="flex gap-6 text-gray-600">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
