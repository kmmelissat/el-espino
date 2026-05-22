"use client";

import { motion } from "framer-motion";
import { TreePine, Globe, PlayCircle, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">
                <span className="gradient-text">Salvemos</span>{" "}
                <span className="text-white">El Espino</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Un movimiento ciudadano para proteger el pulmón verde de San Salvador y las futuras generaciones de El Salvador.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {["El Problema", "Impacto", "Movimiento", "Actúa Ahora"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/60 hover:text-[#10B981] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Globe, label: "Instagram", href: "https://instagram.com/somoselespino" },
                { icon: PlayCircle, label: "YouTube", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:somoselespino@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-[#10B981] hover:border-[#10B981] transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              📧 somoselespino@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Salvemos El Espino. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-[#EF4444] fill-current" /> por la comunidad salvadoreña
          </p>
        </div>
      </div>
    </footer>
  );
}
