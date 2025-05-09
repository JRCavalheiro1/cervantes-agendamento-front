import { Button } from "@/components/ui/buttons/button";

type ButtonSaveProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
};

export default function ButtonSave({ children, ...props }: ButtonSaveProps) {
  return (
    <Button
      variant="ghost"
      className="bg-azul-500 text-branco-100 cursor-pointer"
      type="button"
      {...props}
    >
      {children}
    </Button>
  );
}
