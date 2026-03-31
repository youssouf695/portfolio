"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Compétences", href: "/competences" },
    { name: "Expériences", href: "/experiences" },
  ];

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Njupuen
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <a
            href="/cv_NjupuenYoussoufa.pdf"
            download
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-sm font-medium hover:scale-105 transition"
          >
            CV
          </a>
        </nav>

        {/* MOBILE BTN */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mt-3 rounded-2xl bg-[#0f0f14]/95 backdrop-blur-xl border border-white/10 p-4 space-y-3 shadow-xl">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="/cv_NjupuenYoussoufa.pdf"
            download
            className="block text-center mt-3 px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Télécharger CV
          </a>

          <div className="flex gap-4 pt-4 border-t border-white/10">
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </div>
      )}
    </header>
  );
}