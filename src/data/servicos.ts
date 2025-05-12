export interface ServicosProps {
  id?: number;
  nome: string;
  descricao?: string;
  duracao?: number;
  preco?: number;
  imagem: string;
}
export const servicos = [
  {
    id: 1,
    nome: "Corte Masculino",
    descricao: "Corte de cabelo masculino",
    duracao: 40,
    preco: 50,
    imagem: "/fotos-servicos/cortemasc.png",
  },
  {
    id: 2,
    nome: "Corte Feminino",
    descricao: "Corte de cabelo feminino",
    duracao: 50,
    preco: 60,
    imagem: "/fotos-servicos/cortefem.png",
  },
  {
    id: 3,
    nome: "Sombrancelha",
    descricao: "Sombrancelha desenhada",
    duracao: 20,
    preco: 20,
    imagem: "/fotos-servicos/sombrancelha.png",
  },
  {
    id: 4,
    nome: "Barba",
    descricao: "Barba feita e desenhada",
    duracao: 40,
    preco: 50,
    imagem: "/fotos-servicos/barba.png",
  },
];
