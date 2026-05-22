"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trees, Users, Calendar, AlertTriangle } from "lucide-react";
import Script from "next/script";

const stats = [
  {
    icon: Trees,
    value: 91,
    suffix: " ha",
    label: "Hectáreas de Bosque",
    sublabel: "pulmón verde de San Salvador",
    color: "#22D478",
  },
  {
    icon: AlertTriangle,
    value: 55711,
    suffix: " m²",
    label: "En Peligro Inmediato",
    sublabel: "área afectada por el proyecto CIFCO",
    color: "#EF4444",
  },
  {
    icon: Users,
    value: 7000,
    suffix: "+",
    label: "Firmas Recolectadas",
    sublabel: "salvadoreños dicen #NoAlCIFCO",
    color: "#FF6B35",
  },
  {
    icon: Calendar,
    value: 100,
    suffix: "+ años",
    label: "De Historia",
    sublabel: "El Espino ha protegido San Salvador",
    color: "#1BA961",
  },
];

const problems = [
  {
    emoji: "💧",
    title: "Crisis Hídrica",
    description:
      "Recarga acuíferos que abastecen miles de familias. Sin el bosque, la ciudad perderá una fuente vital de agua potable.",
    color: "#3B82F6",
  },
  {
    emoji: "🌬️",
    title: "Calidad del Aire",
    description:
      "91 ha producen oxígeno y filtran toneladas de CO₂ al año. El Espino es el pulmón que San Salvador no puede perder.",
    color: "#22D478",
  },
  {
    emoji: "🌡️",
    title: "Isla de Calor",
    description:
      "Sin el bosque, las temperaturas de San Salvador subirán varios grados. El concreto absorbe calor; el bosque lo regula.",
    color: "#EF4444",
  },
  {
    emoji: "🦜",
    title: "Biodiversidad",
    description:
      "Cientos de especies de aves, mamíferos y plantas nativas. Su destrucción causaría extinción local irreversible.",
    color: "#FF6B35",
  },
  {
    emoji: "🏗️",
    title: "Proyecto CIFCO",
    description:
      "Planea construir en 55,711 m² de área protegida, violando leyes ambientales vigentes.",
    color: "#8B5CF6",
  },
  {
    emoji: "🌳",
    title: "Patrimonio Irreemplazable",
    description:
      "Un bosque de +100 años no se recupera. Una vez destruido, generaciones futuras nunca lo conocerán.",
    color: "#1BA961",
  },
];

function Counter({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ color }} className="text-3xl sm:text-4xl font-black leading-none">
      {count.toLocaleString("es-SV")}
      <span className="text-2xl sm:text-3xl">{suffix}</span>
    </span>
  );
}

function InstagramReel() {
  const processEmbed = () => {
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  };

  useEffect(() => {
    processEmbed();
  }, []);

  return (
    <div className="w-full flex justify-center items-start">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/reel/DW7MKp7jog8/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{ maxWidth: 400, minWidth: 280, width: "100%", margin: 0 }}
      />
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processEmbed}
      />
    </div>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="problema" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Subtle hero-matching tint at the top */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#E8FDDB]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#0F172A]/50 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            ⚠️ Los números no mienten
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A]">
            La magnitud del{" "}
            <span className="gradient-text">problema</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mt-3 text-base">
            No es solo un bosque. Es el sistema de soporte de vida de toda una ciudad metropolitana.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border p-5 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: `${stat.color}30` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                <p className="text-[#0F172A] font-bold text-sm mt-2 mb-0.5 leading-snug">
                  {stat.label}
                </p>
                <p className="text-[#64748B] text-xs leading-snug">{stat.sublabel}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Problem cards + Reel */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Problem cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.07 }}
                className="flex gap-3 items-start p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ backgroundColor: `${problem.color}10` }}
                >
                  {problem.emoji}
                </div>
                <div>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: problem.color }}
                  >
                    {problem.title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instagram Reel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-[#E8FDDB] shadow-sm"
          >
            <div className="bg-[#E8FDDB]/70 px-4 py-3 border-b border-green-100 flex items-center gap-2">
              <span className="text-base">📹</span>
              <p className="text-[#1BA961] font-bold text-sm">El Espino en imágenes</p>
            </div>
            <InstagramReel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
