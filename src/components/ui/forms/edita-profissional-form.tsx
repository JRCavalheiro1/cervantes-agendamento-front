import Image from "next/image";
import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-menu";
import { Input } from "@/components/ui/input";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import { ShowStatus } from "@/components/ui/show-status";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

type formValue = {
  name: string;
  email: string;
  phone: string;
  active: boolean;
};

export function EditaProfissionalForm() {
  const form = useForm<formValue>({
    defaultValues: {
      name: "Pedro Ricardo",
      email: "pedro.ricardo@gmail.com",
      phone: "(51) 99988-7766",
      active: true,
    },
  });

  return (
    <Form {...form}>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="border-azul-500 flex h-[75px] w-[75px] items-center justify-center rounded-full border-2 md:h-[110px] md:w-[110px]">
            <Image
              src="/fotosProfissional/profissional1.png"
              className="h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]"
              width={200}
              height={200}
              alt="Imagem-profissional"
            />
          </div>

          <div className="flex flex-col items-center">
            <ButtonAlter>Alterar Foto</ButtonAlter>
            <span className="text-texto-lista-sm text-cinza-200">
              JPG, PNG ou GIF, Máximo 1MB
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="boder-black flex flex-col items-start">
            <h1 className="text-texto-card-xl">Pedro Ricardo</h1>
            <h2 className="text-texto-status-md text-cinza-500">
              Ativo na Empresa
            </h2>
          </div>

          <FormField
            control={form.control}
            name="active"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center gap-1">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-azul-500 data-[state=unchecked]:bg-azul-200"
                  />
                </FormControl>
                <FormLabel className="text-texto-lista">
                  Profissional Ativo
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-texto-status-md">Nome</FormLabel>
              <FormControl>
                <Input
                  className="text-texto-status-md text-cinza-500 h-[42px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-texto-status-md">Email</FormLabel>
              <FormControl>
                <Input
                  className="text-texto-status-md text-cinza-500 h-[42px]"
                  type="email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-texto-status-md">Telefone</FormLabel>
              <FormControl>
                <Input
                  className="text-texto-status-md text-cinza-500 h-[42px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="text-texto-status-md flex flex-col gap-[10px]">
        <div className="flex flex-col justify-center">
          <span>Horários</span>
          <div className="text-cinza-500 flex items-center gap-[3px]">
            <span>09:00 às 18:00</span>
            <NotePencil size={20} />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span>Serviços</span>
          <div className="text-cinza-500 flex items-center gap-[3px]">
            <span>Corte Masculino, Barba, Sombr...</span>
            <NotePencil size={20} />
          </div>
        </div>

        <div className="flex w-fit flex-col">
          <span>Status</span>
          <ShowStatus status={"disponivel"} />
        </div>
      </div>
    </Form>
  );
}
