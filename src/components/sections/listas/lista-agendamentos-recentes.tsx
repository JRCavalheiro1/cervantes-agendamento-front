import ListaContainer from "@/components/sections/listas/lista-container";
import AgendamentoItem from "@/components/sections/items/agendamento-item";
import { agendamentos } from "@/data/agendamentos";

export default function ListaAgendamentosRecentes() {
    return (
       <ListaContainer titulo="Agendamentos Recentes" subtitulo="Últimos agendamentos realizados" className="min-w-[352px] xl:w-[30%]">
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