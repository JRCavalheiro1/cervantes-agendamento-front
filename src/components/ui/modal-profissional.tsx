"use client";

import {Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import Image from "next/image";
import {Switch} from "@/components/ui/switch";
import {Label} from "@radix-ui/react-menu";
import { VisuallyHidden} from "@radix-ui/react-visually-hidden";
import { Input } from "@/components/ui/input";
import {NotePencil} from "@phosphor-icons/react/dist/ssr";
import {ShowStatus} from "@/components/ui/show-status";

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

export default function ModalProfissional({profissional, open, onClose}: ModalProfissionalProps) {

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="min-w-[320px] md:min-w-[640px]">
                <Form>
                    <DialogHeader>
                        <VisuallyHidden>
                            <DialogTitle/>
                        </VisuallyHidden>
                        <div className="">
                            <div className="flex border border-black">
                                <Image src="/" width={20} height={20} alt="Imagem-profissional"/>

                                <div className="flex flex-col w-fit border border-black">
                                    <Button className="cursor-pointer" type="button">Alterar Foto</Button>
                                    <span>JPG, PNG ou GIF, Máximo 1MB</span>
                                </div>

                            </div>

                            <div>
                                <h1>Pedro Ricardo</h1>
                                <h2>Ativo na Empresa</h2>
                            </div>
                            <div>
                                <Switch />
                                <Label>Profissional Ativo</Label>
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
                            <NotePencil size={20}/>
                        </div>

                        <div>
                            <span>Serviços</span>
                            <NotePencil size={20}/>
                        </div>

                        <div>
                            <span>Status</span>
                            <ShowStatus status={'disponivel'}/>
                        </div>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    )
}