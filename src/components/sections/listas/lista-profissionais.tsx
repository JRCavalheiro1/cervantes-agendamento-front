import ProfissionalItem from "@/components/sections/items/profissional-item";
import { profissionais } from "@/data/profissionais";
import ListaContainer from "@/components/sections/listas/lista-container";

export default function ListaProfissionais() {
    return (
       <ListaContainer titulo="Profissionais Ativos" subtitulo="Lista de profissionais ativos" className="min-w-[352px] xl:flex-1">
           {profissionais.map((item)=> {
               return (
                   <li key={item.id}>
                       <ProfissionalItem
                           fotoPerfil={item.fotoPerfil}
                           nome={item.nome}
                           horarios={item.horarios}
                           agendaAberta={item.agendaAberta}
                       />
                   </li>)
           })}
       </ListaContainer>
    )
}