import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/cn";

export function CardImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  tone = "light",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <MediaImage
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      tone={tone}
      className={cn("aspect-[16/10]", className)}
    />
  );
}
