import { ServicosProps } from "@/data/servicos";
import ModalContainer from "@/components/ui/modais/modal-container";
import { EditaServicoForm } from "@/components/ui/forms/edita-servico-form";

interface ModalServicoProps {
  servico: ServicosProps;
  open: boolean;
  onClose: () => void;
}

export function ModalServico({ servico, open, onClose }: ModalServicoProps) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <EditaServicoForm servico={servico} />
    </ModalContainer>
  );
}
