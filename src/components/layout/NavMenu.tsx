'use client';

import Link from "next/link";
import { House, Toolbox, UsersFour, Gear, List } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Backdrop } from "@/components/backdrop/Backdrop";


export default function NavMenu() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const menuItens = [
        {
            id: 1,
            icone: <House size={24} weight="fill"/>,
            titulo: "Página Inicial",
            link: '/'
        },
        {
            id: 2,
            icone: <Toolbox size={24} weight="fill"/>,
            titulo: "Serviços",
            link: 'servicos',
        },
        {
            id: 3,
            icone: <UsersFour size={24} weight="fill"/>,
            titulo: "Profissionais",
            link: 'profissionais'
        },
        {
            id: 4,
            icone: <Gear size={24} weight="fill"/>,
            titulo: "Configurações",
            link: 'configuracoes'
        },
    ]

    return (
        <div>
            <div className="h-[80px] flex items-center md:hidden ">
                <List
                    size={40} weight="thin"
                    className={`${!isModalOpen ? 'block' : 'hidden'} block cursor-pointer`}
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
            {isModalOpen && <Backdrop onClick={()=> setIsModalOpen(false)}/>}
            <div className={`top-0 left-0 w-[270px] min-h-screen bg-branco-100 pl-5 pr-5 z-50 transform transition-transform duration-300 erase-in-out
            fixed md:static 
            ${isModalOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}>
                <div className="pb-[2rem] pt-[2rem]">
                    <h1 className="text-titulo-menu font-bold">BarberOne</h1>
                </div>

                <div>
                    <ul className="flex flex-col gap-[1.875rem] text-cinza-500 text-texto-card">
                        {menuItens.map((item) => {
                            return (
                                <li key={item.id} className="hover:text-azul-400 transition duration-0.3">
                                    <Link href={`/${item.link}`} className="flex gap-1.5" onClick={() => setIsModalOpen(false)}>
                                        {item.icone}
                                        {item.titulo}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}