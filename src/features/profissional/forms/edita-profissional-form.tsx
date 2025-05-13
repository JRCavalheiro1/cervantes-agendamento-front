"use client";

import Image from "next/image";
import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import { Switch } from "@/components/ui/switch";
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
import { ProfissionalProps } from "@/data/profissionais";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  profissionalSchema,
  ProfissionalFormValues,
} from "@/features/profissional/schemas/profissional-schema";
import { useProfissionais } from "@/hooks/utils/use-profissionais";
import ButtonSave from "@/components/ui/buttons/button-save";

interface EditaProfissionalFormProps {
  profissional: ProfissionalProps;
}

export function EditaProfissionalForm({
  profissional: {
    id,
    fotoPerfil,
    nome,
    email,
    telefone,
    ativo,
    horarios,
    servicos,
    agendaAberta,
  },
}: EditaProfissionalFormProps) {
  const { atualizaProfissional } = useProfissionais();

  const form = useForm<ProfissionalFormValues>({
    resolver: zodResolver(profissionalSchema),
    defaultValues: {
      nome: nome,
      email: email,
      telefone: telefone,
      ativo: ativo,
    },
  });

  function onSubmit(data: ProfissionalFormValues) {
    atualizaProfissional({
      id,
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      ativo: data.ativo,
      fotoPerfil,
      horarios,
      servicos,
      agendaAberta,
    });
  }
  const translationEditaProf = useTranslations("EditProfessionalForm");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="tex flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="border-azul-500 flex h-[75px] w-[75px] items-center justify-center rounded-full border-2 md:h-[110px] md:w-[110px]">
              <Image
                src={fotoPerfil}
                className="h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]"
                width={200}
                height={200}
                alt="Imagem-profissional"
              />
            </div>

            <div className="flex flex-col items-center">
              <ButtonAlter>{translationEditaProf("buttonAlter")}</ButtonAlter>
              <span className="text-texto-lista-sm text-cinza-200 md:text-texto-lista">
                {translationEditaProf("sizePhoto")}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="boder-black flex flex-col items-start">
              <h1 className="text-texto-card-xl md:text-titulo-card-sm">
                {nome}
              </h1>
              <h2 className="text-texto-status-md md:text-titulo-card-2 text-cinza-500">
                {ativo
                  ? translationEditaProf("activeInTheCompany")
                  : translationEditaProf("inActiveInTheCompany")}
              </h2>
            </div>

            <FormField
              control={form.control}
              name="ativo"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-1">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-azul-500 data-[state=unchecked]:bg-azul-200"
                    />
                  </FormControl>
                  <FormLabel className="text-texto-lista md:text-texto-form font-normal">
                    {translationEditaProf("professionalActive")}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-cinza-200 h-px w-full" />
        <div className="flex flex-col gap-[10px]">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                  {translationEditaProf("nameLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-cinza-500 placeholder:text-texto-lista h-[42px]"
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
                <FormLabel className="text-texto-status-md md: md:text-texto-form font-normal">
                  {translationEditaProf("emailLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-texto-lista text-cinza-500 h-[42px]"
                    type="email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                  {translationEditaProf("phoneLabel")}
                </FormLabel>
                <FormControl>
                  <Input className="t text-cinza-500 h-[42px]" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="text-texto-status-md md:text-texto-form flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex flex-col justify-center">
            <span>{translationEditaProf("timeSlots")}</span>
            <div className="text-cinza-500 flex items-center gap-[3px]">
              <span>{horarios.join(" às ")}</span>
              <NotePencil size={20} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span>{translationEditaProf("services")}</span>
            <div className="text-cinza-500 flex items-center gap-[3px]">
              <span>{servicos?.join(", ")}</span>
              <NotePencil size={20} />
            </div>
          </div>

          <div className="flex w-fit flex-col">
            <span>Status</span>
            <ShowStatus status={agendaAberta} />
          </div>
        </div>
        <ButtonSave type="submit">Salvar</ButtonSave>
      </form>
    </Form>
  );
}
