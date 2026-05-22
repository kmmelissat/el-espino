"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "El Problema", href: "#problema" },
  { label: "Impacto", href: "#impacto" },
  { label: "Movimiento", href: "#movimiento" },
  { label: "Actúa", href: "#actua" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-[#10B981] flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg hidden sm:block">
                <span className="gradient-text">El</span>{" "}
                <span className="text-white">Espino</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#10B981] font-medium transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-[#10B981] transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <a
                href="#actua"
                className="hidden md:block px-5 py-2 rounded-full bg-[#F97316] text-white font-semibold text-sm hover:bg-[#ea6c0a] transition-all duration-200 hover:scale-105 pulse-btn"
              >
                Firma Ahora
              </a>

              <button
                className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-[#10B981] font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#actua"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-full bg-[#F97316] text-white font-bold hover:bg-[#ea6c0a] transition-colors"
              >
                Firma Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
