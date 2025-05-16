import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Check } from "@phosphor-icons/react/dist/ssr";

interface ModalConcluidoProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}
export function ModalConcluido({
  open,
  onOpenChange,
  children,
  className,
}: ModalConcluidoProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={true}>
      <DialogContent
        className={cn(
          "flex flex-col items-center justify-center gap-[20px] rounded-[20px] p-[30px]",
          className,
        )}
      >
        <DialogHeader>
          <DialogTitle>
            <div className="bg-azul-200 flex h-[64px] w-[64px] items-center justify-center rounded-full md:h-[94px] md:w-[94px]">
              <Check
                size={42}
                className="text-azul-400 md:h-[62px] md:w-[62px]"
              />
            </div>
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
