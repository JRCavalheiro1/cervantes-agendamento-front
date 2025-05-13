import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "@/components/nav/nav-menu";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "../../globals.css";

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Admin App",
  description: "Aplicação Admin para gerenciar empresa",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={interSans.variable}>
      <body className="bg-branco-300 flex w-full">
        <NextIntlClientProvider>
          <div className="flex w-full min-w-[402px] flex-col pr-[25px] pl-[25px] md:min-h-screen md:flex-row md:pl-0">
            <NavMenu />
            <div className="mb-[20px] min-w-[352px] border md:mx-auto md:w-full md:px-5">
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
