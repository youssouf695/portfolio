"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  EyeOff,
  X,
  Image,
} from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  codeLink,
  demoDisabled = false,
  githDisabled = false,
  screenshots = [],
  category = "Projet",
}) {
  const [showDemo, setShowDemo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = showDemo || showModal ? "hidden" : "unset";
  }, [showDemo, showModal]);

  const openModal = (index = 0) => {
    setCurrentImage(index);
    setShowModal(true);
  };

  return (
    <>
      {/* CARD */}
      <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-400/20 hover:from-blue-500 hover:to-cyan-400 transition duration-500">

        <div className="relative bg-[#0f0f14]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full hover:-translate-y-2 transition duration-500">

          {/* IMAGE */}
          <div
            className="relative h-56 overflow-hidden cursor-pointer"
            onClick={() => screenshots.length > 0 && openModal(0)}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">

              {screenshots.length > 0 && (
                <div className="flex items-center gap-2 text-white text-sm">
                  <Image size={18} />
                  Voir les captures
                </div>
              )}

              {!demoDisabled && demoLink && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDemo(true);
                  }}
                  className="px-4 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600"
                >
                  Aperçu rapide
                </button>
              )}
            </div>

            {/* BADGE */}
            <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-black/60 backdrop-blur text-blue-300 border border-blue-500/30">
              {category}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5 flex flex-col flex-1">

            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
              {title}
            </h3>

            <p className="text-sm text-gray-400 mt-2 line-clamp-3">
              {description}
            </p>

            {/* SCREENSHOTS */}
            {screenshots.length > 0 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {screenshots.slice(0, 4).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-16 h-12 rounded-md object-cover cursor-pointer border border-white/10 hover:scale-105 transition"
                    onClick={() => openModal(i)}
                  />
                ))}
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-auto flex gap-3 pt-4 flex-wrap">

              {/* DEMO */}
              <a
                href={!demoDisabled ? demoLink : undefined}
                target="_blank"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                  demoDisabled
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition shadow-lg shadow-blue-500/20"
                }`}
              >
                <ExternalLink size={16} />
                Démo
              </a>

              {/* CODE */}
              <a
                href={!githDisabled ? codeLink : undefined}
                target="_blank"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                  githDisabled
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-blue-400 hover:text-white transition"
                }`}
              >
                <Github size={16} />
                Code
              </a>

              {/* PREVIEW */}
              {!demoDisabled && demoLink && (
                <button
                  onClick={() => setShowDemo(!showDemo)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  {showDemo ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )}
            </div>
          </div>

          {/* LIGHT SWEEP */}
          <div className="absolute -left-20 top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

        </div>
      </div>

      {/* DEMO PANEL */}
      {showDemo && demoLink && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur flex justify-end">

          <div className="w-full md:w-2/3 lg:w-1/2 bg-[#0f0f14] h-full flex flex-col shadow-2xl">

            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <h4 className="font-semibold">{title}</h4>
              <button onClick={() => setShowDemo(false)}>
                <X />
              </button>
            </div>

            <iframe src={demoLink} className="flex-1 w-full" />
          </div>
        </div>
      )}

      {/* MODAL GALLERY */}
      {showModal && screenshots.length > 0 && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            
            <img
              src={screenshots[currentImage]}
              className="w-full rounded-xl shadow-2xl"
            />

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full"
            >
              <X />
            </button>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentImage((p) => (p - 1 + screenshots.length) % screenshots.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                >
                  ◀
                </button>

                <button
                  onClick={() =>
                    setCurrentImage((p) => (p + 1) % screenshots.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}