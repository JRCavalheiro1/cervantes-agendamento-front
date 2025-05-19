import ListaProfissionaisUI from "./lista-profissionais-ui";
import { profissionais } from "@/data/profissionais";

export default function ListaProfissionais() {
  return <ListaProfissionaisUI profissionais={profissionais} />;
}
