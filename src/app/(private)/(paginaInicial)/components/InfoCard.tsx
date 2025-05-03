'use client';

type InfoCardProps = {
    icone: React.ReactNode;
    descricao: string;
    total: string;
};


export default function InfoCard({icone, descricao, total}: InfoCardProps) {
    return (
        <div className="flex flex-col justify-center h-[120px] bg-branco-100 rounded-[20px] p-[1.25rem]
        xl:h-[200px]">
            <div className="flex items-center">
                {icone}
                <span className="text-texto-card-mb">{descricao}</span>
            </div>
                <span className="text-titulo-card text-azul-500">{total}</span>
        </div>

    );
}