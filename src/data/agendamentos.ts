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

export const agendamentos: AgendamentoProps[] = [
  {
    id: 1,
    nomeCliente: "Júlio Ricardo",
    emailCliente: "julio.ricardo@gmail.com",
    servico: ["Corte Masculino"],
    profissional: "Kauã",
    data: "17/04/2025",
    hora: "15:00",
    status: "pendente",
  },
  {
    id: 2,
    nomeCliente: "Isaac",
    emailCliente: "isaac@gmail.com",
    servico: ["Corte Masculino"],
    profissional: "Pedro Ricardo",
    data: "17/04/2025",
    hora: "14:40",
    status: "pendente",
  },
  {
    id: 3,
    nomeCliente: "Iago",
    emailCliente: "pedro@gmail.com",
    servico: ["Corte Masculino", "Barba"],
    profissional: "José Oliveira",
    data: "17/04/2025",
    hora: "14:00",
    status: "confirmado",
  },
  {
    id: 4,
    nomeCliente: "Pedro",
    emailCliente: "pedro@gmail.com",
    servico: ["Corte Masculino", "Barba"],
    profissional: "Kauã",
    data: "17/04/2025",
    hora: "13:00",
    status: "confirmado",
  },
  {
    id: 5,
    nomeCliente: "Nicolas",
    emailCliente: "nicolas@gmail.com",
    servico: ["Sombrancelha"],
    profissional: "Pedro Ricardo",
    data: "17/04/2025",
    hora: "10:00",
    status: "confirmado",
  },
];
