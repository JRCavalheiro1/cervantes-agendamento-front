import ListaContainer from "@/components/sections/listas/lista-container";
import AgendamentoItem from "@/components/sections/items/agendamento-item";
import { agendamentos } from "@/data/agendamentos";
import { useTranslations } from "next-intl";

export default function ListaAgendamentosRecentes() {
    const translationAppointList = useTranslations('RecentAppointmentsList');

    return (
       <ListaContainer titulo={translationAppointList('title')} subtitulo={translationAppointList('subtitle')} className="min-w-[352px] xl:w-[30%]">
           {agendamentos.map((agendamento) => {
               return (
                   <li key={agendamento.id}>
                       <AgendamentoItem
                           nomeCliene={agendamento.nomeCliene}
                           servico={agendamento.servico}
                           profissional={agendamento.profissional}
                           horario={agendamento.horario}
                           status={agendamento.status}/>
                   </li>
               )
           })}
       </ListaContainer>
    )
}