"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    slug: "/inconsistencias-del-gobierno",
    category: "Investigación",
    categoryColor: "#DC2626",
    title: "Las inconsistencias del gobierno en El Espino",
    excerpt:
      "Declaraciones contradictorias, datos que no cuadran y decisiones que ignoraron el marco legal. Un análisis de lo que el gobierno ha dicho — y lo que realmente hizo.",
    image: "/assets/informate/gobierno.jpg",
    readTime: "8 min",
    tag: "⚠️ Denuncia",
    featured: true,
  },
  {
    slug: "/cronologia",
    category: "Cronología",
    categoryColor: "#7C3AED",
    title: "Cronología de eventos: cómo llegamos hasta aquí",
    excerpt:
      "Desde la primera concesión hasta las últimas excavaciones. Una línea de tiempo con fechas, actores y decisiones clave que definen el destino del Ecoparque.",
    image: "/assets/informate/cronologia.jpg",
    readTime: "6 min",
    tag: "📅 Línea de tiempo",
    featured: false,
  },
  {
    slug: "/datos-del-proyecto",
    category: "Datos",
    categoryColor: "#0369A1",
    title: "Datos específicos del proyecto CIFCO",
    excerpt:
      "55,711 m², leyes violadas, estudios de impacto ignorados. Todo lo que necesitas saber sobre el proyecto que amenaza el pulmón verde de San Salvador.",
    image: "/assets/informate/datoss.png",
    readTime: "5 min",
    tag: "📊 Cifras",
    featured: false,
  },
];

export default function InformateSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = articles;

  return (
    <section id="informate" ref={ref} className="relative py-20 bg-[#F8FAF9] overflow-hidden">
      <div className="max-w-360 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-navy/30 text-[10px] font-bold tracking-[0.3em] uppercase mb-5"
          >
            <span className="w-6 h-px bg-green-dark/40" />
            📰 Infórmate
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="overflow-hidden mb-1">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="font-display text-5xl sm:text-6xl text-navy leading-none tracking-tight"
                >
                  Lo que necesitas
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 60, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.13 }}
                  className="font-sans font-black text-4xl sm:text-5xl leading-none tracking-tight gradient-text"
                >
                  saber.
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-navy/40 text-sm max-w-xs leading-relaxed sm:text-right"
            >
              Investigaciones, datos y una cronología completa para entender qué está pasando con El Espino.
            </motion.p>
          </div>
        </motion.div>

        {/* Grid: featured left + two cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Featured card — 3 cols */}
          <motion.a
            href={featured.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-navy/6 hover:border-navy/15 hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-105 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              {/* Tag badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] font-black px-3 py-1 rounded-full text-white uppercase tracking-widest"
                  style={{ backgroundColor: featured.categoryColor }}
                >
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white/70 text-xs font-medium">{featured.tag}</span>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col p-6 gap-3">
              <h3 className="font-display text-xl sm:text-2xl text-navy leading-tight group-hover:text-green-dark transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-navy/50 text-sm leading-relaxed flex-1">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-navy/6">
                <span className="text-navy/30 text-xs font-medium">{featured.readTime} de lectura</span>
                <span className="inline-flex items-center gap-1 text-green-dark text-xs font-bold group-hover:gap-2 transition-all duration-200">
                  Leer más <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.a>

          {/* Side cards — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((article, i) => (
              <motion.a
                key={article.slug}
                href={article.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="group flex flex-col sm:flex-row lg:flex-col rounded-2xl overflow-hidden bg-white border border-navy/6 hover:border-navy/15 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 sm:w-44 sm:h-auto lg:w-auto lg:h-40 shrink-0 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] font-black px-2.5 py-0.5 rounded-full text-white uppercase tracking-widest"
                      style={{ backgroundColor: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col justify-between p-4 gap-2 flex-1">
                  <div>
                    <p className="text-navy/40 text-[10px] font-bold mb-1">{article.tag}</p>
                    <h3 className="font-display text-lg text-navy leading-snug group-hover:text-green-dark transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-navy/45 text-xs leading-relaxed mt-1.5 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-navy/6">
                    <span className="text-navy/30 text-[10px] font-medium">{article.readTime} de lectura</span>
                    <span className="inline-flex items-center gap-1 text-green-dark text-[11px] font-bold group-hover:gap-2 transition-all duration-200">
                      Leer <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
