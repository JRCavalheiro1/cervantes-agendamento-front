type ListaContainerProps = {
  titulo: string;
  subtitulo: string;
  children: React.ReactNode;
  className?: string;
};
export default function ListaContainer({
  titulo,
  subtitulo,
  className,
  children,
}: ListaContainerProps) {
  return (
    <div
      className={`bg-branco-100 flex flex-col gap-[20px] rounded-[20px] p-[20px] md:p-[30px] ${className}`}
    >
      <div>
        <h1 className="text-texto-card-xl md:text-titulo-card-sm">{titulo}</h1>
        <h2 className="text-texto-lista md:text-texto-card-xl text-cinza-300">
          {subtitulo}
        </h2>
      </div>
      <div>
        <ul className="flex flex-col gap-[20px] md:gap-[30px]">{children}</ul>
      </div>
    </div>
  );
}
