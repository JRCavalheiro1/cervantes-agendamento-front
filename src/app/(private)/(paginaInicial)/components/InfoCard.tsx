'use client';

type InfoCardProps = {
    icone: React.ReactNode;
    descricao: string;
    total: string;
};


export default function InfoCard({icone, descricao, total}: InfoCardProps) {
    return (
        <div className="flex flex-col justify-center bg-branco-100 rounded-[20px] p-[1.25rem]">
            <div className="flex items-center">
                {icone}
                <span className="text-[1.125]">{descricao}</span>
            </div>
                <span className="text-[2.5rem] text-azul-500">{total}</span>
        </div>

    );
}