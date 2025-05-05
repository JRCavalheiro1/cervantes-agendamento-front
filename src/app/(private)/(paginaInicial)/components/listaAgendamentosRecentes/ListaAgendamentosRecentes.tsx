import ListaContainer from "@/app/(private)/(paginaInicial)/components/ListaContainer";
import ItemAgendamento from "@/components/sections/ItemAgendamento";
import { agendamentos } from "@/data/agendamentos";

export default function ListaAgendamentosRecentes() {
    return (
       <ListaContainer titulo="Agendamentos Recentes" subtitulo="Últimos agendamentos realizados" className="min-w-[352px] xl:w-[30%]">
           {agendamentos.map((agendamento) => {
               return (
                   <li key={agendamento.id}>
                       <ItemAgendamento
                           nomeCliene={agendamento.nomeCliene}
                           servico={agendamento.servico}
                           profissional={agendamento.profissional}
                           horario={agendamento.horario}
                           status={agendamento.status} />
                   </li>
               )
           })}
       </ListaContainer>
    )
}