import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-600 hover:text-blue-800">
          MySite
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
