"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import { ShowStatus } from "@/components/ui/show-status";

interface ModalProfissionalProps {
  profissional: {
    nome: string;
    fotoPerfil: string;
    horarios: string[];
    agendaAberta: boolean;
  };
  open: boolean;
  onClose: () => void;
}

export default function ModalProfissional({
  profissional,
  open,
  onClose,
}: ModalProfissionalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[320px] md:min-w-[640px]">
        <Form>
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle />
            </VisuallyHidden>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <div className="border-azul-500 flex h-[75px] w-[75px] items-center justify-center rounded-full border-2 md:h-[110px] md:w-[110px]">
                  <Image
                    src="/fotosProfissional/profissional1.png"
                    className="h-[65px] w-[65px] rounded-full md:h-[100px] md:w-[100px]"
                    width={200}
                    height={200}
                    alt="Imagem-profissional"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <ButtonAlter>Alterar Foto</ButtonAlter>
                  <span className="text-texto-lista-sm text-cinza-200">
                    JPG, PNG ou GIF, Máximo 1MB
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border border-black">
                <div className="boder-black flex flex-col items-start">
                  <h1 className="text-texto-card-xl">Pedro Ricardo</h1>
                  <h2 className="text-texto-status-md text-cinza-500">
                    Ativo na Empresa
                  </h2>
                </div>
                <div>
                  <Switch className="data-[state=checked]:bg-azul-500 data-[state=unchecked]:bg-azul-200" />
                  <Label className="text-texto-lista">Profissional Ativo</Label>
                </div>
              </div>
            </div>
          </DialogHeader>
          <div>
            <Label>Nome</Label>
            <Input />

            <Label>Email</Label>
            <Input />

            <Label>Telefone</Label>
            <Input />
          </div>

          <div>
            <div>
              <span>Horários</span>
              <NotePencil size={20} />
            </div>

            <div>
              <span>Serviços</span>
              <NotePencil size={20} />
            </div>

            <div>
              <span>Status</span>
              <ShowStatus status={"disponivel"} />
            </div>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
