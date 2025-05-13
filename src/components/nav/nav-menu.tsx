"use client";

import {
  House,
  CalendarBlank,
  Toolbox,
  UsersFour,
  Gear,
  List,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { Backdrop } from "@/components/backdrop/backdrop";
import { useTranslations } from "next-intl";
import SelecionaIdioma from "@/components/nav/seleciona-idioma";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavMenu() {
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const translationNav = useTranslations("NavMenu");

  const menuItens = [
    {
      id: 1,
      icone: <House size={24} weight="fill" />,
      titulo: `${translationNav("homePageLink")}`,
      link: "/",
    },
    {
      id: 2,
      icone: <Toolbox size={24} weight="fill" />,
      titulo: `${translationNav("serviceLink")}`,
      link: "servicos",
    },
    {
      id: 3,
      icone: <UsersFour size={24} weight="fill" />,
      titulo: `${translationNav("professionalLink")}`,
      link: "profissionais",
    },
    {
      id: 4,
      icone: <CalendarBlank size={24} weight="fill" />,
      titulo: `${translationNav("appointmentsLink")}`,
      link: "agendamentos",
    },
    {
      id: 5,
      icone: <Gear size={24} weight="fill" />,
      titulo: `${translationNav("settingsLink")}`,
      link: "configuracoes",
    },
  ];
  const larguraTelaMedia = 768;

  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < larguraTelaMedia) {
      setModalAberto(false);
    }
  }, [pathname]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-[80px] items-center md:hidden">
        <List
          size={40}
          weight="thin"
          className={`${!modalAberto ? "block" : "hidden"} block cursor-pointer`}
          onClick={() => setModalAberto(true)}
        />
      </div>

      {modalAberto && <Backdrop onClick={() => setModalAberto(false)} />}

      <div
        className={`bg-branco-100 erase-in-out fixed top-0 left-0 z-50 flex h-full w-[200px] transform flex-col p-5 transition-transform duration-300 md:static md:flex md:h-full md:flex-col ${modalAberto ? "translate-x-0" : "-translate-x-full"} md:block md:w-[300px] md:translate-x-0`}
      >
        <div className="flex h-[70px]">
          <h1 className="text-titulo-card-2 md:text-titulo-menu-md font-bold">
            BarberOne
          </h1>
        </div>

        <div className="flex h-full flex-col justify-between">
          <ul className="text-cinza-500 text-texto-status-md md:text-texto-card-xl flex flex-col gap-[1.875rem]">
            {menuItens.map((item) => {
              return (
                <li
                  key={item.id}
                  className="hover:text-azul-400 duration-0.3 w-fit transition"
                >
                  <Link href={`/${item.link}`} className="flex gap-1.5">
                    {item.icone}
                    {item.titulo}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-[10px]">
            <SelecionaIdioma />
            <li className="text-texto-card-xl text-cinza-300 hover:text-vermelho-100 flex w-fit cursor-pointer items-center">
              {translationNav("logoutLink")} <SignOut width={24} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
