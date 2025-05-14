"use client";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import { ListaVazia } from "@/components/sections/listas/lista-vazia";
import { Toolbox } from "@phosphor-icons/react/dist/ssr";
import { servicos, ServicosProps } from "@/data/servicos";
import { ServicoItem } from "@/features/servico/items/servico-item";
import { useModal } from "@/hooks/utils/use-modal";
import { ModalServico } from "@/features/servico/modais/modal-servico";

export default function ListaServicos() {
  const listaServicosTranslation = useTranslations("Services");
  const {
    itemSelecionado: servicoSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  } = useModal<ServicosProps>();

  return (
    <ListaContainer
      titulo={listaServicosTranslation("title")}
      subtitulo={listaServicosTranslation("subtitle")}
    >
      {servicos.length > 0 ? (
        servicos.map((servico) => (
          <li key={servico.id}>
            <ServicoItem
              nome={servico.nome}
              imagem={servico.imagem}
              onClick={() => abreModal(servico)}
            />
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
      {modalAberto && servicoSelecionado && (
        <ModalServico
          servico={servicoSelecionado}
          open={modalAberto}
          onClose={fechaModal}
        />
      )}
    </ListaContainer>
  );
}
