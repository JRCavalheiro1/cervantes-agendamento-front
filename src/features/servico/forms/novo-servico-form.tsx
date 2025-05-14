"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonSave from "@/components/ui/buttons/button-save";
import { Image } from "@phosphor-icons/react/dist/ssr";
import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import { Input } from "@/components/ui/input";
import {
  ServicoFormValues,
  servicoSchema,
} from "@/features/servico/schemas/servico-schema";
import { ListaSelecaoProfissionais } from "@/features/profissional/listas/lista-selecao-profissionais";
import { profissionais } from "@/data/profissionais";
import ButtonCancel from "@/components/ui/buttons/button-cancel";
import { useServico } from "@/features/servico/hooks/use-servico";

export function NovoServicoForm() {
  const { adicionaServico } = useServico();

  const form = useForm<ServicoFormValues>({
    resolver: zodResolver(servicoSchema),
    defaultValues: {
      nome: "",
      preco: undefined,
      duracao: undefined,
      descricao: "",
      imagem: undefined,
    },
  });

  function onSubmit(data: ServicoFormValues) {
    const servicoAdicionado = adicionaServico({
      nome: data.nome,
      preco: Number(data.preco),
      duracao: Number(data.duracao),
      descricao: data.descricao,
      imagem: data.imagem,
      profissionais: [],
    });
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-[20px]">
        <div className="bg-branco-100 flex flex-col gap-[20px] rounded-[20px] p-[30px]">
          <div>
            <h1 className="text-titulo-card-2 md:text-titulo-menu-md">
              Informações do serviço
            </h1>
            <h2 className="text-texto-lista md:text-texto-card-xl text-cinza-500">
              Registro do novo serviço
            </h2>
          </div>
          <div className="flex flex-col items-center gap-[12px] md:flex-row md:justify-start">
            <div className="border-azul-200 text-azul-200 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2">
              <Image size={30} />
            </div>
            <div className="flex flex-col gap-[5px]">
              <Input id="picture" type="file" placeholder="Adicionar Foto" />
              <span className="text-texto-lista-sm text-cinza-200">
                JPG, PGN ou GIF, máximo 1MB
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    Valor (R$)
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duracao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    Duracao (minutos)
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    Descrição
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <ListaSelecaoProfissionais
          control={form.control}
          profissionais={profissionais}
        />
        <div className="flex justify-end gap-[10px]">
          <ButtonCancel>Cancelar</ButtonCancel>
          <ButtonSave type="submit">Cadastrar Serviço</ButtonSave>
        </div>
      </form>
    </Form>
  );
}
