"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Mail, CheckCircle } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="actua" ref={ref} className="relative py-24 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(249,115,22,0.2)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-6"
          >
            🌳
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            El momento de actuar{" "}
            <span className="text-[#F97316]">es ahora</span>
          </h2>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cada firma, cada share, cada voz que se une hace la diferencia.
            El Espino no puede esperar — y el futuro de San Salvador tampoco.
          </p>

          {/* Primary CTA */}
          <motion.a
            href="https://www.change.org"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#F97316] text-white font-black text-xl shadow-2xl hover:bg-[#ea6c0a] transition-colors glow-orange mb-12"
          >
            <span>✍️ Firma la Petición Ahora</span>
            <ExternalLink className="w-6 h-6" />
          </motion.a>

          {/* Newsletter */}
          <div className="glass rounded-2xl p-8 max-w-xl mx-auto border border-white/20">
            <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5" />
              Recibe Actualizaciones
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Te avisamos cuando haya noticias importantes sobre El Espino.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-2 text-white py-3"
              >
                <CheckCircle className="w-5 h-5 text-[#34D399]" />
                <span className="font-semibold">¡Gracias! Te mantendremos informado/a.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-xl bg-white text-[#059669] font-bold hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Suscribirme
                </motion.button>
              </form>
            )}
          </div>

          {/* Stats reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-white/60 mt-8 text-sm"
          >
            🔒 Tu información está segura. Solo recibirás noticias sobre El Espino.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
