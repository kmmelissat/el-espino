"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 55711,
    suffix: " m²",
    label: "Área a transferir a CIFCO",
    sublabel: "11.71% del total del Parque Bicentenario",
    color: "#EF4444",
  },
  {
    value: 91,
    suffix: " ha",
    label: "Parque Bicentenario",
    sublabel: "área natural protegida por ley desde 2009",
    color: "#22D478",
  },
  {
    value: 250,
    suffix: "+",
    label: "Árboles Marcados",
    sublabel: "algunos de hasta 10 metros de altura",
    color: "#FF6B35",
  },
  {
    value: 25,
    suffix: "%",
    label: "Estimado a Deforestar",
    sublabel: "del terreno transferido será talado",
    color: "#BEF6AF",
  },
];

function Counter({ value, suffix, color, inView }: { value: number; suffix: string; color: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span
      className="font-display leading-none"
      style={{ color, fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)" }}
    >
      {count.toLocaleString("es-SV")}
      <span style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.6rem)" }}>{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} data-nav-theme="dark" className="relative bg-navy overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,212,120,0.04)_0%,transparent_65%)] pointer-events-none" />

      {/* Top label */}
      <div className="max-w-360 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-16 pb-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase"
        >
          <span className="w-6 h-px bg-green-primary/40" />
          Los números no mienten
        </motion.p>
      </div>

      {/* Stats row */}
      <div className="max-w-360 mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-5 pr-4 lg:pr-0 lg:pl-10 lg:first:pl-0 lg:border-l lg:border-white/8 lg:first:border-l-0 flex flex-col gap-2 group"
            >
              <Counter value={stat.value} suffix={stat.suffix} color={stat.color} inView={inView} />

              <div className="mt-1">
                <p className="text-white font-bold text-sm leading-snug">{stat.label}</p>
                <p className="text-white/35 text-[13px] leading-relaxed mt-0.5">{stat.sublabel}</p>
              </div>

              {/* Animated underline on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-1"
                style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="h-px bg-white/5 max-w-7xl mx-auto" />
    </section>
  );
}
