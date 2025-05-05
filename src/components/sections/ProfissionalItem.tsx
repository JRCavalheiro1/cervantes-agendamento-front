import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ProfissionalProps } from "@/data/profissionais";
import {ShowStatus} from "@/app/(private)/(paginaInicial)/components/ShowStatus";

interface ProfissionalItemProps extends ProfissionalProps  {
    onClick?: ()=> void;
};

export default function ProfissionalItem({
    nome,
    fotoPerfil,
    agendaAberta,
    horarios,
    }: ProfissionalItemProps) {
    return (
        <div className="flex items-center justify-between text-texto-card-sm
            md:text-texto-card-xl
        ">
            <div className="flex gap-[10px]">
                <Image src={fotoPerfil} alt="Imagem-profissional" width={200} height={200} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"/>
                <div className="flex flex-col">
                    <span>{nome}</span>
                    <span className="text-cinza-300">{`${horarios[0]} - ${horarios[1]}`}</span>
                </div>
            </div>

            <div className="flex items-center gap-[10px]">
                <ShowStatus status={agendaAberta}/>
                <NotePencil size={20} color="#929090" className="cursor-pointer md:size-[25px]"/>
            </div>
        </div>
    )
}