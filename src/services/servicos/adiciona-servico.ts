import apiClient from "@/api/api-client";
import { ServicoType } from "@/features/servico/types/servico";

export async function adicionaServico(data: ServicoType) {
  try {
    const response = await apiClient.post("/api/Servico", data);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao adicionar serviço:", error);
    throw new Error(error.response.data.message || "Erro ao adicionar serviço");
  }
}
