import { ServicoType } from "@/features/servico/types/servico";

export async function getServicos(): Promise<ServicoType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Servico/empresa/baf8872c-b7e3-4181-b3d5-dd7085d655e9`,
    {
      cache: "no-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar serviços");
  }

  return await response.json();
}
