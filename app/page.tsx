"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Filtros from "@/components/Filtros";
import ListaTrabalhos from "@/components/ListaTrabalhos";
import Programacao from "@/components/Programacao";
import Footer from "@/components/Footer";
import { exposicoes } from "@/data/exposicoes";
import { filtrarTrabalhos } from "@/utils/filters";
import { FiltrosState } from "@/types";

export default function Home() {
  const [filtros, setFiltros] = useState<FiltrosState>({
    disciplina: "",
    professor: "",
    periodo: "",
    busca: "",
  });

  const trabalhosFiltrados = filtrarTrabalhos(exposicoes, filtros);

  return (
    <div className="min-h-screen bg-[#FBFAE6]">
      <Header />
      <Hero />

      <section id="exposicoes" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-[#FF6002] text-sm font-bold uppercase tracking-widest mb-2">
              Onde está cada turma
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#070606]">
              Exposições
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Use os filtros abaixo para encontrar onde cada disciplina está sendo exposta.
            </p>
          </div>

          <div className="mb-8">
            <Filtros
              filtros={filtros}
              onChange={setFiltros}
              trabalhos={exposicoes}
              totalFiltrados={trabalhosFiltrados.length}
            />
          </div>

          <ListaTrabalhos trabalhos={trabalhosFiltrados} />
        </div>
      </section>

      <Programacao />
      <Footer />
    </div>
  );
}
