"use client";

import ListaContainer from "@/components/sections/listas/lista-container";
import AgendamentoItem from "@/components/sections/items/agendamento-item";
import { AgendamentoProps, agendamentos } from "@/data/agendamentos";
import { useTranslations } from "next-intl";
import { useModal } from "@/hooks/utils/use-modal";
import ModalAgendamento from "@/components/ui/modais/modal-agendamento";

export default function ListaAgendamentosRecentes() {
  const translationAppointList = useTranslations("RecentAppointmentsList");
  const {
    itemSelecionado: agendamentoSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  } = useModal<AgendamentoProps>();
  return (
    <ListaContainer
      titulo={translationAppointList("title")}
      subtitulo={translationAppointList("subtitle")}
      className="min-w-[352px] xl:w-[30%]"
    >
      {agendamentos.map((item) => {
        return (
          <li key={item.id}>
            <AgendamentoItem {...item} onClick={() => abreModal(item)} />
          </li>
        );
      })}
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
