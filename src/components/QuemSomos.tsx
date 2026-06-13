import FadeIn from "./FadeIn";

const items = [
  { number: "01", title: "Educação", desc: "Treinamentos executivos em finanças, valuation, portfólio e M&A." },
  { number: "02", title: "Assessoria", desc: "Boutique de captação, M&A e reestruturação para empresas." },
  { number: "03", title: "Patrimônio", desc: "Multi-family office regulado, via Sonora Capital." },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-16 sm:py-24 lg:py-28 bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Esquerda */}
          <div>
            <FadeIn>
              <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Quem Somos
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1b2a4a] leading-tight mb-6 sm:mb-8">
                Uma plataforma única de finanças, da formação ao patrimônio.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                A FM Capital nasceu da visão de oferecer soluções financeiras
                integradas — unindo formação de excelência em finanças,
                assessoria estratégica para empresas e gestão patrimonial
                regulada para famílias.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Com a Sonora Capital — consultoria de valores mobiliários
                autorizada pela CVM — a frente de gestão patrimonial ganha
                estrutura fiduciária, modelo fee only e mais de uma década de
                mercado.
              </p>
            </FadeIn>
          </div>

          {/* Direita — lista numerada */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {items.map((item, i) => (
              <FadeIn key={item.number} delay={0.1 * i} direction="left">
                <div className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-white rounded-lg border border-gray-100 hover:border-[#c9a86c]/40 hover:shadow-md transition-all duration-300 group cursor-default">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#c9a86c] shrink-0 leading-none mt-1 group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1b2a4a] mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Quote */}
        <FadeIn delay={0.4}>
          <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200">
            <p className="text-center text-[#1b2a4a] font-serif text-xl sm:text-2xl italic">
              &ldquo;Três frentes, um único compromisso fiduciário.&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Bridge */}
        <FadeIn delay={0.5}>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <a
              href="#pilares"
              className="group flex items-center gap-2 text-[#c9a86c] text-sm font-medium hover:gap-3 transition-all duration-200 min-h-[44px]"
            >
              Veja como atuamos em cada frente
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
