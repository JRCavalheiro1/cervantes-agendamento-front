import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
}
export default function ImageContainer({
  src,
  alt,
  className,
}: ImageContainerProps) {
  return (
    <Image
      className={cn(
        "h-[40px] w-[40px] rounded-full md:h-[50px] md:w-[50px]",
        className,
      )}
      src={src}
      alt={alt}
      width={200}
      height={200}
    />
  );
}
