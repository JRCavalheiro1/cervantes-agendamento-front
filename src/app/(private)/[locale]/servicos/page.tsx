import Header from "@/components/layout/header";
import { useTranslations } from "next-intl";
import ListaServicos from "@/features/servico/listas/lista-servicos";

export default function Servicos() {
  const serviceTranslation = useTranslations("Services");

  return (
    <div>
      <Header titulo={serviceTranslation("title")} />
      <ListaServicos />
    </div>
  );
}
