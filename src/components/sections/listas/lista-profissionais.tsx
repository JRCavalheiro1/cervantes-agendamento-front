import ProfissionalItem from "@/components/sections/items/profissional-item";
import { profissionais } from "@/data/profissionais";
import ListaContainer from "@/components/sections/listas/lista-container";
import { useTranslations } from "next-intl";

export default function ListaProfissionais() {
    const translationProfList = useTranslations('ProfessionalList');
    return (
       <ListaContainer titulo={translationProfList('title')} subtitulo={translationProfList('subtitle')} className="min-w-[352px] xl:flex-1">
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