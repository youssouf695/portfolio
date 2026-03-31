"use client";

import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import IndexProjects from "./indexProjects";
import Experiences from "./experiences";
import Footer from "../components/Footer";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Njupuen Youssoufa | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio moderne et high-tech de Njupuen Youssoufa."
        />
      </Head>

      <main className="relative min-h-screen bg-[#050508] text-white overflow-hidden">

        {/* GRID FUTURISTE */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* BLOBS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />

        <Header />

        {/* HERO */}
        <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTE */}
          <div className="space-y-6 text-center md:text-left">
{/* 
            <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm backdrop-blur">
              👋 Disponible pour mission freelance
            </div> */}

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Youssoufa <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                Njupuen
              </span>
            </h1>

            <h2 className="text-gray-300 text-xl md:text-2xl">
              UI/UX Designer • Full-Stack Developer
            </h2>

            <p className="text-gray-400 max-w-lg leading-relaxed">
              Je conçois et développe des applications modernes avec une approche
              centrée utilisateur, combinant design (Figma) et technologies
              avancées (React, Next.js, Flutter).
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* BTN PRIMARY */}
              <a
                href="/cv_NjupuenYoussoufa.pdf"
                download
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-medium flex items-center gap-2 justify-center hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                <FaDownload />
                Télécharger CV

                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 blur transition" />
              </a>

              {/* BTN SECONDARY */}
              <a
                href="/projects"
                className="px-6 py-3 rounded-xl border border-blue-500/30 hover:bg-blue-500/10 text-blue-400 transition-all duration-300"
              >
                Voir mes projets →
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              {[
                { icon: <FaGithub />, link: "https://github.com/youssouf695" },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/youssoufa-njupuen-aa566b275",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:youssoufanjupuen@gmail.com",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/237695121070",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="p-3 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* HALO */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-[100px] opacity-40 group-hover:opacity-70 transition" />

              <Image
                src="/images/avatar_profil.png"
                alt="Youssoufa"
                width={320}
                height={320}
                className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border border-white/10 shadow-2xl group-hover:scale-105 transition duration-500"
                priority
              />

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <IndexProjects />

        {/* EXPERIENCES */}
        <Experiences />

        <Footer />
      </main>
    </>
  );
}