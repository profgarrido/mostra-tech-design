"use client";

import { TrabalhoExposto } from "@/types";

interface CardTrabalhoProps {
  trabalho: TrabalhoExposto;
}

export default function CardTrabalho({ trabalho }: CardTrabalhoProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
      {/* Localização — bloco principal, sem truncate */}
      <div className="bg-[#070606] px-5 py-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FF6002] flex items-center justify-center mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/60 text-xs uppercase tracking-wider font-medium mb-0.5">
              Sala / Espaço
            </p>
            <p className={`text-white font-bold leading-snug ${
              trabalho.sala.length > 30 ? "text-sm"
              : trabalho.sala.length > 15 ? "text-base"
              : "text-xl"
            }`}>
              {trabalho.sala || "A confirmar"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pl-13">
          <span className="text-white/40 text-xs uppercase tracking-wider font-medium">Prédio</span>
          <span className="bg-[#FF6002] text-white text-xs font-bold px-3 py-1 rounded-full">
            {trabalho.predio}
          </span>
        </div>
      </div>

      {/* Corpo */}
      <div className="px-5 py-4 flex-1 flex flex-col gap-3">
        <h3 className="font-bold text-[#070606] text-base leading-snug">
          {trabalho.disciplina}
        </h3>

        <div className="flex flex-wrap gap-2">
          {trabalho.curso && (
            <span className="inline-flex items-center text-xs bg-[#FF6002]/10 text-[#FF6002] font-semibold px-2.5 py-1 rounded-full">
              {trabalho.curso}
            </span>
          )}
          {trabalho.periodo && (
            <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 font-medium px-2.5 py-1 rounded-full">
              {trabalho.periodo}
            </span>
          )}
        </div>

        <dl className="text-sm">
          <div className="flex items-start gap-2">
            <dt className="text-gray-400 font-medium w-24 flex-shrink-0">Professor</dt>
            <dd className="text-[#070606] font-medium leading-snug">{trabalho.professor}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}