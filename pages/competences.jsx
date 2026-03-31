"use client";

import Footer from "@/components/Footer";
import { CheckCircle, Code2, Palette, Wrench } from "lucide-react";

export default function Competences() {
  const skills = [
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      items: ["Figma", "Photoshop", "Illustrator", "Canva"],
    },
    {
      title: "Développement Web & Mobile",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        "React.js", "Next.js", "Node.js", "React Native", "Flutter",
        "HTML5/CSS3", "PHP", "Tailwind CSS", "JavaScript/TypeScript", "Python"
      ],
    },
    {
      title: "Outils & Soft Skills",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        "Git / GitHub", "Vercel", "Sentry", "Gestion de projets",
        "Travail en équipe", "Communication", "Résolution de problèmes", "Autonomie"
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white px-4 pt-24 overflow-hidden">

      {/* GRID FUTURISTE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            Mes Compétences
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl mx-auto">
            Stack technique, outils et expertises utilisés pour concevoir des expériences modernes.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-16">
          {skills.map((section, index) => (
            <section key={index}>

              {/* TITLE */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <div className="text-blue-400">
                    {section.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {section.title}
                </h2>
              </div>

              {/* GRID */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-transparent to-blue-500/30 hover:from-blue-500 hover:to-cyan-400 transition-all duration-500"
                  >
                    <div className="relative bg-[#111117]/80 backdrop-blur-xl rounded-2xl p-5 border border-white/5 h-full flex items-center gap-3 overflow-hidden">

                      {/* HOVER GLOW */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 blur-xl" />

                      <CheckCircle className="text-blue-400 w-5 h-5 group-hover:scale-125 transition duration-300" />

                      <span className="font-medium tracking-wide">
                        {item}
                      </span>

                      {/* LIGHT SWEEP */}
                      <div className="absolute -left-20 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

                    </div>
                  </div>
                ))}

              </div>
            </section>
          ))}
        </div>
      </div>

    </main>
  );
}