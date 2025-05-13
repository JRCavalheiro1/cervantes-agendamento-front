import { Button } from "@/components/ui/buttons/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function CaixaPesquisa() {
  return (
    <form className="flex w-full">
      <Input
        className="bg-branco-100 placeholder:text-cinza-500 placeholder:text-texto-status-md md:placeholder:text-texto-form h-[42px] rounded-tr-none rounded-br-none border-none shadow-none outline-none focus:outline-none md:h-[46px]"
        name="nome"
        placeholder="Pesquisar Profissional"
      />
      <Button
        type="button"
        variant="ghost"
        className="bg-azul-200 text-azul-400 h-[42px] cursor-pointer rounded-tl-none rounded-bl-none md:h-[46px] md:w-[55px]"
      >
        <MagnifyingGlass />
      </Button>
    </form>
  );
}
