"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PETITION_URL } from "@/app/constants";

const problems = [
  {
    number: "01",
    emoji: "💧",
    tag: "Crisis Hídrica",
    title: "Sin agua, no hay vida.",
    description:
      "El Espino recarga los acuíferos que abastecen a miles de familias. Es nuestra única defensa contra la sed. Si lo destruyen, en 20 años San Salvador enfrentará una crisis hídrica sin precedentes. El agua no se improvisa. El bosque sí tarda un siglo en crecer.",
    color: "#3B82F6",
    accent: "#DBEAFE",
  },
  {
    number: "02",
    emoji: "😮‍💨",
    tag: "Calidad del Aire",
    title: "Estamos perdiendo el aire que respiramos.",
    description:
      "91 hectáreas de bosque producen el oxígeno vital de la capital. Sin El Espino, San Salvador se convierte en una ciudad sofocante. Los primeros en pagar el precio serán los niños y los ancianos. No podemos devolverles ese aire una vez que se vaya.",
    color: "#16A34A",
    accent: "#DCFCE7",
  },
  {
    number: "03",
    emoji: "🔥",
    tag: "Isla de Calor",
    title: "San Salvador se está cociendo vivo.",
    description:
      "Las temperaturas ya están subiendo. Sin El Espino regulando el microclima, el calor será insoportable. El concreto acumula calor — el bosque lo absorbe. Estamos eliminando nuestra única sombra natural, y la población más vulnerable pagará con su salud.",
    color: "#DC2626",
    accent: "#FEE2E2",
  },
  {
    number: "04",
    emoji: "🦜",
    tag: "Extinción Irreversible",
    title: "Especies que nunca volverán.",
    description:
      "El torogoz, los venados, los tucanes viven aquí. Una vez destruido El Espino, desaparecen para siempre. Nuestros hijos verán fotos — nunca los animales reales. Eso no es desarrollo: es un crimen contra las generaciones que vienen.",
    color: "#EA580C",
    accent: "#FFEDD5",
  },
  {
    number: "05",
    emoji: "🏗️",
    tag: "El Proyecto CIFCO",
    title: "Sacrificando el futuro por un edificio.",
    description:
      "55,711 m² de bosque protegido serán cemento para un centro de convenciones. Violando leyes ambientales. Ignorando el clamor ciudadano. ¿Realmente vale más ese edificio que el único pulmón verde de la capital? ¿Quién tomó esa decisión por todos nosotros?",
    color: "#7C3AED",
    accent: "#EDE9FE",
  },
  {
    number: "06",
    emoji: "⏳",
    tag: "Patrimonio Irreemplazable",
    title: "Una vez perdido, se pierde para siempre.",
    description:
      "Este bosque tiene más de 100 años. No se recupera en décadas. Cuando caigan esos árboles, estaremos robándoles su herencia a nuestros hijos. No habrá manera de deshacer el daño. El tiempo se acaba — y con él, el Ecoparque El Espino.",
    color: "#B45309",
    accent: "#FEF3C7",
  },
];

export default function ProblemCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" ref={ref} className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-360 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-red-600/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-5"
          >
            <span className="w-6 h-px bg-red-600/50" />
            ⚠️ Lo que nos están quitando
          </motion.p>

          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="font-display text-5xl sm:text-6xl md:text-5xl text-navy leading-none tracking-tight"
            >
              El robo del
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.13 }}
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight gradient-text"
            >
              Pulmón Verde
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-navy/50 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Cada árbol talado es una pérdida que no tiene marcha atrás. Lo que está en juego no es solo un parque — es el agua, el aire, la temperatura y la vida de toda una ciudad.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group border-t border-navy/8 py-7 flex gap-5 items-start"
            >
              {/* Number */}
              <span
                className="hidden sm:block font-display text-4xl leading-none shrink-0 mt-0.5 opacity-25 group-hover:opacity-50 transition-opacity"
                style={{ color: problem.color }}
              >
                {problem.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{problem.emoji}</span>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: problem.color }}
                  >
                    {problem.tag}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl leading-snug text-navy mb-2">
                  {problem.title}
                </h3>

                <p className="text-navy/50 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-14 border-t border-red-200 pt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
        >
          <span className="text-2xl">⏳</span>
          <div className="flex-1">
            <p className="font-display text-xl sm:text-2xl text-navy leading-snug mb-1">
              Aún podemos evitarlo.
            </p>
            <p className="text-navy/40 text-sm leading-relaxed">
              La decisión está en nuestras manos — pero el tiempo se acaba. Actúa ahora antes de que sea demasiado tarde.
            </p>
          </div>
          <a
            href={PETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-orange-vibrant text-white font-black text-sm hover:bg-[#d4511f] transition-all duration-200 shadow-lg shadow-orange-200 pulse-btn"
          >
            ✍️ Firma Ahora
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
