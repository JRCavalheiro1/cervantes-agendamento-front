import { Button } from "@/components/ui/buttons/button";
import { UploadSimple } from "@phosphor-icons/react/dist/ssr";

type ButtonSaveProps = React.ComponentProps<typeof Button> & {
    children: React.ReactNode;
}

export function ButtonAlter ({children}: ButtonSaveProps) {
    return (
        <Button variant="ghost"
                className="w-[120px] h-[30px] cursor-pointer bg-transparent border-cinza-100 border
               text-preto-400 outline-none text-texto-lista"
                type="button">
            <UploadSimple size={18} weight="bold"/>
            {children}
        </Button>
    )
}