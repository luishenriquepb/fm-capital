import FadeIn from "./FadeIn";

const pilares = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    tag: "Pilar 01",
    title: "FM Capital Edu",
    subtitle: "Formação em finanças de alto nível para tomadores de decisão.",
    programs: [
      "Finanças Corporativas & Valuation para Executivos",
      "Aspectos Financeiros de M&A para Advogados",
      "Finanças para Acionistas e Conselheiros",
      "Gestão de Portfólio",
      "Treinamentos in-company sob demanda",
      "Mentorias individuais",
    ],
    format: [
      "Turmas executivas de 10 a 20 participantes",
      "15 horas de conteúdo aplicado em 4 a 5 encontros",
      "Casos práticos reais e simulações",
      "Certificado de conclusão",
    ],
    cta: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    tag: "Pilar 02",
    title: "Capital Advisory",
    subtitle: "Assessoria financeira estratégica para operações transformacionais.",
    programs: [
      "Captação de dívida estruturada (debêntures, CRIs, CRAs, BNDES)",
      "Assessoria em M&A (buy-side e sell-side)",
      "Reestruturação financeira e turnaround",
      "Valuation e fairness opinions",
      "Estruturação de operações de equity e capital próprio",
    ],
    format: [
      "Atendimento personalizado e dedicado",
      "Experiência em crédito privado e mercado de capitais",
      "Foco em empresas de médio porte no Nordeste e no Brasil",
    ],
    cta: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 sm:w-8 sm:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    tag: "Pilar 03",
    title: "Multi-Family Office",
    subtitle: "Gestão patrimonial integrada, de longo prazo e independente.",
    programs: [
      "Consultoria de valores mobiliários autorizada pela CVM",
      "Modelo fee only — sem conflito de interesse",
      "Arquitetura aberta, sem exclusividade de plataforma",
      "Cinco perfis de portfólio: do Cuidadoso ao Arrojado",
      "Acompanhamento via comitês de alocação",
    ],
    format: [
      "Contratos com Itaú, BTG, Bradesco, BNY Mellon e outros",
      "Gestão compartilhada — você no controle",
      "Skin in the game: os sócios investem na mesma carteira",
    ],
    cta: "Operado pela Sonora Capital · Consultoria CVM",
  },
];

export default function Pilares() {
  return (
    <section id="pilares" className="py-16 sm:py-24 lg:py-28 bg-[#1b2a4a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,108,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,108,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Nossos Pilares
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Três frentes, um único
              <br />
              compromisso fiduciário
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-8">
          {pilares.map((pilar, i) => (
            <FadeIn key={pilar.title} delay={0.15 * i} direction="up">
              <div className="group h-full flex flex-col border border-white/10 rounded-xl p-5 sm:p-8 hover:border-[#c9a86c]/50 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 bg-white/5 hover:bg-white/10 cursor-default">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/10 flex items-center justify-center text-[#c9a86c] mb-5 sm:mb-6 group-hover:bg-[#c9a86c]/20 transition-colors duration-300 shrink-0">
                  {pilar.icon}
                </div>
                <p className="text-[#c9a86c] text-xs font-medium tracking-[0.2em] uppercase mb-2">
                  {pilar.tag}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 sm:mb-3">
                  {pilar.title}
                </h3>
                <p className="text-white/50 text-sm italic mb-5 sm:mb-6">
                  {pilar.subtitle}
                </p>
                <div className="w-10 h-px bg-[#c9a86c]/60 mb-5 sm:mb-6" />
                <ul className="flex flex-col gap-2 sm:gap-2.5 mb-5 sm:mb-6 flex-1">
                  {pilar.programs.map((item) => (
                    <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86c] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-black/20 rounded-lg p-3 sm:p-4 mt-auto border border-white/5">
                  {pilar.cta && (
                    <p className="text-[#c9a86c] text-xs font-medium italic mb-2">
                      {pilar.cta}
                    </p>
                  )}
                  <ul className="flex flex-col gap-1.5 sm:gap-2">
                    {pilar.format.map((item) => (
                      <li key={item} className="text-xs text-white/50 flex items-start gap-2">
                        <span className="text-[#c9a86c] mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-10 sm:mt-16 flex flex-col items-center gap-4">
            <p className="text-white/50 text-sm text-center px-4">
              Qual dessas frentes faz sentido para você agora?
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
