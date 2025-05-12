import Link from "next/link";

interface ListaVaziaProps {
  icone?: React.ReactNode;
  descricao: string;
  linkClicar?: string;
  linkRedirecionamento: string;
}
export function ListaVazia({
  icone,
  descricao,
  linkClicar,
  linkRedirecionamento,
}: ListaVaziaProps) {
  return (
    <div>
      {icone}
      <div>
        <span>{descricao}</span>
        <Link href={linkRedirecionamento}>Cadastre um Agora</Link>
      </div>
    </div>
  );
}
