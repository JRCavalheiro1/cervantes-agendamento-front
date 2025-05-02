import Header from "@/components/layout/Header";
import InfoCard from "@/app/(private)/(paginaInicial)/components/InfoCard";
import { Check, TrendUp, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import ListaProfissionaisDashboard from "@/app/(private)/(paginaInicial)/components/ListaProfissionaisDashboard";


export default function PaginaInicial() {
  return (
      <div className="grid grid-rows-[auto-1fr] gap[25px] h-screen">
          <Header titulo="Página Inicial"/>

          <div className="grid grid-cols-4 gap-[15px]">
              <InfoCard
                icone={<Check size={55}/>}
                descricao="Agendamentos Hoje"
                total="12"
              />
              <InfoCard
                  icone={<TrendUp size={55}/>}
                  descricao="Agendamentos Semana"
                  total="53"
              />
              <InfoCard
                  icone={<CalendarBlank size={55}/>}
                  descricao="Agendamentos mês"
                  total="134"
              />
              <InfoCard
                  icone={<Clock size={55} weight="fill" />}
                  descricao="Tempo médio de serviço"
                  total="42min"
              />
          </div>

        <div className="flex pt-[25px]">
            <ListaProfissionaisDashboard/>

        </div>

      </div>
  );
}
