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
import { useTranslations } from "next-intl";
import ButtonSave from "@/components/ui/buttons/button-save";

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

  const translationModalAgendamento = useTranslations(
    "ConfirmAppointmentModal",
  );
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[362px] gap-[40px] rounded-[35px] p-[30px] md:min-w-[420px]">
        <VisuallyHidden>
          <DialogClose />
        </VisuallyHidden>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-titulo-card-2 md:text-titulo-card-sm font-normal">
              {translationModalAgendamento("title")}
            </DialogTitle>
            <Trash className="text-cinza-500" size={24} weight="bold" />
          </div>
        </DialogHeader>
        <div className="text-texto-status-md md:text-texto-form flex flex-col gap-[40px]">
          <div className="text- flex justify-between">
            <span>{translationModalAgendamento("nameClient")}</span>
            <span className="text-cinza-500">{nomeCliente}</span>
          </div>
          <div className="flex justify-between">
            <span>{translationModalAgendamento("emailClient")}</span>
            <span className="text-cinza-500">{emailCliente}</span>
          </div>
          <div className="flex justify-between">
            <span>{translationModalAgendamento("service")}</span>
            <span className="text-cinza-500">{servico.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span>{translationModalAgendamento("nameProfessional")}</span>
            <span className="text-cinza-500">{profissional}</span>
          </div>
          <div className="flex justify-between">
            <span>{translationModalAgendamento("dateHour")}</span>
            <span className="text-cinza-500">
              {data} - {hora}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <ShowStatus status={status} />
          </div>
        </div>
        <div className="gap flex items-center justify-end gap-[10px]">
          <ButtonSave>Cancelar</ButtonSave>
          <ButtonSave>Confirmar Agendamento</ButtonSave>
        </div>
      </DialogContent>
    </Dialog>
  );
}
