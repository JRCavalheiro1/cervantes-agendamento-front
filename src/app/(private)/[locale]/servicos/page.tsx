import Header from "@/components/layout/header";
import { useTranslations} from "next-intl";

export default function Servicos() {
    const serviceTranslation = useTranslations("Services");

    return (
        <div>
            <Header titulo={serviceTranslation("title")}/>
            {/*
                componente pesquisa --- botão adicionar novo serviço
                componente lista serviços
            */}
        </div>
    )
}