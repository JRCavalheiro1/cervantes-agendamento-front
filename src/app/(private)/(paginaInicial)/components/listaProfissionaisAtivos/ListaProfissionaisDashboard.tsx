import CardProfissional from "@/components/sections/CardProfissional";

export default function ListaProfissionaisDashboard() {

    return (
        <div className="min-w-[352px] xl:w-[60%] h-[200px] bg-branco-100 rounded-[20px] p-[20px] ">
            <div>
                <h1 className="text-titulo-card-2">Profissionais Ativos</h1>
                <h2 className="text-texto-lista text-cinza-300">Profissionais Disponíveis Hoje</h2>
            </div>
            <div className="border-black border-1 h-[100px]">
                <CardProfissional/>
            </div>
        </div>
    )
}