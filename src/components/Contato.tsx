"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const interesses = [
  "FM Capital Edu — Educação Executiva",
  "Capital Advisory — Assessoria Financeira",
  "Multi-Family Office — Gestão Patrimonial",
  "Outro",
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", interesse: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-28 bg-[#1b2a4a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#c9a86c]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#c9a86c]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Esquerda — dados de contato */}
          <div>
            <FadeIn>
              <p className="text-[#c9a86c] text-xs font-medium tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Contato
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 sm:mb-6">
                Vamos conversar
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
                Seja para educação executiva, assessoria financeira ou gestão
                patrimonial, estamos prontos para entender seu momento e
                propor a melhor solução.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-5 sm:gap-6">
              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-[#c9a86c]/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#c9a86c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Telefone / WhatsApp</p>
                    <a href="tel:+5581988871717" className="text-white font-medium hover:text-[#c9a86c] transition-colors text-sm sm:text-base">
                      (81) 98887-1717
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-[#c9a86c]/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#c9a86c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Endereço</p>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Rua Ernesto de Paula Santos, 187
                      <br />
                      <span className="text-white/60 text-sm">Sala 701 · Boa Viagem · Recife</span>
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg border border-[#c9a86c]/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#c9a86c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Conteúdo</p>
                    <a href="https://fmoura.substack.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#c9a86c] transition-colors text-sm">
                      fmoura.substack.com
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Direita — formulário */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10">
              {enviado ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c9a86c]/10 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#c9a86c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1b2a4a] mb-3">Mensagem recebida!</h3>
                  <p className="text-gray-500 text-sm">Entraremos em contato em breve pelo canal informado.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1b2a4a] mb-1.5 sm:mb-2">
                      Envie uma mensagem
                    </h3>
                    <p className="text-gray-400 text-sm">Preencha o formulário e retornaremos em até 24h.</p>
                  </div>

                  {/* Nome e Telefone — lado a lado em sm+, empilhados no mobile */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#1b2a4a] mb-1.5 tracking-wide">Nome *</label>
                      <input
                        type="text" name="nome" required value={form.nome} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#1b2a4a] placeholder-gray-300 focus:outline-none focus:border-[#c9a86c] transition-colors"
                        style={{ minHeight: "44px" }}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#1b2a4a] mb-1.5 tracking-wide">Telefone</label>
                      <input
                        type="tel" name="telefone" value={form.telefone} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#1b2a4a] placeholder-gray-300 focus:outline-none focus:border-[#c9a86c] transition-colors"
                        style={{ minHeight: "44px" }}
                        placeholder="(81) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1b2a4a] mb-1.5 tracking-wide">E-mail *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#1b2a4a] placeholder-gray-300 focus:outline-none focus:border-[#c9a86c] transition-colors"
                      style={{ minHeight: "44px" }}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1b2a4a] mb-1.5 tracking-wide">Área de interesse</label>
                    <select
                      name="interesse" value={form.interesse} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#1b2a4a] focus:outline-none focus:border-[#c9a86c] transition-colors bg-white appearance-none"
                      style={{ minHeight: "44px" }}
                    >
                      <option value="">Selecione uma área</option>
                      {interesses.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1b2a4a] mb-1.5 tracking-wide">Mensagem</label>
                    <textarea
                      name="mensagem" rows={4} value={form.mensagem} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-[#1b2a4a] placeholder-gray-300 focus:outline-none focus:border-[#c9a86c] transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-xl tracking-wide"
                    style={{ backgroundColor: "var(--verde)", minHeight: "52px" }}
                  >
                    Enviar mensagem
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Ou fale diretamente via{" "}
                    <a href="https://wa.me/5581988871717" target="_blank" rel="noopener noreferrer" className="text-[#c9a86c] hover:underline">
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
