import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ProfissionalProps } from "@/data/profissionais";

interface CardProfissionalProps extends ProfissionalProps  {
    onClick?: ()=> void;
};

export default function CardProfissional({
    nome,
    fotoPerfil,
    agendaAberta,
    horarios,
    }: CardProfissionalProps) {
    return (
        <div className="flex items-center justify-between text-texto-card-sm
            md:text-texto-card-xl
        ">
            <div className="flex gap-[10px]">
                <Image src={fotoPerfil} alt="Imagem-profissional" width={200} height={200} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"/>
                <div className="flex flex-col">
                    <span>{nome}</span>
                    <span className="text-cinza-500">{`${horarios[0]} - ${horarios[1]}`}</span>
                </div>
            </div>

            <div className="flex items-center gap-[10px]">
                <div className={`${agendaAberta === "disponível" ? 'text-verde-600 bg-verde-100' : 'text-amarelo-600 bg-amarelo-100'} pr-[5px] pl-[5px] pt-[3px] pb-[3px] rounded-[10px] md:text-texto-status-md`}>
                    <span>{agendaAberta}</span>
                </div>
                <NotePencil size={20} color="#929090" className="cursor-pointer md:size-[25px]"/>
            </div>
        </div>
    )
}