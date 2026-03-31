"use client";

import { useState } from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";

export default function IndexProjects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Site de vente de moutons",
      description:
        "Un site vitrine avec contact WhatsApp intégré pour faciliter la vente directe.",
      image: "/images/ferme/image.png",
      demoLink: "https://la-ferme-rust.vercel.app/",
      codeLink: "https://github.com/youssouf695/la-ferme",
      category: "Web",
    },
    {
      title: "FS Schedule",
      description:
        "Système de gestion des emplois de temps pour la FS de Ngaoundéré.",
      image: "/images/fs/fs1.png",
      codeLink:
        "https://github.com/RuthDinDev/Gestion_Emploi_Du_Temps",
      category: "Web",
    },
    {
      title: "Coporate-SimTrack",
      description:
        "Application mobile pour le suivi des ventes et reporting des agents.",
      image: "/images/sim/sim0.png",
      category: "Mobile",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <Head>
        <title>Projets | Njupuen Youssoufa</title>
      </Head>

      <section className="relative py-24 bg-[#050508] text-white overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              Mes Projets
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Une sélection de projets avec une approche design + performance.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex justify-center gap-4 mb-12">
            {["All", "Web", "Mobile"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                    : "border-white/10 text-gray-400 hover:border-blue-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-400/20 hover:from-blue-500 hover:to-cyan-400 transition duration-500"
              >
                <div className="bg-[#0f0f14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-2 transition duration-500">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          className="px-4 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600"
                        >
                          Demo
                        </a>
                      )}

                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-2">
                      {project.description}
                    </p>

                    {/* CATEGORY */}
                    <div className="mt-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* LIGHT SWEEP */}
                  <div className="absolute -left-20 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <a
              href="/projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-medium flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/20"
            >
              Voir tous les projets
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}