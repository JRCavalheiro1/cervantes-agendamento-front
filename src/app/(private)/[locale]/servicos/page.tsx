import Header from "@/components/layout/header";
import { useTranslations } from "next-intl";
import { ListaServicos } from "@/features/servico/listas/lista-servicos";
import CaixaPesquisa from "@/components/ui/pesquisa/caixa-pesquisa";
import { ButtonNew } from "@/components/ui/buttons/button-new";

export default function Servicos() {
  const t = useTranslations("Services");

  return (
    <div className="flex flex-col gap-[10px]">
      <Header titulo={t("title")} />
      <div className="flex flex-col gap-[10px] md:gap-[20px]">
        <div className="flex items-center gap-[5px] md:gap-[10px]">
          <CaixaPesquisa placeholder="Pesquisar serviço" />
          <ButtonNew content="Novo Serviço" link="/servicos/novoServico" />
        </div>
        <ListaServicos />
      </div>
    </div>
  );
}
