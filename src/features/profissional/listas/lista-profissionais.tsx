"use client";

import ProfissionalItem from "@/features/profissional/items/profissional-item";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";
import { ModalProfissional } from "@/features/profissional/modais/modal-profissional";
import { useModal } from "@/hooks/utils/use-modal";
import { profissionais, ProfissionalProps } from "@/data/profissionais";
import { ListaVazia } from "@/components/sections/listas/lista-vazia";
import Link from "next/link";

interface ListaProfissionaisProps {
  variant?: "home";
}
export default function ListaProfissionais({
  variant,
}: ListaProfissionaisProps) {
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
      className="xl:flex-1"
    >
      {profissionais.length > 0 ? (
        profissionais.map((item) => {
          return (
            <li key={item.id}>
              <ProfissionalItem
                {...item}
                onClick={() => abreModal(item)}
                variant={variant}
              />
            </li>
          );
        })
      ) : (
        <ListaVazia
          icone={true}
          descricao={translationListaProf("emptyListDescription")}
        >
          <Link
            className="text-azul-300 text-texto-lista md:text-texto-form"
            href="/profissionais"
          >
            {translationListaProf("linkAddNow")}
          </Link>
        </ListaVazia>
      )}
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
