import Header from "@/components/layout/header";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NovoServico() {
  return (
    <div className="flex items-center gap-[10px]">
      <Header titulo="Novo Serviço">
        <Link href="/servicos">
          <ArrowLeft size={30} />
        </Link>
      </Header>
    </div>
  );
}
