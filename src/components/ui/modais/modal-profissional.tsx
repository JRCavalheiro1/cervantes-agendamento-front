import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { EditaProfissionalForm } from "@/components/ui/forms/edita-profissional-form";
import { ProfissionalProps } from "@/data/profissionais";

interface ModalProfissionalProps {
  profissional: ProfissionalProps;
  open: boolean;
  onClose: () => void;
}

export default function ModalProfissional({
  profissional,
  open,
  onClose,
}: ModalProfissionalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[320px] rounded-[35px] p-[20px] md:min-w-[640px] md:p-[30px]">
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        <EditaProfissionalForm profissional={profissional} />
      </DialogContent>
    </Dialog>
  );
}
