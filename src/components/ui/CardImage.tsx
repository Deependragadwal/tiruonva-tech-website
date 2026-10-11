import Image from "next/image";
import { publicAsset } from "@/lib/paths";
import { cn } from "@/lib/cn";

export function CardImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-surface-2", className)}>
      <Image
        src={publicAsset(src)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="h-full w-full max-w-none object-cover"
      />
    </div>
  );
}
