import { ServicoType } from "@/features/servico/types/servico";

export async function getServicos(): Promise<ServicoType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Servico/empresa/d9545b57-e22a-4a78-9dfe-12c73217e9b3`,
    {
      cache: "no-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar serviços");
  }

  return await response.json();
}
