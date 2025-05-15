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
        "h-10 w-10 rounded-full object-cover md:h-13 md:w-13",
        className,
      )}
      src={src}
      alt={alt}
      width={256}
      height={256}
    />
  );
}
