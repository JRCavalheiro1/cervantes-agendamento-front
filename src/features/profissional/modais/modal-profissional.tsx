import { EditaProfissionalForm } from "@/features/profissional/forms/edita-profissional-form";
import { ProfissionalProps } from "@/data/profissionais";
import ModalContainer from "@/components/ui/modais/modal-container";

interface ModalProfissionalProps {
  profissional: ProfissionalProps;
  open: boolean;
  onClose: () => void;
}

export function ModalProfissional({
  profissional,
  open,
  onClose,
}: ModalProfissionalProps) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <EditaProfissionalForm profissional={profissional} />
    </ModalContainer>
  );
}
