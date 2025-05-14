type headerProps = {
  titulo: string;
  children?: React.ReactNode;
};

export default function Header({ titulo, children }: headerProps) {
  return (
    <header className="text-titulo-card-2 md:text-titulo-menu-md flex h-[40px] items-center border border-black font-bold md:h-[80px]">
      {children}
      <h1>{titulo}</h1>
    </header>
  );
}
