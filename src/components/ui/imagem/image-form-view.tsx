import { Image } from "@phosphor-icons/react/dist/ssr";

export default function ImageFormView() {
  return (
    <div className="border-azul-200 text-azul-200 flex h-17 w-17 items-center justify-center overflow-auto rounded-full border-3 md:h-20 md:w-20">
      <Image size={40} weight="bold" />
    </div>
  );
}
