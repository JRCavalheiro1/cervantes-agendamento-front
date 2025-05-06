"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import {locales, flag} from "@/components/nav/locales";
import {routing} from "@/i18n/routing";
import Link from "next/link";
import Image from "next/image";
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
    const isDefaultLocale = locale === routing.defaultLocale;

     function getPathName (language: string) {
        const path = pathName.split("/" + locale).join("");
        console.log("/" + language + path);
        return "/" + language + path;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="border-cinza-100 border-1 flex items-center gap-[5px] w-fit rounded-[8px] cursor-pointer px-[5px] py-[3px] text-cinza-500 hover:bg-azul-50 transition duration-200">
                    <Image src={isDefaultLocale ? flag["pt-BR"] : flag["en-US"]} alt="flag" width={16} height={11}/>
                    <span>{isDefaultLocale ? translationSelectLanguage("portuguese") : translationSelectLanguage("english")}</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" >
                <DropdownMenuLabel>{translationSelectLanguage("selectALanguage")}</DropdownMenuLabel>
                {locales.map((localeItem) => {
                    return (
                        <DropdownMenuItem key={localeItem.code} >
                            <Link className="w-full flex gap-[5px]" href={getPathName(localeItem.code)}>
                                <Image src={localeItem.flag} alt="flag" width={16} height={11}/>
                                {localeItem.code === routing.defaultLocale ? translationSelectLanguage("portuguese") : translationSelectLanguage("english") }
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}