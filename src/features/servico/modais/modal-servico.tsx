import ModalContainer from "@/components/ui/modais/modal-container";
import { EditaServicoForm } from "@/features/servico/forms/edita-servico-form";
import { ServicoType } from "@/features/servico/types/servico";

interface ModalServicoProps {
  servico: ServicoType;
  open: boolean;
  onClose: () => void;
}

export function ModalServico({ servico, open, onClose }: ModalServicoProps) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <EditaServicoForm servico={servico} onClose={onClose} />
    </ModalContainer>
  );
}
