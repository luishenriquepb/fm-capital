import FadeIn from "./FadeIn";

const partners = [
  { name: "Itaú Personnalité", abbr: "Itaú" },
  { name: "Bradesco", abbr: "Bradesco" },
  { name: "Safra", abbr: "Safra" },
  { name: "BTG Pactual", abbr: "BTG" },
  { name: "C6 Bank", abbr: "C6" },
  { name: "Avenue", abbr: "Avenue" },
  { name: "BNY Mellon | Pershing", abbr: "BNY" },
  { name: "Warren", abbr: "Warren" },
  { name: "Trident Trust", abbr: "Trident" },
];

export default function Parceiros() {
  return (
    <section id="parceiros" className="py-14 sm:py-20 lg:py-24 bg-[#f9f8f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Plataformas Parceiras
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1b2a4a] mb-3 sm:mb-4">
              Arquitetura aberta, sem exclusividade
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Seu patrimônio permanece nas principais instituições do Brasil e do exterior.
              Sem exclusividade, estruturamos o melhor portfólio para cada cliente.
            </p>
          </div>
        </FadeIn>

        {/* Grid: 3 colunas no mobile, 9 no desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-9 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
          {partners.map((partner, i) => (
            <FadeIn key={partner.name} delay={0.05 * i} direction="none">
              <div className="bg-white flex items-center justify-center p-3 sm:p-4 lg:p-6 aspect-square hover:bg-[#1b2a4a] transition-colors duration-300 group">
                <p className="font-serif text-[#1b2a4a] text-xs sm:text-sm font-semibold group-hover:text-[#c9a86c] transition-colors duration-300 leading-tight text-center break-words">
                  {partner.abbr}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-xs text-gray-400 mt-6 sm:mt-8 leading-relaxed px-2">
            Operado via Sonora Capital · Consultoria CVM · Contratos com as maiores plataformas do Brasil e do exterior
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
