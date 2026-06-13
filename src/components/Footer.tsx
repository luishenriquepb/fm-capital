import Image from "next/image";

const links = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FM Capital Edu", href: "#pilares" },
  { label: "Capital Advisory", href: "#pilares" },
  { label: "Multi-Family Office", href: "#pilares" },
  { label: "Fundador", href: "#fundador" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1e3d] text-white/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">

          {/* Brand */}
          <div>
            <Image
              src="/logo-fm-white.png"
              alt="FM Capital"
              width={150}
              height={44}
              className="h-8 sm:h-10 w-auto object-contain mb-4 opacity-90"
            />
            <p className="text-sm leading-relaxed mb-3 sm:mb-4">
              Educação · Assessoria · Gestão Patrimonial
            </p>
            <p className="text-xs leading-relaxed">
              Gestão patrimonial operada pela{" "}
              <span className="text-white/80">Sonora Capital</span>
              {" "}— Consultoria CVM autorizada.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#c9a86c] transition-colors duration-200 inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Contato
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+5581988871717" className="hover:text-[#c9a86c] transition-colors inline-block py-1">
                (81) 98887-1717
              </a>
              <p className="text-xs leading-relaxed">
                Rua Ernesto de Paula Santos, 187
                <br />
                Sala 701 · Boa Viagem · Recife
              </p>
              <div className="flex gap-4 pt-1">
                <a
                  href="https://linkedin.com/in/felipe-moura"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#c9a86c] transition-colors p-1 -m-1 min-w-[44px] min-h-[44px] flex items-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5581988871717"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-[#c9a86c] transition-colors p-1 -m-1 min-w-[44px] min-h-[44px] flex items-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://fmoura.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Substack"
                  className="hover:text-[#c9a86c] transition-colors p-1 -m-1 min-w-[44px] min-h-[44px] flex items-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 text-xs">
          <p>© {new Date().getFullYear()} FM Capital. Todos os direitos reservados.</p>
          <p>Gestão patrimonial via Sonora Capital · CVM nº 592</p>
        </div>
      </div>
    </footer>
  );
}
