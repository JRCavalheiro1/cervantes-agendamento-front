'use client';


type headerProps = {
    titulo: string;
}

export default function Header({titulo}: headerProps) {
    return (
        <header className="h-[80px] flex items-center text-titulo-card-2 font-bold
        md:text-titulo-menu-md"
        >
            <h1>{titulo}</h1>
        </header>
    )
}