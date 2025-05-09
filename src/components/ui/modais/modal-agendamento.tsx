import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Trash } from "@phosphor-icons/react";
import { ShowStatus } from "@/components/ui/show-status";
import { AgendamentoProps } from "@/data/agendamentos";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ModalAgendamentoProps {
  agendamento: AgendamentoProps;
  open: boolean;
  onClose: () => void;
}

export default function ModalAgendamento({
  agendamento,
  open,
  onClose,
}: ModalAgendamentoProps) {
  const {
    nomeCliente,
    profissional,
    emailCliente,
    servico,
    data,
    hora,
    status,
  } = agendamento;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[362px] gap-[20px] rounded-[35px] p-[30px] md:min-w-[420px]">
        <VisuallyHidden>
          <DialogClose />
        </VisuallyHidden>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-titulo-card-2 font-normal">
              Confirmar Agendamento
            </DialogTitle>
            <Trash className="text-cinza-500" size={24} weight="bold" />
          </div>
        </DialogHeader>
        <div className="text-texto-status-md md:text-texto-form flex flex-col gap-[40px]">
          <div className="text- flex justify-between">
            <span>Nome</span>
            <span className="text-cinza-500">{nomeCliente}</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span className="text-cinza-500">{emailCliente}</span>
          </div>
          <div className="flex justify-between">
            <span>Serviço</span>
            <span className="text-cinza-500">{servico.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span>Profissional</span>
            <span className="text-cinza-500">{profissional}</span>
          </div>
          <div className="flex justify-between">
            <span>Data/Hora</span>
            <span className="text-cinza-500">
              {data} - {hora}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <ShowStatus status={status} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
