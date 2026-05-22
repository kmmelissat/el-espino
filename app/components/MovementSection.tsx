"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Users, Megaphone, Share2, Camera, MapPin } from "lucide-react";

const actions = [
  {
    icon: Heart,
    emoji: "✍️",
    title: "Firma la Petición",
    description: "Tu firma en Change.org suma presión política real. Cada nombre cuenta.",
    cta: "Firmar Ahora",
    href: "https://www.change.org",
    color: "#F97316",
    primary: true,
  },
  {
    icon: Share2,
    emoji: "📱",
    title: "Comparte en Redes",
    description: "Usa #TodosSomosElEspino y #NoAlCIFCO. Haz que la causa sea viral.",
    cta: "Compartir",
    href: "#compartir",
    color: "#10B981",
    primary: false,
  },
  {
    icon: Megaphone,
    emoji: "📣",
    title: "Habla con tu Alcalde",
    description: "Llama o escribe a tu municipio. Los representantes deben escuchar al pueblo.",
    cta: "Cómo Hacerlo",
    href: "#como",
    color: "#3B82F6",
    primary: false,
  },
  {
    icon: Camera,
    emoji: "📸",
    title: "Documenta y Comparte",
    description: "Visita El Espino, toma fotos, crea contenido. La visibilidad salva bosques.",
    cta: "Ver Guía",
    href: "#guia",
    color: "#8B5CF6",
    primary: false,
  },
];

const hashtags = ["#TodosSomosElEspino", "#NoAlCIFCO", "#SalvemosElEspino", "#ElSalvadorVerde", "#BosqueUrbano"];

export default function MovementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const shareTwitter = () => {
    const text = "¡Únete al movimiento! El proyecto CIFCO amenaza destruir 55,711 m² del bosque El Espino en San Salvador. Firma la petición y protege el pulmón verde de nuestra ciudad. #TodosSomosElEspino #NoAlCIFCO";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
  };

  const shareWhatsApp = () => {
    const text = "🌿 ¡Salvemos El Espino! El bosque más importante de San Salvador está en peligro. Firma la petición: #TodosSomosElEspino";
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="movimiento" ref={ref} className="relative py-24 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-sm font-semibold mb-4">
            🌱 Todos Somos El Espino
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Únete al{" "}
            <span className="gradient-text">movimiento</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            La ciudadanía es la última línea de defensa. Estas son las 4 cosas que puedes hacer hoy.
          </p>
        </motion.div>

        {/* Action cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300 ${
                  action.primary ? "border-[#F97316]/40" : "border-white/10"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  {action.emoji}
                </div>
                <h3 className="text-white font-bold text-lg">{action.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{action.description}</p>
                <motion.a
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : "_self"}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors"
                  style={{
                    backgroundColor: action.primary ? action.color : `${action.color}20`,
                    color: action.primary ? "white" : action.color,
                  }}
                >
                  {action.cta}
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Hashtags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-white/50 text-sm mb-4">Usa estos hashtags en redes sociales:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full glass text-[#10B981] text-sm font-semibold border border-[#10B981]/20 hover:border-[#10B981]/50 cursor-pointer transition-all hover:scale-105"
                onClick={() => navigator.clipboard?.writeText(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick share */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={shareWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20ba5a] transition-colors"
          >
            <span>📱</span> Compartir en WhatsApp
          </motion.button>
          <motion.button
            onClick={shareTwitter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition-colors border border-white/20"
          >
            <span>𝕏</span> Compartir en X/Twitter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
