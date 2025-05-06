"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"


export default function SelecionaIdioma() {
    const translationSelectLanguage = useTranslations('SelectLanguage');
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="border-cinza-100 border-1 flex gap-[5px] w-fit rounded-[8px] cursor-pointer px-[5px] py-[3px] text-cinza-500 hover:bg-azul-50  transition duration-200">
                    <span>🇧🇷</span>
                    <span>português</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" >
                <DropdownMenuLabel>{translationSelectLanguage('selectALanguage')}</DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer">{translationSelectLanguage('portuguese')}</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">{translationSelectLanguage('english')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}