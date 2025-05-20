import { Button } from "@/components/ui/buttons/button";
import { cn } from "@/lib/utils";

type ButtonSaveProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
  className?: string;
};

export default function ButtonSave({
  children,
  className,
  ...props
}: ButtonSaveProps) {
  return (
    <Button
      variant="ghost"
      className={cn("bg-azul-500 text-branco-100 cursor-pointer", className)}
      type="button"
      {...props}
    >
      {children}
    </Button>
  );
}
