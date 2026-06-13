import FadeIn from "./FadeIn";

const depoimentos = [
  {
    quote: "O treinamento da FM Capital Edu transformou a forma como nossa diretoria lê demonstrações financeiras e avalia aquisições. Conteúdo prático e aplicado imediatamente.",
    name: "Executivo",
    role: "Diretor Financeiro · Empresa de médio porte",
    initials: "EF",
  },
  {
    quote: "A assessoria da FM Capital foi fundamental para estruturarmos nossa captação via debêntures. Equipe técnica, dedicada e com profundo conhecimento do mercado nordestino.",
    name: "Empresário",
    role: "CEO · Empresa do setor industrial",
    initials: "EB",
  },
  {
    quote: "A Sonora Capital mudou minha relação com investimentos. Pela primeira vez tenho clareza total sobre o que tenho, por que tenho e como está performando. Fee only de verdade.",
    name: "Família",
    role: "Cliente Multi-Family Office",
    initials: "FM",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 lg:py-28 bg-[#0f1e3d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Depoimentos
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              O que dizem nossos clientes
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {depoimentos.map((dep, i) => (
            <FadeIn key={i} delay={0.15 * i}>
              <div className="bg-white/5 rounded-xl p-5 sm:p-8 border border-white/10 hover:border-[#c9a86c]/40 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col h-full cursor-default">
                <span className="text-4xl sm:text-5xl text-[#c9a86c] font-serif leading-none mb-3 sm:mb-4 block">
                  &ldquo;
                </span>
                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 sm:mb-8">
                  {dep.quote}
                </p>
                <div className="flex items-center gap-3 pt-5 sm:pt-6 border-t border-white/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#c9a86c]/20 flex items-center justify-center shrink-0 border border-[#c9a86c]/30">
                    <span className="text-[#c9a86c] text-xs font-serif font-bold">
                      {dep.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{dep.name}</p>
                    <p className="text-white/40 text-xs">{dep.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-10 sm:mt-16 flex flex-col items-center gap-4">
            <p className="text-white/50 text-sm text-center max-w-md px-4">
              Junte-se a executivos e empresários que já transformaram sua relação com as finanças.
            </p>
            <a
              href="#contato"
              className="w-full sm:w-auto flex items-center justify-center px-9 py-4 text-white font-semibold rounded transition-all duration-300 hover:brightness-110 hover:shadow-xl text-sm tracking-wide"
              style={{ backgroundColor: "var(--verde)", minHeight: "52px" }}
            >
              Fale com a gente
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
