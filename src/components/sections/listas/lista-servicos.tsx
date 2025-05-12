import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import { ListaVazia } from "@/components/ui/lista-vazia";
import { Toolbox } from "@phosphor-icons/react/dist/ssr";
import { servicos } from "@/data/servicos";
import { ServicoItem } from "@/components/sections/items/servico-item";

export default function ListaServicos() {
  const listaServicosTranslation = useTranslations("Services");

  return (
    <ListaContainer
      titulo={listaServicosTranslation("title")}
      subtitulo={listaServicosTranslation("subtitle")}
    >
      {servicos.length > 0 ? (
        servicos.map((servico) => (
          <li key={servico.id}>
            <ServicoItem nome={servico.nome} imagem={servico.imagem} />
          </li>
        ))
      ) : (
        <ListaVazia
          icone={
            <Toolbox
              size={42}
              className="text-azul-400 md:h-[62px] md:w-[62px]"
              weight="fill"
            />
          }
          descricao={listaServicosTranslation("emptyListDescription")}
        />
      )}
    </ListaContainer>
  );
}
