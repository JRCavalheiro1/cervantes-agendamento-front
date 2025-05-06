import clsx from "clsx";

type StatusType = "disponivel" | "indisponivel" | "pendente" | "confirmado" | "cancelado";

interface ShowStatusProps {
    status: StatusType;
};

const statusConfig: Record<StatusType, {color: string, bg: string}> = {
    disponivel: {
        color: "text-verde-600",
        bg: "bg-verde-100"
    },
    indisponivel: {
        color: "text-amarelo-600",
        bg: "bg-amarelo-100"
    },
    pendente: {
        color: "text-amarelo-600",
        bg: "bg-amarelo-100"
    },
    confirmado: {
        color: "text-verde-600",
        bg: "bg-verde-100"
    },
    cancelado: {
        color: "text-vermelho-600",
        bg: "bg-vermelho-100"
    }
}

export const ShowStatus: React.FC<ShowStatusProps> = ({status}) => {
    const config = statusConfig[status];

    return (
        <div className={clsx('px-[6px] py-[3px] rounded-full md:text-texto-status-md', config.color, config.bg)}>
            <span>{status}</span>
        </div>
    )
}