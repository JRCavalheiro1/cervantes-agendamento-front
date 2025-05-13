import Header from "@/components/layout/header";
import ListaProfissionais from "@/features/profissional/listas/lista-profissionais";
import CaixaPesquisa from "@/components/ui/pesquisa/caixa-pesquisa";
import { ButtonNew } from "@/components/ui/buttons/button-new";

export default function Profissionais() {
  return (
    <div className="flex flex-col gap-[10px]">
      <Header titulo="Profissionais" />
      <div className="flex flex-col gap-[10px] md:gap-[20px]">
        <div className="flex items-center gap-[5px] md:gap-[10px]">
          <CaixaPesquisa />
          <ButtonNew
            content="Novo profisssional"
            link="/profissionais/novoProfissional"
          />
        </div>
        <ListaProfissionais />
      </div>
    </div>
  );
}
