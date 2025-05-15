import { z } from "zod";

export const servicoSchema = z.object({
  nome: z.string().min(2, "O Nome deve ter pelo menos 2 caracteres"),
  preco: z.string(),
  duracao: z.string(),
  descricao: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),
  imagem: z
    .instanceof(File, { message: "A Imagem é obrigatória" })
    .refine((file) => file.size < 1024 * 1024, "Tamanho máximo de 1MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      "Apenas JPG, PNG ou GIF",
    ),
  profissionais: z
    .array(z.string().uuid().min(1, "Seleciona um profissional"))
    .optional(),
});

export type ServicoFormInput = z.input<typeof servicoSchema>;
export type ServicoFormValues = z.infer<typeof servicoSchema>;
