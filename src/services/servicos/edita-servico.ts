import apiClient from "@/api/api-client";
import { ServicoType } from "@/features/servico/types/servico";

export async function editaServico(data: ServicoType) {
  try {
    const response = await apiClient.put(
      `/api/Servico/atualizar/${data.id}`,
      data,
    );
    return response.data;
  } catch (error: any) {
    console.error("Erro ao editar serviço:", error);
    throw new Error(error.response?.data?.message || "Erro ao editar serviço");
  }
}
