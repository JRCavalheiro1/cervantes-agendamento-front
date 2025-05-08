"use client";

import ProfissionalItem from "@/components/sections/items/profissional-item";
import { profissionais } from "@/data/profissionais";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ModalProfissional from "@/components/ui/modal-profissional";

export default function ListaProfissionais() {
  const [modalAberto, setModalAberto] = useState(false);
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);

  function abreModal(profissional: any) {
    setProfissionalSelecionado(profissional);
    setModalAberto(true);
  }

  function fechaModal() {
    setProfissionalSelecionado(null);
    setModalAberto(false);
  }

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
