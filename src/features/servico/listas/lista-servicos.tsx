import { servicos } from "@/data/servicos";
import ListaServicosUi from "@/features/servico/listas/lista-servico-ui";

export default function ListaServicos() {
  return <ListaServicosUi servicos={servicos} />;
}
