export interface ProfissionalProps {
  id?: number;
  nome: string;
  email?: string;
  telefone?: string;
  fotoPerfil: string;
  ativo?: boolean;
  agendaAberta: "disponivel" | "indisponivel";
  horarios: string[];
  servicos?: string[];
}

export const profissionais: ProfissionalProps[] = [];
