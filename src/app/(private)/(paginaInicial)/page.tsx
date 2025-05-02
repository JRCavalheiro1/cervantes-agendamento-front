import Header from "@/components/layout/Header";
import InfoCard from "@/app/(private)/(paginaInicial)/components/InfoCard";
import { Check, TrendUp, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";


export default function PaginaInicial() {
  return (
      <div className="border-black border-1">
          <Header titulo="Página Inicial"/>
          <div className="flex gap-[20px] flex-wrap">
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


      </div>
  );
}
