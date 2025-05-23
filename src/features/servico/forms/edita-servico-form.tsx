import Image from "next/image";
import { ServicoType } from "@/features/servico/types/servico";
import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/inputs/input";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import { ShowStatus } from "@/components/ui/show-status";
import ButtonSave from "@/components/ui/buttons/button-save";
import ImageContainer from "@/components/ui/imagem/image-container";
import ImageFormView from "@/components/ui/imagem/image-form-view";
import { ButtonFileInput } from "@/components/ui/buttons/button-file-input";
import { useForm } from "react-hook-form";
import {
  ServicoFormInput,
  ServicoFormValues,
  servicoSchema,
} from "@/features/servico/schemas/servico-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputPreco } from "@/components/ui/inputs/input-preco";
import { profissionais } from "@/data/profissionais";
import { ListaSelecaoProfissionais } from "@/features/profissional/listas/lista-selecao-profissionais";
import ButtonCancel from "@/components/ui/buttons/button-cancel";
import { fileToBase64 } from "@/lib/utils/file-to-base";
import { adicionaServico } from "@/services/servicos/adiciona-servico";
import { editaServico } from "@/services/servicos/edita-servico";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ModalConcluido } from "@/components/ui/modais/modal-concluido";

interface EditaServicoFormProps {
  servico: ServicoType;
  onClose: () => void;
}
export function EditaServicoForm({ servico, onClose }: EditaServicoFormProps) {
  const { id, nome, imagem, preco, duracao, descricao } = servico;
  const [modalConcluido, setModalConcluido] = useState(false);

  const tBtn = useTranslations("Button");
  const t = useTranslations("ServiceForm");
  const tModal = useTranslations("Modal");

  const form = useForm<ServicoFormInput>({
    resolver: zodResolver(servicoSchema),
    defaultValues: {
      nome: nome,
      preco: String(preco),
      duracao: String(duracao),
      descricao: descricao,
      profissionais: [],
    },
  });

  async function onSubmit(data: ServicoFormValues) {
    try {
      const preco = parseFloat(data.preco);
      const duracao = parseInt(data.duracao, 10);
      let novaImagem = imagem;

      if (data.imagem instanceof File) {
        novaImagem = await fileToBase64(data.imagem);
      }

      const dadosServicoAtualizado: ServicoType = {
        id: id,
        nome: data.nome,
        preco: preco,
        duracao: duracao,
        descricao: data.descricao,
        imagem: novaImagem,
        empresaId: "4e139f96-df26-4f22-840f-89310c7af080",
      };

      const servicoAtualizado = await editaServico(dadosServicoAtualizado);
      onClose();
      console.log("Servico atualizado", servicoAtualizado);
    } catch (e) {
      console.error("Erro ao adicionar serviço:", e);
    }
  }
  const { control } = form;
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-[10px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-[20px]">
          <FormField
            control={form.control}
            name="imagem"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  {field.value ? (
                    <ImageContainer
                      src={URL.createObjectURL(field.value)}
                      alt="teste"
                      className="h-17 w-17 md:h-19 md:w-19"
                    />
                  ) : (
                    <ImageContainer
                      src={imagem}
                      alt={nome}
                      className="h-17 w-17 md:h-19 md:w-19"
                    />
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
                      {tBtn("btnAlterImage")}
                    </ButtonFileInput>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <h1 className="text-texto-card-xl md:text-titulo-card-sm">{nome}</h1>
        </div>
        <div className="bg-cinza-200 h-px w-full" />

        <div className="flex flex-col">
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
                  <Input {...field} type="text-cinza-500" />
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
                  <Input
                    {...field}
                    type="text"
                    className="placeholder:text-cinza-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ListaSelecaoProfissionais
            control={control}
            profissionais={profissionais}
            className="!p-0"
          />
        </div>

        <div className="flex justify-end gap-[10px]">
          <ButtonCancel onClick={onClose}>{tBtn("btnCancel")}</ButtonCancel>
          <ButtonSave className="w-[78px] md:w-[120px]" type="submit">
            {tBtn("btnSave")}
          </ButtonSave>
        </div>
      </form>

      {modalConcluido && (
        <ModalConcluido open={modalConcluido} onOpenChange={setModalConcluido}>
          {tModal("completedModalTitle")}
        </ModalConcluido>
      )}
    </Form>
  );
}
