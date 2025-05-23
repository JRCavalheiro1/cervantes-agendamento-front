import ListaProfissionaisUI from "./lista-profissionais-ui";
import { profissionais } from "@/data/profissionais";

interface ListaProfissionaisProps {
  variant?: "home";
}
export default function ListaProfissionais({
  variant,
}: ListaProfissionaisProps) {
  return (
    <ListaProfissionaisUI variant={variant} profissionais={profissionais} />
  );
}
