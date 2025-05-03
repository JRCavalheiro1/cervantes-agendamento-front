'use client';


type headerProps = {
    titulo: string;
}

export default function Header({titulo}: headerProps) {
    return (
        <header className="">
            <h1>{titulo}</h1>
        </header>
    )
}