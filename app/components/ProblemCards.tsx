"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplets, Wind, Thermometer, Bird, Building, TreePine } from "lucide-react";

const problems = [
  {
    icon: Droplets,
    emoji: "💧",
    title: "Crisis Hídrica",
    description:
      "El Espino recarga acuíferos que abastecen a miles de familias salvadoreñas. Sin el bosque, la ciudad perderá una fuente vital de agua potable.",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.08)",
  },
  {
    icon: Wind,
    emoji: "🌬️",
    title: "Calidad del Aire",
    description:
      "91 hectáreas de bosque producen oxígeno y filtran toneladas de CO₂ al año. El Espino es el pulmón que San Salvador no puede perder.",
    color: "#10B981",
    bgColor: "rgba(16,185,129,0.08)",
  },
  {
    icon: Thermometer,
    emoji: "🌡️",
    title: "Efecto de Isla de Calor",
    description:
      "Sin El Espino, las temperaturas de San Salvador subirán varios grados. El concreto absorbe calor; el bosque lo regula.",
    color: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
  },
  {
    icon: Bird,
    emoji: "🦜",
    title: "Biodiversidad en Peligro",
    description:
      "Cientos de especies de aves, mamíferos y plantas nativas viven en El Espino. Su destrucción causaría una extinción local irreversible.",
    color: "#F97316",
    bgColor: "rgba(249,115,22,0.08)",
  },
  {
    icon: Building,
    emoji: "🏗️",
    title: "El Proyecto CIFCO",
    description:
      "El Centro Internacional de Ferias y Convenciones planea construir infraestructura en 55,711 m² de área protegida, violando leyes ambientales vigentes.",
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
  },
  {
    icon: TreePine,
    emoji: "🌳",
    title: "Patrimonio Irreemplazable",
    description:
      "Un bosque de más de 100 años no se puede recuperar. Una vez destruido, generaciones futuras nunca podrán conocer el Espino original.",
    color: "#34D399",
    bgColor: "rgba(52,211,153,0.08)",
  },
];

export default function ProblemCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" ref={ref} className="relative py-24 bg-white dark:bg-[#0F172A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-sm font-semibold mb-4">
            ⚠️ El Problema
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mb-4">
            ¿Por qué importa{" "}
            <span className="gradient-text">El Espino</span>?
          </h2>
          <p className="text-[#64748B] dark:text-white/60 max-w-2xl mx-auto text-lg">
            No es solo un bosque. Es el sistema de soporte de vida de toda una ciudad metropolitana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 border border-gray-100 dark:border-white/10 bg-white dark:bg-[#111827] hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${problem.color}20, transparent)`,
                  }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: problem.bgColor }}
                >
                  {problem.emoji}
                </div>

                <h3
                  className="text-xl font-bold mb-3 text-[#0F172A] dark:text-white"
                  style={{ color: undefined }}
                >
                  <span style={{ color: problem.color }}>{problem.title}</span>
                </h3>

                <p className="text-[#64748B] dark:text-white/60 leading-relaxed text-sm">
                  {problem.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${problem.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
