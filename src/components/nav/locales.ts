import { routing } from "@/i18n/routing";
//import brazil from "../../../public/flags/brazil.svg";

export const flag = {
    "pt-BR": "flags/brazil.svg",
    "en-US": "flags/eua.svg",
};

export type FlagKey = keyof typeof flag;

export const locales = routing.locales.map((code) => ({
    code,
    flag: flag[code as FlagKey]
}))