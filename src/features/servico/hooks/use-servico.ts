import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ServicoFormInput,
  servicoSchema,
  ServicoFormValues,
} from "@/features/servico/schemas/servico-schema";
import { fileToBase64 } from "@/lib/utils/file-to-base";
import { useCallback } from "react";

type ServicoAPIType = Omit<ServicoFormInput, "preco" | "duracao" | "imagem"> & {
  preco: number;
  duracao: number;
  imagem: string;
  empresaId: string;
} & Record<string, any>;
