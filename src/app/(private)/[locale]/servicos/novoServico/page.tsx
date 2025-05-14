import Header from "@/components/layout/header";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { NovoServicoForm } from "@/features/servico/forms/novo-servico-form";

export default function NovoServico() {
  return (
    <div className="flex flex-col justify-center gap-[10px]">
      <Header titulo="Novo Serviço">
        <Link href="/servicos">
          <ArrowLeft size={30} />
        </Link>
      </Header>

      <NovoServicoForm />
    </div>
  );
}
