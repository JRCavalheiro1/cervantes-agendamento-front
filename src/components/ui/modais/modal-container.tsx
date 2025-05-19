import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";

interface ModalContainer {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function ModalContainer({
  open,
  onClose,
  children,
  className,
}: ModalContainer) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "min-w-[320px] rounded-[35px] p-[20px] md:min-w-[640px] md:p-[30px]",
          className,
        )}
      >
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
}
