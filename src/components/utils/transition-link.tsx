"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(md: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, md));
}
export function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  async function handleTransicao(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const pageContent = document.querySelector("#page-content");
    pageContent?.classList.add("page-transition");

    await sleep(500);

    router.push(href);

    await sleep(500);

    pageContent?.classList.remove("page-transition");
  }

  return (
    <Link
      href={href}
      {...props}
      className={className}
      onClick={handleTransicao}
    >
      {children}
    </Link>
  );
}
