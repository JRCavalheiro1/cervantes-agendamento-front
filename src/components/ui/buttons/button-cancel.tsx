import { Button } from "@/components/ui/buttons/button";

type ButtonCancelProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
};

export default function ButtonCancel({
  children,
  ...props
}: ButtonCancelProps) {
  return (
    <Button
      variant="ghost"
      className="bg-cinza-100 text-preto-400 cursor-pointer border"
      type="button"
      {...props}
    >
      {children}
    </Button>
  );
}
