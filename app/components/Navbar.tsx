"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { PETITION_URL } from "@/app/constants";

const navLinks = [
  { label: "El Problema", href: "#problema" },
  { label: "Impacto", href: "#impacto" },
  { label: "Movimiento", href: "#movimiento" },
  { label: "Actúa", href: "#actua" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f0fdf4]/40 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <Image
                src="/logo.svg"
                alt="El Espino"
                width={48}
                height={48}
                className="group-hover:scale-110 transition-transform"
                priority
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-green-dark/80 hover:text-green-very-dark font-semibold transition-colors duration-200 text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={PETITION_URL}
                className="hidden md:block px-5 py-2 rounded-full bg-orange-vibrant text-white font-bold text-sm hover:bg-[#d4511f] transition-all duration-200 hover:scale-105 shadow-md shadow-orange-200 pulse-btn"
              >
                Firma Ahora
              </a>

              <button
                className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                  scrolled
                    ? "bg-green-100 text-green-800 hover:bg-green-200"
                    : "bg-white/30 backdrop-blur-sm text-green-900 hover:bg-white/50"
                }`}
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#f0fdf4]/95 backdrop-blur-md border-b border-green-200 md:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-green-dark hover:text-green-very-dark font-semibold py-2 px-3 rounded-lg hover:bg-green-100 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PETITION_URL}
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-full bg-orange-vibrant text-white font-bold hover:bg-[#d4511f] transition-colors shadow-md shadow-orange-200"
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
