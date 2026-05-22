"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trees, Users, Calendar, AlertTriangle } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: Trees,
    value: 91,
    suffix: " ha",
    label: "Hectáreas de Bosque",
    sublabel: "del pulmón verde de San Salvador",
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
    color: "#BEF6AF",
  },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
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
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ color }} className="text-4xl sm:text-5xl font-black">
      {count.toLocaleString("es-SV")}
      <span className="text-3xl sm:text-4xl">{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#0F172A] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,212,120,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#22D478]/10 border border-[#22D478]/30 text-[#22D478] text-sm font-semibold mb-4">
            Los Números No Mienten
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            La magnitud del{" "}
            <span className="gradient-text">problema</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
                style={{ borderColor: `${stat.color}30` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} color={stat.color} />
                <p className="text-white font-bold mt-2 mb-1">{stat.label}</p>
                <p className="text-white/50 text-sm leading-snug">{stat.sublabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
