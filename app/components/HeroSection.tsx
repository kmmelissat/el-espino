"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PETITION_URL } from "@/app/constants";

const tags = ["Reforestación", "Conservación", "Acción"];

const marqueeWords = [
  "REFORESTACIÓN",
  "CONSERVACIÓN",
  "BIODIVERSIDAD",
  "ACCIÓN",
  "EL ESPINO",
  "VIDA",
  "BOSQUE",
  "FUTURO",
  "NATURALEZA",
  "DEFENSA",
];

export default function HeroSection() {
  const [activeTag, setActiveTag] = useState(0);

  return (
    <section className="relative lg:min-h-screen bg-green-extra-light flex flex-col overflow-hidden">
      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:flex-row items-stretch gap-5 lg:gap-10 px-5 sm:px-10 lg:px-16 xl:px-20 pt-20 sm:pt-24 lg:pt-28 pb-4 lg:pb-8 max-w-360 mx-auto w-full">

{/* ── LEFT SIDE (40%) ── */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between gap-6 lg:gap-0 order-2 lg:order-1">

          {/* 1. Small caps header — desktop only */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block text-navy/50 text-[11px] font-bold tracking-[0.2em] uppercase leading-relaxed"
          >
            SOMOS UN MOVIMIENTO<br />
            DE AMANTES DE LA NATURALEZA<br />
            UNIDOS POR UNA CAUSA COMÚN
          </motion.p>

          {/* 2. Community stats + pills */}
          <div className="flex flex-col gap-5">
            {/* Avatars + number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full border-[3px] border-[#E8FDDB] overflow-hidden ring-0">
                  <Image
                    src="/assets/torogoz.jpeg"
                    alt="Torogoz"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-11 h-11 rounded-full border-[3px] border-[#E8FDDB] bg-[#22D478] flex items-center justify-center text-lg">
                  🌿
                </div>
                <div className="w-11 h-11 rounded-full border-[3px] border-[#E8FDDB] overflow-hidden">
                  <Image
                    src="/assets/mapache1.jpg"
                    alt="Mapache"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-[42px] font-black text-[#0F172A] leading-none">
                  170k<span className="text-[#22D478]">+</span>
                </p>
                <p className="text-[#0F172A]/45 text-[10px] font-bold tracking-[0.18em] uppercase mt-1">
                  PERSONAS UNIDAS
                </p>
              </div>
            </motion.div>

            {/* Filter pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, i) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(i)}
                  className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTag === i
                      ? "bg-[#0F172A] text-white"
                      : "border-2 border-[#0F172A]/15 text-[#0F172A] hover:border-[#22D478] hover:text-[#1BA961]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>

          {/* 3. Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[36px] sm:text-[56px] lg:text-[52px] xl:text-[64px] font-regular text-[#0F172A] leading-[0.92] [font-family:var(--font-climate)]"
            style={{ fontVariationSettings: "'YEAR' 2030" }}
          >
            Salvemos<br />
            El Espino{" "}
            <span className="inline-block" style={{ fontStyle: "normal" }}>
              🌳
            </span>
            <br />
            el Pulmón<br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #0F172A" }}
            >
              Verde
            </span>
          </motion.h1>

          {/* 4. CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-vibrant text-white font-black text-sm hover:bg-[#d4511f] transition-all duration-200 shadow-lg shadow-orange-200 pulse-btn"
            >
              ✍️ Firma la Petición
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#problema"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#0F172A]/20 text-[#0F172A] font-semibold text-sm hover:border-[#22D478] hover:text-[#1BA961] transition-all duration-200"
            >
              Conoce el Problema
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT SIDE (60%) — mosaic grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-[60%] h-80 lg:h-auto lg:min-h-[clamp(480px,65vh,700px)] order-1 lg:order-2"
        >
          {/* mobile: 2-col simplified / desktop: full mosaic */}
          <div
            className="w-full h-full grid gap-3 lg:hidden"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1.4fr 1fr",
              gridTemplateAreas: `"main main" "eco3 stat"`,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ gridArea: "main" }}
            >
              <Image src="/assets/ecoparque2.jpg" alt="Bosque El Espino" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-green-primary text-navy text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide uppercase">
                  Ecoparque El Espino
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ gridArea: "eco3" }}
            >
              <Image src="/assets/ecoparque3.jpeg" alt="Panorámica El Espino" fill sizes="50vw" className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="rounded-2xl bg-green-primary flex flex-col items-center justify-center gap-1 text-center px-2"
              style={{ gridArea: "stat" }}
            >
              <span className="text-[38px] font-black text-navy leading-none [font-family:var(--font-climate)]" style={{ fontVariationSettings: "'YEAR' 2030" }}>91</span>
              <span className="text-navy/70 text-[9px] font-bold tracking-widest uppercase leading-tight">Hectáreas<br />de Bosque</span>
            </motion.div>
          </div>

          {/* desktop: full 3-col mosaic */}
          <div
            className="w-full h-full hidden lg:grid gap-3"
            style={{
              gridTemplateColumns: "1.4fr 0.65fr 1fr",
              gridTemplateRows: "1.6fr 1fr",
              gridTemplateAreas: `"main main side-t" "eco3 stat side-b"`,
            }}
          >
            {/* ecoparque2 — celda principal (grande) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ gridArea: "main" }}
            >
              <Image
                src="/assets/ecoparque2.jpg"
                alt="Bosque El Espino"
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              {/* label bottom-left */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="bg-green-primary text-navy text-[10px] font-black px-2.5 py-1 rounded-full tracking-wide uppercase">
                  Ecoparque El Espino
                </span>
              </div>
            </motion.div>

            {/* torogoz — arriba derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ gridArea: "side-t" }}
            >
              <Image
                src="/assets/torogoz.jpeg"
                alt="Torogoz, ave nacional de El Salvador"
                fill
                sizes="(max-width: 1024px) 0px, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-black text-xs leading-tight">Torogoz</p>
                <p className="text-white/60 text-[9px]">Ave Nacional</p>
              </div>
              {/* red alert dot */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-alert animate-pulse" />
                <span className="text-white text-[8px] font-semibold">En peligro</span>
              </div>
            </motion.div>

            {/* ecoparque3 — abajo izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ gridArea: "eco3" }}
            >
              <Image
                src="/assets/ecoparque3.jpeg"
                alt="Panorámica El Espino"
                fill
                sizes="(max-width: 1024px) 0px, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* stat card — abajo centro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="rounded-2xl bg-green-primary flex flex-col items-center justify-center gap-1 text-center px-2"
              style={{ gridArea: "stat" }}
            >
              <span className="text-[42px] font-black text-navy leading-none [font-family:var(--font-climate)]" style={{ fontVariationSettings: "'YEAR' 2030" }}>
                91
              </span>
              <span className="text-navy/70 text-[10px] font-bold tracking-widest uppercase leading-tight">
                Hectáreas<br />de Bosque
              </span>
            </motion.div>

            {/* mapache — abajo derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ gridArea: "side-b" }}
            >
              <Image
                src="/assets/mapache1.jpg"
                alt="Mapache, fauna de El Espino"
                fill
                sizes="(max-width: 1024px) 0px, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-black text-xs">Mapache</p>
                <p className="text-white/60 text-[9px]">Fauna nativa</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM MARQUEE TICKER ── */}
      <div className="w-full bg-[#0F172A] py-4 overflow-hidden mt-4">
        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-0 shrink-0"
          >
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center">
                <span className="text-white font-black text-xs tracking-[0.22em] px-5 whitespace-nowrap [font-family:var(--font-climate)]">
                  {word}
                </span>
                <span className="text-[#22D478] text-xs">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
