'use client';

type InfoCardProps = {
    icone: React.ReactNode;
    descricao: string;
    total: string;
    cardAzul?: boolean;
};

export default function InfoCard({icone, descricao, total, cardAzul}: InfoCardProps) {
    return (
        <div className={`flex flex-col justify-center gap-[10px] h-[120px] rounded-[20px] p-[20px]
            md:p-[20px] xl:h-[200px] cursor-pointer ${cardAzul ? 'bg-azul-500' : 'bg-branco-100'}`}>
            <div className="flex items-center gap-[5px]">
                {icone}
                <span className={`text-texto-card-sm md:text-texto-card-lg xl:text-texto-card-xl w-[100px] xl:w-[165px] font-regular ${cardAzul ? 'text-branco-100' : 'text-preto-400'}`}>{descricao}</span>
            </div>
                <span className={`text-titulo-card-sm md:text-titulo-menu-md xl:text-numero-infoCard-xl text-azul-500 font-regular ${cardAzul ? 'text-branco-100' : 'text-azul-500'}`} >{total}</span>
        </div>

    );
}