import { useState } from "react";

export function useModal<T = any>() {
  const [itemSelecionado, setItemSelecionado] = useState<T | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  function abreModal(item: T) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fechaModal() {
    setItemSelecionado(null);
    setModalAberto(false);
  }

  return {
    itemSelecionado,
    modalAberto,
    abreModal,
    fechaModal,
  };
}
