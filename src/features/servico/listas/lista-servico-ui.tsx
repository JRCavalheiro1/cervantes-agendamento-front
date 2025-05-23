"use client";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import { ListaVazia } from "@/components/sections/listas/lista-vazia";
import { ServicoItem } from "@/features/servico/items/servico-item";
import { useModal } from "@/hooks/utils/use-modal";
import { ModalServico } from "@/features/servico/modais/modal-servico";
import { ServicoType } from "@/features/servico/types/servico";
import { useState, useEffect } from "react";
import { getServicos } from "@/services/servicos/get-servicos";

export default function ListaServicosUi() {
  const t = useTranslations("Services");
  const [servicos, setServicos] = useState<ServicoType[]>([]);

  const {
    itemSelecionado: servicoSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  } = useModal<ServicoType>();

  // const ID_EMPRESA = "d9545b57-e22a-4a78-9dfe-12c73217e9b3";

  useEffect(() => {
    async function fecthServicos() {
      try {
        const data = await getServicos();
        setServicos(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    }
    fecthServicos();
  }, []);

  return (
    <ListaContainer titulo={t("title")} subtitulo={t("subtitle")}>
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
        <ListaVazia icone={false} descricao={t("emptyListDescription")} />
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
