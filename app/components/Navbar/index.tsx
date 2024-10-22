// components/Navbar/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="#aboutme" className="hover:text-yellow-400">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-yellow-400">
              {" "}
              Proficient Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-yellow-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#internship" className="hover:text-yellow-400">
              Internship
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
