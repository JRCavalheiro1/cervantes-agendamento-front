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
        className={`${interSans.variable} bg-branco-300 text-preto-400`}
      >
      <div className="flex min-h-screen">
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
