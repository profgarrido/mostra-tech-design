"use client";

import { FiltrosState, TrabalhoExposto } from "@/types";
import { extrairOpcoes, extrairProfessores } from "@/utils/filters";
import SelectFiltro from "./SelectFiltro";

interface FiltrosProps {
  filtros: FiltrosState;
  onChange: (filtros: FiltrosState) => void;
  trabalhos: TrabalhoExposto[];
  totalFiltrados: number;
}

export default function Filtros({ filtros, onChange, trabalhos, totalFiltrados }: FiltrosProps) {
  const disciplinas = extrairOpcoes(trabalhos, "disciplina");
  const professores = extrairProfessores(trabalhos);
  const periodos = extrairOpcoes(trabalhos, "periodo");

  const hasFilters =
    filtros.disciplina || filtros.professor || filtros.periodo || filtros.busca;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#070606]">Encontrar exposição</h2>
        {hasFilters && (
          <button
            onClick={() =>
              onChange({ disciplina: "", professor: "", periodo: "", busca: "" })
            }
            className="text-sm text-[#FF6002] font-semibold hover:underline"
            aria-label="Limpar todos os filtros"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Busca livre */}
        <div>
          <label
            htmlFor="busca"
            className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider"
          >
            Busca geral
          </label>
          <div className="relative">
            <input
              id="busca"
              type="text"
              placeholder="Disciplina, professor, sala..."
              value={filtros.busca}
              onChange={(e) => onChange({ ...filtros, busca: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#070606] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6002]/40 focus:border-[#FF6002] transition-colors pr-9"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Disciplina */}
        <SelectFiltro
          id="disciplina"
          label="Disciplina"
          value={filtros.disciplina}
          // onChange={(v) => onChange({ ...filtros, disciplina: v, professor: "" })}
          onChange={(v) => onChange({ ...filtros, disciplina: v, professor: "", periodo: "" })}
          options={disciplinas}
          placeholder="Todas as disciplinas"
        />

        {/* Professor */}
        <SelectFiltro
          id="professor"
          label="Professor"
          value={filtros.professor}
          // onChange={(v) => onChange({ ...filtros, professor: v, disciplina: "" })}
          onChange={(v) => onChange({ ...filtros, professor: v, disciplina: "", periodo: "" })}
          options={professores}
          placeholder="Todos os professores"
        />

        {/* Período */}
        <SelectFiltro
          id="periodo"
          label="Período"
          value={filtros.periodo}
          onChange={(v) => onChange({ ...filtros, periodo: v, disciplina: "", professor: "" })}
          options={periodos}
          placeholder="Todos os períodos"
        />
      </div>

      {/* Contador */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2">
        <p className="text-sm text-gray-500">
          {hasFilters ? (
            <>
              <span className="font-bold text-[#070606]">{totalFiltrados}</span>{" "}
              {totalFiltrados === 1 ? "exposição encontrada" : "exposições encontradas"}
            </>
          ) : (
            <>
              <span className="font-bold text-[#070606]">{totalFiltrados}</span> exposições no total
            </>
          )}
        </p>
        {filtros.disciplina && (
          <span className="text-xs bg-[#FF6002]/10 text-[#FF6002] font-semibold px-3 py-1 rounded-full">
            {filtros.disciplina}
          </span>
        )}
      </div>
    </div>
  );
}