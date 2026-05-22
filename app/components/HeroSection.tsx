"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, TreePine } from "lucide-react";

const floatingLeaves = [
  { x: "10%", delay: 0, size: 20 },
  { x: "25%", delay: 0.8, size: 14 },
  { x: "50%", delay: 1.5, size: 18 },
  { x: "70%", delay: 0.4, size: 12 },
  { x: "85%", delay: 1.2, size: 22 },
  { x: "40%", delay: 2, size: 16 },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* Animated gradient background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#064E3B] to-[#0F172A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(249,115,22,0.08)_0%,transparent_50%)]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {floatingLeaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute text-[#10B981] opacity-30 pointer-events-none select-none"
          style={{ left: leaf.x, top: `${15 + i * 12}%`, fontSize: leaf.size }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌿
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#10B981] text-sm font-semibold">Movimiento Ciudadano Activo</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight"
        >
          <span className="text-white block">Salvemos</span>
          <span className="gradient-text block">El Espino</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 font-light leading-relaxed"
        >
          El proyecto CIFCO amenaza destruir{" "}
          <span className="text-[#F97316] font-semibold">55,711 m²</span> del pulmón verde
          de San Salvador. El tiempo se acaba.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/50 text-base mb-10"
        >
          91 hectáreas de bosque urbano · Hogar de cientos de especies · Irreemplazable
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://www.change.org"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="pulse-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F97316] text-white font-bold text-lg shadow-lg hover:bg-[#ea6c0a] transition-colors glow-orange"
          >
            <span>✍️ Firma la Petición</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="#problema"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:border-[#10B981] hover:text-[#10B981] transition-all"
          >
            <TreePine className="w-5 h-5" />
            <span>Conoce el Problema</span>
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["🧑", "👩", "👦", "🧑‍🦱", "👧"].map((emoji, i) => (
                <span key={i} className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-xs border border-white/10">
                  {emoji}
                </span>
              ))}
            </div>
            <span>+7,000 ya firmaron</span>
          </div>
          <span className="hidden sm:block">·</span>
          <span>📍 San Salvador, El Salvador</span>
          <span className="hidden sm:block">·</span>
          <span>🌳 91 hectáreas en peligro</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
