import { ServicoType } from "@/features/servico/types/servico";

export async function getServicos(): Promise<ServicoType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Servico/empresa/4e139f96-df26-4f22-840f-89310c7af080`,
    {
      cache: "no-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar serviços");
  }

  return await response.json();
}
