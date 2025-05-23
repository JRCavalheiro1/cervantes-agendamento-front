"use client";

import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { locales, flag } from "@/components/nav/locales";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SelecionaIdioma() {
  const t = useTranslations("SelectLanguage");
  const { locale } = useParams();

  const pathName = usePathname();
  const isDefaultLocale = locale === routing.defaultLocale;

  function getPathName(language: string) {
    const path = pathName.split("/" + locale).join("");
    console.log("/" + language + path);
    return "/" + language + path;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border-cinza-100 text-cinza-500 hover:bg-azul-50 flex w-fit cursor-pointer items-center gap-[5px] rounded-[8px] border-1 px-[5px] py-[3px] transition duration-200">
          <Image
            src={isDefaultLocale ? flag["pt-BR"] : flag["en-US"]}
            alt="flag"
            width={16}
            height={11}
          />
          <span>{isDefaultLocale ? t("portuguese") : t("english")}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>{t("selectALanguage")}</DropdownMenuLabel>
        {locales.map((localeItem) => {
          return (
            <DropdownMenuItem key={localeItem.code}>
              <Link
                className="flex w-full gap-[5px]"
                href={getPathName(localeItem.code)}
              >
                <Image
                  src={localeItem.flag}
                  alt="flag"
                  width={16}
                  height={11}
                />
                {localeItem.code === routing.defaultLocale
                  ? t("portuguese")
                  : t("english")}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
