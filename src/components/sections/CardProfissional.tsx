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
    onClick
    }: CardProfissionalProps) {
    return (
        <div className="border-black border-1 flex items-center justify-between text-texto-card-sm">
            <div className="flex gap-[10px]">
                <Image src="/fotosProfissional/profissional1.png" alt="Imagem-profissional" width={40} height={40} className="rounded-full"/>
                <div className="flex flex-col">
                    <span>Pedro Ricardo</span>
                    <span className="text-cinza-500">09:00 - 18:00</span>
                </div>
            </div>

            <div className="flex items-center gap-[10px]">
                <div className="bg-verde-100 pr-[5px] pl-[5px] pt-[3px] pb-[3px] rounded-[10px]">
                    <span className="text-verde-600">Disponível</span>
                </div>
                <NotePencil size={20} color="#929090"/>
            </div>
        </div>
    )
}