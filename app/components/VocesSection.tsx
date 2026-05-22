"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Script from "next/script";

// ── Agregar más reels aquí ──────────────────────────────────
const reels = [
  "https://www.instagram.com/reel/DW7MKp7jog8/",
  "https://www.instagram.com/reel/DYnnf1ZAMU5/",
  "https://www.instagram.com/reel/DYnbP-khjDk/",
  "https://www.instagram.com/reel/DYm9Iemg-4B/",
  "https://www.instagram.com/reel/DYmimztT_Zk/",
  "https://www.instagram.com/reel/DYlcqolCAjR/",
  "https://www.instagram.com/reel/DYlFWnDN7rq/",
];
// ────────────────────────────────────────────────────────────

const CARD_WIDTH = 340;
const SCROLL_AMOUNT = CARD_WIDTH + 16;

export default function VocesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  const processEmbeds = () => {
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  };

  useEffect(() => {
    processEmbeds();
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section data-nav-theme="dark" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,212,120,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="mb-10 overflow-hidden">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-green-primary/50" />
              🎙️ Voces que se suman
            </motion.p>

            {/* Big display title */}
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: 70, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="font-display text-6xl sm:text-4xl md:text-6xl text-white leading-none tracking-tight"
              >
                Influencers
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 70, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.13 }}
                className="font-sans font-black text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight gradient-text"
              >
                &amp; organizaciones
              </motion.h2>
            </div>

            {/* Description with accent bar */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-0.5 h-10 bg-green-primary rounded-full shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-lg text-white leading-snug">alzando la voz</p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Personas y colectivos hablando sobre la amenaza al bosque El Espino.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carousel wrapper — arrows sit on the sides */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-20 bg-linear-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-20 bg-linear-to-l from-navy to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 px-16"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reels.map((url, i) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#111827] shadow-xl"
                style={{ width: CARD_WIDTH, scrollSnapAlign: "start" }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{ maxWidth: "100%", minWidth: 280, width: "100%", margin: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processEmbeds}
      />
    </section>
  );
}
