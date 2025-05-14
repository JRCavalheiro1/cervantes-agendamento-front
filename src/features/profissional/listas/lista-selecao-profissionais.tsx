"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ProfissionalProps } from "@/data/profissionais";
import ListaContainer from "@/components/sections/listas/lista-container";
import Image from "next/image";
import { ListaVazia } from "@/components/ui/lista-vazia";

interface ListaSelecaoProfissionaisProps {
  control: any;
  profissionais: ProfissionalProps[];
}

export function ListaSelecaoProfissionais({
  control,
  profissionais,
}: ListaSelecaoProfissionaisProps) {
  return (
    <ListaContainer
      titulo="Profissionais"
      subtitulo="Selecione os profissionais que realizam este serviço"
    >
      {profissionais.length > 0 ? (
        profissionais.map((profissional) => (
          <FormField
            key={profissional.id}
            control={control}
            name="profissional"
            render={({ field }) => (
              <FormItem>
                <label className="flex w-full cursor-pointer items-center justify-between">
                  <FormLabel className="cursor-pointer">
                    <Image
                      src={profissional.fotoPerfil}
                      alt={profissional.nome}
                      width={200}
                      height={200}
                      className="h-[40px] w-[40px]"
                    />
                    {profissional.nome}
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      className="cursor-pointer"
                      checked={field.value?.includes(profissional.id)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), profissional.id]
                          : field.value?.filter(
                              (id: number) => id !== profissional.id,
                            );
                        field.onChange(newValue);
                      }}
                    />
                  </FormControl>
                </label>
              </FormItem>
            )}
          />
        ))
      ) : (
        <ListaVazia
          icone={true}
          descricao="Não há profissionais cadastrados no momento"
        />
      )}
    </ListaContainer>
  );
}
