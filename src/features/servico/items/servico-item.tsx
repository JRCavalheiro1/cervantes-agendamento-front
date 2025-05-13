import { ServicosProps } from "@/data/servicos";
import Image from "next/image";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";

interface ServicoItemProps extends ServicosProps {
  onClick?: () => void;
}

export function ServicoItem({ nome, imagem, onClick }: ServicoItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-texto-status-md md:text-texto-card-xl flex items-center gap-[10px]">
        <Image
          src={imagem}
          alt="foto servico"
          width={200}
          height={200}
          className="h-[40px] w-[40px] rounded-full md:h-[50px] md:w-[50px]"
        />
        <span>{nome}</span>
      </div>

      <NotePencil
        size={20}
        color="#929090"
        className="cursor-pointer md:size-[25px]"
        onClick={onClick}
      />
    </div>
  );
}
