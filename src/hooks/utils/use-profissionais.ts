"use client";

import { useState } from "react";
import { profissionais as initial } from "@/data/profissionais";
import { ProfissionalProps } from "@/data/profissionais";

export function useProfissionais() {
  const [profissionais, setProfissionais] =
    useState<ProfissionalProps[]>(initial);

  function atualizaProfissional(dadosAtualizados: ProfissionalProps) {
    setProfissionais((prevProfissionais) =>
      prevProfissionais.map((profissional) =>
        profissional.id === dadosAtualizados.id
          ? { ...prevProfissionais, ...dadosAtualizados }
          : profissional,
      ),
    );
  }
  return { profissionais, atualizaProfissional };
}
