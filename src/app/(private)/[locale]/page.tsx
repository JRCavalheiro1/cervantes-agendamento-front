import Header from "@/components/layout/header";
import InfoCard from "@/components/sections/home/cards/info-card";
import {
  Check,
  TrendUp,
  CalendarBlank,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import ListaProfissionais from "@/features/profissional/listas/lista-profissionais";
import ListaAgendamentosRecentes from "@/features/agendamento/listas/lista-agendamentos-recentes";

import { useTranslations } from "next-intl";

export default function PaginaInicial() {
  const tranlationHeader = useTranslations("HomePage");
  const tranlationCard = useTranslations("InfoCard");
  return (
    <div className="flex flex-col">
      <Header titulo={tranlationHeader("title")} />

      <div className="flex w-full flex-col gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px] xl:grid-cols-4">
          <InfoCard
            icone={<Check size="40" />}
            descricao={tranlationCard("appointmentsToday")}
            total="12"
          />
          <InfoCard
            icone={<TrendUp size="40" />}
            descricao={tranlationCard("appointmentsWeek")}
            total="53"
          />
          <InfoCard
            icone={<CalendarBlank size="40" />}
            descricao={tranlationCard("appointmentsMonth")}
            total="134"
          />
          <InfoCard
            icone={<Clock size="40" weight="fill" color="#ffffff" />}
            descricao={tranlationCard("averageServiceTime")}
            total="42min"
            cardAzul={true}
          />
        </div>
        <div className="flex flex-col gap-[20px] xl:w-full xl:flex-row">
          <ListaProfissionais variant="home" />
          <ListaAgendamentosRecentes />
        </div>
      </div>
    </div>
  );
}
