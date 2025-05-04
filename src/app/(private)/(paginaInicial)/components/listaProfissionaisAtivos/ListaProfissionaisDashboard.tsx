import CardProfissional from "@/components/sections/CardProfissional";
import {profissionais} from "@/data/profissionais";
import ListaContainer from "@/app/(private)/(paginaInicial)/components/ListaContainer";

export default function ListaProfissionaisDashboard() {
    return (
       <ListaContainer titulo="Profissionais Ativos" subtitulo="Lista de profissionais ativos" className="min-w-[352px] xl:flex-1">
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
       </ListaContainer>
    )
}