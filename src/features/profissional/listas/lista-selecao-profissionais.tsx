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
import { ListaVazia } from "@/components/sections/listas/lista-vazia";
import ImageContainer from "@/components/ui/imagem/image-container";

interface ListaSelecaoProfissionaisProps {
  control: any;
  profissionais: ProfissionalProps[];
  className?: string;
}

export function ListaSelecaoProfissionais({
  control,
  profissionais,
  className,
}: ListaSelecaoProfissionaisProps) {
  return (
    <ListaContainer
      titulo="Profissionais que realizam este serviço"
      className={className}
    >
      {profissionais.length > 0 ? (
        profissionais.map((profissional) => (
          <FormField
            key={profissional.id}
            control={control}
            name="profissionais"
            render={({ field }) => (
              <FormItem>
                <label className="flex w-full cursor-pointer items-center justify-between p-[5px]">
                  <FormLabel className="text-texto-status-md md:text-texto-card-xl cursor-pointer font-normal">
                    <ImageContainer
                      src={profissional.fotoPerfil}
                      alt={profissional.nome}
                    />
                    {profissional.nome}
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      className="data-[state=checked]:bg-azul-500 data-[state=checked]:border-azul-500 h-[18px] w-[18px] cursor-pointer shadow-none md:h-[24px] md:w-[24px]"
                      checked={field.value?.includes(profissional.id)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), profissional.id]
                          : field.value?.filter(
                              (id: string) => id !== profissional.id,
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
          icone={false}
          descricao="Não há profissionais cadastrados no momento"
        />
      )}
    </ListaContainer>
  );
}
