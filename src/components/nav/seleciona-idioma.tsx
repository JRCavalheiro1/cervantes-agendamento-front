"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import {locales} from "@/components/nav/locales";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"



export default function SelecionaIdioma() {
    const translationSelectLanguage = useTranslations("SelectLanguage");
    const { locale } = useParams();

    const pathName = usePathname();
     console.log(getPathName("pt-BR"));

    function getPathName (locale: string) {
        const path = pathName.split("/");
        const newPath = path.slice(2).join("/");

        return "/" + locale + "/" + newPath;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="border-cinza-100 border-1 flex gap-[5px] w-fit rounded-[8px] cursor-pointer px-[5px] py-[3px] text-cinza-500 hover:bg-azul-50  transition duration-200">
                    <span>🇧🇷</span>
                    <span>{locale}</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" >
                <DropdownMenuLabel>{translationSelectLanguage("selectALanguage")}</DropdownMenuLabel>
                {locales.map((locale) => {
                    return (
                        <DropdownMenuItem key={locale.code} >
                            <Link className="w-full" href={getPathName(locale.code)}>{locale.code}</Link>
                        </DropdownMenuItem>
                    )
                })}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}