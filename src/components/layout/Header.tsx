'use client';


type headerProps = {
    titulo: string;
}

export default function Header({titulo}: headerProps) {
    return (
        <header className="text-[1.75rem] pb-[32px] pt-[32px] font-bold">
            <h1>{titulo}</h1>
        </header>
    )
}