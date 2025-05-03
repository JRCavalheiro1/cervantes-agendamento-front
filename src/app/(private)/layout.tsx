import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "@/components/layout/NavMenu";
import ContainerMain from "@/components/layout/Container";

import "../globals.css";



const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin App",
  description: "Aplicação Admin para gerenciar empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${interSans.variable} w-full flex bg-branco-300 `}
      >
      <div className=" border-black border-1 min-w-[402px] w-full min-h-screen flex flex-col pl-[25px] pr-[25px] md:flex-row md:pl-0">
        <NavMenu/>
        <div className="flex-1">
            <ContainerMain>
                {children}
            </ContainerMain>
        </div>
      </div>
      </body>
    </html>
  );
}
