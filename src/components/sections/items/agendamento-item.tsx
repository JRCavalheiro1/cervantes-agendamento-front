import { ShowStatus } from "@/components/ui/show-status";
import { AgendamentoProps } from "@/data/agendamentos";

interface AgendamentoItemProps extends AgendamentoProps {
  onClick?: () => void;
}

export default function AgendamentoItem({
  nomeCliente,
  servico,
  profissional,
  hora,
  status,
  onClick,
}: AgendamentoItemProps) {
  return (
    <div
      className="text-texto-lista md:text-texto-card-lg hover:bg-azul-50 flex cursor-pointer items-center justify-between rounded-[10px] p-[5px] md:p-[10px]"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div>
          <span>{nomeCliente} - </span>
          <span>{servico.map((item) => `${item} ,`)}</span>
        </div>
        <div className="text-cinza-300">
          <span>{profissional}- </span>
          <span>{hora}</span>
        </div>
      </div>
      <div>
        <ShowStatus status={status} />
      </div>
    </div>
  );
}
