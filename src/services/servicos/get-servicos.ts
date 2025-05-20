import { ServicoType } from "@/features/servico/types/servico";

export async function getServicos(empresaId: string): Promise<ServicoType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Servico/empresa/${empresaId}`,
    {
      cache: "no-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar serviços");
  }

  return await response.json();
}
