import { cn } from "@/lib/utils";

type ListaContainerProps = {
  titulo?: string;
  subtitulo?: string;
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
      className={cn(
        "bg-branco-100 flex w-full flex-col gap-[20px] rounded-[20px] p-[20px] md:p-[30px]",
        className,
      )}
    >
      <div>
        <h1 className="text-texto-form md:text-titulo-card-2">{titulo}</h1>
        <h2 className="text-texto-lista md:text-texto-card-xl text-cinza-300">
          {subtitulo}
        </h2>
      </div>
      <div>
        <ul className="flex flex-col gap-[12px] md:gap-[20px]">{children}</ul>
      </div>
    </div>
  );
}
