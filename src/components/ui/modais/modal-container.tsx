import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ModalContainer {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalContainer({
  open,
  onClose,
  children,
}: ModalContainer) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[320px] rounded-[35px] p-[20px] md:min-w-[640px] md:p-[30px]">
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
}
