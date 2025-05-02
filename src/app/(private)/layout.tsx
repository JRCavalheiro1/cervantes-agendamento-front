import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "@/components/layout/NavMenu";
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
        className={`${interSans.variable} flex items-center justify-between antialiased h-screen bg-branco-300 text-preto-400`}
      >
        <NavMenu/>
        <main className="w-full h-full">
            {children}
        </main>
      </body>
    </html>
  );
}
