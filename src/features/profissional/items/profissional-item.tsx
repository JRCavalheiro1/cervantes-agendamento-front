import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ProfissionalProps } from "@/data/profissionais";
import { ShowStatus } from "@/components/ui/show-status";
import { useTranslations } from "next-intl";

interface ProfissionalItemProps extends ProfissionalProps {
  onClick?: () => void;
  variant?: "home";
}

export default function ProfissionalItem({
  nome,
  fotoPerfil,
  agendaAberta,
  horarios,
  ativo,
  onClick,
  variant,
}: ProfissionalItemProps) {
  const t = useTranslations("Professional");
  const emAtividade = ativo ? t("active") : t("inactive");
  return (
    <div className="text-texto-card-sm md:text-texto-card-xl flex items-center justify-between p-[5px]">
      <div className="flex gap-[10px]">
        <Image
          src={fotoPerfil}
          alt="Imagem-profissional"
          width={200}
          height={200}
          className="h-[40px] w-[40px] rounded-full md:h-[50px] md:w-[50px]"
        />
        <div className="flex flex-col">
          <span>{nome}</span>
          <span className="text-cinza-300">
            {variant ? `${horarios.join("-")}` : emAtividade}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        {variant ? <ShowStatus status={agendaAberta} /> : null}
        <NotePencil
          size={20}
          color="#929090"
          className="cursor-pointer md:size-[25px]"
          onClick={onClick}
        />
      </div>
    </div>
  );
}
