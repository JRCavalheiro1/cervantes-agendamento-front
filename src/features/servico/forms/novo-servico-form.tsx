"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonSave from "@/components/ui/buttons/button-save";

import ImageContainer from "@/components/ui/imagem/image-container";
import ImageFormView from "@/components/ui/imagem/image-form-view";

import { Input } from "@/components/ui/inputs/input";
import {
  ServicoFormValues,
  ServicoFormInput,
  servicoSchema,
} from "@/features/servico/schemas/servico-schema";
import { ListaSelecaoProfissionais } from "@/features/profissional/listas/lista-selecao-profissionais";
import { profissionais } from "@/data/profissionais";
import { fileToBase64 } from "@/lib/utils/file-to-base";
import { ButtonFileInput } from "@/components/ui/buttons/button-file-input";
import { useEffect, useState } from "react";
import { InputPreco } from "@/components/ui/inputs/input-preco";
import { ModalConcluido } from "@/components/ui/modais/modal-concluido";
import { useRouter } from "next/navigation";
import { ModalAlerta } from "@/components/ui/modais/modal-alerta";
import { adicionaServico } from "@/services/servicos/adiciona-servico";
import { ServicoType } from "@/features/servico/types/servico";
import { useTranslations } from "next-intl";

export function NovoServicoForm() {
  const [modalAviso, setModalAviso] = useState(false);
  const router = useRouter();

  const t = useTranslations("ServiceForm");
  const tModal = useTranslations("Modal");
  const tBtn = useTranslations("Button");

  const form = useForm<ServicoFormInput>({
    resolver: zodResolver(servicoSchema),
    defaultValues: {
      nome: "",
      preco: "",
      duracao: "",
      descricao: "",
      profissionais: [],
    },
  });
  const { handleSubmit, reset, control } = form;

  function cancelarServico() {
    reset();
    router.back();
  }

  async function onSubmit(data: ServicoFormValues) {
    try {
      const preco = parseFloat(data.preco);
      const duracao = parseInt(data.duracao, 10);

      const imagem = await fileToBase64(data.imagem);

      const dadosNovoServico: ServicoType = {
        nome: data.nome,
        preco: preco,
        duracao: duracao,
        descricao: data.descricao,
        imagem,
        empresaId: "4e139f96-df26-4f22-840f-89310c7af080",
      };

      setModalAviso(true);
      const servicoAdicionadoResponse = await adicionaServico(dadosNovoServico);

      reset();
      console.log("Serviço adicionado com sucesso", servicoAdicionadoResponse);
    } catch (e) {
      console.error("Erro ao adicionar serviço:", e);
    }
  }

  useEffect(() => {
    if (modalAviso) {
      const timer = setTimeout(() => {
        setModalAviso(false);
        router.back();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [modalAviso, router]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="bg-branco-100 flex flex-col gap-[20px] rounded-[20px] p-[30px]">
          <div>
            <h1 className="text-titulo-card-2 md:text-titulo-menu-md">
              {t("title")}
            </h1>
            <h2 className="text-texto-lista md:text-texto-card-xl text-cinza-500">
              {t("subtitle")}
            </h2>
          </div>
          <FormField
            control={control}
            name="imagem"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col items-center gap-[12px] md:flex-row md:justify-start">
                  {field.value ? (
                    <ImageContainer
                      src={URL.createObjectURL(field.value)}
                      alt="teste"
                      className="h-17 w-17 md:h-19 md:w-19"
                    />
                  ) : (
                    <ImageFormView />
                  )}

                  <FormControl className="w-[200px] cursor-pointer">
                    <ButtonFileInput
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                        }
                      }}
                    >
                      {tBtn("btnAddImagem")}
                    </ButtonFileInput>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-[10px] md:grid md:grid-cols-2 md:gap-[10px]">
            <FormField
              control={control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    {t("name")}
                    <span>{}</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="preco"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    {t("price")}
                  </FormLabel>
                  <InputPreco value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="duracao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    {t("duration")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-texto-status-md md:text-texto-form font-normal">
                    {t("description")}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <ListaSelecaoProfissionais
          control={control}
          profissionais={profissionais}
        />
        <div className="flex justify-end gap-[10px]">
          <ModalAlerta
            onClick={() => cancelarServico()}
            title={tModal("alertModalTitle")}
          >
            {tModal("alertModalDescription")}
          </ModalAlerta>
          <ButtonSave type="submit">{tBtn("btnRegisterService")}</ButtonSave>
        </div>
      </form>

      {modalAviso && (
        <ModalConcluido open={modalAviso} onOpenChange={setModalAviso}>
          {tModal("completedModalTitle")}
        </ModalConcluido>
      )}
    </Form>
  );
}
