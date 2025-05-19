import Image from "next/image";
import { ServicoType } from "@/features/servico/types/servico";

interface EditaServicoFormProps {
  servico: ServicoType;
}
export function EditaServicoForm({ servico }: EditaServicoFormProps) {
  const { nome, imagem } = servico;

  return (
    <div>
      <Image src={imagem} alt={nome} width={200} height={200} />
      <h1>{nome}</h1>
    </div>
  );
}
