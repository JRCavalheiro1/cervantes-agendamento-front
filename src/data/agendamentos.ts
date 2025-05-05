export interface AgendamentoProps {
    id?: number;
    nomeCliene: string;
    servico: string[];
    profissional: string;
    horario: string;
    status: "pendente" | "confirmado" | "cancelado";
};

export const agendamentos: AgendamentoProps[] = [
    {
        id: 1,
        nomeCliene: "Júlio César",
        servico: ["Corte Masculino"],
        profissional: "Kauã",
        horario: "15:00",
        status: "pendente"
    },
    {
        id: 2,
        nomeCliene: "Isaac",
        servico: ["Corte Masculino"],
        profissional: "Pedro Ricardo",
        horario: "14:40",
        status: "pendente"
    },
    {
        id: 3,
        nomeCliene: "Iago",
        servico: ["Corte Masculino", "Barba"],
        profissional: "José Oliveira",
        horario: "14:00",
        status: "confirmado"
    },
    {
        id: 4,
        nomeCliene: "Pedro",
        servico: ["Corte Masculino", "Barba"],
        profissional: "Kauã",
        horario: "13:00",
        status: "confirmado"
    },
    {
        id: 5,
        nomeCliene: "Nicolas",
        servico: ["Sombrancelha"],
        profissional: "Pedro Ricardo",
        horario: "10:00",
        status: "confirmado"
    },
]