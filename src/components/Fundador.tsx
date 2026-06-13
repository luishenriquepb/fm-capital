import FadeIn from "./FadeIn";

const credentials = [
  "Engenheiro pela UFPE",
  "Ex-sócio da Finacap Investimentos · 8 anos como gestor de portfólio",
  "Certificação CGA (Anbima) · Candidato Level III do CFA",
  "Fundou a FM Capital Edu em 2024 — treinamentos executivos para profissionais de finanças, advogados e empresários",
  "Em 2025, estruturou a FM Capital integrando educação, assessoria e gestão patrimonial",
];

export default function Fundador() {
  return (
    <section id="fundador" className="py-16 sm:py-24 lg:py-28 bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-4 text-center">
            Fundador
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-6 sm:mt-8">
          {/* Foto */}
          <FadeIn direction="right">
            {/* Container relativo com overflow: visible no desktop (para os decorativos),
                mas overflow: hidden no mobile para não causar scroll horizontal */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/5] max-h-80 sm:max-h-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1b2a4a] to-[#243558] flex items-center justify-center">
                  <div className="text-center text-white/30">
                    <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p className="text-sm font-light tracking-wide">Foto do Fundador</p>
                  </div>
                </div>
              </div>
              {/* Decorativos: apenas desktop para não causar overflow no mobile */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#c9a86c]/30 rounded-xl -z-10" />
              <div className="hidden lg:block absolute -top-4 -left-4 w-20 h-20 border border-[#c9a86c]/20 rounded-lg -z-10" />
            </div>
          </FadeIn>

          {/* Conteúdo */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1b2a4a] mb-2">
                Felipe Moura
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[#c9a86c] italic text-base sm:text-lg mb-6 sm:mb-8">
                Sócio-fundador da FM Capital · Sócio da Sonora Capital
              </p>
            </FadeIn>

            <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
              {credentials.map((item, i) => (
                <FadeIn key={i} delay={0.1 + 0.08 * i}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86c] mt-2 shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.55}>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
                <a
                  href="https://linkedin.com/in/felipe-moura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-[#1b2a4a]/20 rounded text-[#1b2a4a] text-sm font-medium hover:border-[#c9a86c] hover:text-[#c9a86c] transition-all duration-200 min-h-[44px]"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://fmoura.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-[#1b2a4a]/20 rounded text-[#1b2a4a] text-sm font-medium hover:border-[#c9a86c] hover:text-[#c9a86c] transition-all duration-200 min-h-[44px]"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                  Substack
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <a
                href="#contato"
                className="flex sm:inline-flex items-center justify-center px-9 py-4 text-white font-semibold rounded transition-all duration-300 hover:brightness-110 hover:shadow-xl text-sm tracking-wide"
                style={{ backgroundColor: "var(--verde)", minHeight: "52px" }}
              >
                Agende uma conversa
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
