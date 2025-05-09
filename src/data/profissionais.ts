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

export const profissionais: ProfissionalProps[] = [
  {
    id: 1,
    nome: "Pedro Ricardo",
    telefone: "(11) 99999-9999",
    email: "pedro.ricardo@gmail.com",
    fotoPerfil: "/fotosProfissional/profissional1.png",
    ativo: true,
    agendaAberta: "disponivel",
    horarios: ["07:00", "16:00"],
    servicos: ["Corte Masculino", "Barba", "Sobrancelha"],
  },
  {
    id: 2,
    nome: "Kauã",
    email: "kaua@gmail.com",
    telefone: "(11) 8888-8888",
    fotoPerfil: "/fotosProfissional/profissional2.png",
    ativo: true,
    agendaAberta: "indisponivel",
    horarios: ["08:00", "17:00"],
    servicos: ["Corte Masculino", "Barba", "Sobrancelha"],
  },
  {
    id: 3,
    nome: "José Oliveira",
    email: "jose.oliveira@gmail.com",
    telefone: "(11) 7777-7777",
    fotoPerfil: "/fotosProfissional/profissional3.png",
    ativo: true,
    agendaAberta: "disponivel",
    horarios: ["08:00", "16:00"],
    servicos: ["Corte Masculino"],
  },
  {
    id: 4,
    nome: "José Oliveira",
    email: "jose.oliveira@gmail.com",
    telefone: "(11) 6565-6565",
    fotoPerfil: "/fotosProfissional/profissional3.png",
    ativo: true,
    agendaAberta: "disponivel",
    horarios: ["07:00", "17:00"],
    servicos: ["Corte Masculino"],
  },
  {
    id: 5,
    nome: "José Oliveira",
    email: "jose.oliveira@gmail.com",
    telefone: "(11) 5555-5555",
    fotoPerfil: "/fotosProfissional/profissional3.png",
    ativo: true,
    agendaAberta: "indisponivel",
    horarios: ["08:00", "16:00"],
    servicos: ["Corte Masculino"],
  },
];
