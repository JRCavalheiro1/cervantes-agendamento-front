export interface AgendamentoProps {
  id?: number;
  nomeCliente: string;
  emailCliente: string;
  servico: string[];
  profissional: string;
  data: string;
  hora: string;
  status: "pendente" | "confirmado" | "cancelado";
}

export const agendamentos: AgendamentoProps[] = [];
