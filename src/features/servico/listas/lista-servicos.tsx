import ListaServicosUi from "@/features/servico/listas/lista-servico-ui";
import { getServicos } from "@/services/servicos/get-servicos";

export async function ListaServicos() {
  return <ListaServicosUi />;
}
