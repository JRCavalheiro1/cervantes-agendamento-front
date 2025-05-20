export interface ProfissionalProps {
  id?: string;
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
  /*{
    id: "2",
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
    id: "3",
    nome: "José Oliveira",
    email: "jose.oliveira@gmail.com",
    telefone: "(11) 7777-7777",
    fotoPerfil: "/fotosProfissional/profissional3.png",
    ativo: true,
    agendaAberta: "disponivel",
    horarios: ["08:00", "16:00"],
    servicos: ["Corte Masculino"],
  },*/
];
