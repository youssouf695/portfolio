"use client";

import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Experiences() {
  const experiences = [
    {
      date: "Octobre 2024 - En cours",
      type: "Développeur Web",
      entreprise: "DailyLearning",
      theme: "Développement Front-end & Maquettes",
      link: "https://dailylearning.org",
      description:
        "Participation à des projets React/Next.js, développement Python, création de maquettes avec Figma.",
    },
    {
      date: "20 mars – 26 mai 2024",
      type: "Stage académique",
      entreprise: "DailyLearning",
      theme: "Système de gestion de notes",
      link: "https://dailylearning.org",
      description:
        "Conception et implémentation d'un système numérique pour la gestion académique (FS de Ngaoundéré).",
    },
    {
      date: "Janvier – Février 2024",
      type: "Projet freelance",
      entreprise: "Projet personnel / client",
      theme: "Site vitrine de vente de moutons",
      link: "https://la-ferme-rust.vercel.app",
      description:
        "Conception d'un site de vente avec panier, contact WhatsApp, réalisé en React/Next.js.",
    },
    {
      date: "08 avril – 28 juin 2023",
      type: "Stage académique",
      entreprise: "SYGALIN SAS",
      theme: "Gestion d'exceptions avec Sentry",
      link: "https://www.sygalin.com",
      description:
        "Installation et configuration de Sentry pour la collecte des erreurs dans les applications SYGALIN.",
    },
    {
      date: "Décembre 2022 – Février 2023",
      type: "Projet mobile",
      entreprise: "Coporate-SimTrack",
      theme: "Gestion de vente et reporting agents",
      link: "#",
      description:
        "Application mobile pour le suivi des ventes, commandes, et rapports d'agents activateurs de SIM.",
    },
    {
      date: "28 juin – 29 juillet 2022",
      type: "Stage ouvrier",
      entreprise: "Hôpital Régional de Ngaoundéré",
      theme: "Découverte du monde professionnel",
      link: "",
      description:
        "Stage de niveau DUT 1 pour une première immersion en environnement professionnel.",
    },
    {
      date: "2021 – 2023",
      type: "Agent commercial",
      entreprise: "INGOSEN SARL & Ets ShalomService",
      theme: "Téléphonie mobile & services",
      link: "",
      description:
        "Vente de cartes SIM, crédits, opérations Orange Money / MTN Mobile Money, conseil client.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#050508] text-white px-4 pt-24 overflow-hidden">

      {/* GRID FUTURISTE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* LIGHT BLOBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            Mon Parcours
          </h1>
          <p className="text-gray-400 mt-6 text-lg">
            Une évolution progressive entre projets, stages et expériences terrain.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14 group">

                {/* POINT */}
                <div className="absolute left-[6px] top-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-125 transition">
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30" />
                </div>

                {/* CARD */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/30 via-transparent to-cyan-400/30 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500">

                  <div className="bg-[#0f0f14]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:-translate-y-1 transition-all duration-300">

                    {/* HEADER */}
                    <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <FaCalendarAlt className="w-3 h-3" />
                        {exp.date}
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold">
                      {exp.type}
                    </h3>

                    {/* ENTREPRISE */}
                    {exp.link && exp.link !== "#" ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-400 hover:text-blue-400 transition mt-1 group/link relative"
                      >
                        {exp.entreprise}
                        <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition" />

                        {/* underline animée */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 group-hover/link:w-full transition-all duration-300" />
                      </a>
                    ) : (
                      <p className="text-gray-400 mt-1 text-sm">
                        {exp.entreprise}
                      </p>
                    )}

                    {/* THEME */}
                    <p className="mt-3 text-sm text-cyan-300 font-medium">
                      {exp.theme}
                    </p>

                    {/* DESC */}
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* LIGHT SWEEP */}
                    <div className="absolute -left-20 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}