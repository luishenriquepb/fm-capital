"use client";

import { motion } from "framer-motion";

const pillars = [
  { n: "01", label: "FM Capital Edu" },
  { n: "02", label: "Capital Advisory" },
  { n: "03", label: "Multi-Family Office" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundColor: "#0d1b33",
        backgroundImage: "url('/banerfmcapital.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      {/* Gradiente vertical: cobre logo (topo), revela skyline (base) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #0d1b33 0%, #0d1b33 32%, rgba(13,27,51,0.88) 52%, rgba(13,27,51,0.45) 72%, rgba(13,27,51,0.15) 100%)",
        }}
      />
      {/* Reforço lateral esquerdo para legibilidade do texto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,51,0.6) 0%, rgba(13,27,51,0.15) 60%, transparent 100%)",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          {/* 1. Kicker — letter-spacing reduzido no mobile para não estourar */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-8 font-medium uppercase tracking-[0.12em] sm:tracking-[0.3em]"
            style={{ fontSize: "12px", color: "var(--taupe)" }}
          >
            Soluções Financeiras Integradas
          </motion.p>

          {/* 2. Título Fraunces */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-6 sm:mb-8 leading-[1.05] text-white"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 600,
              maxWidth: "min(42rem, 90vw)",
            }}
          >
            Uma plataforma única
            <br />
            de{" "}
            <span style={{ color: "var(--taupe)" }}>finanças,</span>
            <br />
            da formação ao patrimônio.
          </motion.h1>

          {/* 3. Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12 font-light leading-relaxed"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(15px, 4vw, 18px)",
              color: "rgba(255,255,255,0.78)",
              maxWidth: "min(600px, 90vw)",
            }}
          >
            Educação executiva, assessoria estratégica e gestão patrimonial —
            três frentes, um único compromisso fiduciário.
          </motion.p>

          {/* 4. Botões — empilhados e largura total no mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contato"
              className="flex items-center justify-center px-7 py-4 text-white font-medium rounded text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-lg sm:w-auto"
              style={{ backgroundColor: "var(--verde)", minHeight: "44px" }}
            >
              Fale com a gente
            </a>
            <a
              href="#quem-somos"
              className="flex items-center justify-center px-7 py-4 text-white/75 font-light rounded text-sm tracking-wide transition-all duration-300 hover:text-white sm:w-auto"
              style={{ border: "1px solid rgba(255,255,255,0.22)", minHeight: "44px" }}
            >
              Conheça a FM Capital
            </a>
          </motion.div>
        </div>
      </div>

      {/* 5. Pilares — rodapé discreto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 w-full"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {pillars.map((p, i) => (
            <span key={p.n} className="flex items-center gap-4">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                />
              )}
              <span className="flex items-center gap-1.5">
                <span
                  className="font-medium tabular-nums"
                  style={{ fontSize: "10px", color: "var(--taupe)", letterSpacing: "0.05em" }}
                >
                  {p.n}
                </span>
                <span
                  className="font-light"
                  style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}
                >
                  {p.label}
                </span>
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
