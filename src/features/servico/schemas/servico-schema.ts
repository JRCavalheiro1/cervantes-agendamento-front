import { z } from "zod";

export const servicoSchema = z.object({
  nome: z.string().min(2, "O Nome é obrigatório"),
  valor: z.number().min(2, "O Valor"),
  duracao: z.number().min(2, "Você precisa informar a duração"),
  descricao: z.string().min(128, "Você precisa informar a descrição"),
});

export type ServicoFormValues = z.infer<typeof servicoSchema>;
