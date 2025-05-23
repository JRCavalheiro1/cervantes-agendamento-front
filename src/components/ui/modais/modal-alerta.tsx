import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTranslations } from "next-intl";

import ButtonCancel from "@/components/ui/buttons/button-cancel";
interface ModalAlertaProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ModalAlerta({ title, onClick, children }: ModalAlertaProps) {
  const t = useTranslations("Modal");

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ButtonCancel>{t("alertModalBtnCancel")}</ButtonCancel>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[320px] rounded-[25px] p-[20px] md:min-w-[540px] md:p-[30px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-cinza-500">
          {children}
        </AlertDialogDescription>
        <AlertDialogFooter className="flex">
          <AlertDialogCancel className="cursor-pointer">
            {t("alertModalBtnCancel")}
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-azul-500 text-branco-100 hover:bg-azul-500 cursor-pointer hover:brightness-90"
            onClick={onClick}
          >
            {t("alertModalBtnContinue")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
