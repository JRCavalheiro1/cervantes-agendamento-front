"use client";

import ProfissionalItem from "@/components/sections/items/profissional-item";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import ModalProfissional from "@/components/ui/modais/modal-profissional";
import { useModal } from "@/hooks/utils/use-modal";

import { profissionais, ProfissionalProps } from "@/data/profissionais";

export default function ListaProfissionais() {
  const {
    itemSelecionado: profissionalSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  } = useModal<ProfissionalProps>();

  const translationListaProf = useTranslations("ProfessionalList");
  return (
    <ListaContainer
      titulo={translationListaProf("title")}
      subtitulo={translationListaProf("subtitle")}
      className="min-w-[352px] xl:flex-1"
    >
      {profissionais.map((item) => {
        return (
          <li key={item.id}>
            <ProfissionalItem {...item} onClick={() => abreModal(item)} />
          </li>
        );
      })}
      {modalAberto && profissionalSelecionado && (
        <ModalProfissional
          profissional={profissionalSelecionado}
          onClose={fechaModal}
          open={modalAberto}
        />
      )}
    </ListaContainer>
  );
}
