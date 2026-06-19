export type TrabalhoExposto = {
  id: number;
  disciplina: string;
  professor: string;
  periodo: string;
  curso?: string;
  sala: string;
  predio: string;
};

export type AtividadeProgramacao = {
  id: number;
  horario: string;
  titulo: string;
  descricao?: string;
  local?: string;
};

export type FiltrosState = {
  disciplina: string;
  professor: string;
  periodo: string;
  busca: string;
};
