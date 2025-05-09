import { Button } from "@/components/ui/buttons/button";
import { UploadSimple } from "@phosphor-icons/react/dist/ssr";

type ButtonSaveProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
};

export function ButtonAlter({ children }: ButtonSaveProps) {
  return (
    <Button
      variant="ghost"
      className="border-cinza-100 text-preto-400 text-texto-lista md:text-texto-status-md h-[30px] w-[120px] cursor-pointer border bg-transparent outline-none md:h-[40px] md:w-[140px]"
      type="button"
    >
      <UploadSimple size={18} weight="bold" />
      {children}
    </Button>
  );
}
