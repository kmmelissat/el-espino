"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María José R.",
    role: "Madre de familia, San Salvador",
    avatar: "👩",
    text: "Crecí corriendo por El Espino. Mis hijos también merecen ese mismo regalo. No podemos dejar que el cemento se lo lleve.",
    color: "#22D478",
  },
  {
    name: "Carlos M.",
    role: "Biólogo, Universidad de El Salvador",
    avatar: "👨‍🔬",
    text: "Como científico, les digo que los servicios ecosistémicos de El Espino son irremplazables. Ningún parque artificial puede suplirlos.",
    color: "#3B82F6",
  },
  {
    name: "Sofía T.",
    role: "Estudiante universitaria, 22 años",
    avatar: "👩‍🎓",
    text: "Mi generación va a cargar con las consecuencias de esta decisión. Por eso salimos a marchar. #TodosSomosElEspino",
    color: "#FF6B35",
  },
  {
    name: "Ernesto V.",
    role: "Vecino de la zona, 45 años",
    avatar: "🧔",
    text: "El Espino regula la temperatura en mi colonia. Cuando se destruyen los árboles, todos sufrimos. El calor ya es insoportable.",
    color: "#8B5CF6",
  },
  {
    name: "Valentina P.",
    role: "Activista ambiental",
    avatar: "🧕",
    text: "Las leyes ambientales de El Salvador protegen este espacio. Si el gobierno las ignora, es la ciudadanía quien debe hacer respetar sus derechos.",
    color: "#BEF6AF",
  },
  {
    name: "Diego A.",
    role: "Fotógrafo de naturaleza",
    avatar: "📸",
    text: "He documentado más de 200 especies en El Espino. Perder este bosque significaría perder ese tesoro natural para siempre.",
    color: "#EF4444",
  },
];

export default function TestimonialCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-white dark:bg-[#080f1a] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,212,120,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#22D478]/10 border border-[#22D478]/30 text-[#22D478] text-sm font-semibold mb-4">
            💬 Voces del Pueblo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white">
            Salvadoreños que{" "}
            <span className="gradient-text">dicen No</span>
          </h2>
        </motion.div>

        {/* Desktop 3-col */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="popLayout">
            {visible.map((testimonial, i) => (
              <motion.div
                key={`${testimonial.name}-${current}`}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`glass rounded-2xl p-6 flex flex-col gap-4 ${
                  i === 1 ? "border-[#22D478]/40 scale-105" : "border-white/10"
                }`}
                style={{ borderColor: i === 1 ? `${testimonial.color}50` : undefined }}
              >
                <Quote className="w-6 h-6 opacity-40" style={{ color: testimonial.color }} />
                <p className="text-white/80 leading-relaxed text-sm flex-1">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                    <p className="text-white/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile single card */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="glass rounded-2xl p-6 mb-6"
              style={{ borderColor: `${testimonials[current].color}40` }}
            >
              <Quote className="w-6 h-6 mb-4 opacity-40" style={{ color: testimonials[current].color }} />
              <p className="text-white/80 leading-relaxed mb-6">{testimonials[current].text}</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonials[current].avatar}</span>
                <div>
                  <p className="text-white font-bold">{testimonials[current].name}</p>
                  <p className="text-white/50 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-[#22D478] transition-colors hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  backgroundColor: i === current ? "#22D478" : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-[#22D478] transition-colors hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
