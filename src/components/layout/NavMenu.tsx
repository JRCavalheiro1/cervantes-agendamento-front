"use client"

import Link from 'next/link';
import { House, Toolbox, UsersFour, Gear, List } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';


export default function NavMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItens = [
        {
            id: 1,
            icone: <House size={24}/>,
            titulo: "Página Inicial",
            link: '/'
        },
        {
            id: 2,
            icone: <Toolbox size={24}/>,
            titulo: "Serviços",
            link: '/servicos',
        },
        {
            id: 3,
            icone: <UsersFour size={24}/>,
            titulo: "Profissionais",
            link: '/profissionais'
        },
        {
            id: 4,
            icone: <Gear size={24}/>,
            titulo: "Configurações",
            link: '/configuracoes'
        },
    ]

    return (
        <div>
            <List
                size={40} weight="thin"
                className={`${isMenuOpen ? 'hidden' : 'block'} cursor-pointer md:hidden`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-[270px] min-h-screen bg-branco-100 p-[16px]`}>
            <div className="h-[80px]">
                <h1 className="text-[1.75rem] font-bold">BarberOne</h1>
            </div>

            <div>
                <ul className="flex flex-col gap-[1.875rem] text-cinza-500 text-[1.125rem]">
                    {menuItens.map((item) => {
                        return (
                            <li key={item.id} className="hover:text-azul-400 transition duration-0.3">
                                <Link href={`${item.link}`} className="flex gap-[0.313rem]">
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