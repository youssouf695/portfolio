"use client";

import { useState } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = [
    { name: "Tous", icon: FaCode },
    { name: "Web", icon: FaCode },
    { name: "Design", icon: FaPalette },
    { name: "Mobile", icon: FaMobileAlt },
    { name: "IA", icon: FaBrain },
  ];

  const projects = [
    {
      title: "Site de vente de moutons",
      description: "Plateforme de vente avec contact WhatsApp direct.",
      image: "/images/ferme/image.png",
      demoLink: "https://la-ferme-rust.vercel.app/",
      codeLink: "https://github.com/youssouf695/la-ferme",
      category: "Web",
    },
    {
      title: "FS Schedule",
      description: "Gestion des emplois du temps universitaire.",
      image: "/images/fs/fs1.png",
      codeLink: "https://github.com/RuthDinDev/Gestion_Emploi_Du_Temps",
      category: "Web",
    },
    {
      title: "Portfolio",
      description: "Portfolio moderne adaptable pour clients.",
      image: "/images/porfolio/porf1.png",
      demoLink: "https://njupuen.vercel.app",
      codeLink: "https://github.com/youssouf695/porfolio",
      category: "Design",
    },
    {
      title: "Coporate-SimTrack",
      description: "App mobile de gestion et reporting.",
      image: "/images/sim/sim0.png",
      category: "Mobile",
    },
    {
      title: "Agent AI",
      description: "Assistant IA pour recherche et synthèse documentaire.",
      image: "/images/ia/ia1.png",
      category: "IA",
    },
    {
      title: "IUT Document Stage",
      description: "Plateforme documentaire pour étudiants.",
      image: "/images/stageiut/stage2.png",
      demoLink: "https://iutnderedocstage.vercel.app/",
      codeLink: "https://github.com/youssouf695/DocStage",
      category: "Web",
    },
  ];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Projets | Njupuen Youssoufa</title>
      </Head>

      <main className="relative min-h-screen bg-[#050508] text-white overflow-hidden px-4 pt-24">

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* BLOBS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="container mx-auto relative z-10">

          {/* HERO */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
              Exploration de mes réalisations en développement, design et IA.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`group relative px-6 py-2.5 rounded-full flex items-center gap-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:border-blue-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}

                  {/* glow */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full blur bg-blue-500/20 -z-10" />
                  )}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-32 text-gray-500">
              Aucun projet trouvé.
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project, i) => (
                <div
                  key={i}
                  className="group transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          )}

          {/* STATS */}
          <div className="mt-20 text-center">
            <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
              <span className="text-blue-400 font-semibold text-lg">
                {filteredProjects.length}
              </span>{" "}
              <span className="text-gray-400">
                projet(s) affiché(s) sur {projects.length}
              </span>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}