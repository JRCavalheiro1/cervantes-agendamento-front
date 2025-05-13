type headerProps = {
  titulo: string;
  children?: React.ReactNode;
};

export default function Header({ titulo, children }: headerProps) {
  return (
    <header className="text-titulo-card-2 md:text-titulo-menu-md flex h-[80px] items-center font-bold">
      {children}
      <h1>{titulo}</h1>
    </header>
  );
}
