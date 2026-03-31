"use client";

import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-[#050508] text-white overflow-hidden">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm" />

      <div className="container mx-auto px-4 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Njupuen<span className="text-white">.</span>
            </h3>

            <p className="text-gray-400 mt-4 max-w-sm text-sm">
              Développeur Full-Stack & UI/UX Designer. Création d’expériences
              digitales modernes, performantes et orientées utilisateur.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Accueil", "Projets", "Compétences", "Expériences"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <p className="text-gray-400 text-sm">
              📍 Ngaoundéré, Cameroun <br />
              📧 youssoufanjupuen@gmail.com <br />
              📞 +237 695 12 10 70
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">

          {/* SOCIAL */}
          <div className="flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-blue-500/10 transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>

          {/* TEXT */}
          <div className="text-sm text-gray-400 text-center">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              Fait avec <Heart className="text-red-500 animate-pulse" size={14} />
              par <span className="text-blue-400">Njupuen Youssoufa</span>
            </p>

            <p className="mt-2">
              © {year} • Next.js • TailwindCSS
            </p>
          </div>

          {/* CTA */}
          <a
            href="/cv_NjupuenYoussoufa.pdf"
            download
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
          >
            Télécharger CV
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}