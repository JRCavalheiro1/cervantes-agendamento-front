import { z } from "zod";

export const servicoSchema = z.object({
  nome: z.string().min(2, "O Nome é obrigatório"),
  preco: z.number().min(2, "O Valor"),
  duracao: z.number().min(2, "Você precisa informar a duração"),
  descricao: z.string().min(128, "Você precisa informar a descrição"),
  imagem: z.instanceof(File),
  profissionalId: z.string().uuid("ID do profissional inválido"),
});

export type ServicoFormValues = z.infer<typeof servicoSchema>;
