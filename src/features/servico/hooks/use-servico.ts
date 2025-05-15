"use client";

import { useState } from "react";
import { ServicoType } from "@/features/servico/types/servico";

export function useServico() {
  const [servicos, setServicos] = useState<ServicoType[]>([]);

  const adicionaServico = (novoServico: Omit<ServicoType, "id">) => {
    const novoServicoComId = {
      ...novoServico,
      id: Math.random().toString(36).substring(2, 9),
    };

    setServicos((prevServicos) => [...prevServicos, novoServicoComId]);
    return novoServicoComId;
  };

  return { servicos, adicionaServico };
}
