import {Button}from "@/components/ui/buttons/button"

type ButtonSaveProps = React.ComponentProps<typeof Button> & {
    children: React.ReactNode;
}

export default function ButtonSave ({children}: ButtonSaveProps) {
        return (
            <Button className="cursor-pointer bg-border-cinza-100 border " type="button">
                {children}
            </Button>
        )
}