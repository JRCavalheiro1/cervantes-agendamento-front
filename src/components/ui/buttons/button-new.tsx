"use client";

import { Plus } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

interface ButtonNewProps {
  content?: string;
  link: string;
}
export function ButtonNew({ content, link }: ButtonNewProps) {
  const router = useRouter();
  return (
    <div
      className="bg-azul-500 text-branco-100 flex h-[40px] cursor-pointer items-center rounded-[6px] p-[10px] hover:brightness-90 md:h-[46px]"
      onClick={() => router.push(`${link}`)}
    >
      <Plus size={20} />
      <span className="md:text-texto-form hidden whitespace-nowrap md:block">
        {content}
      </span>
    </div>
  );
}
