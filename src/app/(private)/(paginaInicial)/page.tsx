import Header from "@/components/layout/Header";
import InfoCard from "@/app/(private)/(paginaInicial)/components/InfoCard";
import { Check, TrendUp, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import ListaProfissionaisDashboard from "@/app/(private)/(paginaInicial)/components/listaProfissionaisAtivos/ListaProfissionaisDashboard";


export default function PaginaInicial() {
  return (
      <div className="">
          <Header titulo="Página Inicial"/>

          <div className="grid grid-cols-1 gap-[20px]">
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

              <ListaProfissionaisDashboard/>
          </div>
      </div>
  );
}
