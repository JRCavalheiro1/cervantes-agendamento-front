import {ShowStatus} from "@/app/(private)/(paginaInicial)/components/ShowStatus";
import { AgendamentoProps } from "@/data/agendamentos";

interface ItemAgendamentoProps extends AgendamentoProps {
    onClick?: ()=> void;
}

export default function ItemAgendamento({nomeCliene, servico, profissional, horario, status, onClick}: ItemAgendamentoProps) {
    return (
        <div className="flex justify-between items-center text-texto-lista cursor-pointer md:text-texto-card-lg p-[5px] rounded-[10px] md:p-[10px] hover:bg-azul-50" onClick={onClick}>
            <div className="flex flex-col">
                <div>
                    <span>{nomeCliene} - </span>
                    <span>{servico.map((item)=> `${item} -`)}</span>
                </div>
                <div className="text-cinza-300">
                    <span>{profissional}- </span>
                    <span>{horario}</span>
                </div>
            </div>
            <div>
                <ShowStatus status={status}/>
            </div>
        </div>
    )
}