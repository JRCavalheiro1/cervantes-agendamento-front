import Header from "@/components/layout/header";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NovoProfissional() {
  return (
    <div className="flex items-center gap-[10px]">
      <Header titulo="Novo Profissional">
        <Link href="/profissionais">
          <ArrowLeft size={30} />
        </Link>
      </Header>
    </div>
  );
}
