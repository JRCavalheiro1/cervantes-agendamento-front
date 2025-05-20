import { UsersFour } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface ListaVaziaProps {
  icone?: boolean;
  descricao: string;
  children?: React.ReactNode;
  className?: string;
}
export function ListaVazia({
  icone,
  descricao,
  children,
  className,
}: ListaVaziaProps) {
  return (
    <div
      className={cn(
        "flex h-100 flex-col items-center justify-center gap-[20px]",
        className,
      )}
    >
      {icone ? (
        <div className="bg-azul-200 flex h-[64px] w-[64px] items-center justify-center rounded-full md:h-[94px] md:w-[94px]">
          <UsersFour
            size={42}
            className="text-azul-400 md:h-[62px] md:w-[62px]"
          />
        </div>
      ) : null}
      <div className="text-texto-card-sm md:text-titulo-card-2 text-cinza-500 flex flex-col items-center text-center">
        <span>{descricao}</span>
        {children}
      </div>
    </div>
  );
}
