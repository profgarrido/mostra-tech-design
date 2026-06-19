"use client";

import { TrabalhoExposto } from "@/types";
import CardTrabalho from "./CardTrabalho";

interface ListaTrabalhosProps {
  trabalhos: TrabalhoExposto[];
}

export default function ListaTrabalhos({ trabalhos }: ListaTrabalhosProps) {
  if (trabalhos.length === 0) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#070606] mb-2">Nenhuma exposição encontrada</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Nenhum trabalho encontrado com os filtros selecionados.
          Tente ajustar a busca por disciplina, professor ou período.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {trabalhos.map((trabalho) => (
        <CardTrabalho key={trabalho.id} trabalho={trabalho} />
      ))}
    </div>
  );
}
