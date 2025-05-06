"use client";

import Link from "next/link";
import { House, CalendarBlank, Toolbox, UsersFour, Gear, List, SignOut } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Backdrop } from "@/components/backdrop/Backdrop";
import { useTranslations } from "next-intl";
import DropdownMenuIdioma from "@/components/layout/dropdown-menu-idioma";

export default function NavMenu() {
    const [modalAberto, setModalAberto] = useState<boolean>(false);
    const translationNav = useTranslations("NavMenu");

    const menuItens = [
        {
            id: 1,
            icone: <House size={24} weight="fill"/>,
            titulo: `${translationNav("homePageLink")}`,
            link: "/"
        },
        {
            id: 2,
            icone: <Toolbox size={24} weight="fill"/>,
            titulo: `${translationNav("serviceLink")}`,
            link: "servicos",
        },
        {
            id: 3,
            icone: <UsersFour size={24} weight="fill"/>,
            titulo: `${translationNav("professionalLink")}`,
            link: "profissionais"
        },
        {
            id: 4,
            icone: <CalendarBlank size={24} weight="fill"/>,
            titulo: `${translationNav("appointmentsLink")}`,
            link: "agendamentos",
        },
        {
            id: 5,
            icone: <Gear size={24} weight="fill"/>,
            titulo: `${translationNav("settingsLink")}`,
            link: "configuracoes"
        },
    ]

    const larguraTelaMedia = 768;

    function handleLinkClicado() {
        if(window.innerWidth < larguraTelaMedia) {
            setModalAberto(false);
            console.log(modalAberto);
        };
    };

    return (
        <div className="flex flex-col h-full">
            <div className="h-[80px] flex items-center md:hidden">
                <List
                    size={40} weight="thin"
                    className={`${!modalAberto? 'block' : 'hidden'} block cursor-pointer`}
                    onClick={() => setModalAberto(true)}
                />
            </div>

            {modalAberto && <Backdrop onClick={()=> setModalAberto(false)}/>}

            <div className={`top-0 left-0 flex flex-col w-[200px] h-full bg-branco-100 p-5 z-50 transform transition-transform duration-300 erase-in-out
            fixed md:static md:h-full md:flex md:flex-col
            ${modalAberto ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block md:w-[300px]`}>
                <div className="h-[70px] border-black border-1 flex ">
                    <h1 className="text-titulo-card-2 font-bold md:text-titulo-menu-md">BarberOne</h1>
                </div>

                <div className="flex flex-col h-full justify-between">
                    <ul className="flex flex-col gap-[1.875rem] text-cinza-500 text-texto-status-md md:text-texto-card-xl">
                        {menuItens.map((item) => {
                            return (
                                <li key={item.id} className="hover:text-azul-400 transition duration-0.3 w-fit">
                                    <Link href={`/${item.link}`} className="flex gap-1.5" onClick={()=> handleLinkClicado()}>
                                        {item.icone}
                                        {item.titulo}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="flex flex-col gap-[10px]">
                        <DropdownMenuIdioma/>
                        <li className="flex items-center w-fit cursor-pointer text-texto-card-xl text-cinza-300 hover:text-vermelho-100 ">{translationNav("logoutLink")} <SignOut width={24}/></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}