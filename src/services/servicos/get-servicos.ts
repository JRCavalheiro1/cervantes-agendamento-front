import { ServicoType } from "@/features/servico/types/servico";
import apiClient from "@/api/api-client";

export async function getServicos(empresaId: string): Promise<ServicoType[]> {
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
