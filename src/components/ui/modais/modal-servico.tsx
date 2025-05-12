import { ServicosProps } from "@/data/servicos";
import ModalContainer from "@/components/ui/modais/modal-container";

interface ModalServicoProps {
  servico: ServicosProps;
  open: boolean;
  onClose: () => void;
}

export function ModalServico({ servico, open, onClose }: ModalServicoProps) {
  const { nome, imagem } = servico;
  return (
    <ModalContainer open={open} onClose={onClose}>
      <div>AAAAA</div>
    </ModalContainer>
  );
}
