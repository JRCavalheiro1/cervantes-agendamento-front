import CardProfissional from "@/components/sections/CardProfissional";
import {profissionais} from "@/data/profissionais";

export default function ListaProfissionaisDashboard() {

    return (
        <div className="flex flex-col min-w-[352px] xl:w-[60%] gap-[20px] bg-branco-100 rounded-[20px] p-[20px]
            md:p-[30px]
         ">
            <div>
                <h1 className="text-titulo-card-2">Profissionais Ativos</h1>
                <h2 className="text-texto-lista text-cinza-300">Profissionais Disponíveis Hoje</h2>
            </div>
            <div>
                <ul className="flex flex-col gap-[15px]">
                    {profissionais.map((item)=> {
                        return (
                            <li key={item.id}>
                                <CardProfissional
                                    fotoPerfil={item.fotoPerfil}
                                    nome={item.nome}
                                    horarios={item.horarios}
                                    agendaAberta={item.agendaAberta}
                                />
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}