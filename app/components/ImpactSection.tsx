"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const beforeItems = [
  "91 hectáreas de bosque nativo",
  "Regulación natural del clima urbano",
  "Recarga de acuíferos vitales",
  "Hábitat para cientos de especies",
  "Espacio de recreación ciudadana",
  "Patrimonio natural de más de 100 años",
];

const afterItems = [
  "Cemento y edificios de convenciones",
  "Aumento de temperatura urbana",
  "Pérdida de fuentes de agua",
  "Extinción local de fauna silvestre",
  "Contaminación y ruido constante",
  "Daño ambiental irreversible",
];

const facts = [
  { number: "55,711", unit: "m²", description: "de bosque amenazado directamente" },
  { number: "400+", unit: "sp", description: "especies de fauna registradas" },
  { number: "0", unit: "%", description: "posibilidad de recuperación total" },
];

export default function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="impacto" ref={ref} className="relative py-24 overflow-hidden bg-[#0F172A]">
      {/* Dramatic background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1a0a0a] to-[#0F172A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(239,68,68,0.08)_0%,transparent_70%)]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#EF4444] text-sm font-semibold mb-4">
            🔴 Impacto Real
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            El antes y el{" "}
            <span className="text-[#EF4444]">después</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Si el proyecto CIFCO continúa, esto es lo que El Salvador perdería para siempre.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-[#22D478]/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#22D478]/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#22D478]" />
              </div>
              <h3 className="text-2xl font-black text-white">Hoy: El Espino</h3>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="text-[#22D478] mt-0.5 text-lg">🌿</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-2xl p-8 border border-[#EF4444]/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#EF4444]/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" />
              </div>
              <h3 className="text-2xl font-black text-white">Con CIFCO: Destrucción</h3>
            </div>
            <ul className="space-y-3">
              {afterItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 text-white/80"
                >
                  <span className="text-[#EF4444] mt-0.5 text-lg">⚠️</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Impact facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {facts.map((fact, i) => (
            <div
              key={fact.description}
              className="text-center glass rounded-2xl py-8 px-4"
              style={{ borderColor: i === 2 ? "rgba(239,68,68,0.3)" : "rgba(34,212,120,0.2)" }}
            >
              <p className="text-4xl font-black" style={{ color: i === 2 ? "#EF4444" : "#22D478" }}>
                {fact.number}
                <span className="text-2xl"> {fact.unit}</span>
              </p>
              <p className="text-white/60 mt-2 text-sm">{fact.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl sm:text-3xl font-bold text-white/90 italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;Destruir El Espino no es progreso.{" "}
            <span className="text-[#22D478] not-italic font-black">Es una sentencia de muerte</span>{" "}
            para el ecosistema urbano de San Salvador.&rdquo;
          </blockquote>
          <p className="text-white/40 mt-4 text-sm">— Ambientalistas y ciudadanos salvadoreños</p>
        </motion.div>
      </div>
    </section>
  );
}
