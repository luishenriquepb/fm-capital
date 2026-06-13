"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Pilares", href: "#pilares" },
  { label: "Fundador", href: "#fundador" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Travar scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <Image
                src={scrolled ? "/logo-fm-dark.png" : "/logo-fm-white.png"}
                alt="FM Capital"
                width={140}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? "text-[#1b2a4a] hover:text-[#c9a86c]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="ml-2 px-5 py-2.5 text-white text-sm font-medium rounded transition-all duration-200 hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: "#1e5c36", minHeight: "44px", display: "flex", alignItems: "center" }}
              >
                Fale conosco
              </a>
            </nav>

            {/* Botão hambúrguer — área de toque mínima 44px */}
            <button
              className={`md:hidden flex flex-col items-center justify-center w-11 h-11 rounded gap-[5px] transition-colors ${
                scrolled ? "text-[#1b2a4a]" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay + drawer mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay escuro */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
              <Image
                src="/logo-fm-dark.png"
                alt="FM Capital"
                width={120}
                height={34}
                className="h-7 w-auto object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-gray-500 hover:text-gray-900"
                aria-label="Fechar menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-4 py-6 gap-1 overflow-y-auto">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-lg text-[#1b2a4a] text-base font-medium hover:bg-gray-50 hover:text-[#c9a86c] transition-colors min-h-[44px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="px-4 pb-8 pt-4 border-t border-gray-100">
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 text-white text-sm font-semibold rounded-lg min-h-[52px]"
                style={{ backgroundColor: "#1e5c36" }}
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
