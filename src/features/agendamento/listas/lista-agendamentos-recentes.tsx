"use client";

import ListaContainer from "@/components/sections/listas/lista-container";
import AgendamentoItem from "@/features/agendamento/items/agendamento-item";
import { AgendamentoProps, agendamentos } from "@/data/agendamentos";
import { useTranslations } from "next-intl";
import { useModal } from "@/hooks/utils/use-modal";
import ModalAgendamento from "@/features/agendamento/modais/modal-agendamento";
import { ListaVazia } from "@/components/sections/listas/lista-vazia";

export default function ListaAgendamentosRecentes() {
  const t = useTranslations("RecentAppointmentsList");
  const {
    itemSelecionado: agendamentoSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  } = useModal<AgendamentoProps>();
  return (
    <ListaContainer
      titulo={t("title")}
      subtitulo={t("subtitle")}
      className="min-w-[352px] xl:w-[30%]"
    >
      {agendamentos.length > 0 ? (
        agendamentos.map((item) => {
          return (
            <li key={item.id}>
              <AgendamentoItem {...item} onClick={() => abreModal(item)} />
            </li>
          );
        })
      ) : (
        <ListaVazia descricao={t("emptyListDescription")} />
      )}
      {modalAberto && agendamentoSelecionado && (
        <ModalAgendamento
          agendamento={agendamentoSelecionado}
          onClose={fechaModal}
          open={modalAberto}
        />
      )}
    </ListaContainer>
  );
}
