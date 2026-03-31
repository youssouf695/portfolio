"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export default function Layout({ children }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  // Paramètres ajustés pour un rendu plus fluide
  const PARTICLE_COUNT = 180; // Réduit pour meilleures performances
  const PARTICLE_SIZE_MIN = 1.5;
  const PARTICLE_SIZE_MAX = 4;
  const PARTICLE_SPEED_MIN = 0.2;
  const PARTICLE_SPEED_MAX = 0.8;
  const CONNECTION_DISTANCE = 120;
  const PARTICLE_LIFESPAN = 800;

  // Création d'une particule
  const createParticle = useCallback((width, height) => {
    return {
      id: Math.random(),
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
      opacity: 0,
      life: 0,
      maxLife: PARTICLE_LIFESPAN + Math.random() * PARTICLE_LIFESPAN * 0.5,
    };
  }, []);

  // Initialisation des particules
  const initParticles = useCallback((width, height) => {
    const newParticles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      newParticles.push(createParticle(width, height));
    }
    particles.current = newParticles;
  }, [createParticle]);

  // Redimensionnement du canvas
  useEffect(() => {
    const handleResize = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        setCanvasDimensions({ width: newWidth, height: newHeight });
        
        // Réinitialiser les particules avec les nouvelles dimensions
        if (newWidth > 0 && newHeight > 0) {
          initParticles(newWidth, newHeight);
        }
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  // Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvasDimensions;

    if (width === 0 || height === 0) return;

    canvas.width = width;
    canvas.height = height;

    const animate = () => {
      if (!ctx) return;
      
      // Nettoyage avec effet de trainée (plus fluide)
      ctx.fillStyle = "rgba(17, 24, 39, 0.15)"; // Fond avec effet de persistance
      ctx.fillRect(0, 0, width, height);

      // Mise à jour des particules
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Gestion de l'opacité
        if (p.life < PARTICLE_LIFESPAN / 3) {
          p.opacity = Math.min(0.8, p.opacity + 0.015);
        } else if (p.life > PARTICLE_LIFESPAN * 0.7) {
          p.opacity = Math.max(0, p.opacity - 0.01);
        }

        // Rebond sur les bords (optionnel, plus naturel que la disparition)
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Garder dans les limites
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        return p.opacity > 0.05 && p.life < p.maxLife;
      });

      // Ajout de nouvelles particules si nécessaire
      if (particles.current.length < PARTICLE_COUNT * 0.7) {
        particles.current.push(createParticle(width, height));
      }

      // Dessin des particules
      particles.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Dégradé radial pour un effet plus doux
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 1.5);
        gradient.addColorStop(0, `rgba(59, 130, 246, ${p.opacity * 0.9})`); // Bleu vif
        gradient.addColorStop(1, `rgba(139, 92, 246, ${p.opacity * 0.3})`); // Violet
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Dessin des connexions
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const lineOpacity = (1 - distance / CONNECTION_DISTANCE) * Math.min(p1.opacity, p2.opacity) * 0.5;
            
            // Dégradé de couleur pour les lignes
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${lineOpacity})`);
            gradient.addColorStop(1, `rgba(139, 92, 246, ${lineOpacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (width > 0 && height > 0) {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [canvasDimensions, createParticle]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-screen">
      {/* Canvas animé */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Contenu avec overlay pour lisibilité */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}