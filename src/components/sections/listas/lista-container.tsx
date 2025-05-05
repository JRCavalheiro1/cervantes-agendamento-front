type ListaContainerProps = {
    titulo: string;
    subtitulo: string;
    children: React.ReactNode;
    className?: string;
};
export default function ListaContainer({titulo, subtitulo, className, children}: ListaContainerProps) {
    return (
        <div className={`flex flex-col gap-[20px] bg-branco-100 rounded-[20px] p-[20px] md:p-[30px] ${className}`}
             >
            <div>
                <h1 className="text-titulo-card-2 md-">{titulo}</h1>
                <h2 className="text-texto-lista text-cinza-300">{subtitulo}</h2>
            </div>
            <div>
                <ul className="flex flex-col gap-[15px]">
                    {children}
                </ul>
            </div>
        </div>
    )
}