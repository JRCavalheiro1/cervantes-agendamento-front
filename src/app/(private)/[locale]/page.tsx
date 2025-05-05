import Header from "@/components/layout/Header";
import InfoCard from "@/components/sections/home/cards/info-card";
import { Check, TrendUp, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import ListaProfissionais from "@/components/sections/listas/lista-profissionais";
import ListaAgendamentosRecentes from "@/components/sections/listas/lista-agendamentos-recentes";

import { useTranslations } from "next-intl";


export default function PaginaInicial() {
    const translation = useTranslations('HomePage');
  return (
      <div className="flex flex-col">
          <Header titulo={translation("title")}/>

          <div className="flex flex-col gap-[20px] w-full">
            <div className="grid grid-cols-2 gap-[10px]
             xl:grid-cols-4
            ">
               <InfoCard
                   icone={<Check size="40"/>}
                   descricao="Agendamentos Hoje"
                   total="12"
               />
                <InfoCard
                    icone={<TrendUp size="40"/>}
                    descricao="Agendamentos Semana"
                    total="53"
                />
                <InfoCard
                    icone={<CalendarBlank size="40"/>}
                    descricao="Agendamentos Mês"
                    total="134"
                />
                <InfoCard
                    icone={<Clock size="40" weight="fill" color="#ffffff"/>}
                    descricao="Tempo Médio de Serviço"
                    total="42min"
                    cardAzul={true}
                />
            </div>
            <div className="flex flex-col gap-[20px] xl:flex-row xl:w-full" >
                <ListaProfissionais/>
                <ListaAgendamentosRecentes/>
            </div>
          </div>
      </div>
  );
}
