import { z } from "zod";

export const profissionalSchema = z.object({
  nome: z.string().min(2, "O Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(8, "Telefone inválido"),
  ativo: z.boolean(),
});

export type ProfissionalFormValues = z.infer<typeof profissionalSchema>;
