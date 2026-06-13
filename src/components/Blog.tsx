import FadeIn from "./FadeIn";

const posts = [
  {
    tag: "Finanças Corporativas",
    title: "O que todo executivo precisa saber sobre Valuation antes de uma negociação",
    excerpt: "Entender os fundamentos de avaliação de empresas é essencial para negociar com segurança técnica — seja em M&A, captação ou reestruturação.",
    date: "Jun 2025",
  },
  {
    tag: "Gestão Patrimonial",
    title: "Por que o modelo fee only muda tudo na relação com seu gestor de patrimônio",
    excerpt: "No modelo tradicional, incentivos do gestor nem sempre estão alinhados com os seus. O modelo 3.0 resolve isso estruturalmente.",
    date: "Mai 2025",
  },
  {
    tag: "Mercado de Capitais",
    title: "Debêntures e CRIs como alternativa ao crédito bancário para empresas de médio porte",
    excerpt: "A evolução do mercado de capitais no Brasil abriu novas janelas de captação para empresas que antes dependiam exclusivamente de bancos.",
    date: "Abr 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
            <div>
              <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Conteúdo
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1b2a4a] leading-tight">
                Insights de finanças
              </h2>
            </div>
            <a
              href="https://fmoura.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 text-[#1b2a4a] text-sm font-medium border-b border-[#c9a86c] pb-0.5 hover:text-[#c9a86c] transition-colors self-start sm:self-auto min-h-[44px] sm:min-h-0"
            >
              Ver todos no Substack
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {posts.map((post, i) => (
            <FadeIn key={i} delay={0.15 * i}>
              <a
                href="https://fmoura.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-gray-100 rounded-xl overflow-hidden hover:border-[#c9a86c]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-36 sm:h-48 bg-gradient-to-br from-[#1b2a4a] to-[#243558] flex items-end p-4 sm:p-6">
                  <span className="px-3 py-1 bg-[#c9a86c] text-white text-xs rounded font-medium">
                    {post.tag}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-gray-400 text-xs mb-2 sm:mb-3">{post.date}</p>
                  <h3 className="font-serif text-base sm:text-lg text-[#1b2a4a] leading-snug mb-2 sm:mb-3 group-hover:text-[#c9a86c] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 mt-4 sm:mt-5 text-[#c9a86c] text-xs font-medium">
                    Ler no Substack
                    <svg className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
