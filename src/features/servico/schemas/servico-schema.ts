import { z } from "zod";

export const servicoSchema = z.object({
  nome: z.string().min(2, "O Nome deve ter pelo menos 2 caracteres"),
  preco: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "O preço deve ser um número positivo",
    }),
  duracao: z
    .string()
    .refine((val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) > 0, {
      message: "A duração deve ser um número positivo",
    }),
  descricao: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),
  imagem: z
    .instanceof(File, { message: "A Imagem é obrigatória" })
    .refine((file) => file.size < 10 * 1024 * 1024, "Tamanho máximo de 1MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      "Apenas JPG, PNG ou GIF",
    ),
  profissionais: z.array(z.string().uuid()).optional(),
});

export type ServicoFormInput = {
  nome: string;
  preco: string;
  duracao: string;
  descricao: string;
  imagem: File;
  profissionais?: string[];
};

export type ServicoFormValues = z.infer<typeof servicoSchema>;
