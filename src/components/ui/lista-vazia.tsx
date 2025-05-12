interface ListaVaziaProps {
  icone?: React.ReactNode;
  descricao: string;
  children?: React.ReactNode;
}
export function ListaVazia({ icone, descricao, children }: ListaVaziaProps) {
  return (
    <div className="flex h-100 flex-col items-center justify-center gap-[20px]">
      {icone ? (
        <div className="bg-azul-200 flex h-[64px] w-[64px] items-center justify-center rounded-full md:h-[94px] md:w-[94px]">
          {icone}
        </div>
      ) : null}
      <div className="text-texto-card-sm md:text-titulo-card-2 text-cinza-500 flex flex-col items-center text-center">
        <span>{descricao}</span>
        {children}
      </div>
    </div>
  );
}
