"use client";

import { programacao } from "@/data/programacao";

export default function Programacao() {
  return (
    <section id="programacao" className="py-16 sm:py-24 bg-[#070606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-[#FF6002] text-sm font-bold uppercase tracking-widest mb-2">
            20 de junho · 13h às 17h
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Programação
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[5.5rem] sm:left-28 top-0 bottom-0 w-px bg-[#FF6002]/20 hidden sm:block" />

          <div className="space-y-6">
            {programacao.map((item) => (
              <div key={item.id} className="relative flex gap-4 sm:gap-8 items-start group">
                {/* Horário */}
                <div className="flex-shrink-0 w-20 sm:w-24 text-right">
                  <span className="text-[#FF6002] font-black text-lg sm:text-xl tabular-nums">
                    {item.horario}
                  </span>
                </div>

                {/* Ponto na timeline */}
                <div className="flex-shrink-0 hidden sm:flex items-start justify-center w-4 mt-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF6002] ring-4 ring-[#070606] group-hover:scale-125 transition-transform" />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 pb-4 sm:pb-0">
                  <div className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl px-5 py-4 transition-colors">
                    <h3 className="text-white font-bold text-base mb-1">
                      {item.titulo}
                    </h3>
                    {item.descricao && (
                      <p className="text-white/60 text-sm leading-relaxed mb-2">
                        {item.descricao}
                      </p>
                    )}
                    {item.local && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#FF6002]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-[#FF6002]/80 text-xs font-medium">{item.local}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
