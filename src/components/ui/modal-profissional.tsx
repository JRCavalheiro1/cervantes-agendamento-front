"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ButtonAlter } from "@/components/ui/buttons/button-alter";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import { NotePencil } from "@phosphor-icons/react/dist/ssr";
import { ShowStatus } from "@/components/ui/show-status";
import { EditaProfissionalForm } from "@/components/ui/forms/edita-profissional-form";

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
        <VisuallyHidden>
          <DialogTitle />
        </VisuallyHidden>
        <EditaProfissionalForm />
      </DialogContent>
    </Dialog>
  );
}
