import { TrabalhoExposto, FiltrosState } from "@/types";

export function filtrarTrabalhos(
  trabalhos: TrabalhoExposto[],
  filtros: FiltrosState
): TrabalhoExposto[] {
  return trabalhos.filter((t) => {
    const matchDisciplina =
      !filtros.disciplina || t.disciplina === filtros.disciplina;

    const matchProfessor =
      !filtros.professor ||
      t.professor
        .split(",")
        .map((p) => p.trim())
        .some((p) => p === filtros.professor);

    const matchPeriodo = !filtros.periodo || t.periodo === filtros.periodo;

    const matchBusca =
      !filtros.busca ||
      t.disciplina.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      t.professor.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      t.sala.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      (t.curso?.toLowerCase().includes(filtros.busca.toLowerCase()) ?? false);

    return matchDisciplina && matchProfessor && matchPeriodo && matchBusca;
  });
}

export function extrairOpcoes(
  trabalhos: TrabalhoExposto[],
  campo: keyof TrabalhoExposto
): string[] {
  const valores = trabalhos
    .map((t) => t[campo] as string)
    .filter(Boolean);
  return Array.from(new Set(valores)).sort();
}

export function extrairProfessores(trabalhos: TrabalhoExposto[]): string[] {
  const nomes = trabalhos.flatMap((t) =>
    t.professor
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean)
  );
  return Array.from(new Set(nomes)).sort();
}